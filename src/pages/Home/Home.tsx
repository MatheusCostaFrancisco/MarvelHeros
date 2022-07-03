/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';
import { FilterBar } from '../../components/FilterBar/FilterBar';
import { HeroItemProps } from '../../components/HeroItem/HeroItem';
import { ListHeros } from '../../components/ListHero/ListHero';
import { Logo } from '../../components/Logo/Logo';
import { SearchBar } from '../../components/searchbar/searchbar';
import herosController from '../../infra/controllers/heros.controller';

import './style.css';

function Home() {
  const [heros, setHeros] = useState<HeroItemProps[]>([]);
  const [pages, setPages] = useState<number[]>([1, 2]);
  const [currentPage, setCurrentPage] = useState(1);

  async function loadData() {
    const end = currentPage * 20;
    const start = end - 20;

    const getHeros = await herosController.getAll(start, end);

    setHeros(getHeros);
  }

  const handleSetcurrentPage = (item: number) => {
    setCurrentPage(item);
  };

  useEffect(() => {
    loadData();
  }, [currentPage]);

  useEffect(() => {
    // const pagesQuantity = (heros.length || 20) / 20;
    loadData();
  }, []);

  return (
    <div className="home">
      <div className="home__header">
        <Logo />
        <div className="home__header__title">EXPLORE O UNIVERSO</div>
        <div className="home__header__subtitle">
          Mergule no domínio deslumbrante de todos os personagens clássicos que
          você ama - e aqueles que você descobrirá em breve!
        </div>
        <div>
          <SearchBar placeholder="Procure por heróis" />
        </div>
        <FilterBar />
      </div>
      <div className="home__content">
        <div className="home-wrapper">
          <ListHeros items={heros} />
        </div>

        <div>
          <div>{'<'}</div>
          <div>
            {pages.map((page) => {
              if (page === currentPage) {
                return <u>{page}</u>;
              }
              return (
                <div onClick={() => handleSetcurrentPage(page)}>{page}</div>
              );
            })}
          </div>
          <div>{'>'}</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
