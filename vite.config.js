import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [svelte()],
  }
  
  // Use '/petals/' base path only for production builds (not for development)
  if (command === 'build') {
    config.base = '/petals/'
  }
  
  return config
})
