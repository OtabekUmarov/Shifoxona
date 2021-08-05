<template>
  <div class="container"
    style="border-radius:8px; overflow:hidden; background:#fff; padding: 0; margin:10px;margin-top:25px;">
    <div class="viewss">
      <div class="person">
        <div class="img">
          <img :src="require(`../../assets/img/${views.bigImg}.jpg`)" alt="">
        </div>
        <div class="box">
          <v-row>
            <v-col cols="12">
              <div class="top">
                <div class="viewsTitle">{{views.ism}}</div>
              </div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Tashrif sanasi:</div>
            </v-col>
            <v-col cols="2">
              <div class="val">{{views.tashrifsana}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Chiqish sanasi:</div>
            </v-col>
            <v-col cols="6">
              <div class="val">{{views.chiqishsana}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Davolangan bo’lim:</div>
            </v-col>
            <v-col cols="2">
              <div class="val">{{views.davolangan}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Mas’ul shifokor:</div>
            </v-col>
            <v-col cols="6">
              <div class="val">{{views.masulshifokor}}</div>
            </v-col>
            <v-col cols="2">
              <div class="sarlavha">Murojaat sababi: </div>
            </v-col>
            <v-col cols="10">
              <div class="val">{{views.diagnoz.join(', ')}}</div>
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
            <div class="val">{{views.yili}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Oilaviy holat</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.oila}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Telefon raqam</div>
          </v-col>
          <v-col cols="2">
            <div class="val">+{{views.raqam}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Tug’ilgan hudud</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.hudud}} viloyati</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Ma’lumoti</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.malumoti}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Oila a’zolaridan telefon raqam</div>
          </v-col>
          <v-col cols="2">
            <div class="val">+{{views.uyraqam}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Manzil</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.manzil}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Ish joyi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.ishjoyi}}</div>
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
            <div class="val">{{views.qon}} guruh</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Imtiyoz kategoriyasi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.imtiyoz}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Invalidlik</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.invalidlik}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">RH faktor</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.faktor}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Imtiyoz hujjati</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.imtiyozhujjat}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Vazni</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.vazni}} kg</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Sug’urta polisi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.sugurtapolis}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Imtiyoz olingan sana</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.imtiyozsana}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Bo’yi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.boyi}} sm</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Sug’urta firmasi</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.sugurtafirma}}</div>
          </v-col>
          <v-col cols="2">
            <div class="sarlavha">Allergik reaksiyalar</div>
          </v-col>
          <v-col cols="2">
            <div class="val">{{views.allergik}}</div>
          </v-col>
        </v-row>
      </div>
      <div class="infos">
        <v-row>
          <v-col cols="12">
            <div class="title">Kasallik tarixi</div>
          </v-col>
          <v-col cols="3" v-for="(h,index) of headers" :key="index">
            <div class="val">{{h}}</div>
          </v-col>
          <v-col cols="12" v-for="(v, index) of views.davolanishsana" :key="index">
            <v-row>
              <v-col cols="3">
                <div class="sarlavha">{{v}}</div>
              </v-col>
              <v-col cols="3">
                <div class="sarlavha">{{views.kasallik[index]}}</div>
              </v-col>
              <v-col cols="3">
                <div class="sarlavha">{{views.diagnoz[index]}}</div>
              </v-col>
              <v-col cols="3">
                <div class="sarlavha">{{views.oldinshifokor[index]}}</div>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data: () => ({
      headers: ['Davolanish sanasi', 'Kasallik turi', 'Diagnoz', 'Shifokor'],
    }),
    computed: {
      views() {
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

  .shahsiy,
  .tibbiy {
    border-bottom: 1px solid #BDBDBD;
  }

  .box,
  .shahsiy,
  .tibbiy,
  .infos {
    padding: 20px;
  }

  .box {
    padding-bottom: 0;
  }

  .box .viewsTitle {
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