"use strict";

import '../public/css/style.css'
import Home from './views/pages/Home'
import Navbar from './views/components/Navbar';
import Utils from './services/Utils.js'
import Generate from './views/pages/Generate';
import Add from './views/pages/Add';

const routes = {
    '/': Home,
    '/generate': Generate,
    '/add': Add
};

const router = async () => {
    const root = document.getElementById('content');
    const navbar = document.getElementById('navbar');
    const footer = document.getElementById('footer_container');

    navbar.innerHTML = await Navbar.render();
    await Navbar.after_render();

    let request = Utils.parseRequestURL()

    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')

    let page = routes[parsedURL]
    root.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);