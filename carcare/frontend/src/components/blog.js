import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './blog.css';


import blog1 from '../images/blog1.jpeg';
import blog2 from '../images/blog2.jpeg';
import blog3 from '../images/blog3.jpeg';

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const blogs = [
    {
      title: 'Why Regular Car Maintenance is Important',
      date: 'September 20, 2024',
      excerpt: 'Regular car maintenance ensures safety, longevity, and performance. Learn why you should service your car on time.',
      image: blog1,
      link: 'https://www.travelers.com/resources/auto/maintenance/the-importance-of-regular-car-maintenance',
    },
    {
      title: 'Top 5 Car Problems and How to Fix Them',
      date: 'September 10, 2024',
      excerpt: 'Here are the most common car issues and simple tips to troubleshoot them before they become big problems.',
      image: blog2,
      link: 'https://www.autocodes.com/articles/103/the-top-10-most-common-car-problems:-causes,-solutions,-and-prevention.html',
    },
    {
      title: 'How to Choose the Right Tires for Your Car',
      date: 'August 25, 2024',
      excerpt: 'Choosing the right tires impacts your car\'s performance and safety. Here’s a guide on how to pick the perfect set.',
      image: blog3,
      link: 'https://www.michelin.in/auto/advice/choose-tyres/choose-tyres-for-my-car',
    },
  ];

  return (
    <div className="blog-container" id='blog'>
      <h1 className="blog-title" data-aos="fade-down">Car Service Blog</h1>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div className="blog-post" key={index} data-aos="fade-up">
            <div className="blog-image-container">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-excerpt">{blog.excerpt}</p>
              <a 
                href={blog.link} 
                className="read-more" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read More
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
