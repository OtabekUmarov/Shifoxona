<template>
  <v-app>
    <Menu />
    <v-main>
      <v-content style="padding: 10px; background: #F6F8FB; min-height:100vh">
      <div class="container">
        <div class="head">
            <div class="search">
              <v-icon class="pr-2">mdi-magnify</v-icon>
              <input type="text" placeholder="Search" v-model="search" @input="show()">
            </div>
            <div class="right">
              <span class="mr-5 alarm"><img src="./assets/img/alarm.png" alt=""><span class="count">5</span></span>
              <img src="./assets/img/avatar2.png" alt="">
            </div>
          </div>
      </div>
      <router-view/>
      </v-content>
    </v-main>
  </v-app>
</template>

<script>
  import Menu from './views/Menu'

export default {
  name: 'App',
  data:()=> ({
      search:''
  }),
  methods: {
    show(){
      this.$store.getters.getSearch(this.search)
    },
    poiskInp(){
      this.$store.getters.getSearch
    }
  },
  created(){
    this.$store.dispatch('bemorlarAll'),
    this.$store.dispatch('hodimlarAll')
  },
  components: {
    Menu
  }
};
</script>
<style>
  @import url(./assets/css/style.css);
  .v-main {
    padding: 0;
  }
</style>