import rest from '../assets/waste/rest.webp';
import paper from '../assets/waste/paper.webp';
import yellow from '../assets/waste/yellow.webp';
import bio from '../assets/waste/bio.webp';

const ART_BY_TYPE = {
  rest,
  paper,
  yellow,
  bio,
  glass: rest,
  bulk: rest,
};

export function getWasteArt(type) {
  return ART_BY_TYPE[type] || rest;
}
