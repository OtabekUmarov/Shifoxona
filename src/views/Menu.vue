<template>
   <v-navigation-drawer  style="height: 100vh; position: fixed">
        <v-list class="pt-5 pl-5">
          <v-list-item class="px-2">
            <router-link to="/">
              <v-img src="../assets/img/logo.png"></v-img>
            </router-link>
          </v-list-item>
        </v-list>

        <v-list
          nav
          dense
          class="pt-5 pl-5 pb-5"
        >
        <span>MEDICINE</span>
          <v-list-item class="links mt-4" link to="/">
            <v-list-item-icon>
              <v-icon>mdi-home-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title >Bosh sahifa</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-alarm-bell</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Palatalar</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/hodimlar">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Shifokorlar</v-list-item-title>
          </v-list-item>
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-account-child</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bo’limlar</v-list-item-title>
          </v-list-item>
          <v-list-item link to="/bemorlar">
            <v-list-item-icon>
              <v-icon>mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Bemorlar</v-list-item-title>
          </v-list-item>
        </v-list>
        <v-divider></v-divider>
          <v-list
          nav
          dense
          class="pt-5 pl-5"
        >
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>mdi-help-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Yordam</v-list-item-title>
          </v-list-item>
          </v-list>
      </v-navigation-drawer>
</template>

<script>
export default {

}
</script>

<style>
.links.active {
  color: #336CFB;
}
</style>