import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [mainCategories, setMainCategories] = useState([]);
  const [selectedMainCategory, setSelectedMainCategory] = useState('');
  const [subCategories, setSubCategories] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState('');
  const [subSubCategories, setSubSubCategories] = useState([]);
  const [serviceContent, setServiceContent] = useState('');
  const [serviceName, setServiceName] = useState('');

  // Fetch Main Categories
  useEffect(() => {
    axios.get('/api/main-categories') // Endpoint to fetch main categories
      .then(response => setMainCategories(response.data));
  }, []);

  // Fetch Subcategories based on Main Category Selection
  useEffect(() => {
    if (selectedMainCategory) {
      axios.get(`/api/subcategories/${selectedMainCategory}`)
        .then(response => setSubCategories(response.data));
    }
  }, [selectedMainCategory]);

  // Fetch Sub-Subcategories based on Subcategory Selection
  useEffect(() => {
    if (selectedSubCategory) {
      axios.get(`/api/sub-subcategories/${selectedSubCategory}`)
        .then(response => setSubSubCategories(response.data));
    }
  }, [selectedSubCategory]);

  const handleServiceSubmit = (e) => {
    e.preventDefault();
    const serviceData = {
      name: serviceName,
      subSubCategoryId: selectedSubCategory,
      content: serviceContent,
    };
    axios.post('/api/services', serviceData)
      .then(response => {
        alert('Service Added Successfully');
        setServiceName('');
        setServiceContent('');
      })
      .catch(error => {
        alert('Error Adding Service');
        console.log(error);
      });
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      {/* Form to Add Main Category */}
      <div>
        <h3>Add Main Category</h3>
        <form>
          {/* Fields for Main Category */}
          <input type="text" placeholder="Category Name" />
          <input type="text" placeholder="Slug" />
          <button type="submit">Add Main Category</button>
        </form>
      </div>

      {/* Form to Add Subcategory */}
      <div>
        <h3>Add Subcategory</h3>
        <form>
          <select onChange={(e) => setSelectedMainCategory(e.target.value)}>
            <option value="">Select Main Category</option>
            {mainCategories.map(cat => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
          <input type="text" placeholder="Subcategory Name" />
          <input type="text" placeholder="Slug" />
          <button type="submit">Add Subcategory</button>
        </form>
      </div>

      {/* Form to Add Sub-Subcategory */}
      <div>
        <h3>Add Sub-Subcategory</h3>
        <form>
          <select onChange={(e) => setSelectedSubCategory(e.target.value)}>
            <option value="">Select Subcategory</option>
            {subCategories.map(sub => (
              <option key={sub.id} value={sub.id}>{sub.name}</option>
            ))}
          </select>
          <input type="text" placeholder="Sub-Subcategory Name" />
          <input type="text" placeholder="Slug" />
          <button type="submit">Add Sub-Subcategory</button>
        </form>
      </div>

      {/* Form to Add Service */}
      <div>
        <h3>Add Service</h3>
        <form onSubmit={handleServiceSubmit}>
          <select onChange={(e) => setSelectedSubCategory(e.target.value)}>
            <option value="">Select Sub-Subcategory</option>
            {subSubCategories.map(subsub => (
              <option key={subsub.id} value={subsub.id}>{subsub.name}</option>
            ))}
          </select>
          <input 
            type="text" 
            placeholder="Service Name" 
            value={serviceName}
            onChange={(e) => setServiceName(e.target.value)} 
          />
          <textarea 
            placeholder="Service Content"
            value={serviceContent}
            onChange={(e) => setServiceContent(e.target.value)} 
          />
          <button type="submit">Add Service</button>
        </form>
      </div>
    </div>
  );
};

export default Admin