import api from '../base';
import resultado from './mock';

export type HeroInformations = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    extension: string;
    path: string;
  };
};

const herosController = {
  getAll: async (offset: number, limit: number) => {
    const resp = resultado.data;

    // const url = `v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=46d5170c0320524b99e1cb63825c3906&offset=${offset}&limit=${limit}`;
    // const { data: resp } = await api.get(url);

    const model = resp.results.map((item: HeroInformations) => ({
      ...item,
      url: `${item.thumbnail.path}/standard_fantastic.${item.thumbnail.extension}`,
      alt: item.description,
      legend: item.name,
    }));

    return model;
  },
};

export default herosController;
