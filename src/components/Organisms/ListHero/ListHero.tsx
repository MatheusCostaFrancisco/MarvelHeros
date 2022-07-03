import React from 'react';
import HeroItem, { HeroItemProps } from '../../Molecules/HeroItem/HeroItem';
import './style.css';

export type ListProps = {
  items: HeroItemProps[];
};

export function ListHeros({ items }: ListProps) {
  return (
    <div className="list-wrappe">
      {items.length > 0 ? (
        items.map(({ alt, url, legend, id }) => (
          <HeroItem key={legend} alt={alt} url={url} legend={legend} id={id} />
        ))
      ) : (
        <HeroItem
          key="Não encontrado"
          id={0}
          alt=""
          url="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          legend="Não encontrado"
        />
      )}
    </div>
  );
}
