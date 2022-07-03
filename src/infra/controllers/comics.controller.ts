/* eslint-disable @typescript-eslint/no-explicit-any */
import { api, auth } from '../base';

export type ComicItemProps = {
  id: number;
  url: string;
  image: string;
  name: string;
};

const comicsController = {
  getByHero: async (id: number) => {
    // const respMocl = comics.data;

    const url = `v1/public/characters/${id}/comics?orderBy=onsaleDate&${auth}&offset=0&limit=10`;
    const { data: resp } = await api.get(url);

    const model = resp.data.results.map((item: any) => ({
      ...item,
      image: `${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`,
      url: item.urls[0].url,
      name: item.title,
    }));

    return model;
  },
};

export default comicsController;
