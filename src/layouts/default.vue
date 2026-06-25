<script setup lang="ts">
useHead({
  titleTemplate: (title) => title ? `${title} | Sean Broderick` : 'Sean Broderick',
})
</script>

<template>
  <div class="site">
    <header class="site-header">
      <NuxtLink to="/" class="brand">Sean Broderick</NuxtLink>
      <nav class="site-nav">
        <NuxtLink to="/">About</NuxtLink>
        <NuxtLink to="/resume">Resume</NuxtLink>
        <NuxtLink to="/projects">Projects</NuxtLink>
      </nav>
    </header>
    <main class="site-main">
      <slot />
    </main>
    <footer class="site-footer">
      <p>&copy; {{ new Date().getFullYear() }} Sean Broderick</p>
    </footer>
  </div>
</template>

<style scoped>
.site {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.site-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 1px solid #e5e5e5;
}

.brand {
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: #1a1a1a;
}

.site-nav {
  display: flex;
  gap: 2rem;
}

.site-nav a {
  text-decoration: none;
  color: #555;
  font-size: 0.95rem;
}

.site-nav a.router-link-active {
  color: #1a1a1a;
  font-weight: 600;
}

.site-main {
  flex: 1;
  padding: 2rem;
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
}

.site-footer {
  padding: 1rem 2rem;
  border-top: 1px solid #e5e5e5;
  text-align: center;
  font-size: 0.85rem;
  color: #888;
}
</style>
