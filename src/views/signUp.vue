<template>
  <div id="signUp">
    <form @submit.prevent="onSubmit">
      <h1>SignUp</h1>
      <label for="email">Email</label>
      <input type="text" name="email" v-model="email" id="email" />
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" id="pass" />
      <label for="name">Name</label>
      <input type="text" name="name" v-model="name" id="name" />
      <label for="about">About U</label>
      <input type="text" name="about" v-model="about" id="about" />
      <label for="date">Date of birthsday</label>
      <input type="text" name="date" v-model="date" id="date" />
      <button class="onSubmit">Registrate</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
        email:  '',
        password: '',
        name: '',
        about: '',
        date: '',
        }
    },
  methods: {
      
    async onSubmit() {
      let response = await axios({
        method: "post",
        url: "https://test-project-for-job.herokuapp.com/users/add",
        data: {
        login: this.email,
        password: this.password,
        name: this.name,
        about: this.about,
        date: this.date,
      }
      });
      console.log("asdfasdgkj", {
        login: this.email,
        password: this.password,
        name: this.name,
        about: this.about,
        date: this.date,
      });
    await axios({
        method: "post",
        url: "https://test-project-for-job.herokuapp.com/auth/login",
        data: {
          login: this.email,
          password: this.password,
        },
      }).then((response) => {
        console.log(response.data.acces_token);
        localStorage.setItem("token", response.data.acces_token);
            axios.defaults.headers.common.Authorization = `Bearer ${response.data.acces_token}`;
        // axios.defaults.headers.common.Authorization = `Bearer ${response.data}`;
        document.location.href = "/user/profile"
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