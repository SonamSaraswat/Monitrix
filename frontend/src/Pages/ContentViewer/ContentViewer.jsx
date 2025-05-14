import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ContentViewer = () => {
  const { level, slug } = useParams();
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`http://localhost:5000/api/content/${level}/${slug}`)
      .then(res => res.json())
      .then(data => setContent(data.content || ''));
  }, [level, slug]);

  return (
    <div className="p-4">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default ContentViewer;
