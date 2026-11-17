import hero from '../assets/images/hero-silver.webp';
import vehicle from '../assets/images/vehicle-silver.webp';
import rear from '../assets/images/vehicle-rear.webp';
import side from '../assets/images/vehicle-side.webp';
import interior from '../assets/images/vehicle-interior.webp';
import jily from '../assets/images/jily.webp';
import gizhgit from '../assets/images/gizhgit.webp';

export const heroPhoto = {
  src: hero,
  alt: 'Серебристый Hyundai Grand Starex на извилистой дороге среди гор Северного Кавказа',
};

export const vehiclePhoto = {
  src: vehicle,
  alt: 'Серебристый Hyundai Grand Starex на фоне горных склонов',
  caption: 'Hyundai Grand Starex',
};

export interface GalleryPhoto {
  src: ImageMetadata;
  alt: string;
  caption: string;
}

export const vehicleGallery: GalleryPhoto[] = [
  vehiclePhoto,
  { src: interior, alt: 'Пассажирский салон Hyundai Grand Starex со стороны открытой двери', caption: 'Пассажирский салон' },
  { src: rear, alt: 'Серебристый Hyundai Grand Starex сзади на горной стоянке', caption: 'Вид сзади' },
  { src: side, alt: 'Серебристый Hyundai Grand Starex сбоку на фоне гор', caption: 'Автомобиль в горах' },
];

export const gallery = [
  {
    src: jily,
    alt: 'Водопад среди скал и зелёных склонов',
    caption: 'Джилы-Су',
  },
  {
    src: gizhgit,
    alt: 'Бирюзовое озеро между горными хребтами',
    caption: 'Озеро Гижгит',
  },
  vehiclePhoto,
];
