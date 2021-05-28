<template>
  <div>
  <v-app>

  <v-navigation-drawer app>
    <Menu/>
  </v-navigation-drawer>

    <v-content style="padding: 10px; background: #F6F8FB;">
    <!-- <div class="container">
        <div class="head">
          <div class="search">
          <v-icon class="pr-2">mdi-magnify</v-icon>
          <input type="text" placeholder="Search">
        </div>
        <div class="right">
          <span class="mr-5 alarm"><img src="../../assets/img/alarm.png" alt=""><span class="count">5</span></span>
          <img src="../../assets/img/avatar.png" alt="">
        </div>
        </div>
    </div>     -->
  </v-content>
</v-app>
  </div>
</template>



<script>
import Menu from '../Menu'
export default {

  components: {
    Menu
  }
} 
</script>

<style>
.container {
  padding: 10px 30px;
}
.head {
  display: flex;
  justify-content: space-between;
}
.search {
  width: 350px;
  padding: 12px;
  background-color: #fff;
  border-radius: 100px;
}
input {
  outline: none;
}
.right {
  display: flex;
  align-items: center;
}
.right .alarm {
  position: relative;
  display: inline-block;
  width: 25px;
  height: 25px;
}
.alarm img {
  width: 100%;
}
.count {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FF6760;
  font-size: 10px;
  color: #fff;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  top: -5px;
  right: -5px;
}


</style>