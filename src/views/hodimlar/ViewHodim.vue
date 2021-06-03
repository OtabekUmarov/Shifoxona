<template>
  <div class="container" style="border-radius:8px; overflow:hidden; background:#fff; padding: 0; margin:10px;margin-top:25px;">
    <div class="views">
      <div class="person">
        <div class="img">
          <img src="../../assets/img/view2.jpg" alt="">
        </div>
        <div class="box">
          <v-row>
            <v-col cols="12">
              <div class="top">
                <div class="viewTitle">{{view.ism}}</div>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Mutaxassisligi</div>
            </v-col>
            <v-col cols="2">
              <div class="val">{{view.mutahassis}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Ishga kirgan sana</div>
            </v-col>
            <v-col cols="6">
              <div class="val">{{view.ishboshsanasi}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Ishlayotgan bo’lim</div>
            </v-col>
            <v-col cols="2">
              <div class="val">{{view.faoliyat}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Ish grafigi</div>
            </v-col>
            <v-col cols="6">
              <div class="val">{{view.grafik}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Ish staji</div>
            </v-col>
            <v-col cols="10">
              <div class="val">{{view.staj}}</div>
            </v-col>
          </v-row>
        </div>
      </div>
      <div class="shahsiy">
        <v-row>
            <v-col cols="12">
              <div class="ism">Shaxsiy ma’lumotlar</div>
            </v-col>
          <v-col cols="2">
            <div class="sarlavha">Tug’ilgan sanasi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.yili}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Oilaviy holat</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.oila}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Telefon raqam</div>
          </v-col>
          <v-col cols="2">
            <div class="val">+{{view.raqam}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Tug’ilgan hudud</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.hudud}} viloyati</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Ma’lumoti</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.malumoti}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Oila a’zolaridan telefon raqam</div>
          </v-col>
          <v-col cols="2">
            <div class="val">+{{view.uyraqam}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Manzil</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.manzil}}</div>
          </v-col>
        </v-row>
      </div>
    </div>
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
  .row {
    align-items: center;
  }
  .person {
    display: flex;
    border-bottom: 1px solid #BDBDBD;
  }
  .shahsiy {
    border-bottom: 1px solid #BDBDBD;
  }
  .box, .shahsiy {
    padding: 20px;
  }
  .box {
    padding-bottom: 0;
  }
  .box .viewTitle {
    color: #25282B;
    font-size: 26px;
    font-weight: bold;
  }

  .sarlavha {
    font-size: 14px;
    line-height: 17px;
    color: #606060;
  }

  .val {
    font-size: 16px;
    color: #000;
    font-weight: bold;
  }
</style>