<script setup lang="ts">
defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="step-list">
    <h4 v-if="title" class="step-list-title">{{ title }}</h4>
    <div class="step-list-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.step-list {
  margin: 16px 0;
  padding: 20px 24px;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.step-list-title {
  font-family: 'Outfit', system-ui, sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: var(--quest-purple-light);
  margin-bottom: 16px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--vp-c-divider);
}

.step-list-content :deep(ol) {
  counter-reset: step-counter;
  list-style: none;
  padding-left: 0;
  margin: 0;
}

.step-list-content :deep(ol li) {
  counter-increment: step-counter;
  display: flex;
  gap: 14px;
  margin-bottom: 14px;
  align-items: flex-start;
  line-height: 1.6;
}

.step-list-content :deep(ol li)::before {
  content: counter(step-counter);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--quest-purple) 0%, var(--quest-purple-dark) 100%);
  color: white;
  font-weight: 700;
  font-size: 13px;
  flex-shrink: 0;
  box-shadow: 0 2px 8px hsl(262 83% 58% / 0.3);
}

.step-list-content :deep(ol li:last-child) {
  margin-bottom: 0;
}
</style>
