import doorOpen from '../assets/contacts/door-open.webp';
import doorClosed from '../assets/contacts/door-closed.webp';
import windowOpen from '../assets/contacts/window-open.webp';
import windowClosed from '../assets/contacts/window-closed.webp';
import garageOpen from '../assets/contacts/garage-open.webp';
import garageClosed from '../assets/contacts/garage-closed.webp';
import motionOn from '../assets/contacts/motion-on.webp';
import motionOff from '../assets/contacts/motion-off.webp';

const CONTACT_ART = {
  door: [doorOpen, doorClosed],
  window: [windowOpen, windowClosed],
  garage: [garageOpen, garageClosed],
  motion: [motionOn, motionOff],
  sensor: [motionOn, motionOff],
};

export function getContactArt(kind, active) {
  const [on, off] = CONTACT_ART[kind] || CONTACT_ART.door;
  return active ? on : off;
}
