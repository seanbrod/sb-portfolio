<script setup lang="ts">
import { about } from '~/data/about'

useSeoMeta({ title: 'About' })
</script>

<template>
  <div class="about">
    <section class="intro">
      <h1>{{ about.name }}</h1>
      <p class="title">{{ about.title }}</p>
      <p class="subtitle">{{ about.subtitle }}</p>
      <p class="availability">{{ about.availability }}</p>
      <p class="bio">{{ about.bio }}</p>
    </section>

    <section>
      <h2>Highlights</h2>
      <ul class="highlight-list">
        <li v-for="item in about.highlights" :key="item">{{ item }}</li>
      </ul>
    </section>

    <section>
      <h2>Tech Skills</h2>
      <ul class="skill-tags">
        <li v-for="skill in about.topSkills" :key="skill">{{ skill }}</li>
      </ul>
      <p class="languages">{{ about.languages.join(' · ') }}</p>
    </section>

    <section class="socials-section">
      <h2>Socials</h2>
      <div class="socials">
        <a
          v-for="link in about.links"
          :key="link.label"
          :href="link.url"
          target="_blank"
          rel="noopener noreferrer"
        >{{ link.label }}</a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about { padding: 1rem 0; }

h1 { font-size: 2rem; margin: 0 0 0.2rem; }
.title { font-size: 1.1rem; font-weight: 600; color: #222; margin: 0 0 0.15rem; }
.subtitle { font-size: 0.9rem; color: #666; margin: 0 0 0.6rem; }
.availability {
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  color: #2a7a2a;
  background: #edfaed;
  border: 1px solid #c3e6c3;
  border-radius: 20px;
  padding: 0.2rem 0.65rem;
  margin: 0 0 1.2rem;
}
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

.highlight-list { list-style: none; padding: 0; margin: 0; }
.highlight-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f5f5f5;
  font-size: 0.9rem;
  color: #333;
}
.highlight-list li::before {
  content: '→ ';
  color: #888;
}

.skill-tags { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.5rem; }
.skill-tags li {
  padding: 0.3rem 0.75rem;
  background: #f5f5f5;
  border-radius: 4px;
  font-size: 0.875rem;
  color: #333;
}
.languages { margin: 0.75rem 0 0; font-size: 0.8rem; color: #888; }

.socials { display: flex; gap: 1.5rem; flex-wrap: wrap; }
.socials a { color: #0066cc; text-decoration: none; font-size: 0.9rem; font-weight: 600; }
.socials a:hover { text-decoration: underline; }
</style>
