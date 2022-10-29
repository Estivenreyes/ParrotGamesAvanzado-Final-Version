<script>
import {useAuthentication} from "../stores/authentication.js"
import { mapStores } from "pinia";

 export default {
    data(){
        return{
            email: '',
            password:'',
        }
    },
    methods:{
        signIn(e) {
                e.preventDefault()
                this.authenticationStore.signIn(this.email, this.password)
            },
        logOut(e) {
                e.preventDefault()
                this.authenticationStore.logOut()
            }
    },
    computed: {
        ...mapStores(useAuthentication)
    }
 }
</script>

<template>
    <section class="content">
        <div class="Login">
            <h1 class="h1">Login</h1>
            <div class="input">
                <label class="label">User name</label>
                <input class="input-style" placeholder="Type your username" name="email" type="email" id="email" v-model = "email">
            </div>

            <div class="input">
                <label class="label">Password</label>
                <input class="input-style" placeholder="Type your password" name="password"  type="password" id="password" v-model = "password">
                <div class="input-forgot">
                    <p class="text">Forgot password</p>
                </div>
            </div>

            <div class="button">
                <button class="button-style btn"  @click="signIn">Login</button>
            </div>
            <div class="icon">
                <p class="text">Or sign up using</p>
                <figure class="svg">
                    <img src="../assets/img/facebook.svg" alt="facebook">
                    <img src="../assets/img/google.svg" alt="google">
                </figure>
            </div>
            <div class="switch">
                <p class="text">If you haven't register press <router-link to="/Register"><u><b>here</b></u></router-link></p>
            </div>
        </div>
    </section>    
</template>

<style lang="scss">
 
    $parrot-gray: #434343;
    $bg: #2E2E2E;

    .h1{
        display: flex;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 32px;
        line-height: 48px;
    }

    .label{
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 27px;
    }

    .content{
        display: flex;
        justify-content:center;
        padding: 100px;
        background-color: $bg;
    }

    .Login{
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        color: white;
        justify-content: center;
        align-items: center;
        padding: 0px;
        gap: 32px;

        position: relative;
        width: 50%;
        height: 759px;

        /* Parrot-gray */

        background: $parrot-gray;
        box-shadow: 0px 4px 12px rgba(95, 95, 95, 0.25);
        border-radius: 25px;
    }

    .input {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 0px;
        gap: 18px;

        width: 371px;
        height: 87px;


        /* Inside auto layout */

        flex: none;
        flex-grow: 0;

        &-style{
            width: 100%;
            padding: 10px;
            border-radius: 6px;
            color: $parrot-gray;
            font-family: 'Satoshi';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 22px;
            
            
            border: none;
            outline: none;
        }

        &-forgot{
            display: flex;
        }
    }

    .text{
        display: flex;
        font-family: 'Satoshi';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
    }

    .svg{
        display: flex;
    }

    .button{
        padding-top: 30px;
    }

    .button-style{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 10px;
        gap: 10px;
        color: white;
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;

        width: 371px;
        height: 44px;

        /* Blue 2 P */

        background: #1569DB;
        border-radius: 55px;

        outline: none;
        border: none;
        cursor: pointer;
    }

    .btn{
        background: #1569DB;
    }

    .btn:hover{
        background: #0045A4;
    }

    .svg{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            gap: 17px;

            width: 120px;
            height: 79px;
        }
</style>