<template>
  <div>
    <v-app>
      <v-content style="padding: 10px; background: #F6F8FB;">
          <div class="add">
            <button>
              <v-icon style="color: #fff" @click="dialog = !dialog, show1()">mdi-account-plus-outline</v-icon>
            </button>
          </div>
        <HodimlarTable :hodimlarr='hodimlar'/>
      </v-content>
    </v-app>
  </div>
</template>


<script>
  import HodimlarTable from './HodimlarTable'
  import { eventEmitter } from '../../main'

  export default {
    methods: {
      show1(){
        eventEmitter.$emit('show1')
      }
    },
    computed: {
      hodimlar(){
        return this.$store.getters.hodimlar
      }
    },
    components: {
      HodimlarTable
    }
  }
</script>

<style>
</style>