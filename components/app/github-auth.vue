<template>
    <button :disabled="authStore.loading" class="btn btn-accent" @click="authStore.signIn">Sign In with GitHub
        <span v-if="authStore.loading" class="loading loading-spinner loading-md"></span>
                 <Icon v-else name="tabler:brand-github" size="24" />
    </button>
</template>

<script setup lang="ts">
const authStore = useMyAuthStoreStore();
</script>