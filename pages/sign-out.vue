<template>
    <div class="card base-300 container min-h-72 mt-4 text-center m-auto flex flex-col justify-center items-center gap-4">
     <span class="loading loading-spinner loading-xl"></span>
</div>
</template>

<script setup lang="ts">
const authStore = useMyAuthStoreStore();

onMounted(() => {
  authStore.signOut();
});
</script>