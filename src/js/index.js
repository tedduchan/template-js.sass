// El styles lo importamos aquí, ya se carga después al compilar todo
import catImage from '../assets/images/cat.jpeg';
import '../scss/styles.scss';
import { sayHello } from './demo';

const img = document.createElement('img');
img.src = catImage;

sayHello();

document.body.append(img);
