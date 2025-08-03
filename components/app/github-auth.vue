<template>
    <div>
        <details class="dropdown dropdown-end" v-if="!authStore.loading && authStore.sessionUser">
            <div class="avatar" v-if="authStore.sessionUser.image">
  <div class="w-24 rounded-full">
    <img :src="authStore.sessionUser.image" />
  </div>
</div>
            <summary class="btn m-1">{{ authStore.sessionUser.name }}</summary>
            <ul class="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                <NuxtLink to="/sign-out" v-if="authStore.sessionUser" @click="authStore.signOut()">
                Sign out
            </NuxtLink>
            </ul>
        </details>
   
    <button :disabled="authStore.loading" class="btn btn-accent" @click="authStore.signIn">Sign In with GitHub
        <span v-if="authStore.loading" class="loading loading-spinner loading-md"></span>
        <Icon v-else name="tabler:brand-github" size="24" />
    </button>
     </div>
</template>

<script setup lang="ts">
const authStore = useMyAuthStoreStore();
</script>