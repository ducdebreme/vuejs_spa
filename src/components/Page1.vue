<template>
  <div class="wrapper">
    <h1>Page 1</h1>
    <p>{{msg}}</p>
    <Hello name="Bonaparte"></Hello>
  </div>
</template>

<script>
  import Hello from '@/components/Hello'

  export default {
    name: 'page1',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      Hello
    }
  }
</script>
