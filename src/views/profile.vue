

<template>
  <div class="profile">
    <div class="header-profile">
      <h1>Page Profile</h1>
      <h2><a href="/posts/all">Phone Book</a></h2>
      <div>
        <a  v-on:click="logout()" href="/"><h2>Log Out</h2></a>
      </div>
    </div>
    <div class="profile-block">
      <div>
        <h2>Your Name</h2>
        {{ this.profile.name }}
      </div>
      <div>
        <h2>About U</h2>
        {{ this.profile.about }}
      </div>
      <div>
        <h2>Date of birthsday</h2>
        {{ this.profile.date }}
      </div>
    </div>
    <!-- <Profileinfo v-bind:profile="profile" /> -->
  </div>
</template>
<script>
import Axios from "axios";

const token = localStorage.getItem("token");
import Profileinfo from "@/views/profileinfo";

export default {
    methods:{
    logout :async ()=>{
      await localStorage.removeItem('token')
    }
    },
  async mounted() {
    await Axios({
      url: "https://test-project-for-job.herokuapp.com/users/profile",
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      this.profile = {
        name: response.data.name,
        about: response.data.about,
        date: response.data.date,
      };
      console.log(this.profile);
    });
  },
  data() {
    return { profile: {} };
  },
//   components: {
//     Profileinfo,
//   },
};
</script>
<style scoped>
.header-profile {
  display: flex;
  justify-content: space-around;
}
.header-profile div {
  color: blue;
  padding: 0 30px;
}
.header-profile div:hover {
  border: 3px solid blue;
  border-radius: 45%;
}
.header-profile a {
  text-decoration: none;
}
body {
  margin: 0;
  padding: 0;
}
.profile-block {
  display: flex;
  justify-content: space-around;
}
.profile-block div {
  width: 300px;
}
</style>