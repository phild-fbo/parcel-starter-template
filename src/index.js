import { template } from './template'
import './styles/main.scss'
import ScrollMagic from 'scrollmagic';

var controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
    duration: 500,
    offset: 50
})
.setPin("body")
.addTo(controller);


document.querySelector('h1').textContent = template(`content goes here`);