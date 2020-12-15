<template>
  <div class="login">
    <a href="/signin">SignIn</a>
    <div>Privet</div>
    <a href="/signup">SignUp</a>
  </div>
</template>
<script>



export default {
    
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.login a {
  outline: none;
  text-decoration: none;
  color: black;
  border: 4px solid blue;
  padding: 20px;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
}
.login div {
  outline: none;
  text-decoration: none;
  color: black;
  padding: 20px;
  border-radius: 50%;
  font-size: 25px;
  font-weight: bold;
}
.login a:hover{
    background-color: blue;
    color: #fff
}
</style>