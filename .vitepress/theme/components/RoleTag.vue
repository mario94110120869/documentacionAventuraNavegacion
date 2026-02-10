<script setup lang="ts">
defineProps<{
  role: 'super-admin' | 'editor'
}>()
</script>

<template>
  <span :class="['role-tag', `role-tag-${role}`]">
    <span class="role-icon">{{ role === 'super-admin' ? '🛡️' : '✏️' }}</span>
    {{ role === 'super-admin' ? 'Super Administrador' : 'Editor' }}
  </span>
</template>

<style scoped>
.role-tag {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 10px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: 600;
  vertical-align: middle;
}

.role-tag-super-admin {
  background: hsl(262 83% 58% / 0.15);
  color: var(--quest-purple-light);
  border: 1px solid hsl(262 83% 58% / 0.3);
}

.role-tag-editor {
  background: hsl(186 94% 42% / 0.15);
  color: var(--quest-cyan-light);
  border: 1px solid hsl(186 94% 42% / 0.3);
}

.role-icon {
  font-size: 14px;
}
</style>
