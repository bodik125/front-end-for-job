<template>
    
  <div id="signUp">
    <form @submit.prevent="onSubmit">
      <h1>Add Group</h1>
      <label for="name">Group Name</label>
      <input type="text" name="name" v-model="name" id="name" />
      <button class="onSubmit">Add</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
    props:['id'],
  data() {
    return {
      name: ""
    };
  },
    methods: {
    async onSubmit() {
      let response = await axios({
        method: "post",
        url: `https://test-project-for-job.herokuapp.com/groups/add`,
        data: {
          name: this.name
        },
      }).then(()=>{
          document.location.href = "/posts/all"
      })
      
    },
  },
};
</script>
<style scoped>
#signUp {
  display: flex;
  justify-content: center;
}
#signUp form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#signUp form input {
  margin: 10px;
  height: 25px;
  padding: 3px;

  width: 300px;
}
#signUp form select {
  margin: 10px;
  height: 35px;
  padding: 3px;

  width: 300px;
}
.onSubmit {
  background-color: blue;
  border: 0;
  outline: none;
  color: #fff;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 0;
  width: 310px;
}

</style>