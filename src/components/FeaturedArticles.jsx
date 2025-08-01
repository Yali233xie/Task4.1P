import React from 'react';
import ArticleCard from './ArticleCard';
import article1 from '../assets/article1.jpg';
import article2 from '../assets/article2.jpg';
import article3 from '../assets/article3.jpg';

const articles = [
  {
    img: article1,
    title: "React Basics",
    desc: "Learn the fundamentals of React.js",
    author: "Fiona",
    rating: 5,
  },
  {
    img: article2,
    title: "Semantic UI",
    desc: "Quickly style your app with prebuilt components",
    author: "Anna",
    rating: 5,
  },
  {
    img: article3,
    title: "API Integration",
    desc: "Connect your frontend to REST APIs",
    author: "Henry",
    rating: 5,
  },
];

const FeaturedArticles = () => (
  <section>
    <h2 className="section-title">Featured Articles</h2>
    <div className="grid">
      {articles.map((item, idx) => (
        <ArticleCard {...item} key={idx} />
      ))}
    </div>
    <button className="btn">See all articles</button>
  </section>
);

export default FeaturedArticles;
