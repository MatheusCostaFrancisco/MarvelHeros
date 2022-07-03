import React from 'react';
import ToggleIcon from '../../Atoms/Icons/order';
import SuperIcon from '../../Atoms/Icons/super';
import { LikeButton } from '../../Atoms/LikeButton/LikeButton';
import './style.css';

export type FilterBarProps = {
  numberResults: number;
  onlyFavorite: {
    action: () => void;
    state: boolean;
  };
  orderAZ: () => void;
};

export function FilterBar({
  onlyFavorite,
  orderAZ,
  numberResults,
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <div className="filter-bar__quantity">
        Encontrados {numberResults} heróis
      </div>
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
            isFavarite={onlyFavorite.state}
            onClick={onlyFavorite.action}
          />
        </div>

        <div className="filter-bar__only-favorite__text">Somente favoritos</div>
      </div>
    </div>
  );
}
