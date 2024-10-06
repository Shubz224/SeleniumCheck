import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss';  // Import the global styles

const HomePage = () => {
  const blogs = [
    { id: 1, title: 'The Future of AI: Opportunities and Challenges', summary: 'Artificial Intelligence is shaping the future of almost every industry. In this blog, we dive into the opportunities AI presents and the challenges we must overcome to unlock its full potential.' },
    { id: 2, title: '10 Tips to Improve Your Productivity', summary: 'Struggling to stay productive in your daily routine? These 10 tips will help you boost your efficiency and achieve more throughout the day without feeling overwhelmed.' },
    { id: 3, title: 'A Beginner Guide to Blockchain Technology', summary: 'Blockchain is more than just cryptocurrency. This guide covers the basics of how blockchain works, its use cases, and why its such a revolutionary technology.' },
    { id: 4, title: 'Healthy Eating: Myths vs. Facts', summary: 'With so much misinformation about food, it is hard to know what is healthy. This blog separates the myths from the facts to help you make better food choices.' },
    { id: 5, title: 'Top 5 Destinations for Digital Nomads in 2024', summary: 'The digital nomad lifestyle is growing in popularity. Discover the top 5 destinations that offer the perfect balance of work and play for remote workers in 2024.' },
  ];

  return (
    <div className="container">
      <h1>Welcome to the Blog Homepage</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="card" key={blog.id}>
            <h2 className="blog-title">{blog.title}</h2> {/* Add this class */}
            <p>{blog.summary}</p>
            <Link to={`/blog/${blog.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
