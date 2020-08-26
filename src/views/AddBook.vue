<template>
  <bookForm @onSubmit="save"/>
</template>

<script>
import bookForm from "@/components/bookForm";
export default {
  name: "AddBook",
  components:{
    bookForm,
  },
  methods:{
    save(data){
      this.$store.commit('addBookItem',data)
      // this.$router.push('/')
    }
  }
}

</script>

<style scoped>

</style>
