import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LikeButton } from '../LikeButton/LikeButton';
import './style.css';

export type HeroItemProps = {
  url?: string;
  alt?: string;
  legend?: string;
  id: number;
};

function HeroItem({
  url = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  alt = 'text',
  legend = 'Dont have',
  id,
}: HeroItemProps) {
  const [isFavarite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <Link to={`Hero/${id}`}>
      <div className="hero-item">
        <div className="hero-item__image">
          <img src={url} alt={alt} />
        </div>
        <div className="hero-item__footer">
          <div>{legend}</div>
          <div className="hero-item__footer__like">
            <LikeButton isFavarite={isFavarite} onClick={handleFavorite} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default HeroItem;
