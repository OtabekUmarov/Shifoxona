<template>
  <div class="container" style="border-radius:8px; overflow:hidden; background:#fff; padding: 0; margin:10px;margin-top:25px;">
    <div class="views">
      <div class="person">
        <div class="img">
          <img :src="require(`../../assets/img/${view.bigImg}.jpg`)" alt="">
        </div>
        <div class="box">
          <v-row>
            <v-col cols="12">
              <div class="top">
                <div class="viewTitle">{{view.ism}}</div>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Tashrif sanasi:</div>
            </v-col>
            <v-col cols="2">
              <div class="val">{{view.tashrifsana}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Chiqish sanasi:</div>
            </v-col>
            <v-col cols="6">
              <div class="val">{{view.chiqishsana}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Davolangan bo’lim:</div>
            </v-col>
            <v-col cols="2">
              <div class="val">{{view.davolangan}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Mas’ul shifokor:</div>
            </v-col>
            <v-col cols="6">
              <div class="val">{{view.masulshifokor}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Murojaat sababi: </div>
            </v-col>
            <v-col cols="10">
              <div class="val">{{view.diagnoz}}</div>
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
          <v-col cols="2">
            <div class="sarlavha">Ish joyi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.ishjoyi}}</div>
          </v-col>
        </v-row>
      </div>
      <div class="tibbiy">
        <v-row>
            <v-col cols="12">
              <div class="ism">Tibbiy ma’lumotlar</div>
            </v-col>
          <v-col cols="2">
            <div class="sarlavha">Qon guruhi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.qon}} guruh</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Imtiyoz kategoriyasi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.imtiyoz}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Invalidlik</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.invalidlik}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">RH faktor</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.faktor}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Imtiyoz hujjati</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.imtiyozhujjat}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Vazni</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.vazni}} kg</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Sug’urta polisi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.sugurtapolis}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Imtiyoz olingan sana</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.imtiyozsana}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Bo’yi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.boyi}} sm</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Sug’urta firmasi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.sugurtafirma}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Allergik reaksiyalar</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{view.allergik}}</div>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      view() {
        return this.$store.getters.viewBemor
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
  .box, .shahsiy, .tibbiy {
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