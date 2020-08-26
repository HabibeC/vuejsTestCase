<template>
  <div>
    <div class="alert alert-success alert-dismissible fade hide" v-if="!formModel ">
      <strong>{{ formModel.bookName }} ADDED</strong>
      <button type="button" class="close" data-dismiss="alert">&times;</button>
    </div>
    <ValidationObserver v-slot="{handleSubmit}">
      <form @submit.prevent="handleSubmit(submitForm)">
        <div class="card mt-5">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div>
                <h5 class="card-title n">Add New Book</h5>
              </div>
              <div>
                <a  @click="goHome">return home page</a>
              </div>
            </div>
            <br>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="form-control form-control-sm" type="text" v-model="formModel.bookName" placeholder="Please enter book name">
                <span class="text-danger small">{{errors[0]}}</span><br>
              </ValidationProvider>
            </div>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="form-control form-control-sm" type="text" v-model="formModel.authorName" placeholder="Please enter author">
                <span class="text-danger small">{{errors[0]}}</span>
              </ValidationProvider><br>
            </div>
            <div>
              <ValidationProvider mode="passive" rules="required" v-slot="{ errors }">
                <input class="form-control form-control-sm" type="text" v-model="formModel.imageUrl" placeholder="Book image URL">
                <span class="text-danger small">{{errors[0]}}</span><br>
              </ValidationProvider>
            </div>
            <button class="btn btn-secondary btn-sm d-flex "> Save </button>
          </div>
        </div>
      </form>
    </ValidationObserver>
  </div>


</template>

<script>
import {ValidationProvider,ValidationObserver} from 'vee-validate'


export default {
  name: "AddNewBook",
  props:{
    formData:{
      type: Object,
      default: null,
    }
  },
  data() {
    return {
      formModel:{
        bookName: '',
        authorName: '',
        imageUrl:'',
        value:false,
      },

    }
  },
  components:{

    ValidationProvider, ValidationObserver,
  },
  methods:{
    submitForm(){
      this.$emit('onSubmit',this.formModel)
      this.toasterMessage(' ADDED')
      console.log(this.formModel.bookName)

      this.clearForm()

    },
    toasterMessage(item){
      this.$toast.success(this.formModel.bookName+ item, {
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
      this.formModel={
        bookName: '',
        authorName: '',
        imageUrl:'',
        value:false,
      }
    },
    goHome(){
      this.$router.push('/')
    }
  },
  computed:{

  },
  mounted() {
    if(this.formData){
      this.formModel=this.formData
    }
  }
}

</script>

<style scoped>

</style>
<style>
.card{
  margin: 0 auto;
  width: 80%;
}
</style>
