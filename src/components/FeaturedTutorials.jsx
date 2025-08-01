import React from 'react';
import TutorialCard from './TutorialCard';
import tutorial1 from '../assets/tutorial1.jpg';
import tutorial2 from '../assets/tutorial2.jpg';
import tutorial3 from '../assets/tutorial3.jpg';

const tutorials = [
  {
    img: tutorial1,
    title: "Deployment Guide",
    desc: "Deploy your app using Vercel or Netlify",
    user: "vivi",
    rating: 5,
  },
  {
    img: tutorial2,
    title: "React Router",
    desc: "SPA routing for React apps",
    user: "rachel",
    rating: 5,
  },
  {
    img: tutorial3,
    title: "Express API",
    desc: "Build a RESTful backend with Express",
    user: "lucy",
    rating: 4.9,
  },
];

const FeaturedTutorials = () => (
  <section>
    <h2 className="section-title">Featured Tutorials</h2>
    <div className="grid">
      {tutorials.map((item, idx) => (
        <TutorialCard {...item} key={idx} />
      ))}
    </div>
    <button className="btn">See all tutorials</button>
  </section>
);

export default FeaturedTutorials;
