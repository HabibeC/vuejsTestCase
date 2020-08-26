<template>
<div class="mt-5">

  <div class="card">
    <div class="d-flex justify-content-between mt-3">
      <div>
        <h4 class="card-title"> Book List </h4>
      </div>
      <div>
        <a  @click="goHome">return home page</a>
      </div>
    </div>
    <bookItem
        v-for="(item,index) in getBookList"
        :key="item.index"
        :index="index"
        :book-name="item.bookName"
        :author-name="item.authorName"
        :image-url="item.imageURL"
    />

  </div>


</div>
</template>

<script>
import bookItem from "@/components/bookItem";

export default {
  name: "ListBook",
  components:{
    bookItem,
  },
  computed:{
    getBookList(){
      return this.$store.getters.getBookList;
    }
  },
  methods:{
    goHome(){
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
