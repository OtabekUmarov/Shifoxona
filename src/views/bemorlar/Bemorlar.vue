<template>
  <div>
    <v-app>
      <v-content style="padding: 10px; background: #F6F8FB;">
          <div class="add">
            <button>
              <v-icon style="color: #fff" @click="dialog = !dialog, show()">mdi-account-plus-outline</v-icon>
            </button>
          </div>
        <BemorlarTable :bemorlarr='bemorlar'/>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import BemorlarTable from './BemorlarTable'
  import { eventEmitter } from '../../main'

  export default {
    data: ()=> ({
      dialog: false
    }),
    methods: {
      show(){
        eventEmitter.$emit('show')
      }
    },
    components: {
      BemorlarTable
    },
    computed: {
      bemorlar(){
        return this.$store.getters.bemorlar
      }
    }
  }
</script>

<style>
</style>