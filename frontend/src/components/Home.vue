<template>
    <div class="container">
        <div class="headings">
            <h1 id="title">Andrew Maier</h1>
            <h3>at the intersection of cybersecurity and the cloud</h3>
        </div>
         <div class="social-icons-row">
            <div class="social-icons">
                <ul>
                    <li><a href="https://github.com/mayormaier" target="_blank"><ion-icon name="logo-github"></ion-icon></a></li>
                    <li><a href="https://twitter.com/mayormaier" target="_blank"><ion-icon name="logo-twitter"></ion-icon></a></li>
                    <li><a href="https://linkedin.com/in/maier-andrew" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'Home',
    }
</script>

<style lang="scss" scoped>
    @import 'vue-ionicons/ionicons.scss';
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Roboto+Mono&display=swap');

    .container {
        padding-top: 50px;
    }
    .headings {
        font-size: 45px;
        font-family: 'Inter', Helvetica, Arial, sans-serif;
        text-align: center;
        display: block;
        color: #cdcdcd;
        position: relative;
        z-index: 3;
    }

    @media (max-width: 630px) {
        .headings {
            font-size: 35px;
        }

    }

    h3{
        font-size: 35px;
        text-align: center;
    }

    .social-icons-row {
    z-index: 3;
    position: relative;
    width: 174px;
    margin: auto;
    text-align: center!important;
    padding-top: 25px;
}

    .social-icons li a{
        padding: 14px;
    }

    ion-icon {
        color: #fff;
        font-size: 30px;
    }

    ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}
  
    li {
        float: left;
    }
    
    li a {
        display: block;
        color: #cccccc;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }
    
    li a:hover {
        color: azure;
        transition: color 0.2s;
        transition-timing-function: ease;
    }
</style>