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

h1 { font-size: 2rem; margin: 0 0 1.5rem; color: var(--text); }

.project-list { display: flex; flex-direction: column; gap: 1rem; }

.project-card {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 1.25rem;
  background: var(--bg-surface);
  transition: border-color 0.2s ease;
}
.project-card:hover {
  border-color: rgba(99, 102, 241, 0.4);
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
  color: var(--text);
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
.status-badge.live { background: rgba(16, 185, 129, 0.15); color: #34d399; }
.status-badge.in-progress { background: rgba(245, 158, 11, 0.15); color: var(--accent-2); }
.status-badge.planned { background: var(--bg-elevated); color: var(--text-faint); }

.description { margin: 0 0 0.75rem; font-size: 0.9rem; color: var(--text-muted); line-height: 1.6; }

.tech-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.75rem; }
.tech-tags span {
  font-size: 0.78rem;
  padding: 0.2rem 0.5rem;
  background: var(--bg-elevated);
  border: 1px solid var(--border);
  border-radius: 4px;
  color: var(--text-muted);
}

.card-links { display: flex; gap: 1.25rem; }
.card-links a {
  font-size: 0.875rem;
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  padding-bottom: 2px;
  background-image: linear-gradient(var(--accent), var(--accent));
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: color 0.2s, background-size 0.25s ease;
}
.card-links a:hover {
  color: var(--text);
  background-size: 100% 2px;
}
</style>
