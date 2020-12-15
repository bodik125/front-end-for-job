<template>
  <div id="signUp">
    <form @submit.prevent="onSubmit">
      <h1>Add Post</h1>
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" id="name" />
      <label for="Group">Group</label>
      <select v-model="groupss">
        <option
          v-for="group of groups"
          :key="group.name"
          v-bind:value="group.name"
        >
          {{ group.name }}
        </option>
      </select>
      <label for="phone">Date of birthsday</label>
      <input type="text" name="date" v-model="date" id="date" />
      <label for="about">About</label>
      <input type="text" name="desc" v-model="desc" id="description" />
      <label for="about">Phone</label>
      <input type="text" name="phone" v-model="phone" id="phone" />
      <label for="img">Photo</label>
      <input type="file" @change="previewFiles" />
      <button class="onSubmit">Add</button>
    </form>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      name: "",
      date: "",
      groupss: "",
      groups: "",
      desc: "",
      phone: "",
      image: "",
    };
  },
  async mounted() {
    await Axios({
      url: "https://test-project-for-job.herokuapp.com/groups/all",
      method: "get",
    }).then((response) => {
      console.log(response);
      this.groups = response.data;
      console.log(this.groups);
    });
  },
  methods: {
    previewFiles(event) {
      console.log(event.target.files);
      this.image = event.target.files[0];
    },
    async onSubmit() {
      const formdata = new FormData();

      formdata.append("group", this.groupss);
      formdata.append("description", this.description);
      formdata.append("name", this.name);
      formdata.append("phone", this.phone);
      formdata.append("date", this.date);
      formdata.append("image", this.image);

      let response = await Axios({
        method: "post",
        url: "https://test-project-for-job.herokuapp.com/posts/add",
        data: formdata,
        headers:{
            'Content-type': "multipart/form-data;"
        }
      });
      console.log("asdfasdgkj", {
        group: this.group,
        description: this.desc,
        name: this.name,
        phone: this.phone,
        date: this.date,
      });
      document.location.href = "/posts/all";
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
#signUp form select {
  margin: 10px;
  height: 35px;
  padding: 3px;

  width: 300px;
}
</style>