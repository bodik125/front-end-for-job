<template>
    
  <div id="signUp">
    <form @submit.prevent="onSubmit">
      <h1>Edit Post</h1>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" id="name" />
      <label for="Group">Group</label>
      <select v-model="groupss">
          <option v-for="group of groups" :key="group.name" v-bind:value="group.name">{{group.name}}</option>
      </select>
      <label for="phone">Date of birthsday</label>
      <input type="text" name="date" v-model="date" id="date" />
      <label for="desccription">About</label>
      <input type="text" name="desccription" v-model="description" id="description" />
      <label for="about">Phone</label>
      <input type="text" name="phone" v-model="phone" id="phone" />
      <button class="onSubmit">Edit</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
const url=  document.location.href
      const id = url.substr(-24)
export default {
    props:['id'],
  data() {
    return {
      name: "",
      date: "",
      groupss: "",
      groups: "",
      description: "",
      phone: "",
    };
  }, async mounted(){
    await axios({
      url: "https://test-project-for-job.herokuapp.com/groups/all",
      method: "get",
    }).then((response) => {
      console.log(response);
      this.groups = response.data;
      console.log(this.groups);
    });
      let response = await axios({
        method: "get",
        url: `https://test-project-for-job.herokuapp.com/posts/${id}`,
        data: {
          group: this.groupss,
          description: this.description,
          name: this.name,
          phone: this.phone,
          date: this.date,
        },
      }).then((response)=>{
          this.name = response.data.name
          this.description = response.data.description
          this.phone = response.data.phone
          this.groupss = response.data.group
          this.date = response.data.date
          console.log(this.groupss)
      })

    },
  methods: {
     
    async onSubmit() {
      let response = await axios({
        method: "post",
        url: `https://test-project-for-job.herokuapp.com/posts/edit/${id}`,
        data: {
          group: this.groupss,
          description: this.description,
          name: this.name,
          phone: this.phone,
          date: this.date,
        },
      }).then(()=>{
          document.location.href = "/posts/all"
      })
      console.log("asdfasdgkj", {
          group: this.group,
          description: this.description,
          name: this.name,
          phone: this.phone,
          date: this.date,
      });
      
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