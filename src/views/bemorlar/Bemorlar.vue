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
              <input type="text" placeholder="Search">
            </div>
            <div class="right">
              <span class="mr-5 alarm"><img src="../../assets/img/alarm.png" alt=""><span class="count">5</span></span>
              <img src="../../assets/img/avatar.png" alt="">
            </div>
          </div>
          <div class="title">Bemorlar</div>
          <div class="add">
            <button>
              <v-icon style="color: #fff" @click="dialog = !dialog">mdi-account-plus-outline</v-icon>
            </button>
          </div>
        </div>
        <v-row>
            <v-col cols="12">
                <v-data-table
                    :headers="headers"
                    :items="bemorlar"
                    :items-per-page="10"
                    class="elevation-1"
                >
                    <template v-slot:item.shahsi="{ item }">
                        <div :style="`background:url(../../assets/img/${item.ism}.png)`">
                            <img :src="`../../assets/img/${item.ism}.png`" alt="">
                            <p>{{item.ism}}</p>
                        </div>
                    </template>
                    <template v-slot:item.btns="{ item }">
                        <div class="text-right">
                            <v-icon @click="edit(item)">mdi-pencil</v-icon>
                            <v-icon color="error" class="ml-2">mdi-delete</v-icon>
                        </div>
                    </template>
                </v-data-table>
            </v-col>
    </v-row>
      </v-content>
    </v-app>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc" v-show="!isShow">Yangi bemor ro’yhatdan o’tkazish</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Bemor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">1</div>
        <div class="subtitle-1 text-center">Shaxsiy ma’lumotlar</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.ism" solo placeholder="Ism sharifi"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.yili" solo placeholder="Tug’ilgan sana" type="text" onfocus="(this.type='date')" >
                </v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="hududitem" label="Hudud" v-model="bemor.hudud" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.manzil" solo placeholder="Manzil"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="oilaitem" label="Oilaviy holati" v-model="bemor.oila" solo></v-select>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="malumotiitem" label="Ma'lumoti" v-model="bemor.malumoti" solo></v-select>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="bandlik" label="Bandlik holati" v-model="bemor.bandlik" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.ishjoyi" solo placeholder="Ish joyi"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.raqam" solo placeholder="Telefon raqam" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.uyraqam" solo placeholder="Oila a’zolaridan telefon raqam" type="number"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
          <div class="btns">
          <button class="btn" text @click="dialog = false">
            Bekor qilish
          </button>
          <button class="btn next" text @click="dialog = false, dialog1 = !dialog1">
            Keyingi bo’lim
          </button> 
          </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog1" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc" v-show="!isShow">Tibbiy ma’lumotlar</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Bemor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">2</div>
        <div class="subtitle-1 text-center">Tibbiy ma’lumotlar</div>
        <v-card-text>
          <v-container>
            <v-row style="font-size:10px">
              <v-col class="d-flex br" cols="12" sm="3">
                <v-select class="br" :items="qon" label="Qon guruhi" v-model="bemor.qon" solo></v-select>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="3">
                <v-select class="br" :items="faktor" label="Rezus faktor" v-model="bemor.faktor" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.sugurtapolis" solo placeholder="Sug’urta polisi"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.sugurtafirma" solo placeholder="Sug’urta firmasi"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="imtiyoz" label="Imtiyoz kategoriyasi" v-model="bemor.imtiyoz" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.imtiyozhujjat" solo placeholder="Imtiyoz hujjati"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.imtiyozsana" solo placeholder="Imtiyoz olingan sana" type="date"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="invalidlik" label="Invalidlik" v-model="bemor.invalidlik" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.allergik" solo placeholder="Allergik reaksiyalar"></v-text-field>
              </v-col>
              <!-- <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.vazni" solo placeholder="Vazni"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.boyi" solo placeholder="Bo’yi"></v-text-field>
              </v-col> -->
            </v-row>
          </v-container>
        </v-card-text>
          <div class="btns">
          <button class="btn" text @click="dialog1 = false">
            Bekor qilish
          </button>
          <button class="btn next" text @click="dialog1 = false, dialog2 = !dialog2">
            Keyingi bo’lim
          </button> 
          </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc" v-show="!isShow">Tibbiy ma’lumotlar</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Bemor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">3</div>
        <div class="subtitle-1 text-center">Tashrif ma’lumotlari</div>
        <v-card-text>
          <v-container>
            <v-row style="font-size:10px">
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.tashrifsana" solo placeholder="Tashrif sanasi" type="date"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.chiqishsana" solo placeholder="Chiqish sanasi" type="date"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="davolangan" label="Davolangan bo’lim" v-model="bemor.davolangan" solo></v-select>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="shifokorlar" label="Mas’ul shifokor" v-model="bemor.masulshifokor" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.vazni" solo placeholder="Vazni"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.boyi" solo placeholder="Bo’yi"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
          <div class="btns">
          <button class="btn" text @click="dialog2 = false">
            Bekor qilish
          </button>
          <button class="btn next" text @click="dialog2 = false, dialog3 = !dialog3">
            Keyingi bo’lim
          </button> 
          </div>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog3" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc" v-show="!isShow">Yangi bemor ro’yhatdan o’tkazish</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Bemor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">4</div>
        <div class="subtitle-1 text-center">Kasallik tarixi</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.davolanishsana" solo placeholder="Davolanish  sanasi" type="date"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="kasallik" label="Kasallik turi" v-model="bemor.kasallik" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.oldinshifokor" solo placeholder="Shifokor ism-sharifi"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.shifoxonamanzil" solo placeholder="Davolangan shifoxona manzili"></v-text-field>
              </v-col>
              <v-col cols="12">
                  <v-textarea class="br" solo name="input-7-4" label="Diagnoz" v-model="bemor.diagnoz"></v-textarea>
            </v-col>
            </v-row>
            <div class="dialogcount" style="font-size: 20px">+</div>
          </v-container>
        </v-card-text>
          <div class="btns">
          <button class="btn" text @click="dialog2 = false">
            Bekor qilish
          </button>
          <button class="btn next" v-show="!isShow" text @click="dialog3 = false, add()">
            Yakunlash
          </button> 
          <button class="btn next" v-show="isShow" text @click="dialog3 = false, save()">
            Saqlash
          </button> 
          </div>
      </v-card>
    </v-dialog>
    
  </div>
