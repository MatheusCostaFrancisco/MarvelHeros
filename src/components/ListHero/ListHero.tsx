import React from 'react';
import HeroItem, { HeroItemProps } from '../HeroItem/HeroItem';
import './style.css';

export type ListProps = {
  items: HeroItemProps[];
};

export function ListHeros({ items }: ListProps) {
  return (
    <div className="list-wrappe">
      {items.length > 0 ? (
        items.map(({ alt, url, legend }) => (
          <HeroItem key={legend} alt={alt} url={url} legend={legend} />
        ))
      ) : (
        <HeroItem
          key="Não encontrado"
          alt=""
          url="http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
          legend="Não encontrado"
        />
      )}
    </div>
  );
}
