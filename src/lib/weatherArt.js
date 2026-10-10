import sunny from '../assets/weather/sunny.webp';
import partlycloudy from '../assets/weather/partlycloudy.webp';
import cloudy from '../assets/weather/cloudy.webp';
import rainy from '../assets/weather/rainy.webp';
import pouring from '../assets/weather/pouring.webp';
import lightning from '../assets/weather/lightning.webp';
import snowy from '../assets/weather/snowy.webp';
import fog from '../assets/weather/fog.webp';
import clearNight from '../assets/weather/clear-night.webp';
import partlycloudyNight from '../assets/weather/partlycloudy-night.webp';
import windy from '../assets/weather/windy.webp';
import hail from '../assets/weather/hail.webp';

const ART_BY_CONDITION = {
  sunny,
  clear: sunny,
  'clear-night': clearNight,
  partlycloudy,
  cloudy,
  fog,
  rainy,
  pouring,
  lightning,
  'lightning-rainy': lightning,
  exceptional: lightning,
  snowy,
  'snowy-rainy': snowy,
  hail,
  windy,
  'windy-variant': windy,
};

const NIGHT_ART = {
  sunny: clearNight,
  clear: clearNight,
  partlycloudy: partlycloudyNight,
};

export function isNightHour(hour) {
  return hour < 6 || hour >= 20;
}

export function getWeatherArt(condition, hour = new Date().getHours()) {
  if (hour != null && isNightHour(hour) && NIGHT_ART[condition]) return NIGHT_ART[condition];
  return ART_BY_CONDITION[condition] || cloudy;
}

export function getWeatherTone(condition, hour = new Date().getHours()) {
  if (condition === 'clear-night' || (isNightHour(hour) && ['sunny', 'clear', 'partlycloudy'].includes(condition))) {
    return 'night';
  }
  if (condition === 'sunny' || condition === 'clear') return 'sunny';
  if (['rainy', 'pouring', 'lightning', 'lightning-rainy', 'exceptional', 'hail'].includes(condition)) return 'rain';
  if (condition === 'snowy' || condition === 'snowy-rainy') return 'snow';
  if (condition === 'cloudy' || condition === 'fog') return 'cloudy';
  return 'mild';
}
