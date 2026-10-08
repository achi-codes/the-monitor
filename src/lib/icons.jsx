import {
  Lightbulb, Thermometer, Shield, Lock, Music, Camera, ShoppingCart,
  Clapperboard, Moon, Utensils, DoorOpen, Fan, Power, Home, Sun, Cloud,
  CloudRain, Play, Pause, Volume2, Bell, Wifi, Settings, User, Plus,
} from 'lucide-react';

const ICON_MAP = {
  lightbulb: Lightbulb,
  thermometer: Thermometer,
  shield: Shield,
  lock: Lock,
  music: Music,
  camera: Camera,
  shoppingcart: ShoppingCart,
  clapperboard: Clapperboard,
  moon: Moon,
  utensils: Utensils,
  dooropen: DoorOpen,
  fan: Fan,
  power: Power,
  home: Home,
  sun: Sun,
  cloud: Cloud,
  cloudrain: CloudRain,
  play: Play,
  pause: Pause,
  volume2: Volume2,
  bell: Bell,
  wifi: Wifi,
  settings: Settings,
  user: User,
  plus: Plus,
};

export const ICON_OPTIONS = Object.keys(ICON_MAP);

export function getIcon(name, props = {}) {
  const key = (name || '').toLowerCase().replace(/[^a-z]/g, '');
  const Icon = ICON_MAP[key] || Lightbulb;
  return <Icon {...props} />;
}

export function getIconForDomain(domain) {
  const map = {
    light: 'lightbulb',
    switch: 'power',
    climate: 'thermometer',
    lock: 'lock',
    alarm_control_panel: 'shield',
    scene: 'clapperboard',
    script: 'clapperboard',
    media_player: 'music',
    camera: 'camera',
    todo: 'shoppingcart',
    person: 'user',
    cover: 'dooropen',
    fan: 'fan',
    weather: 'cloudrain',
  };
  return map[domain] || 'home';
}
