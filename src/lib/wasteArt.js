import rest from '../assets/waste/rest.png';
import paper from '../assets/waste/paper.png';
import yellow from '../assets/waste/yellow.png';
import bio from '../assets/waste/bio.png';

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
