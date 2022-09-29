<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
   <div class="page">
    <header>
        <div class="nav">
          <router-link to="/">
            <img alt="Parrot logo" class="logo" src="../src/assets/img/logo.svg" />
          </router-link>
          <nav class="navbar" id="navegation menu">
          </nav>
        </div>
      </header>
    </div>
  </header>
  <RouterView />

  <footer>
    <div class="footer">
      <figure class="footer--fig">
        <img class="footer--img" src="./assets/img/logoFooter.svg" alt="footlogo">
      </figure>
      <div class="footer__text">
        <h2 class="footer--h2">Parrot Software</h2>
        <p class="footer--text2">© 2022 Parrot Studio. All rights reserved. All trademarks are the property of their respective 
          owners in the US and other countries. All  prices include VAT (where applicable).</p>
      </div>
      <div class="footer__help">
        <p class="footer--text2"> Privacy Policy  |  Legal information  |  About us  |  Contact us  |  cookies |</p>
        <p class="footer--text2">| Technical support | Employment | Parrot distribution | Gift cards |</p>
      </div>
      <div class="footer__contact">
        <img class="footer--edit" src="./assets/img/socialv.svg" alt="">
      </div>
    </div>
  </footer>
</template>

<style lang="scss">
  $blue: #1569DB;
  $gray: #2E2E2E;
  $nav: #232323;

  .nav {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    position: fixed;
    background: rgba(35, 35, 35, 0.8);
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
    padding: 23px;
    color: #000000;
    z-index: 10;
  }

  //here's footer content
  .footer {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      background-color: $nav;
      color: white;
      font-family: satoshi;
      padding: 20px; 
      font-size: 0.8em;

      &--h2{
        font-weight: bold;
        padding: 0px 10px;
      }

      &--text2{
        padding: 2px 10px;
      }

      .footer__help{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content:flex-start;
      }

      .footer__contact{
        display: flex;
        justify-content: flex-end;
      }
    }
</style>
