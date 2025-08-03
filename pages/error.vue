<template>
    <div class="card base-300 container min-h-72 mt-4 text-center m-auto flex flex-col justify-center items-center gap-4">
    <div role="alert" class="alert alert-error w-1/2">
 
        <span>Oh no! {{ error }}</span>
        </div>
        <NuxtLink to="/" class="btn btn-primary">
            Home 
            <Icon name="tabler:home" size="24" />
        </NuxtLink>
</div>
</template>

<script setup lang="ts">
const route = useRoute();

const error = ref(route.query.error || 'An unknown error occurred.');
</script>