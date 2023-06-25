<template>
    <div class="content-container">
        
        <h1>About Me</h1>
        <div class="about-image-2">
            <img src="/src/assets/images/memojias.png" alt="Profile Image">
        </div>
        <h2>I have a passion for using technology to solve today’s problems.</h2>
        <div class="about-content">
            <div class="about-image">
                <img src="/src/assets/images/memojias.png" alt="Profile Image">
            </div>

            <div class="about-text">
                <p>I see modern challenges as a puzzle that I can use my technical skills and creative vision to solve. I am continuously looking to expand my expertise to expand my repertoire of skills and techniques to remain on the cutting edge of the technology industry, to adapt my vision as the problems, tools, and technologies evolve. </p>

                <p>From a young age, I have enjoyed learning about new technologies, often toying with them until I learned the ins and outs of them. The opportunity to use technology to creatively problem solve motivates me to keep learning and growing my skills.</p> 
                
                <p>While completing my course studies in Cyber Security, I’ve begun to focus time outside of the classroom learning about Web Application Development and Cloud security. I’m driven to learn how new technologies will shape the world landscape in years to come. Building practical experience outside of the classroom through competitive events and personal projects keeps my skills sharp. </p>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',
        metaInfo: {
            title: 'About'
        }
    }
</script>

<style lang="scss" scoped>
    .content-container {
        max-width: 1600px;
        margin: 60px auto;
        padding-top: 30px;
        padding-left: 128px;
        padding-right: 128px;
        color: white;
        font-family: 'Inter', Helvetica, Arial, sans-serif;

        .about-image-2 {
            display: flex;
            justify-content: center;
            padding-top: 35px;

            @media (min-width: 1025px) {
                display: none;
            }

            img {
                max-width: 50%;
            }
        }

        img {
            align-content: center;
            display: block;
            border-radius: 50%;
            border: 8px solid transparent;
            border-color: #fff;
            background: linear-gradient(90deg, #33C3CC, #59FFAC);
        }

        .about-content{
            display: flex;
            justify-content: center;
            background-color: #314559;
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.25);
            padding-inline: 20px;
            border-radius: 15px;

            .about-image{
                width: 40%;
                float: left;
                padding: 20px;
                display: flex;
                justify-content: center;
                align-items: center;

                @media (max-width: 1025px){
                    display: none;
                }

                img {
                    max-width: 100%;
                    max-height: 350px;
                }
            }

            .about-text{
                width: 60%;
                float: right;

                @media (max-width: 1025px){
                    width: 100%;
                }
            }

        }

        @media (max-width: 1025px){
            padding-left: 64px;
            padding-right: 64px;
        }

        @media (max-width: 768px) {
            padding-left: 32px;
            padding-right: 32px;
        }
    }
</style>