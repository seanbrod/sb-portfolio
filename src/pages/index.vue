<script setup lang="ts">
import { about } from '~/data/about'

useSeoMeta({ title: 'About' })
</script>

<template>
  <div class="about">
    <section class="intro">
      <h1>{{ about.name }}</h1>
      <p class="subtitle">{{ about.title }}</p>
      <p class="bio">{{ about.bio }}</p>
    </section>

    <section>
      <h2>Contact & Links</h2>
      <ul class="link-list">
        <li v-for="link in about.links" :key="link.label">
          <span class="link-label">{{ link.label }}</span>
          <a :href="link.url" target="_blank" rel="noopener noreferrer">{{ link.display }}</a>
        </li>
      </ul>
    </section>

    <section>
      <h2>Top Skills</h2>
      <ul class="skill-tags">
        <li v-for="skill in about.topSkills" :key="skill">{{ skill }}</li>
      </ul>
    </section>
  </div>
</template>

<style scoped>
.about { padding: 1rem 0; }

h1 { font-size: 2rem; margin: 0 0 0.25rem; }
.subtitle { color: #555; margin: 0 0 1rem; font-size: 1rem; }
.bio { font-size: 1rem; line-height: 1.7; max-width: 680px; color: #333; margin: 0; }

section { margin-bottom: 2.5rem; }

h2 {
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #888;
  border-bottom: 1px solid #e5e5e5;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.link-list { list-style: none; padding: 0; margin: 0; }
.link-list li {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid #f5f5f5;
}
.link-label { width: 80px; font-weight: 600; font-size: 0.85rem; color: #555; }
.link-list a { color: #0066cc; text-decoration: none; font-size: 0.9rem; }
.link-list a:hover { text-decoration: underline; }

.skill-tags { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.skill-tags li {
  padding: 0.3rem 0.75rem;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #333;
}
</style>
