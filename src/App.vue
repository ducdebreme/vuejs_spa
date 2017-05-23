<template>
  <div class="container">
    <router-link to="/home">Go to Home</router-link>
    <router-link to="/page1">Go to Page 1</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        name: "hallo"
      }
    },
    mounted: function () {
      console.log('App mounted')
    }
  }
</script>


