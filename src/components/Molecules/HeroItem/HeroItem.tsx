import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  getFavoritesStore,
  removeFavoriteStore,
  setFavoriteStore,
} from '../../../Utils/store.local';
import { LikeButton } from '../../Atoms/LikeButton/LikeButton';
import './style.css';
import 'react-toastify/dist/ReactToastify.css';

export type HeroItemProps = {
  url: string;
  alt?: string;
  legend?: string;
  id: number;
  isFavorite: boolean;
  comicsQtd?: number;
  seriesQtd?: number;
};

function HeroItem({
  url = 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784/standard_medium.jpg',
  alt = 'text',
  legend = 'Dont have',
  id,
  isFavorite,
  seriesQtd,
  comicsQtd,
}: HeroItemProps) {
  const [isFavarite, setIsFavorite] = useState(isFavorite);
  const notify = () =>
    toast('5 hérios é suficiente para derrotar os inimigos!');

  const handleFavorite = () => {
    if (!isFavarite) {
      const formatted = getFavoritesStore();
      if (formatted.length === 5) {
        notify();
        return;
      }
      setIsFavorite(true);
      const model = {
        url,
        alt,
        legend,
        id,
        comicsQtd,
        seriesQtd,
        isFavorite: true,
      };

      setFavoriteStore(model);
    } else {
      setIsFavorite(false);
      removeFavoriteStore(id);
    }
  };

  return (
    <div className="hero-item">
      <Link to={`Hero/${id}`}>
        <div className="hero-item__image">
          <img src={url} alt={alt} />
        </div>
      </Link>
      <div className="hero-item__footer">
        <div>{legend}</div>
        <div className="hero-item__footer__like">
          <LikeButton isFavarite={isFavarite} onClick={handleFavorite} />
        </div>
      </div>
    </div>
  );
}

export default HeroItem;
