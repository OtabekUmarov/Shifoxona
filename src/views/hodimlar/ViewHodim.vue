<template>
  <div>
    Hello
    <h2>
      {{$route.params.id}}
      {{view}}
    </h2>
  </div>
</template>

<script>
export default {
  computed: {
    view(){
      return this.$store.getters.viewHodim
    }
  }
}
</script>

<style>

</style>