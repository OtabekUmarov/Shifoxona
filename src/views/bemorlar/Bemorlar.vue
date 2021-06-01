<template>
  <div>
    <v-app>
      <v-navigation-drawer app>
        <Menu />
      </v-navigation-drawer>
      <v-content style="padding: 10px; background: #F6F8FB;">
        <div class="container">
          <div class="head">
            <div class="search">
              <v-icon class="pr-2">mdi-magnify</v-icon>
              <input type="text" placeholder="Search" v-model="search">
            </div>
            <div class="right">
              <span class="mr-5 alarm"><img src="../../assets/img/alarm.png" alt=""><span class="count">5</span></span>
              <img src="../../assets/img/avatar.png" alt="">
            </div>
          </div>
          <div class="add">
            <button>
              <v-icon style="color: #fff" @click="showModal()">mdi-account-plus-outline</v-icon>
            </button>
          </div>
          <BemorTable :bemorlarr='filterBemor'/>
        </div>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import axios from 'axios'
  import Menu from '../Menu'
  import BemorTable from './BemorlarTable'
  import { eventEmitter } from '../../main'

  export default {
    data: () => ({
      search: '',
      bemorlar: []
    }),
    methods: {
      showModal(){
        this.dialog = true
        eventEmitter.$emit('show')
      }
    },
    components: {
      Menu, BemorTable
    },
    computed: {
      filterBemor() {
          return this.bemorlar.filter(l => {
            return l.ism.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
          })
        }
    },
    created() {
      axios.get('http://localhost:3000/bemor').then(response => {
        this.bemorlar = response.data
      })
    }
  }
</script>

<style>
  @import url(../../assets/css/style.css);
</style>