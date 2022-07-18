// ==UserScript==
// @name        tresh filter
// @namespace   Violentmonkey Scripts
// @match       https://www.google.com/search
// @grant       none
// @version     1.0
// @author      -
// @description 7/17/2022, 8:29:08 PM
// ==/UserScript==


const resultados = document.querySelectorAll('.yuRUbf')


resultados.forEach(elemento => {
  const link = elemento.querySelector('a')
  url = link.getAttribute('href')
  if (url === 'https://www.instagram.com/') {
    elemento.setAttribute('hidden', true)
  }
})
/violent monkey
/macaco violento
