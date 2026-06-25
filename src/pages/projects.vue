<script setup lang="ts">
import { projects } from '~/data/projects'

useSeoMeta({ title: 'Projects' })
</script>

<template>
  <div class="projects">
    <h1>Projects</h1>

    <div class="project-list">
      <div v-for="project in projects" :key="project.name" class="project-card">
        <div class="card-header">
          <h2>{{ project.name }}</h2>
          <span :class="['status-badge', project.status]">{{ project.status }}</span>
        </div>

        <p class="description">{{ project.description }}</p>

        <div v-if="project.tech.length" class="tech-tags">
          <span v-for="t in project.tech" :key="t">{{ t }}</span>
        </div>

        <div v-if="project.github || project.url" class="card-links">
          <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">GitHub &rarr;</a>
          <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer">Live Site &rarr;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.projects { padding: 1rem 0; }

h1 { font-size: 2rem; margin: 0 0 1.5rem; }

.project-list { display: flex; flex-direction: column; gap: 1rem; }

.project-card {
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  padding: 1.25rem;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.6rem;
}

.card-header h2 {
  margin: 0;
  font-size: 1.05rem;
}

.status-badge {
  font-size: 0.72rem;
  padding: 0.2rem 0.55rem;
  border-radius: 4px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  white-space: nowrap;
}
.status-badge.live { background: #d1fae5; color: #065f46; }
.status-badge.in-progress { background: #fef3c7; color: #92400e; }
.status-badge.planned { background: #f3f4f6; color: #6b7280; }

.description { margin: 0 0 0.75rem; font-size: 0.9rem; color: #444; line-height: 1.6; }

.tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem; }
.tech-tags span {
  font-size: 0.78rem;
  padding: 0.2rem 0.5rem;
  background: #f0f0f0;
  border-radius: 4px;
  color: #555;
}

.card-links { display: flex; gap: 1.25rem; }
.card-links a {
  font-size: 0.875rem;
  color: #0066cc;
  text-decoration: none;
}
.card-links a:hover { text-decoration: underline; }
</style>
