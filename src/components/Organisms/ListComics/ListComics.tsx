import React from 'react';
import { ComicItemProps } from '../../../infra/controllers/comics.controller';
import ComicItem from '../../Molecules/ComicItem/ComicItem';
import './style.css';

export type ListComicsProps = {
  comics: ComicItemProps[];
};

export function ListComics({ comics }: ListComicsProps) {
  return (
    <div className="list-comics">
      {comics.length &&
        comics.map((item: ComicItemProps) => (
          <ComicItem
            key={item.id}
            id={item.id}
            image={item.image}
            name={item.name}
            url={item.url}
          />
        ))}

      {comics.length > 0 && <div>Sem Resultados</div>}
    </div>
  );
}
