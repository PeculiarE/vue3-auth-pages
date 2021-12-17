<script>
    import HeaderInfo from '../components/HeaderInfo.vue'
    import useVuelidate from '@vuelidate/core'
    import { required, email, minLength } from '@vuelidate/validators'

    export default {
        name: "SignUpPage",
        components: {
            HeaderInfo
        },
        setup() {
            return { v$: useVuelidate() };
        },
        data() {
            return {
                name: '',
                email: '',
                password: ''
            };
        },
        validations() {
            return {
                name: { required, minLength: minLength(2) },
                email: { required, email },
                password: { required, minLength: minLength(7) }
            };
        },
        methods: {
            signUp() {
            this.v$.$touch();
            if (this.v$.$error) alert('Please fill in all fields with valid data')
            else {
                alert("Sign up successful");
                this.$router.push({ name: 'SignInPage' });
                };
            },
        },
    }

</script>

<template>
    <div class="w-full space-y-6 px-5 h-full md:grid md:grid-cols-2">
        <HeaderInfo />
        <div class="space-y-5">
            <div class="w-full max-h-screen rounded-lg bg-white px-7 py-10">
                <h2 class="font-serif text-2xl lg:text-3xl text-black text-center">Sign Up</h2>
                <p class="font-sans text-sm text-gray-special text-center mt-2">Welcome to Kinfolk Venture Capital</p>
                <form class="mt-7 space-y-5 mb-5">
                    <div>
                        <label class="block mb-1 font-sans text-sm text-gray-special">Company Name</label>
                        <input class=" w-full border border-gray-special/50 rounded p-2" type="text" v-model="v$.name.$model">
                    </div>
                    <div>
                        <label class="block mb-1 font-sans text-sm text-gray-special">Email Address</label>
                        <input class=" w-full border border-gray-special/50 rounded p-2" type="text" v-model="v$.email.$model">
                    </div>
                    <div>
                        <label class="block mb-1 font-sans text-sm text-gray-special">Password</label>
                        <input class=" w-full border border-gray-special/50 rounded p-2" type="password" v-model="v$.password.$model">
                    </div>
                    <button type="button" class="block w-full bg-gray-special rounded p-3 font-sans text-sm text-gray-200"
                    @click="signUp">Sign Up</button>
                </form>
                <p class="font-sans text-sm text-gray-special text-center">Already have an account? <a class="text-black font-sans text-sm font-bold" href="/signin">Sign In</a></p>
            </div>
            <p class="text-white text-sm font-sans text-center">By registering you agree with the <span class="font-bold underline">Origins Terms of Use</span></p>
        </div>
    </div>
</template>

<style scoped>
</style>
