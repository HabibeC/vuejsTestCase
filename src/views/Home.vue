<template>
  <div class="row mt-5">
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Book Store Operations</h5>
          <br><br>
          <router-link class="btn btn-secondary btn-sm btn-block" to="/addBook">Add</router-link>
          <router-link class="btn btn-secondary btn-sm btn-block" to="/bookList"> Book List </router-link>
          <br><br><br>
        </div>
      </div>
    </div>
    <div class="col-sm-6">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">User Oparations</h5>
          <br><br>
          <router-link class="btn btn-secondary btn-sm btn-block" to="/setToUser"> Set to User </router-link>
          <router-link class="btn btn-secondary btn-sm btn-block" to="/getFromUser"> Get from User </router-link>
          <br><br><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
<style>
.row{
  margin: 0 auto;
  width: 80%;
}
</style>
