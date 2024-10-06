import React, { useState } from 'react';
import '../form.scss';

const FormPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`New Blog Created: \nTitle: ${title}\nContent: ${content}`);
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Create a New Blog</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              name="title" // Added 'name' attribute here
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label>Content:</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
