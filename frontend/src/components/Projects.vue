<template>
    <div class="content-container">
        <div class="page-content">
            <h1>Projects</h1>
            <h2>Check back often to see the cool things that I'm working on!</h2>

            <div class="tile-content">
                <div class="tile-image">
                    <span class="helper"></span><img src="/src/assets/images/svg/aws.svg" alt="Amazon Web Services">
                </div>
                <div class="tile-text">
                    <h3>Self-Hosted GitHub Runners in AWS</h3>
                    <p>Utilized GitHub actions to spin up ephemeral EC2 instances to run GitHub jobs. This allowed faster and more frequent build for development teams while leveraging AWS infrastructure.</p>
                    <div class="tool-highlightsv2">
                        <a href="https://docs.github.com/en/actions" target="_blank">GitHub Actions</a>
                        <a href="https://aws.amazon.com/ec2" target="_blank">AWS EC2</a>
                    </div>
                </div>
            </div>

            <div class="tile-content">
                <div class="tile-image">
                    <span class="helper"></span><img src="/src/assets/images/svg/s3.svg" alt="Amazon Web Services s3">
                </div>
                <div class="tile-text">
                    <h3>Serverless Static Website in AWS</h3>
                    <p>You may be looking at this project right now! <a href="https://andrewmaier.dev" target="_blank">andrewmaier.dev</a> is a static website that uses a variety of AWS services to deliver content to the user. The files themselves are hosted in S3, and served to the user via CloudFront. A Lambda@Edge function specifies the default index document for subdirectory files.</p>
                    <p><a href="https://github.com/mayormaier/andrewmaier.dev">See this project on GitHub!</a></p>
                    <div class="tool-highlightsv2">
                        <a href="https://aws.amazon.com/s3" target="_blank">AWS S3</a>
                        <a href="https://aws.amazon.com/cloudfront" target="_blank">AWS CloudFront</a>
                        <a href="https://aws.amazon.com/lambda/edge/" target="_blank">AWS Lambda</a>
                    </div>
                </div>
            </div>

            <div class="tile-content">
                <div class="tile-image">
                    <span class="helper"></span><img src="/src/assets/images/svg/nginx.svg" alt="Nginx">
                </div>
                <div class="tile-text">
                    <h3>Self-Hosted HTTPS Web Application</h3>
                    <p>This project is an instance of my web portfolio that deployed on local infrastructure at <a href="https://local.andrewmaier.dev" target="_blank">local.andrewmaier.dev</a>. The application runs in an nginx container and provides security via LetsEncrypt and Certbot.</p>
                    <p><a href="https://github.com/mayormaier/andrewmaier.dev">See this project on GitHub!</a></p>
                    <div class="tool-highlightsv2">
                        <a href="https://nginx.org/en/" target="_blank">Nginx</a>
                        <a href="https://docker.com/" target="_blank">Docker</a>
                        <a href="https://certbot.eff.org/" target="_blank">Certbot</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Projects',
        metaInfo: {
            title: 'Projects'
        }
    }
</script>

<style lang="scss" scoped>
    .content-container {
        max-width: 1600px;
        margin: 60px auto;
        padding-left: 128px;
        padding-right: 128px;
        padding-top: 30px;
        color: white;
        font-family: 'Inter', Helvetica, Arial, sans-serif;

        .tile-content {
            border-radius: 15px;
            padding: 20px;
            margin-top: 20px;
            margin-bottom: 20px;
            height: max-content;
            overflow: auto;
            background-color: #314559;;
        }
        .tile-image {
            float: left;
            width: 30%;

            @media (max-width: 768px) {
            display: none;
            }

            @media (min-width: 1026px) {
            width: 23%;
            }
        }
        .tile-image img {
            max-height: max(7.5rem);
            display: block;
            margin: auto;
        }

        .tile-text {
            float: right;
            width: 70%;

            p {
            margin-top: 10px;

            a {
                text-decoration: underline;
            }
            }

            @media (max-width: 768px) {
            width: 100%;
            }

            @media (min-width: 1026px) {
            width: 77%;
            }
        }

        .tool-highlightsv2 {
            margin-top: 10px;
            float: left;
            display: grid;
            grid-gap: 10px;
            grid-template-columns: repeat(3, auto);

            a {
            padding-left: 10px;
            padding-right: 10px;
            padding-top: 7px;
            padding-bottom: 7px;

            color: inherit;
            font-size: inherit;
            background-color: #1b2631;
            border-radius: 15px;

            &:hover {
                background-color: #77A8D9;
                color: #121a21;
                transition: color 0.25s;
                transition: background-color 0.25s;
                transition-timing-function: ease-in-out;
            }
            }
        }

        .clr {
            clear: both;
            font-size: 0;
        }

        @media (max-width: 1025px) {
            padding-left: 64px;
            padding-right: 64px;
        }

        @media (max-width: 768px) {
            padding-left: 32px;
            padding-right: 32px;
        }
    }
</style>