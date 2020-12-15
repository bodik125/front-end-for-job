

<template>
  <div class="profile">
    <div class="header-profile">
      <h1>Page Posts</h1>
      <h2><a href="/posts/add">Add Address</a></h2>
      <div>
        <a href="/group/add"><h2>Add Group</h2></a>
      </div>
      <div>
        <a v-on:click="logout()" href="/"><h2>Log Out</h2></a>
      </div>
    </div>
    <div class="filters" style="display: flex; justify-content: space-around">
      <div>
        <a href=""><h2>Name</h2></a>
      </div>
      <div style="display: flex; flex-direction: column">
        <a href=""><h2>Group</h2></a>
            
        <select v-model="groupss" v-on:change="sortbygroup(groupss)" >
          <option
            v-for="group of groups"
            :key="group.name"
            v-bind:value="group.name"
            
          >
            {{ group.name }}
          </option>
        </select>
      </div>
      <div>
        <a href=""><h2>Phone</h2></a>
      </div>
      <div>
        <h1>FilterBy</h1>
      </div>
    </div>
    <div style="display: flex; justify-content: space-around">
      <div>
        <h2>Image</h2>
      </div>
      <div>
        <h2>Name</h2>
      </div>
      <div>
        <h2>Phone</h2>
      </div>
      <div>
        <h2>Birthsday</h2>
      </div>
      <div>
        <h2>Group</h2>
      </div>
      <div>
        <h2>Edit</h2>
      </div>
      <div>
        <h2>Remove</h2>
      </div>
    </div>
    <div class="profile-block" v-for="post of posts" :key="post.name">
      <img :src="post.img" />
      <!-- <span  style="overflow: hidden;" v-text="post.img"></span> -->
      <!-- <span style="overflow: hidden;"> {{ post.img }} </span> -->
      <div>
        {{ post.name }}
      </div>
      <div>
        {{ post.phone }}
      </div>
      <div>
        {{ post.date }}
      </div>
      <div>
        {{ post.group }}
      </div>
      <div>
        <button v-on:click="edit(post._id)">Edit</button>
      </div>
      <div>
        <button v-on:click="remove(post._id)">Remove</button>
      </div>
    </div>
    <!-- <Profileinfo v-bind:profile="profile" /> -->
  </div>
</template>
<script>
import Axios from "axios";
import PostItem from "@/views/postItem";
const token = localStorage.getItem("token");

export default {
  methods: {
    edit: (id) => {
      console.log(id);
      document.location.href = `/posts/edit/${id}`;
    },
    remove: async (id) => {
      console.log(id);
      await Axios({
        method: "get",
        url: `https://test-project-for-job.herokuapp.com/posts/remove/${id}`,
      });
      document.location.href = "/posts/all";
    },
    logout: async () => {
      await localStorage.removeItem("token");
    },
    sortbygroup: async (group) => {
      console.log(group);
      await Axios({
        method: "get",
        url: `https://test-project-for-job.herokuapp.com/posts/sortbygroup/${group}`,
      }).then((response) => {
      console.log(response);
      this.posts = response.data;
      console.log(this.posts);
    })
    },
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
    await Axios({
      url: "https://test-project-for-job.herokuapp.com/posts/all",
      method: "get",
      headers: {
        "Content-type": "application/json",
      },
    }).then((response) => {
      console.log(response);
      this.posts = response.data;
      console.log(this.posts);
    });
  },
  data() {
    return { posts: [{}], groups: "", groupss: "" };
  },
  components: {
    PostItem,
  },
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
  align-items: center;
}
.profile-block div {
  width: 250px;
  padding: 10px 0;
}
.profile-block img {
  width: 100px;
  height: 60px;
  object-fit: contain;
  border-radius: 50%;
  padding: 10px 0;
  margin-left: 20px;
}
.profile-block button {
  width: 60px;
  height: 40px;
  padding: 10px 0;
  background-color: blue;
  color: #fff;
  margin-left: 20px;
  border: 0;
}
.filters div a {
  text-decoration: none;
}
</style>