</template>



<script> 
  import axios from 'axios'
  import Menu from '../Menu'
  export default {
    data: () => ({
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      isShow: false,
      bemor: {},
      bemorlar:[],
      hodimlar:[],
      headers: [
                { text: 'Ism', value: 'shahsi' },
                { text: 'Email', value: 'yosh' },
                { text: 'Sana', value: 'ishsanasi' },
                { text: 'Qabul vaqti', value: 'grafik' },
                { text: '', value: 'btns' },
            ],
      hududitem: ['Andijon', 'Farg`ona', 'Namangan', 'Toshkent','Samarqand','Buxoro', 'Navoiy','Xorazm','Qashqadaryo','Surxondaryo'],
      oilaitem: ['yahshi', 'o`rtacha'],
      malumotiitem: ['O`rta', 'Oliy'],
      bandlik: ['Ishlaydi', 'Vaqtincha ishsiz', 'Nafaqada'],
      qon: ['1', '2','3','4'],
      faktor: ['1', '2','3','4'],
      imtiyoz: ['Order sohibi'],
      invalidlik: ['I guruh', 'II guruh'],
      davolangan: ['Nevrologiya'],
      kasallik: ['Nevrologik', 'Insult']
    }),
    methods: {
      add(){
        axios.post('http://localhost:3000/bemor', this.bemor).then(response => {
          this.bemorlar.push(response.data)
        })
      },
      edit(item){
        this.bemor = item
        this.dialog = true
        this.isShow = true
      },
      save(){
        this.isShow = false
      }
    },
    components: {
      Menu
    },
    computed: {
      shifokorlar(){
        let shifokor = []
        for (let i = 0; i < this.hodimlar.length; i++) {
          shifokor.push(this.hodimlar[i].ism)
        }
        return shifokor
      }
    },
    created() {
      axios.get('http://localhost:3000/hodim').then(response => {
        this.hodimlar = response.data
      })
      axios.get('http://localhost:3000/bemor').then(response => {
        this.bemorlar = response.data
      })
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

  .title {
    font-size: 40px;
    color: #25282B;
    font-weight: bold;
    letter-spacing: 0.2px;
    margin-top: 40px;
  }
    .add {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }

  .add button {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #336CFB;
    color: #fff;
  }
  
  .br {
    border-radius: 20px !important;
    color: #BBBBBB;
  }
  .tc {
   text-align: center;
   width: 100%;
  }

  .dialogcount {
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #56CCF2;
    border-radius: 50%;
    margin: auto;
    color: #fff;
  }
  .btns {
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
  }
  .btns .btn {
    width: 130px;
    background-color: #EB5757;
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    font-size: 14px;
  }
  .btn.next {
    background-color: #27AE60;
    margin-left: 15px;
  }
</style>