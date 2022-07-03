import React, { useState } from 'react';
import { LikeButton } from '../LikeButton/LikeButton';
import './style.css';

export type HeroItemProps = {
  url?: string;
  alt?: string;
  legend?: string;
};

function HeroItem({
  url = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg',
  alt = 'text',
  legend = 'Dont have',
}: HeroItemProps) {
  const [isFavarite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };
  return (
    <div className="hero-item">
      <div className="hero-item__image">
        <img src={url} alt={alt} />
      </div>
      <div className="hero-item__footer">
        <div>{legend}</div>
        <div>
          <LikeButton isFavarite={isFavarite} onClick={handleFavorite} />
        </div>
      </div>
    </div>
  );
}

export default HeroItem;
