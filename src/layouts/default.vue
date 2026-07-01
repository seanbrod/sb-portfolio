<script setup lang="ts">
import { about } from '~/data/about'

useHead({
  titleTemplate: (title) => title ? `${title} | Sean Broderick` : 'Sean Broderick',
})
</script>

<template>
  <div class="site">
    <header class="site-header">
      <div class="brand-group">
        <NuxtLink to="/" class="brand">Sean Broderick</NuxtLink>
        <span class="brand-divider">|</span>
        <div class="header-social">
          <a
            v-for="link in about.links"
            :key="link.label"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="social-link"
          >{{ link.label }}</a>
        </div>
      </div>
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
  background: var(--bg-surface);
  border-bottom: 1px solid var(--border);
}

.brand-group {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.brand {
  font-size: 1.2rem;
  font-weight: 700;
  text-decoration: none;
  color: var(--text);
  letter-spacing: -0.01em;
  cursor: default;
}

.brand-divider {
  color: var(--border);
  font-weight: 300;
  font-size: 1.1rem;
  user-select: none;
}

.header-social {
  display: flex;
  gap: 1.25rem;
}

.social-link {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.95rem;
  padding-bottom: 2px;
  background-image: linear-gradient(var(--accent), var(--accent));
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: color 0.2s, background-size 0.25s ease;
}

.social-link:hover {
  color: var(--text);
  background-size: 100% 2px;
}

.site-nav {
  display: flex;
  gap: 2rem;
}

.site-nav a {
  text-decoration: none;
  color: var(--text-muted);
  font-size: 0.95rem;
  padding-bottom: 2px;
  background-image: linear-gradient(var(--accent), var(--accent));
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: color 0.2s, background-size 0.25s ease;
}

.site-nav a:hover {
  color: var(--text);
  background-size: 100% 2px;
}

.site-nav a.router-link-active {
  color: var(--text);
  font-weight: 600;
  background-size: 100% 2px;
}

.site-main {
  flex: 1;
  padding: 2rem;
  max-width: 1400px;
  margin: 0 auto;
  width: 100%;
}

.site-footer {
  padding: 1rem 2rem;
  border-top: 1px solid var(--border);
  text-align: center;
  font-size: 0.85rem;
  color: var(--text-faint);
}
</style>
