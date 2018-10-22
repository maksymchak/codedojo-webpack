import { Greeter } from './greeter.js';

const greeter = new Greeter();

const message = greeter.greet('Hello', 'Webpack');

console.log(message);