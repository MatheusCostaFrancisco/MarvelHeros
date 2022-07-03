/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useEffect, useState } from 'react';

import { Logo } from '../../components/Atoms/Logo/Logo';
import { HeroItemProps } from '../../components/Molecules/HeroItem/HeroItem';
import { SearchBar } from '../../components/Molecules/Searchbar/Searchbar';
import { FilterBar } from '../../components/Organisms/FilterBar/FilterBar';
import { ListHeros } from '../../components/Organisms/ListHero/ListHero';

import herosController from '../../infra/controllers/heros.controller';
import { getFavoritesStore } from '../../Utils/store.local';

import './style.css';

function Home() {
  const [heros, setHeros] = useState<HeroItemProps[]>([]);
  const [heroSearch, setHeroSearch] = useState('');
  const [onlyFavorite, setOnlynFavorite] = useState(false);
  const [orderByName, setOrderByName] = useState(true);

  async function loadData() {
    const end = 1 * 20;
    const start = end - 20;

    const getHeros: HeroItemProps[] = await herosController.getAll(
      start,
      end,
      orderByName ? 'name' : '-name'
    );

    const getFavoites = await getFavoritesStore();
    const favoriteIds = getFavoites.map((item) => item.id);
    const formatted = getHeros.map((item) => ({
      ...item,
      isFavorite: favoriteIds.includes(item.id),
    }));

    setHeros(formatted);
  }

  async function loadHerosByName(heroName: string) {
    const getHeros = await herosController.getByName(heroName);
    setHeros(getHeros);
  }

  const loadFavoritesHeros = () => {
    if (!onlyFavorite) {
      const favotires = getFavoritesStore();
      setHeros(favotires);
    } else {
      loadData();
    }
    setOnlynFavorite((prev) => !prev);
  };

  const HadleOrderByName = () => {
    setOrderByName((prev) => !prev);
    loadData();
  };

  useEffect(() => {
    if (heroSearch) {
      loadHerosByName(heroSearch);
      return;
    }

    loadData();
  }, [heroSearch]);

  useEffect(() => {
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
        <SearchBar
          value={heroSearch}
          onChange={(text: string) => {
            setHeroSearch(text);
          }}
          placeholder="Procure por heróis"
        />
        <FilterBar
          numberResults={heros.length}
          onlyFavorite={{ state: onlyFavorite, action: loadFavoritesHeros }}
          orderAZ={{ state: orderByName, action: HadleOrderByName }}
        />
      </div>
      <div className="home__content">
        <div className="home-wrapper">
          <ListHeros items={heros} />
        </div>
      </div>
    </div>
  );
}

export default Home;
