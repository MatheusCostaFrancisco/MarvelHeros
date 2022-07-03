import { HeroItemProps } from '../components/Molecules/HeroItem/HeroItem';

export function getFavoritesStore() {
  const favorites = localStorage.getItem('@favorites');
  const formatted: HeroItemProps[] = JSON.parse(favorites || '[]');
  return formatted;
}

export function setFavoriteStore(model: HeroItemProps) {
  const formatted = getFavoritesStore();
  if (formatted.length === 0) {
    localStorage.setItem('@favorites', JSON.stringify([model]));
  } else {
    formatted.push(model);
    localStorage.setItem('@favorites', JSON.stringify(formatted));
  }
}

export function removeFavoriteStore(id: number) {
  const favorites = getFavoritesStore();
  const formatted = favorites.filter((item) => item.id !== id);
  localStorage.setItem('@favorites', JSON.stringify(formatted));
}
