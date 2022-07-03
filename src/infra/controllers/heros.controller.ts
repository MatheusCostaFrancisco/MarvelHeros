/* eslint-disable @typescript-eslint/no-explicit-any */
import { api, auth } from '../base';
import resultado from './mock';

export type HeroInformations = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  series: {
    available: number;
  };
  comics: {
    available: number;
  };
};

function getModelHero(items: any) {
  return items.results.map((item: HeroInformations) => ({
    id: item.id,
    url: `${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`,
    alt: item.description,
    legend: item.name,
    thumbnail: item.thumbnail,
    isFavorite: false,
    seriesQtd: item.series.available,
    comicsQtd: item.comics.available,
  }));
}

const herosController = {
  getAll: async (offset: number, limit: number, orderBy: string) => {
    // const resp = resultado.data;

    const url = `v1/public/characters?${auth}&offset=${offset}&limit=${limit}&orderBy=${orderBy}`;
    const { data: resp } = await api.get(url);

    const model = getModelHero(resp.data);

    return model;
  },
  getByName: async (heroName: string) => {
    // const resp = resultado.data;
    const url = `v1/public/characters?${auth}&nameStartsWith=${heroName}`;
    const { data: resp } = await api.get(url);

    const model = getModelHero(resp.data);

    return model;
  },
  getById: async (id: number) => {
    // const resp = resultado.data;
    const url = `v1/public/characters/${id}?${auth}`;
    const { data: resp } = await api.get(url);

    const model = getModelHero(resp.data);

    return model;
  },
};

export default herosController;
