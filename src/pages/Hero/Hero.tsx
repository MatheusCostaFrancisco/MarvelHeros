import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LikeButton } from '../../components/Atoms/LikeButton/LikeButton';
import { Loading } from '../../components/Atoms/Loading/Loading';
import { Logo } from '../../components/Atoms/Logo/Logo';
import { HeroItemProps } from '../../components/Molecules/HeroItem/HeroItem';
import { InfoHero } from '../../components/Molecules/InfoHero/InfoHero';
import { SearchBar } from '../../components/Molecules/Searchbar/Searchbar';
import { ListComics } from '../../components/Organisms/ListComics/ListComics';
import comicsController, {
  ComicItemProps,
} from '../../infra/controllers/comics.controller';
import herosController from '../../infra/controllers/heros.controller';
import {
  getFavoritesStore,
  removeFavoriteStore,
  setFavoriteStore,
} from '../../Utils/store.local';

import './style.css';

function Hero() {
  const { id } = useParams();
  const [comicsList, setComicsList] = useState<ComicItemProps[]>([]);
  const [hero, setHero] = useState<HeroItemProps>();
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [heroSearch, setHeroSearch] = useState('');

  const notify = () =>
    toast('5 hérios é suficiente para derrotar os inimigos!');

  const getHeroInformation = async () => {
    const [getHero] = await herosController.getById(Number(id));
    const getFavoites = getFavoritesStore();
    const ids = getFavoites.map((x) => x.id);
    setIsFavorite(ids.includes(getHero.id));

    setHero(getHero);
  };

  async function loadData() {
    try {
      setIsLoading(true);
      const getComics = await comicsController.getByHero(Number(id));
      getHeroInformation();

      setComicsList(getComics);
    } catch (error) {
      setHero(undefined);
    } finally {
      setIsLoading(false);
    }
  }

  const handleFavorite = () => {
    if (!isFavorite) {
      const formatted = getFavoritesStore();
      if (formatted.length === 5) {
        notify();
        return;
      }

      const model = {
        url: hero?.url || '',
        alt: hero?.alt || '',
        legend: hero?.legend || '',
        id: hero?.id || 0,
        isFavorite: true,
      };

      setFavoriteStore(model);
      setIsFavorite(true);
    } else {
      removeFavoriteStore(hero?.id || 0);
      setIsFavorite(false);
    }
  };

  async function loadHerosByName(heroName: string) {
    const getHeros = await herosController.getByName(heroName);
    setHero(getHeros[0]);
  }

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
    <div>
      <div className="hero-header">
        <div className="hero-header__logo">
          <Logo size="small" />
        </div>
        <div className="hero-header__search">
          <SearchBar
            value=""
            placeholder="Procure um héroi"
            onChange={(text: string) => {
              setHeroSearch(text);
            }}
          />
        </div>
      </div>
      {!isLoading && (
        <>
          <div className="content-hero">
            <div className="content-hero__wrapper">
              <div className="content-hero__about">
                <div className="about-hero__text">
                  <div className="about-hero__text__title">
                    <h1>{hero?.legend || ''}</h1>
                    <LikeButton
                      isFavarite={isFavorite}
                      onClick={handleFavorite}
                    />
                  </div>
                  <p>{hero?.alt || 'Sem informações'}</p>
                </div>
                <div className="about-hero__infos">
                  <div className="hero-infos">
                    <div className="hero-infos__wrapper">
                      <InfoHero
                        title="Quadrinhos"
                        iconName="book"
                        quantity={hero?.comicsQtd || 0}
                      />
                      <InfoHero
                        title="Filmes"
                        iconName="trailer"
                        quantity={hero?.seriesQtd || 0}
                      />
                    </div>
                  </div>
                  <div>Rating: ✨✨✨✨✨</div>
                  <div>Último quadrinho: 13 fev. 2020</div>
                </div>
              </div>
              <div className="content-hero__image">
                <img src={`${hero?.url}`} alt="" />
              </div>
            </div>
          </div>

          <div className="last-releases">
            <div className="last-releases__wrappper">
              <h1>Últimos Lançamentos</h1>

              <div>
                <ListComics comics={comicsList} />
              </div>
            </div>
          </div>
        </>
      )}
      <Loading isVisible={isLoading} />
    </div>
  );
}

export default Hero;
