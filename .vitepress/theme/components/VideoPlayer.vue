<script setup lang="ts">
const props = defineProps<{
  src: string
  title?: string
}>()

const isYouTube = props.src.includes('youtube.com') || props.src.includes('youtu.be')

function getYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|.*&v=))([^?&]+)/)
  return match ? match[1] : ''
}

const youtubeId = isYouTube ? getYouTubeId(props.src) : ''
const isPlaceholder = props.src === '' || props.src === '#'
</script>

<template>
  <div class="video-player">
    <div v-if="title" class="video-title">
      <span class="video-icon">▶</span>
      {{ title }}
    </div>

    <!-- YouTube embed -->
    <div v-if="isYouTube && youtubeId" class="video-wrapper">
      <iframe
        :src="`https://www.youtube.com/embed/${youtubeId}`"
        :title="title || 'Video'"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- Local video -->
    <div v-else-if="!isPlaceholder" class="video-wrapper">
      <video controls :title="title">
        <source :src="src" />
        Tu navegador no soporta video HTML5.
      </video>
    </div>

    <!-- Placeholder -->
    <div v-else class="video-placeholder">
      <div class="video-placeholder-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <polygon points="6 3 20 12 6 21 6 3"/>
        </svg>
      </div>
      <span class="video-placeholder-text">Video tutorial proximamente</span>
    </div>
  </div>
</template>

<style scoped>
.video-player {
  margin: 20px 0;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-alt);
}

.video-title {
  padding: 12px 16px;
  font-weight: 600;
  font-size: 14px;
  border-bottom: 1px solid var(--vp-c-divider);
  display: flex;
  align-items: center;
  gap: 8px;
}

.video-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--quest-purple);
  color: white;
  font-size: 10px;
}

.video-wrapper {
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-wrapper iframe,
.video-wrapper video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 60px 20px;
  text-align: center;
}

.video-placeholder-icon {
  color: var(--quest-purple);
  opacity: 0.3;
}

.video-placeholder-text {
  font-size: 14px;
  color: var(--vp-c-text-3);
}
</style>
