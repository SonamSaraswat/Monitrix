import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AdminContentEditor = ({ level, slug }) => {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/content/${level}/${slug}`)
      .then(res => res.json())
      .then(data => setContent(data.content || ''));
  }, [level, slug]);

  const handleSave = async () => {
    await fetch(`http://localhost:5000/api/content`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ level, slug, content }),
    });
    alert("Saved!");
  };

  return (
    <div >
      <h2>Edit Content for {slug}</h2>
      <ReactQuill value={content} onChange={setContent} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default AdminContentEditor;
