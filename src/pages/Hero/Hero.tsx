import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import SuperIcon from '../../components/Atoms/Icons/super';
import { Loading } from '../../components/Atoms/Loading/Loading';
import { Logo } from '../../components/Atoms/Logo/Logo';
import { SearchBar } from '../../components/Molecules/Searchbar/Searchbar';
import { ListComics } from '../../components/Organisms/ListComics/ListComics';
import comicsController, {
  ComicItemProps,
} from '../../infra/controllers/comics.controller';
import herosController, {
  HeroInformations,
} from '../../infra/controllers/heros.controller';

import './style.css';

function Hero() {
  const { id } = useParams();
  const [comicsList, setComicsList] = useState<ComicItemProps[]>([]);
  const [hero, setHero] = useState<HeroInformations>();
  const [isLoading, setIsLoading] = useState(true);

  const getHeroInformation = async () => {
    const [getHero] = await herosController.getById(Number(id));

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
            onChange={() => {
              console.log('ta bom');
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
                    <h1>{hero?.name}</h1>
                    <SuperIcon size={32} />
                  </div>
                  <p>{hero?.description}</p>
                </div>
                <div className="about-hero__infos">
                  <div className="hero-infos">
                    <div className="hero-infos__wrapper">
                      <div>Quadrinhos</div>
                      <div>icon - text</div>
                    </div>
                    <div className="hero-infos__wrapper">
                      <div>Filmes</div>
                      <div>icon - text</div>
                    </div>
                  </div>
                  <div>Rating: ✨✨✨✨✨</div>
                  <div>Último quadrinho: 13 fev. 2020</div>
                </div>
              </div>
              <div className="content-hero__image">
                <img
                  src={`${hero?.thumbnail.path}/portrait_incredible.${hero?.thumbnail.extension}`}
                  alt=""
                />
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
