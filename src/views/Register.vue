<script>
import {useAuthenticationStore} from "../stores/authentication.js"
import { mapStores } from "pinia";
import {auth} from "../firebase/config"

 export default {
    data(){
        return{
            username: '',
            email: '',
            password:'',
            confirmPassword:'',
        }
    },
    methods:{
        newUser(e) {
            e.preventDefault()
            if (this.password === this.confirmPassword) {
                this.authenticationStore.newUserAwait(this.email, this.password)
                console.log('Im not going to wait for you')
            }
            else alert('Passwords are diferent')
        }
    },
    computed: {
        ...mapStores(useAuthenticationStore),
    },

    mouted(){
        console.log(auth.currentUser)
    }
 }
</script>

<template>
    <section class="content">
        <div class="Login">
            <h1 class="h1">Register</h1>
            <div class="input">
                <h2 class="label">User name</h2>
                <input class="input-style" placeholder="Type your username" type="username" id="username" v-model = "username">
            </div>

            <div class="input">
                <h2 class="label">Email</h2>
                <input class="input-style" placeholder="Type your email" type="email" id="email" v-model = "email">
            </div>

            <div class="input">
                <h2 class="label">Password</h2>
                <input class="input-style" placeholder="Type your password" type="password" id="password" v-model = "password">
            </div>

            <div class="input">
                <h2 class="label">Confirm Password</h2>
                <input class="input-style" placeholder="Confirm password" type="password" id="confirmPassword" v-model="confirmPassword">
                <div class="input-forgot">
                </div>
            </div>

            <div class="button">
                <button class="button-style btn" @click="newUser">Register</button>
            </div>
            <div class="icon">
                <p class="text">Or sign up using</p>
                <figure class="svg">
                    <img src="../assets/img/facebook.svg" alt="facebook">
                    <img src="../assets/img/google.svg" alt="google">
                </figure>
                
            </div>

            <div class="switch">
                <p class="text">If you haven't register press <router-link to="/login"><u><b>here</b></u></router-link></p>
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
        gap: 10px;

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
    .svg{
            display: flex;
            flex-direction: row;
            align-items: center;
            padding: 10px;
            gap: 17px;

            width: 120px;
            height: 79px;
        }

    .btn{
        background: #1569DB;
    }

    .btn:hover{
        background: #0045A4;
    }
</style>