import { Greeter } from './greeter.js';

import styles from './styles.scss';
import logo from './webpack.png';


const app = document.querySelector('#app');

const img = document.createElement('img');
img.src = logo;
img.className = styles.log;

const h1 = document.createElement('h1');
h1.textContent = 'Знакомство с Webpack';
h1.className = styles.title;

app.appendChild(img);
app.appendChild(h1);