<template>
    <div class="wrapper">
        <div class="contact-form" v-if="!submitState">
            <h1>Contact Me!</h1>
            <p>Looking to get in touch? Leave a message below, and I'll get back to you soon!</p>
            <div class="form-fields">
                <label></label>
                <input type="text" placeholder="Name" id="nameField" v-model="nameField">
                <input type="email" placeholder="Email" id="emailField" v-model="emailField">
                <textarea name="message" placeholder="Message for Andrew" id="messageField" cols="30" rows="10" v-model="messageField"></textarea>
                <button @click="submitMessage" :disabled="!completedState" :class=" {buttonEnabled: completedState} ">Submit</button>
            </div>
        </div>
        <div class="submitMessage" v-else>
            <h1>Message Submitted!</h1>
            <p>Thanks for the message, {{nameField}}! I'll be in touch with you shortly.</p>
        </div>
    </div>
    
</template>

<script setup>
    import { ref, computed } from 'vue';

    const completedState = computed( () => {
        console.log ('updating completedState')
        return nameField.value != '' && emailField.value != '' && messageField.value != ''
    })
    const submitState = ref(false)
    const nameField = ref('')
    const emailField = ref('')
    const messageField = ref('')

    const validateFields = () => {

    }

    const submitMessage = () => {
        console.log('submit')
        submitState.value = true;
    }
</script>

<style lang="scss" scoped>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Roboto+Mono&display=swap');

    .wrapper {
        display: flex;
        align-items: center;

        .contact-form, .submitMessage {
            margin: 30px auto;
            padding: 30px;
            max-width: 800px;
            width: 80%;
            border-radius: 15px;
            background-color: #314559;
            box-shadow: 0 2px 3px 0 rgba(0, 0, 0, 0.1);
            color: #fff;
            font-family: 'Inter', Helvetica, Arial, sans-serif;

            h1{
                margin-top: 0;
            }

            .form-fields {
                color: #000;
                
                /*
                input[type=text], [type=email] {
                    width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    box-sizing: border-box;
                    color: #000;
                    border-color: aqua;
                    border-radius: 10px;
                    font-size: 16px;

                } 
                */

                textarea, input[type=text], [type=email] {
                    width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    box-sizing: border-box;
                    caret-color: #fff;
                    color: #fff;
                    border: 3px solid #77828C;
                    border-radius: 10px;
                    resize: none;
                    font-family: 'Inter',Helvetica, Arial, sans-serif;
                    font-size: 16px;
                    background-color: #314559;
                    transition: 0.5s;
                }

                textarea:focus, input:focus {
                    border-color: #fff;
                    background-color: #1b2631;
                    outline: none !important;
                }

                .buttonEnabled {
                    background-color: #77A8D9;
                    color: #000;
                    cursor: pointer;
                }

                button {
                    font-family: 'Inter',Helvetica, Arial, sans-serif;
                    background-color: #B8C8D9;
                    color: #626A73;
                    font-size: 18px;
                    padding: 10px;
                    border-radius: 5px;
                    border: none;
                    cursor: not-allowed;
                }

            }
        }
    }
    
</style>