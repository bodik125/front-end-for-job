<template>
  <div id="signUp">
    <form @submit.prevent="onSubmit">
      <h1>SignIn</h1>
      <label for="email">Email</label>
      <input type="text" v-model="email" name="email" id="email" />
      <label for="password">Password</label>
      <input type="password" v-model="password" name="password" id="pass" />
      <button class="onSubmit">Log In</button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async onSubmit() {
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
  watch: {},
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