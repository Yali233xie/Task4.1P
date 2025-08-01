import React from 'react';

const TutorialCard = ({ img, title, desc, user, rating }) => (
  <div className="card">
    <img src={img} alt={title} className="card-img" />
    <div className="card-body">
      <div className="card-title">{title}</div>
      <div className="card-desc">{desc}</div>
      <div className="card-meta">
        <span className="star">⭐ {rating}</span>
        <span className="author">{user}</span>
      </div>
    </div>
  </div>
);

export default TutorialCard;
