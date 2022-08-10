<template>
    <div class="modal">
        <div class="modal-box">
            <div class="exit-button" @click="exitModal">
                <ion-icon name="close"></ion-icon>
            </div>
            <p>
                As part of the THON Technology committee, I'm raising money to support families impacted by childhood cancer. I'm joined by thousands of other student volunteers that give their time and energy to ensure that the THON community makes the highest impact possible.
            </p>
            <p>
                <strong>Consider supporting THON financially to join me in the fight against childhood cancer!</strong>
            </p>
            <p>Visit the link below to donate and learn more.</p>
            <a href="https://andrew.thon.org/" target="_blank"><button>Donate Now!</button></a>
        </div>
    </div>
</template>

<script setup>
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    const exitModal = async () => {
        const modal = document.querySelector(".modal")
        modal.classList.add("exit-modal")
        await sleep(1000)
        modal.remove()
    }
</script>

<style lang="scss" scoped>
    @import 'vue-ionicons/ionicons.scss';

    .exit-modal {
        opacity: 0;
        transition: opacity 0.3s;
        transition-timing-function: ease;
    }
    .modal {
        background-color: #1b26317a;
        z-index: 15;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;

        .exit-button {
            width: 42px;
            height: 42px;
            cursor: pointer;
            font-size: xx-large;
            z-index: 20;
            float: right;
            display: block;
            padding: 5px;
            border-radius: 15px;
        }

        .exit-button:hover {
            background-color: #1b2631;
        }

        .modal-box {
            margin-top: 75px;
            margin-left: auto;
            margin-right: auto;
            padding: 30px;
            max-width: 800px;
            width: 80%;
            border-radius: 15px;
            background-color: #314559;
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
            color: #fff;
            font-family: 'Inter', Helvetica, Arial, sans-serif;

            button {
                font-family: 'Inter',Helvetica, Arial, sans-serif;
                background-color: #77A8D9;
                color: #000;
                font-size: 18px;
                padding: 10px;
                border-radius: 5px;
                border: none;
                cursor: pointer;
            }

            button:hover {
                box-shadow: rgba(0, 0, 0, 0.25) 0px 12px 13px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
            }
        }
        

            
    }
</style>