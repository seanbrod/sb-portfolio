<script setup lang="ts">
import { ref } from 'vue'
import { about } from '~/data/about'

useSeoMeta({ title: 'About' })

const activeTab = ref<'highlights' | 'bio' | null>(null)

function toggleTab(tab: 'highlights' | 'bio') {
  activeTab.value = activeTab.value === tab ? null : tab
}

const subtitleParts = about.subtitle.split(' · ')
const institution = subtitleParts[0]
const specialization = subtitleParts.slice(1).join(' · ')
</script>

<template>
  <div class="about">

    <div class="identity-center">

      <!-- Identity hierarchy -->
      <h1>SEAN M. BRODERICK</h1>
      <p class="id-role">{{ about.title }} | {{ institution }}</p>
      <p class="id-meta">{{ specialization }}</p>
      <span class="availability">{{ about.availability }}</span>

      <!-- Horizontal tab switcher: closed by default, toggleable -->
      <nav class="tab-nav">
        <button
          class="tab-link"
          :class="{ active: activeTab === 'bio' }"
          @click="toggleTab('bio')"
        >
          Bio
        </button>
        <button
          class="tab-link"
          :class="{ active: activeTab === 'highlights' }"
          @click="toggleTab('highlights')"
        >
          Hightlights
        </button>
      </nav>

      <!-- Shared content container — empty when no tab is active -->
      <div class="tab-content-area">
        <Transition name="tab-fade" mode="out-in">
          <div v-if="activeTab === 'highlights'" key="highlights" class="tab-panel">
            <ul class="highlight-list">
              <li v-for="item in about.highlights" :key="item">{{ item }}</li>
            </ul>
            <div class="skill-tags">
              <span v-for="skill in about.topSkills" :key="skill">{{ skill }}</span>
            </div>
          </div>
          <div v-else-if="activeTab === 'bio'" key="bio" class="tab-panel">
            <p class="bio">{{ about.bio }}</p>
          </div>
        </Transition>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* ── Full-screen canvas ───────────────────────────── */
.about {
  position: fixed;
  top: 4rem;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
  background: var(--bg);
  border-bottom: 1px solid var(--border);
}

/* ── Center identity column ───────────────────────── */
.identity-center {
  position: absolute;
  top: 18%;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  z-index: 1;
  width: min(640px, 90vw);
}

h1 {
  font-size: clamp(1.8rem, 3.5vw, 3.25rem);
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--text);
  margin: 0 0 0.55rem;
  line-height: 1.05;
  white-space: nowrap;
}

.id-role {
  font-size: clamp(0.8rem, 1.3vw, 0.95rem);
  font-weight: 500;
  color: var(--text-muted);
  margin: 0 0 0.25rem;
  letter-spacing: 0.06em;
}

.id-meta {
  font-size: clamp(0.72rem, 1.1vw, 0.82rem);
  color: var(--text-faint);
  margin: 0 0 1.25rem;
  letter-spacing: 0.04em;
}

.availability {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  color: var(--accent);
  background: rgba(96, 165, 250, 0.1);
  border: 1px solid rgba(96, 165, 250, 0.25);
  border-radius: 20px;
  padding: 0.2rem 0.75rem;
  letter-spacing: 0.06em;
}

/* ── Tab nav: exact mirror of .site-nav ───────────── */
.tab-nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 2rem;
}

.tab-link {
  background: none;
  border: none;
  padding: 0 0 2px;
  font-family: inherit;
  cursor: pointer;
  color: var(--text-muted);
  font-size: 0.95rem;
  background-image: linear-gradient(var(--accent), var(--accent));
  background-size: 0% 2px;
  background-repeat: no-repeat;
  background-position: left bottom;
  transition: color 0.2s, background-size 0.25s ease;
}

.tab-link:hover {
  color: var(--text);
  background-size: 100% 2px;
}

.tab-link.active {
  color: var(--text);
  font-weight: 600;
  background-size: 100% 2px;
}

/* ── Content area ─────────────────────────────────── */
.tab-content-area {
  margin-top: 1.5rem;
  text-align: left;
}

/* ── Fade transition ──────────────────────────────── */
.tab-fade-enter-active,
.tab-fade-leave-active {
  transition: opacity 0.15s ease;
}

.tab-fade-enter-from,
.tab-fade-leave-to {
  opacity: 0;
}

/* ── Highlights list ──────────────────────────────── */
.highlight-list {
  list-style: none;
  padding: 0;
  margin: 0 0 0.9rem;
}

.highlight-list li {
  font-size: 0.9rem;
  color: var(--text-muted);
  line-height: 1.55;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--border);
}

.highlight-list li::before {
  content: '→ ';
  color: var(--accent);
}

/* ── Skill tags ───────────────────────────────────── */
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
}

.skill-tags span {
  font-size: 0.8rem;
  padding: 0.2rem 0.6rem;
  background: rgba(96, 165, 250, 0.08);
  border: 1px solid rgba(96, 165, 250, 0.2);
  border-radius: 4px;
  color: var(--accent);
}

/* ── Bio ──────────────────────────────────────────── */
.bio {
  font-size: 0.92rem;
  line-height: 1.8;
  color: var(--text-muted);
  margin: 0;
}

/* ── Mobile ───────────────────────────────────────── */
@media (max-width: 768px) {
  .about {
    position: static;
    height: auto;
    overflow-y: auto;
    min-height: calc(100vh - 4rem);
    padding: 1.5rem;
  }

  .identity-center {
    position: static;
    transform: none;
    width: 100%;
    padding-top: 1rem;
  }

  h1 {
    white-space: normal;
    font-size: 1.75rem;
    letter-spacing: 0.1em;
  }
}
</style>
