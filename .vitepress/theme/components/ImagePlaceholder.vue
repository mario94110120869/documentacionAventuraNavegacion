<script setup lang="ts">
defineProps<{
  src?: string
  alt?: string
  label: string
}>()
</script>

<template>
  <figure class="img-container">
    <!-- Si hay imagen real -->
    <img v-if="src" :src="src" :alt="alt || label" class="img-real" />

    <!-- Placeholder si no hay imagen -->
    <div v-else class="img-placeholder">
      <div class="img-placeholder-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
          <circle cx="9" cy="9" r="2"/>
          <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
        </svg>
      </div>
      <span class="img-placeholder-label">{{ label }}</span>
      <span class="img-placeholder-hint">La captura de pantalla se integrara proximamente</span>
    </div>

    <figcaption v-if="label" class="img-caption">{{ label }}</figcaption>
  </figure>
</template>

<style scoped>
.img-container {
  margin: 20px 0;
}

.img-real {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--vp-c-divider);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.img-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 40px 20px;
  border-radius: 10px;
  border: 2px dashed var(--vp-c-divider);
  background: linear-gradient(135deg, var(--vp-c-bg-alt) 0%, var(--vp-c-bg-soft) 100%);
  text-align: center;
}

.img-placeholder-icon {
  color: var(--quest-purple);
  opacity: 0.4;
}

.img-placeholder-label {
  font-weight: 600;
  font-size: 14px;
  color: var(--quest-purple-light);
}

.img-placeholder-hint {
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.img-caption {
  text-align: center;
  font-size: 13px;
  color: var(--vp-c-text-3);
  margin-top: 8px;
  font-style: italic;
}
</style>
