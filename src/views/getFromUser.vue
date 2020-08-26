<template>
  <div>
      <form @submit.prevent="handleSubmit(submitForm)">
        <div class="card mt-5">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="card-title n">Get from User</h5>
              </div>
              <div>
                <a  @click="goHome">return home page</a>
              </div>
            </div>
            <br>
            <div>
              <select class="form-control form-control-sm w-100 px-1 py-1" v-model="formModelUser.bookId">
                <option value="1">a</option>
              </select>
            </div>
            <br>
            <button class="btn btn-secondary btn-sm d-flex "> Get to User </button>
          </div>
        </div>
      </form>

  </div>
</template>

<script>


export default {
  name: "getFromUser",
  props:{
    formDataUser:{
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      selectedBook:null,
      formModelUser:{
        bookId: '',
        userNumber: '',
        userName:'',
        userAddress:'',
      },
    }
  },
  components:{

  },
  methods:{
    submitForm(){
      this.$emit('onSubmit',this.formModelUser)
      console.log(this.formModelUser)
      this.clearForm()

    },
    clearForm(){
      this.formModelUser={
        bookId: '',
        userNumber: '',
        userName:'',
        userAddress:'',
      }
    },
    goHome(){
      this.$router.push('/')
    },

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
