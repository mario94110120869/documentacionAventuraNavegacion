<script setup lang="ts">
defineProps<{
  title?: string
  cols?: number
}>()
</script>

<template>
  <div class="quick-ref">
    <h4 v-if="title" class="quick-ref-title">{{ title }}</h4>
    <div class="quick-ref-grid" :style="{ gridTemplateColumns: `repeat(${cols || 2}, 1fr)` }">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.quick-ref {
  margin: 16px 0;
  padding: 20px 24px;
  border-radius: 10px;
  background: var(--vp-c-bg-alt);
  border: 1px solid var(--vp-c-divider);
}

.quick-ref-title {
  font-family: 'Outfit', system-ui, sans-serif;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--quest-cyan);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quick-ref-grid {
  display: grid;
  gap: 10px;
}

.quick-ref-grid :deep(> *) {
  font-size: 13px;
  padding: 8px 12px;
  border-radius: 8px;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
}
</style>
