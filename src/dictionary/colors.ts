import { Color } from '../model/Catalog/Furniture';

const colors: Color[] = [
  {
    id: 1,
    hex: '#4f311c',
  },
  {
    id: 2,
    hex: '#855736',
  },
  {
    id: 3,
    hex: '#E5D3C6',
  },
  {
    id: 4,
    hex: '#FFD8BB',
  },
];

export function getColors() {
  return colors;
}
