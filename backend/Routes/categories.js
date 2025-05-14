import express  from  "express"
const router = express.Router();
import {db} from "../db.js";

router.get('/all', (req, res) => {
  const query = `
    SELECT 
      mc.id AS main_id, mc.name AS main_name, mc.content AS main_content,
      sc.id AS sub_id, sc.name AS sub_name, sc.content AS sub_content,
      ssc.id AS sub_sub_id, ssc.name AS sub_sub_name, ssc.content AS sub_sub_content,
      sssc.id AS sub_sub_sub_id, sssc.name AS sub_sub_sub_name, sssc.content AS sub_sub_sub_content
    FROM main_categories mc
    LEFT JOIN sub_categories sc ON sc.main_category_id = mc.id
    LEFT JOIN sub_sub_categories ssc ON ssc.sub_category_id = sc.id
    LEFT JOIN sub_sub_sub_categories sssc ON sssc.sub_sub_category_id = ssc.id
    ORDER BY mc.id, sc.id, ssc.id, sssc.id
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('DB Error');
    }

    // Nest the categories
    const nested = {};

    results.forEach(row => {
      const mainId = row.main_id;
      if (!nested[mainId]) {
        nested[mainId] = {
          id: mainId,
          name: row.main_name,
          content: row.main_content,
          subcategories: {}
        };
      }

      if (row.sub_id) {
        const sub = nested[mainId].subcategories;
        if (!sub[row.sub_id]) {
          sub[row.sub_id] = {
            id: row.sub_id,
            name: row.sub_name,
            content: row.sub_content,
            subsubcategories: {}
          };
        }

        if (row.sub_sub_id) {
          const subsub = sub[row.sub_id].subsubcategories;
          if (!subsub[row.sub_sub_id]) {
            subsub[row.sub_sub_id] = {
              id: row.sub_sub_id,
              name: row.sub_sub_name,
              content: row.sub_sub_content,
              subsubsubcategories: []
            };
          }

          if (row.sub_sub_sub_id) {
            subsub[row.sub_sub_id].subsubsubcategories.push({
              id: row.sub_sub_sub_id,
              name: row.sub_sub_sub_name,
              content: row.sub_sub_sub_content,
            });
          }
        }
      }
    });

    // Convert nested object to array
    const response = Object.values(nested).map(main => ({
      ...main,
      subcategories: Object.values(main.subcategories).map(sub => ({
        ...sub,
        subsubcategories: Object.values(sub.subsubcategories)
      }))
    }));

    res.json(response);
  });
});

router.get('/service/:id', (req, res) => {
  const { id } = req.params;
  const queries = [
    `SELECT content FROM main_categories WHERE id = ?`,
    `SELECT content FROM sub_categories WHERE id = ?`,
    `SELECT content FROM sub_sub_categories WHERE id = ?`,
    `SELECT content FROM sub_sub_sub_categories WHERE id = ?`
  ];

  const tryNext = (index) => {
    if (index >= queries.length) return res.json({ content: null });
    db.query(queries[index], [id], (err, result) => {
      if (err) return res.status(500).send("DB error");
      if (result.length > 0) return res.json(result[0]);
      tryNext(index + 1);
    });
  };

  tryNext(0);
});


export default router
