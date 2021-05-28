<template>
  <v-app>
  
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
  font-family: 'l-b';
  src: url('./assets/fonts/Lato-Bold.ttf');
}
@font-face {
  font-family: 'l-r';
  src: url('./assets/fonts/Lato-Regular.ttf');
}
body {
  font-family: 'l-b',serif;
}
</style>