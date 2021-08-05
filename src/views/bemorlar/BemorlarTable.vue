<template>
  <div>
    <div class="container">
      <div class="title">Bemorlar</div>
      <v-row>
        <v-col cols="12">
          <v-data-table :headers="headers" :items="bemorlar" :items-per-page="5" class="elevation-1">
             <template v-slot:item.shahsi="{ item }">
                <div style="display:flex; align-items:center">
                  <img  style="width:32px; height:32px" class="me-2" :src="require(`../../assets/img/${item.img}.png`)" alt="">
                  <span>{{item.ism}}</span>
                </div>
            </template>
            <template v-slot:item.btns="{ item }">
              <div class="text-right">
                <router-link :to="{name: 'ViewBemor',params: {id:item.ism}}">
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
          <span class="headline font-weight-bold tc" v-show="!isShow">Yangi bemor ro’yhatdan o’tkazish</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Bemor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">1</div>
        <div class="subtitle-1 text-center">Shaxsiy ma’lumotlar</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field class="br" v-model="bemor.email" solo placeholder="Email kiriting"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.ism" solo placeholder="Ism sharifi"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.yili" solo placeholder="Tug’ilgan sana" type="text"
                  onfocus="(this.type='date')">
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
                <v-text-field class="br" v-model="bemor.raqam" solo placeholder="Telefon raqam" type="number">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.uyraqam" solo placeholder="Oila a’zolaridan telefon raqam"
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
                <v-text-field class="br" v-model="bemor.sugurtafirma" solo placeholder="Sug’urta firmasi">
                </v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="imtiyoz" label="Imtiyoz kategoriyasi" v-model="bemor.imtiyoz" solo>
                </v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.imtiyozhujjat" solo placeholder="Imtiyoz hujjati">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.imtiyozsana" solo placeholder="Imtiyoz olingan sana"
                  type="text" onfocus="(this.type='date')"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="invalidlik" label="Invalidlik" v-model="bemor.invalidlik" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.allergik" solo placeholder="Allergik reaksiyalar">
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
          <span class="headline font-weight-bold tc" v-show="!isShow">Tibbiy ma’lumotlar</span>
          <span class="headline font-weight-bold tc" v-show="isShow">Bemor ma'lumotlarini o'zgartirish</span>
        </v-card-title>
        <div class="dialogcount">3</div>
        <div class="subtitle-1 text-center">Tashrif ma’lumotlari</div>
        <v-card-text>
          <v-container>
            <v-row style="font-size:10px">
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.tashrifsana" solo placeholder="Tashrif sanasi" type="text" onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="bemor.chiqishsana" solo placeholder="Chiqish sanasi" type="text" onfocus="(this.type='date')">
                </v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="davolangan" label="Davolangan bo’lim" v-model="bemor.davolangan" solo>
                </v-select>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="shifokorlar" label="Mas’ul shifokor" v-model="bemor.masulshifokor" solo>
                </v-select>
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
          <button class="btn" text @click="dialog2 = false, close()">
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
                <v-text-field class="br" v-model="davolanishsana" solo placeholder="Davolanish  sanasi"
                  type="text" onfocus="(this.type='date')"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="kasallik" label="Kasallik turi" v-model="kasallikk" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="oldinshifokor" solo placeholder="Shifokor ism-sharifi">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="shifoxonamanzil" solo
                  placeholder="Davolangan shifoxona manzili"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea class="br" solo name="input-7-4" label="Diagnoz" v-model="diagnoz"></v-textarea>
              </v-col>
            </v-row>
            <button class="dialogcount" style="font-size: 20px" @click="addInfo()">+</button>
          </v-container>
        </v-card-text>
        <div class="btns">
          <button class="btn" text @click="dialog3 = false, close()">
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
  import { eventEmitter } from '../../main'
  export default {
    props: ['bemorlarr'],
    data: () => ({
      search: '',
      dialog: false,
      dialog1: false,
      dialog2: false,
      dialog3: false,
      isShow: false,
      bemor: {
        img: "avatar1",
        bigImg: "view1",
        davolanishsana:[],
        kasallik:[],
        oldinshifokor:[],
        shifoxonamanzil:[],
        diagnoz:[],
      },
      davolanishsana: '',
      kasallikk: '',
      oldinshifokor: '',
      shifoxonamanzil: '',
      diagnoz: '',
      headers: [{text: 'Ism', value: 'shahsi'},
        {text: 'Email', value: 'email'},
        {text: 'Qabul sanasi', value: 'tashrifsana'},
        {text: 'Chiqish sanasi', value: 'chiqishsana'},
        {text: 'Shifokor', value: 'masulshifokor'},
        {text: 'Sabab', value: 'kasallik'},
        {text: '', value: 'btns'},
      ],
      hududitem: ['Andijon', 'Farg`ona', 'Namangan', 'Toshkent', 'Samarqand', 'Buxoro', 'Navoiy', 'Xorazm',
        'Qashqadaryo', 'Surxondaryo'
      ],
      oilaitem: ['Turmushga chiqqan', 'Turmushga chiqmagan', 'Uylangan', 'Uylanmagan'],
      malumotiitem: ['O`rta ma`lumotli', 'Oliy ma`lumotli'],
      bandlik: ['Ishlaydi', 'Vaqtincha ishsiz', 'Nafaqada'],
      qon: ['I', 'II', 'III', 'IV'],
      faktor: ['+', '2', '3', '4'],
      imtiyoz: ['Order sohibi'],
      invalidlik: ['I guruh', 'II guruh'],
      davolangan: ['Nevrologiya'],
      kasallik: ['Nevrologik', 'Insult']
    }),
    methods: {
      addInfo(){
        this.bemor.davolanishsana.push(this.davolanishsana)
        this.bemor.kasallik.push(this.kasallikk)
        this.bemor.oldinshifokor.push(this.oldinshifokor)
        this.bemor.shifoxonamanzil.push(this.shifoxonamanzil)
        this.bemor.diagnoz.push(this.diagnoz)
        this.davolanishsana= ''
        this.kasallikk= ''
        this.oldinshifokor= ''
        this.shifoxonamanzil= ''
        this.diagnoz= ''
      },
      show(id){
        this.$store.getters.showBemor(id)
      },
      add() {
        this.$store.dispatch('bemorlar', this.bemor)
        this.bemor = {
          img: "avatar1",
          bigImg: "view1"
        }
      },
      edit(item) {
        this.bemor = item
        this.dialog = true
        this.isShow = true
      },
      del(id){
        if(confirm('Rostan ham o`chirmoqchimisz')){
          this.$store.dispatch('delBemor',id)
        }
        },
      save() {
        this.isShow = false
        axios.put('http://localhost:3000/bemor/' + this.bemor.id, this.bemor)
          .then(response => {
            this.bemorlar.forEach(cat => {
              if (cat.id == response.data.id) {
                cat = response.data
              }
            })
          })
        this.bemor = {
          img: "avatar1",
          bigImg: "view1"
        }
      },
      close() {
        this.isShow = false
        this.bemor = {
          img: "avatar1",
          bigImg: "view1"
        }
        this.davolanishsana= ''
        this.kasallikk= ''
        this.oldinshifokor= ''
        this.shifoxonamanzil= ''
        this.diagnoz= ''
      }
    },
    computed: {
      bemorlar(){
        return this.$store.getters.bemorlar
      },
      hodimlar(){
        return this.$store.getters.hodimlar
      },
      shifokorlar() {
        return this.$store.getters.shifokorlar
      }
    },
    created() {
      eventEmitter.$on('show', ()=>{
        this.dialog = true
      })
    }
  }
</script>

<style>
</style>