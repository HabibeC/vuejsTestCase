<template>
  <div>
    <ValidationObserver v-slot="{handleSubmit}">
      <form @submit.prevent="handleSubmit(submitForm)">
        <div class="card mt-5">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="card-title n">Set to User</h5>
              </div>
              <div>
                <a  @click="goHome">return home page</a>
              </div>
            </div>
            <br>
            <div>
              <ValidationProvider mode="passive" v-slot="{ errors }">
                <select class="form-control form-control-sm w-100 px-1 py-1" v-model="formModelUser.bookName">
                    <option :value="''" disabled selected>Please select a book</option>
                    <option v-for="option in options" :value="option" :key="option" >{{option}}</option>
                </select>
                <span class="text-danger small">{{ errors[0] }}</span>
              </ValidationProvider><br>
            </div>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="form-control form-control-sm" type="text" v-model="formModelUser.userNumber" placeholder="Please insert user identity number">
                <span class="text-danger small">{{errors[0]}}</span><br>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="form-control form-control-sm" type="text" v-model="formModelUser.userName" placeholder="Please enter user name and surname">
                <span class="text-danger small">{{errors[0]}}</span>
              </ValidationProvider><br>
            </div>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <textarea class="form-control form-control-sm" v-model="formModelUser.userAddress" rows="3" placeholder="Please enter user address"></textarea>
                <span class="text-danger small">{{errors[0]}}</span><br>
              </ValidationProvider>
            </div>
            <button class="btn btn-secondary btn-sm d-flex "> Set to User </button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>


</template>

<script>
import {ValidationProvider,ValidationObserver} from 'vee-validate'


export default {
  name: "userForm",
  props:{
    formDataUser:{
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      selected:'',
      formModelUser:{
        bookName: '',
        userNumber: '',
        userName:'',
        userAddress:'',
      },
    }
  },
  components:{

    ValidationProvider, ValidationObserver,
  },
  methods:{
    submitForm(){
      this.$emit('onSubmit',this.formModelUser)
      this.toasterMessage(' has been setted to user')
      console.log(this.formModelUser)
      this.clearForm()

    },
    toasterMessage(item){
      this.$toast.success(this.formModelUser.bookName+ item, {
        position: "top-center",
        timeout: 5000,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        pauseOnHover: true,
        draggable: true,
        draggablePercent: 0.6,
        showCloseButtonOnHover: false,
        hideProgressBar: true,
        closeButton: "button",
        icon: true,
        rtl: false
      });
    },

    clearForm(){
      this.formModelUser={
        bookName: '',
        userNumber: '',
        userName:'',
        userAddress:'',
      }
    },
    goHome(){
      this.$router.push('/')
    },
  },
  computed:{
    options(){
      return Object.keys(this.$store.state.bookStoreList).map(k => {
        let o = this.$store.state.bookStoreList[k]
        return `${o.bookName}`
      })

    }
  },
  mounted() {
    if(this.formDataUser){
      this.formModelUser=this.formDataUser
    }
  }
}

</script>

<style scoped>

</style>
