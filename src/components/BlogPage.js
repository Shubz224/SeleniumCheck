import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles.scss';

const BlogPage = () => {
  const { id } = useParams();
  const blogData = {
    1: { title: 'The Future of AI: Opportunities and Challenges', content: 'Artificial Intelligence is shaping the future of almost every industry. In this blog, we dive into the opportunities AI presents and the challenges we must overcome to unlock its full potential..' },
    2: { title: 'Second Blog', content: 'Full content of the second blog.' },
    3: { title: 'Third Blog', content: 'Full content of the third blog.' },
    4: { title: 'Fourth Blog', content: 'Full content of the fourth blog.' },
    5: { title: 'Fifth Blog', content: 'Full content of the fifth blog.' },
  };

  const blog = blogData[id];

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <div className="container">
      <div className="card">
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </div>
    </div>
  );
};

export default BlogPage;
