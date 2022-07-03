import React from 'react';
import { ComicItemProps } from '../../../infra/controllers/comics.controller';

function ComicItem({ id, url, image, name }: ComicItemProps) {
  return (
    <div key={id} className="item-comic">
      <div className="item-comic__image">
        <a href={url} target="_black">
          <img src={image} alt={name} />
          <p className="item-comic__text">{name}</p>
        </a>
      </div>
    </div>
  );
}
export default ComicItem;
