import React from 'react';
import BooksIcon from '../../Atoms/Icons/bookIcon';
import TrailerIcon from '../../Atoms/Icons/trailerIcon';
import './style.css';

export type InfoHeroProps = {
  title: string;
  iconName: string;
  quantity: number;
};

export function InfoHero({ title, iconName, quantity }: InfoHeroProps) {
  return (
    <div className="wrapper">
      <div className="wrapper__title">{title}</div>
      <div className="wrapper__iconText">
        {iconName === 'book' && <BooksIcon size={32} />}
        {iconName === 'trailer' && <TrailerIcon size={32} />} {quantity}
      </div>
    </div>
  );
}
