<template>
    <header>
        <div class="container">
            <h2 class="home-link"><router-link to="/">/home/andrewmaier</router-link></h2>
            <nav>
                <router-link to="/about" id="about-link">About</router-link>
                <router-link to="/projects" id="projects-link">Projects</router-link>
                <router-link to="/contact" id="contact-link">Contact</router-link>
                <div class="animation" :activepage="activePage"></div>
            </nav>
            <button class="hamburger" @click="menuToggle">
                <div class="bar"></div>
            </button>
        </div>
    </header>
    <nav class="mobile-nav">
        <router-link to="/about" id="about-link" @click="closeMobileNav">About</router-link>
        <router-link to="/projects" id="projects-link" @click="closeMobileNav">Projects</router-link>
        <router-link to="/contact" id="contact-link" @click="closeMobileNav">Contact</router-link>
        <div class="animation" :activepage="activePage"></div>
    </nav>
</template>

<script setup>
    import { computed } from 'vue';
    import { useRoute } from 'vue-router';

    const activePage = computed(() => useRoute().name)

    const menuToggle = () => {
        const menu_btn = document.querySelector('.hamburger');
	    const mobile_menu = document.querySelector('.mobile-nav');

        menu_btn.classList.toggle('is-active');
		mobile_menu.classList.toggle('is-active');
    }

    const closeMobileNav = () => {
        const menu_btn = document.querySelector('.hamburger');
	    const mobile_menu = document.querySelector('.mobile-nav');

        menu_btn.classList.remove('is-active');
		mobile_menu.classList.remove('is-active');
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Roboto+Mono&display=swap');

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none; 
    }

    a, a:visited {
        color: #FFF;
    }
    
    header {
        background-color: #314559;
        box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.25);
        color: white;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
        width: 100%;

        .container {
            padding-top: 32px;
            padding-bottom: 32px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1600px;
            margin: 0 auto;
            padding-left: 128px;
            padding-right: 128px;

            @media (max-width: 1025px){
                padding-left: 64px;
                padding-right: 64px;
            }

            @media (max-width: 768px) {
                padding-left: 32px;
                padding-right: 32px;
                align-items: center;
            }

            h2 {
                color: inherit;
                font-size: 2.5em;

                @media(max-width: 768px){
                    font-size: 2em;
                }

                @media(max-width: 450px){
                    font-size: 1.75em;
                }

                @media(max-width: 400px){
                    font-size: 1.5em;
                }
            }

            nav {
                font-family: 'Inter', Helvetica, Arial, sans-serif;
                position: relative;
                /* margin: 0 auto; */
                border-radius: 10px;
                font-size: 0;

                @media (max-width: 767px){
                    display: none;
                }

                a {
                    font-size: 18px;
                    color: #fff;
                    text-decoration: none;
                    line-height: 50px;
                    position: relative;
                    z-index: 1;
                    display: inline-block;
                    text-align: center;
                }

                a:nth-child(1){
                    width: 80px;
                }

                a:nth-child(2){
                    width: 100px;
                }

                a:nth-child(3){
                    width: 80px;
                }

                .animation {
                    position: absolute;
                    height: 5px;
                    bottom: 0;
                    z-index: 0;
                    background: #5B80A6;
                    border-radius: 10px;
                    transition: all .5s ease 0s;
                }

                div[activepage="About"], a:nth-child(1):hover~.animation {
                    width: 80px;
                    left: 0px;
                }

                div[activepage="Projects"], a:nth-child(2):hover~.animation {
                    width: 100px;
                    left: 80px;
                }

                div[activepage="Contact"], a:nth-child(3):hover~.animation {
                    width: 80px;
                    left: 180px;
                }
            }
        }

        .home-link {
            font-family: 'Roboto Mono', monospace !important;
        }

        &.is-scrolling {
            background-color: #121a21;

            .container {
                padding-top: 16px;
                padding-bottom: 16px;
            }
        }
    }

    .hamburger {
        display: block;
        width: 35px;
        height: 35px;
        cursor: pointer;

        appearance: none;
        background: none;
        outline: none;
        border: none;
    }

    .hamburger .bar, .hamburger::after, .hamburger::before {
        content: '';
        display: block;
        width: 100%;
        height: 5px;
        background-color: #FFF;
        margin: 6px 0px;
        transition: 0.5s;
    }
    
    .hamburger.is-active::before{
        transform: rotate(-45deg) translate(-8px, 7px);
    }  
    .hamburger.is-active::after{
        transform: rotate(45deg) translate(-8px, -7px);
    } 
    .hamburger.is-active .bar {
        opacity: 0;
    }

    .mobile-nav {
        font-family: Helvetica, Arial, sans-serif;
        display: block;
        position: fixed;
        top: 0;
        left: 100%;
        width: 100%;
        min-height: 100vh;
        z-index: 5;
        background-color: #121a21;
        padding-top: 170px;
        transition: 0.5s;
    }

    .mobile-nav.is-active {
        left: 0;
    }

    .mobile-nav a {
        display: block;
        width: 100%;
        border-radius: 20px;
        max-width: 200px;
        margin: 0 auto 16px;
        text-align: center;
        padding: 12px 16px;
        background-color: #314559;

        color: #FFF;
    }

    .mobile-nav a:hover {
        background-color:#5B80A6;
    }

    @media (min-width: 768px) {
        .mobile-nav{
            display: none;
        }

        .hamburger{
            display: none;
        }
    }
</style>