<script setup>
    import HeaderInfo from '../components/HeaderInfo.vue'
</script>

<template>
    <div class="w-full space-y-10 px-5 h-full md:grid md:grid-cols-2">
        <HeaderInfo />
        <div class="w-full max-h-screen rounded-lg bg-white px-7 py-10">
            <h2 class="font-serif text-2xl lg:text-3xl text-black text-center">Login Successful</h2>
            <p class="font-sans text-sm text-gray-special text-center mt-2">Welcome to Kinfolk Venture Capital</p>
            <div class="mt-7 space-y-6 w-full">
                <p class="font-sans text-base text-black text-left"><strong>Company Name: </strong>Company XYZ</p>
                <p class="font-sans text-base text-black text-left mb-10"><strong>Email Address: </strong>xyz@example.com</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>
