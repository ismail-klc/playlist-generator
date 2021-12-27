"use strict";

import '../public/css/style.css'
import Home from './views/pages/Home'
import Utils from './services/Utils.js'

const routes = {
    '/': Home
};

const router = async () => {
    const root = document.getElementById('root');
    const content = document.getElementById('page_container');
    const footer = document.getElementById('footer_container');

    let request = Utils.parseRequestURL()

    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    let page = Home
    root.innerHTML = await page.render();
    await page.after_render();
}

window.addEventListener('hashchange', router);
window.addEventListener('load', router);