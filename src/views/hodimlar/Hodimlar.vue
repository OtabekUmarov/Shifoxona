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
          <div class="title">Shifokorlar</div>
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
                    :items="hodimlar"
                    :items-per-page="10"
                    class="elevation-1"
                >
                    <!-- <template v-slot:item.btns="{ item }">
                        <div class="text-right">
                            <v-btn color="warning" @click="edit(item)">
                            <v-icon>
                                mdi-pencil
                            </v-icon>
                            </v-btn>
                            <v-btn class="ml-3" color="error" @click="del(item.id)">
                                <v-icon>mdi-cart-remove</v-icon>
                            </v-btn>
                        </div>
                    </template> -->
                </v-data-table>
            </v-col>
    </v-row>
      </v-content>

    </v-app>
    <v-dialog v-model="dialog" persistent max-width="650px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc">Yangi shifokorni ro’yhatdan o’tkazish</span>
        </v-card-title>
        <div class="dialogcount">1</div>
        <div class="subtitle-1 text-center">Shaxsiy ma’lumotlar</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ism" solo placeholder="Ism sharifi"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.yili" solo placeholder="Tug’ilgan sana" type="date">
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
                <v-text-field class="br" v-model="hodim.raqam" solo placeholder="Telefon raqam" type="number"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.uyraqam" solo placeholder="Oila a’zolaridan telefon raqam" type="number"></v-text-field>
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
    <v-dialog v-model="dialog1" persistent max-width="650px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc">Yangi shifokorni ro’yhatdan o’tkazish</span>
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
                <v-select class="br" :items="faoliyat" label="Faoliyat bo’limi" v-model="hodim.faoliyat" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.staj" solo placeholder="Ish staji"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="grafik" label="Ish grafigi" v-model="hodim.grafik" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.hafta" solo placeholder="Hafta kundagi grafigi">
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishsanasi" solo placeholder="Ishga kirgan sanasi" type="date"></v-text-field>
              </v-col>
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
    <v-dialog v-model="dialog2" persistent max-width="650px">
      <v-card>
        <v-card-title>
          <span class="headline font-weight-bold tc">Yangi shifokorni ro’yhatdan o’tkazish</span>
        </v-card-title>
        <div class="dialogcount">3</div>
        <div class="subtitle-1 text-center">Ish faoliyat tarixi</div>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishboshsanasi" solo placeholder="Ish boshlagan sanasi" type="date"></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishtugsanasi" solo placeholder="Ishni tugatgan sanasi" type="date"></v-text-field>
              </v-col>
              <v-col class="d-flex br" cols="12" sm="6">
                <v-select class="br" :items="lavozimi" label="Lavozimi" v-model="hodim.lavozimi" solo></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field class="br" v-model="hodim.ishmanzil" solo placeholder="Ishlagan shifoxona manzili"></v-text-field>
              </v-col>
              <v-col cols="12">
                  <v-textarea class="br" solo name="input-7-4" label="Qo’shimcha ma’lumotlar"></v-textarea>
            </v-col>
            </v-row>
            <div class="dialogcount" style="font-size: 20px">+</div>
          </v-container>
        </v-card-text>
          <div class="btns">
          <button class="btn" text @click="dialog2 = false">
            Bekor qilish
          </button>
          <button class="btn next" text @click="dialog2 = false, add()">
            Yakunlash
          </button> 
          </div>
      </v-card>
    </v-dialog>
    
  </div>
</template>


<script>
  import Menu from '../Menu'
  import axios from 'axios'
  export default {
    data: () => ({
      dialog: false,
      dialog1: false,
      dialog2: false,
      hodim: {},
      hodimlar:[],
      headers: [
                { text: 'ism', value: 'ism' },
                { text: 'yoshi', value: 'yosh' },
                // { text: 'Mavjudligi', value: 'hide' },
                // { text: '', value: 'btns' },
            ],
      hududitem: ['Andijon', 'Farg`ona', 'Namangan', 'Toshkent','Samarqand','Buxoro', 'Navoiy','Xorazm','Qashqadaryo','Surxondaryo'],
      oilaitem: ['yahshi', 'o`rtacha'],
      malumotiitem: ['O`rta', 'Oliy'],
      mutitem: ['Jarroh', 'Hamshira', 'Koz shifokori', 'Quloq shifokori'],
      faoliyat: ['Jarrohlik', 'Hamshiralik'],
      grafik: ['Kunduzgi', 'Kechki'],
      lavozimi: ['Bosh shifokor', 'Yordamchi shifokor', 'Hamshira']
    }),
    methods: {
      add(){
        console.log(this.hodim);
        axios.post('http://localhost:3000/hodim', this.hodim).then(response => {
          this.hodimlar.push(response.data)
        })
      }
    },
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

  .title {
    font-size: 40px;
    color: #25282B;
    font-weight: bold;
    letter-spacing: 0.2px;
    margin-top: 40px;
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