import React from 'react';
import ToggleIcon from '../Icons/order';
import SuperIcon from '../Icons/super';
import { LikeButton } from '../LikeButton/LikeButton';
import './style.css';

export type FilterBarProps = {
  onlyFavorite?: boolean;
  orderAZ?: boolean;
};

export function FilterBar({
  onlyFavorite = false,
  orderAZ = false,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__quantity">Encontrados 20 heróis</div>
      <div className="filter-bar__order">
        <div className="filter-bar__order__icon">
          <SuperIcon size={18} />
        </div>
        <div className="filter-bar__order__text">Ordenar por nome - A/Z</div>
        <div className="filter-bar__order__icon">
          <ToggleIcon size={45} />
        </div>
      </div>
      <div className="filter-bar__only-favorite">
        <div className="filter-bar__only-favorite__icon">
          <LikeButton
            isFavarite
            onClick={() => {
              console.log('ixi');
            }}
          />
        </div>

        <div className="filter-bar__only-favorite__text">Somente favoritos</div>
      </div>
    </div>
  );
}
