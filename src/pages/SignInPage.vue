<script>
import HeaderInfo from '../components/HeaderInfo.vue'
    import useVuelidate from '@vuelidate/core'
    import { required, email, minLength } from '@vuelidate/validators'

    export default {
        name: "SignIn",
        components: {
            HeaderInfo
        },
        setup() {
            return { v$: useVuelidate() };
        },
        data() {
            return {
                email: '',
                password: ''
            };
        },
        validations() {
            return {
                email: { required, email },
                password: { required, minLength: minLength(7) }
            };
        },
        methods: {
            signUp() {
            this.v$.$touch();
            if (this.v$.$error) alert('Please fill in all fields with valid data')
            else alert("Login successful");
            },
        },
    }
</script>

<template>
    <div class="w-full space-y-6 px-5 h-full md:grid md:grid-cols-2">
        <HeaderInfo />
            <div class="w-full max-h-screen rounded-lg bg-white px-7 py-10">
                <h2 class="font-serif text-2xl lg:text-3xl text-black text-center">Sign In</h2>
                <p class="font-sans text-sm text-gray-special text-center mt-2">Welcome to Kinfolk Venture Capital</p>
                <form class="mt-7 space-y-5 mb-5">
                    <div>
                        <label class="block mb-1 font-sans text-sm text-gray-special">Email Address</label>
                        <input class="w-full border border-gray-special/50 rounded p-2" type="text" v-model="v$.email.$model">
                    </div>
                    <div>
                        <label class="block mb-1 font-sans text-sm text-gray-special">Password</label>
                        <input class="w-full border border-gray-special/50 rounded p-2 mb-2" type="password" v-model="v$.password.$model">
                        <p class="text-sm text-black text-right">Forgot Password?</p>
                    </div>
                    <button type="button" class="block w-full bg-gray-special rounded p-3 font-sans text-sm text-gray-200">Sign In</button>
                </form>
                <div class="flex justify-center items-center space-x-2 mt-2">
                    <div class="w-14 h-px bg-gray-special"></div>
                    <span class="text-sm text-gray-special">or</span>
                    <div class="w-14 h-px bg-gray-special"></div>
                </div>
                <div class="flex justify-center space-x-8 mt-3 mb-5">
                    <div class="w-11 h-11">
                        <img src="/src/assets/gmail_logo.svg" class="object-cover w-full h-full" alt="gmail logo" />
                    </div>
                    <div class="w-11 h-11">
                        <img src="/src/assets/linkedin_logo.svg" class="object-cover w-full h-full" alt="linkedin logo" />
                    </div>
                </div>
                <p class="font-sans text-sm text-gray-special text-center">Don't have an account? <a class="text-black font-sans text-sm font-bold" href="/signup">Sign Up</a></p>
            </div>
        </div>
</template>

<style scoped>
</style>
