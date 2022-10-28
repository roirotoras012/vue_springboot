<template>
    
    <Header v-bind:currentPage="currentPage"/>
    <Sidebar />
    <div class="dashboard">
        
    
    </div>
  </template>
  
  
  
  <script>
    import Header from '../views/Header.vue'
    import Sidebar from '../views/Sidebar.vue'
  
    // @ is an alias to /src
    
    
    export default {
        data() {
    return {
      currentPage: "Dashboard"
    }
  },
      name: 'Dashboard',
      components: {
        Header,
        Sidebar
        
      }
    }
    </script>