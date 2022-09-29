<template>
    <section class="community">
      <div class="community--title">
        <h2 class="community--h2">Participate in thematic forums of your favorite games</h2>
      </div>
      <div class="community--bg">
        <div class="community--subtitle">
          <h3 class="community--h3">Featured this week</h3>
        </div>
    <div class="community__content">
      <figure class="community__fig">
      <img class="comunity--img" src="../assets/img/eldenring.png" alt="eldenring">
      <figcaption class="community__figcation">
        <div class="community--text">
          <h2 class="community--text--h2">Elden Ring</h2>
          <p class="community--text--p">follow</p>
        </div>
      </figcaption>
      </figure> 
    </div>

    <div class="community__content">
      <figure class="community__fig">
      <img class="comunity--img" src="../assets/img/omori.png" alt="omori">
      <figcaption class="community__figcation">
        <div class="community--text">
          <h2 class="community--text--h2">OMORI</h2>
          <p class="community--text--p">follow</p>
        </div>
      </figcaption>
      </figure> 
    </div>

    <div class="community__content">
      <figure class="community__fig">
      <img class="comunity--img" src="../assets/img/genshin.png" alt="genshin">
      <figcaption class="community__figcation">
        <div class="community--text">
          <h2 class="community--text--h2">Genshin Impact</h2>
          <p class="community--text--p">follow</p>
        </div>
      </figcaption>
      </figure> 
    </div>

    <div class="community__content">
      <figure class="community__fig">
      <img class="comunity--img" src="../assets/img/tower.png" alt="tower">
      <figcaption class="community__figcation">
        <div class="community--text">
          <h2 class="community--text--h2">Tower of Fantasy</h2>
          <p class="community--text--p">follow</p>
        </div>
      </figcaption>
      </figure> 
    </div>

    <div class="community__Buton">
      <button class="community__btn">More forums</button></div>
      </div>
  </section>
  <section>
    <div class="owngame">
      <router-link to="/createItem">
        <button class="owngame--button">Public your own game</button>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss">
  
  $blue: #0045A4;
  $blue2: #1569DB;
  $gray: #2E2E2E;
  $nav: #232323;


  .community{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 100px;
    background-color: $nav;

    &--bg{
      width: 100%;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-content: center;
      justify-content: center;
      font-family: satoshi;
      border-radius: 25px;
      color: white;
      background: $gray;
    }

    &--title{
      color: white;
      width: 100%;
      font-family: satoshi;
      font-size: 1.4em;
      padding: 45px 0px;
      margin-block-end: 80px;
    }

    &--subtitle{
      color: white;
      width: 100%;
      font-family: satoshi;
      font-size: 1.4em;
      padding: 60px 170px;
      margin-block-end: 80px;
    }

    &--h2{
      display: flex;
      padding: 5px 50px;
      background-color: $blue2;
      border-radius: 35px;
    }

    &--h3{
      width: 18%;
      background: $blue2;
      padding: 10px 0px;
      margin-block-start: 20px;
      border-radius: 35px;
      text-align: center;
      
    }

    .community__content{
      margin: 28px;
    }

    .community__figcation{
      bottom: 95px;
      background: $blue;
      border-end-start-radius: 25px;
      border-end-end-radius: 25px;
      padding: 29px 50px;

    }

    .community__fig{
      margin-top: -95px;
    }

    .community__Buton{
      width: 12%;
      margin: 70px;
      margin-top: -50px;
      padding: 25px;
      display: flex;
      align-content: center;
      justify-content: center;
      border-radius: 55px;
      box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
      background: $blue2;
    }

    .comunity--img{
      box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
    }

    .community--text{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      
      &--p{
        font-size: 1.3em;
      }
    }

    .community__btn{
      font-family: satoshi;
      font-weight: normal;
      color: white;
      background: $blue2;
      font-size: 1.4em;
      border: none;
      outline: none;
    }
  }

  .owngame{
    background-image: url(../assets/img/collagegames.png);
    background-repeat: no-repeat;
    text-align: center;

    &--button{
      align-items: center;
      text-align: center;
      justify-content: center;
      color: white;
      background-color: $blue2;
      font-size: 1.4em;
      border-radius: 35px;
      margin: 410px;
      padding: 20px 40px;
      border: none;
      outline: none;
      cursor: pointer;
      box-shadow: 0px 3px 11px rgba(0, 0, 0, 0.25);
    }
  }

</style>