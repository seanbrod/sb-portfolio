<script setup lang="ts">
import { skills, experience, education, involvement } from '~/data/resume'

useSeoMeta({ title: 'Resume' })
</script>

<template>
  <div class="resume">
    <h1>Resume</h1>

    <section>
      <h2>Technical Skills</h2>
      <div v-for="group in skills" :key="group.category" class="skill-row">
        <span class="skill-category">{{ group.category }}</span>
        <span class="skill-items">{{ group.items.join(' · ') }}</span>
      </div>
    </section>

    <section>
      <h2>Work Experience</h2>
      <div v-for="job in experience" :key="job.title + job.company" class="entry">
        <div class="entry-header">
          <div class="entry-left">
            <span class="entry-title">{{ job.title }}</span>
            <span class="entry-org"> · {{ job.company }}</span>
          </div>
          <div class="entry-right">
            <span>{{ job.location }}</span>
            <span>{{ job.period }}</span>
          </div>
        </div>
        <ul class="bullets">
          <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Education</h2>
      <div v-for="edu in education" :key="edu.institution" class="entry">
        <div class="entry-header">
          <div class="entry-left">
            <span class="entry-title">{{ edu.institution }}</span>
          </div>
          <div class="entry-right">
            <span>{{ edu.location }}</span>
            <span>{{ edu.degree }} · GPA: {{ edu.gpa }}</span>
          </div>
        </div>
        <ul class="bullets">
          <li v-for="bullet in edu.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </div>
    </section>

    <section>
      <h2>Involvement</h2>
      <div v-for="item in involvement" :key="item.role + item.organization" class="entry">
        <div class="entry-header">
          <div class="entry-left">
            <span class="entry-title">{{ item.role }}</span>
            <span class="entry-org"> · {{ item.organization }}</span>
          </div>
          <div class="entry-right">
            <span>{{ item.location }}</span>
            <span>{{ item.period }}</span>
          </div>
        </div>
        <ul class="bullets">
          <li v-for="bullet in item.bullets" :key="bullet">{{ bullet }}</li>
        </ul>
      </div>
    </section>
  </div>
</template>

<style scoped>
.resume { padding: 1rem 0; }

h1 { font-size: 2rem; margin: 0 0 1.5rem; color: var(--text); }

h2 {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--text-faint);
  border-bottom: 1px solid var(--border);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

section { margin-bottom: 2.5rem; }

.skill-row {
  display: flex;
  gap: 1rem;
  padding: 0.45rem 0;
  border-bottom: 1px solid var(--border);
  font-size: 0.9rem;
}
.skill-category { font-weight: 600; min-width: 210px; color: var(--text); flex-shrink: 0; }
.skill-items { color: var(--text-muted); }

.entry { margin-bottom: 1.5rem; }

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.25rem;
  margin-bottom: 0.4rem;
}

.entry-left { display: flex; align-items: baseline; flex-wrap: wrap; }
.entry-title { font-weight: 700; font-size: 0.95rem; color: var(--text); }
.entry-org { color: var(--text-muted); font-size: 0.9rem; }

.entry-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-size: 0.82rem;
  color: var(--text-faint);
  line-height: 1.4;
}

.bullets { margin: 0; padding-left: 1.25rem; }
.bullets li {
  font-size: 0.88rem;
  color: var(--text-muted);
  margin-bottom: 0.3rem;
  line-height: 1.55;
}
</style>
