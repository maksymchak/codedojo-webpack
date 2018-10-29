import { Greeter } from './greeter.js';

import styles from './styles.css';


const app = document.querySelector('#app');

const h1 = document.createElement('h1');
h1.textContent = 'Знакомство с Webpack';

app.appendChild(h1);