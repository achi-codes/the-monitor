import doorOpen from '../assets/contacts/door-open.webp';
import doorClosed from '../assets/contacts/door-closed.webp';
import patioOpen from '../assets/contacts/patio-open.webp';
import patioClosed from '../assets/contacts/patio-closed.webp';
import windowOpen from '../assets/contacts/window-open.webp';
import windowClosed from '../assets/contacts/window-closed.webp';
import skylightOpen from '../assets/contacts/skylight-open.webp';
import skylightClosed from '../assets/contacts/skylight-closed.webp';
import garageOpen from '../assets/contacts/garage-open.webp';
import garageClosed from '../assets/contacts/garage-closed.webp';
import motionOn from '../assets/contacts/motion-on.webp';
import motionOff from '../assets/contacts/motion-off.webp';

export const CONTACT_ART = {
  door: { label: 'Tür', images: [doorOpen, doorClosed] },
  patio: { label: 'Terrassentür', images: [patioOpen, patioClosed] },
  window: { label: 'Fenster', images: [windowOpen, windowClosed] },
  skylight: { label: 'Dachfenster', images: [skylightOpen, skylightClosed] },
  garage: { label: 'Garagentor', images: [garageOpen, garageClosed] },
  motion: { label: 'Bewegungsmelder', images: [motionOn, motionOff] },
  sensor: { label: 'Sensor', images: [motionOn, motionOff] },
};

export function getContactArt(kind, active) {
  const [on, off] = (CONTACT_ART[kind] || CONTACT_ART.door).images;
  return active ? on : off;
}
