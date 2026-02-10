import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import './custom.css'

// Componentes personalizados
import VideoPlayer from './components/VideoPlayer.vue'
import ImagePlaceholder from './components/ImagePlaceholder.vue'
import StepList from './components/StepList.vue'
import QuickRef from './components/QuickRef.vue'
import RoleTag from './components/RoleTag.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VideoPlayer', VideoPlayer)
    app.component('ImagePlaceholder', ImagePlaceholder)
    app.component('StepList', StepList)
    app.component('QuickRef', QuickRef)
    app.component('RoleTag', RoleTag)
  }
} satisfies Theme
