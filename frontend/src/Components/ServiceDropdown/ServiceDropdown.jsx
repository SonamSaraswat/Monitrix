
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './ServiceDropdown.css';

const ServiceDropdown = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/categories/all")
      .then((res) => setCategories(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dropdown-wrapper">
      {categories.map((main) => (
        <div key={main.id}>
          <Link to={`/services/${main.id}`} className="main-category">{main.name}</Link>

          {main.subcategories?.map((sub) => (
            <div key={sub.id} className="sub-category">
              <Link to={`/services/${main.id}/${sub.id}`}>{sub.name}</Link>

              {sub.subsubcategories?.map((subsub) => (
                <div key={subsub.id} className="sub-sub-category">
                  <Link to={`/services/${main.id}/${sub.id}/${subsub.id}`}>{subsub.name}</Link>

                  {subsub.subsubsubcategories?.map((subsubsub) => (
                    <div key={subsubsub.id} className="sub-sub-sub-category">
                      <Link to={`/services/${main.id}/${sub.id}/${subsub.id}/${subsubsub.id}`}>{subsubsub.name}</Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ServiceDropdown;
