<template>
    <div class="navbar bg-primary text-primary-content">
        <div class="navbar-start">
            <NuxtLink to="/" class="btn btn-ghost text-xl">daisyUI</NuxtLink>
        </div>

        <div class="navbar-end">
            <AppThemeToggle />
            <AppGithubAuth />
        </div>
    </div>
</template>