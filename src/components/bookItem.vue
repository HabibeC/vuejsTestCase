<template>
  <div class= "card mt-3">
    <div class="row mt-2 ">
      <div class="col-3">
        <img :src="URL" width="80px" height="80px">
      </div>
      <div class="col-6 text-left">
        <div><h5>{{ bookName }}</h5></div>
        <div class="text-muted col-form-label-sm">{{ authorName }}</div>
      </div>
      <div class="col-3">
        <button type="button" class="btn btn-success btn-sm d-flex"> IN STORE </button>
        <button type="button" class="btn btn-block text-danger btn-sm d-flex" @click.prevent="setDelete"> Delete </button>
        <vue-confirm-dialog></vue-confirm-dialog>
      </div>
    </div>

  </div>
</template>

<script>


export default {
  name: "bookList",
  props: ['bookIndex', 'bookName', 'authorName', 'imageUrl'],
  components: {},
  data() {
    return {
      URL: this.imageUrl,
    }
  },
  methods: {
    setDelete(item) {
      this.$confirm({
        message: `Are you sure you want to delete the  ` + this.bookName + `?`,
        button: {
          no: 'No',
          yes: 'Yes'
        },
        callback: confirm => {
          if (confirm) {
            this.$store.commit('RemoveBook', item)
            this.toasterMessage(' DELETED')
          }
        }
      })
    },
    toasterMessage(item) {
      this.$toast.success(this.bookName + item, {
        position: "top-center",
        timeout: 2000,
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


  }
}

</script>

<style scoped>

</style>
