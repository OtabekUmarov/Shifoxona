<template>
  <div>
    <div class="container">
      <div class="title">Shifokorlar</div>
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="hodimlarr" :items-per-page="5" class="elevation-1">
            <template v-slot:item.shahsi="{ item }">
                <div style="display:flex; align-items:center">
                  <img style="width:32px; height:32px" class="me-2" :src="require(`../../assets/img/${item.img}.png`)" alt="">
                  <span>{{item.ism}}</span>
                </div>
            </template>
            <template v-slot:item.btns="{ item }">
              <div class="text-right">
                <router-link :to="{name: 'ViewHodim',params: {id:item.id}}">
                  <v-icon @click="show(item.id)" color="success">mdi-eye</v-icon>
                </router-link>
                <v-icon @click="edit(item)" class="ml-2">mdi-pencil</v-icon>
                <v-icon @click="del(item.id)" color="error" class="ml-2">mdi-delete</v-icon>
              </div>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialog" persistent max-width="700px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc" v-show="!isShow">Yangi shifokorni ro’yhatdan o’tkazish</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Shifokor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">1</div>
        <div class="subtitle-1 text-center">Shaxsiy ma’lumotlar</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field class="br" v-model="hodim.email" solo placeholder="Email kiriting" type="email">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ism" solo placeholder="Ism sharifi"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.yili" solo placeholder="Tug’ilgan sana" type="text"
                  onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="hududitem" label="Hudud" v-model="hodim.hudud" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.manzil" solo placeholder="Manzil"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="oilaitem" label="Oilaviy holati" v-model="hodim.oila" solo></v-select>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="malumotiitem" label="Ma'lumoti" v-model="hodim.malumoti" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.raqam" solo placeholder="Telefon raqam" type="number">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.uyraqam" solo placeholder="Oila a’zolaridan telefon raqam"
                  type="number"></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog = false, close()">
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
          <span class="headline font-weight-bold tc" v-show="!isShow">Yangi shifokorni ro’yhatdan o’tkazish</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Shifokor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">2</div>
        <div class="subtitle-1 text-center">Mutaxassislik ma’lumotlar</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="mutitem" label="Mutaxassisligi" v-model="hodim.mutahassis" solo></v-select>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="faoliyat" label="Faoliyat bo’limi" v-model="hodim.faoliyat" solo>
                </v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.staj" solo placeholder="Ish staji"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="grafik" label="Ish grafigi" v-model="hodim.grafik" solo></v-select>
              </v-col>
             
              <v-col cols="12" sm="6">
                <v-select
                  v-model="hodim.hafta"
                  solo
                  :items="haftakuni"
                  label="Hafta kundagi grafigi"
                  multiple
                  chips
                  class="br"
                  persistent-hint
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishsanasi" solo placeholder="Ishga kirgan sanasi" type="text" onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog1 = false, close()">
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
          <span class="headline font-weight-bold tc" v-show="!isShow">Yangi shifokorni ro’yhatdan o’tkazish</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Shifokor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">3</div>
        <div class="subtitle-1 text-center">Ish faoliyat tarixi</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishboshsanasi" solo placeholder="Ish boshlagan sanasi"
                  type="text" onfocus="(this.type='date')"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishtugsanasi" solo placeholder="Ishni tugatgan sanasi"
                  type="text" onfocus="(this.type='date')"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="lavozimi" label="Lavozimi" v-model="hodim.lavozimi" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishmanzil" solo placeholder="Ishlagan shifoxona manzili">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea class="br" solo name="input-7-4" label="Qo’shimcha ma’lumotlar" v-model="hodim.qoshimcha">
                </v-textarea>
              </v-col>
            </v-row>
            <div class="dialogcount" style="font-size: 20px">+</div>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog2 = false, close()">
            Bekor qilish
          </button>
          <button class="btn next" v-show="!isShow" text @click="dialog2 = false, add()">
            Yakunlash
          </button>
          <button class="btn next" v-show="isShow" text @click="dialog2 = false, save()">
            Saqlash
          </button>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
  import axios from 'axios'
  import { eventEmitter } from '../../main'
  export default {
    props: ['hodimlarr'],
    data: () => ({
      search:'',
      dialog: false,
      dialog1: false,
      dialog2: false,
      isShow: false,
      hodim: {
        hafta:[],
        img: "avatar2",
        bigImg: "view2"
      },
      headers: [
        {text: 'Ism',  value: 'shahsi'},
        {text: 'Email',  value: 'email'},
        {text: 'Qabul vaqti',  value: 'grafik'},
        {text: 'Mutaxassisligi',  value: 'mutahassis'},
        {text: 'Bo’lim',  value: 'faoliyat'},
        // {text: 'Qabul kunlari',  value: 'hafta'},
        {text: '',  value: 'btns'},
      ],
      hududitem: ['Andijon', 'Farg`ona', 'Namangan', 'Toshkent', 'Samarqand', 'Buxoro', 'Navoiy', 'Xorazm',
        'Qashqadaryo', 'Surxondaryo'],
      oilaitem: ['Uylangan', 'Uylanmagan', 'Turmushga chiqqan', 'Turmushga chiqmagan'],
      malumotiitem: ['O`rta ma`lumotli', 'Oliy ma`lumotli'],
      mutitem: ['Jarroh', 'Hamshira', 'Ko`z shifokori', 'Quloq shifokori'],
      faoliyat: ['Jarrohlik', 'Hamshiralik'],
      grafik: ['09:00-11:00', '08:00-13:00'],
      lavozimi: ['Bosh shifokor', 'Yordamchi shifokor', 'Hamshira'],
      haftakuni: ['Dushanba', 'seshanba', 'chorshanba', 'payshanba','juma','shanba','yakshanba'],
    }),
    methods: {
      show(id){
        this.$store.getters.showHodim(id)
      },
      add() {
        this.$store.dispatch('hodimlar', this.hodim)
        this.hodim = {
          hafta: [],
          img: "avatar2",
          bigImg: "view2"
        }
      },
      edit(item) {
        this.hodim = item
        this.dialog = true
        this.isShow = true
      },
      del(id) {
        if(confirm('Rostan ham o`chirmoqchimisz')){
          this.$store.dispatch('delHodim',id)
        }
      },
      save() {
        this.isShow = false
        axios.put('http://localhost:3000/hodim/' + this.hodim.id, this.hodim)
          .then(response => {
            this.hodimlar.forEach(cat => {
              if (cat.id == response.data.id) {
                cat = response.data
              }
            })
          })
        this.bemor = {
          img: "avatar2",
          bigImg: "view2"
        }
      },
      close() {
        this.hodim = {
          hafta: [],
          img: "avatar2",
          bigImg: "view2"
        }
        this.isShow = false
      }
    },
    computed: {
      hodimlar(){
        return this.$store.getters.hodimlar
      }
    },
    created() {
      eventEmitter.$on('show1', ()=>{
        this.dialog = true
      })
    }
  }
</script>

<style>
</style>