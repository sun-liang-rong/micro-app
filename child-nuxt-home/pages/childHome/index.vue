 <template>
  <div>
    home
  </div>
 </template>
 
 <script lang="ts" setup>
  import { home } from '@/api/home'
  const { data, error } = await useAsyncData(() => home())
  console.log(data, error)
 </script>
 
 <style lang="scss" scoped>
 
 </style>