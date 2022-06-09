<script setup>
  import Navigation from './components/Navigation.vue';
</script>

<script>
  export default {
    name: 'Andrew Maier',
    watch: {
      $route: {
        immediate: true,
        handler(to, from) {
          document.title = `${to.name} - Andrew Maier` || 'Andrew Maier'
        }
      }
    }
  }
</script>

<template>
  <div class="wrapper">
    <Navigation></Navigation>
    <div class="content-container">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
    
  </div>
</template>

<style lang="scss">
  * {
    box-sizing: border-box; 
    text-decoration: none;
    color: #fff 
  }

  body {
    background-color: #1b2631;
  }

  .content-container {
    margin-top: 120px;

    @media(max-width: 450px) {
      margin-top: 105px;
    }

    @media(max-width: 768px) {
      margin-top: 110px;
    }
  }

  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-out;
  }

</style>
