import { greet } from './greeting';
import { Hero } from './greeting';

greet('Peeta Mellark');
greet('Katniss Everdeen');

let peeta = new Hero('Peeta Mellark', 'the boy with the bread');
peeta.greet();

// temporary fix for global variables
const angular = (window as any).angular;

angular.module('ionicApp.main', ['ionic'])
  .run(() => {
    console.log('app running');
  });
