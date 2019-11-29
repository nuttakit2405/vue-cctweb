<template>
  <div class="" style="padding:0.5%;background-color:#363636;">
    <div class="level" >
      <div class="level-left">
        <router-link to="/" tag="a">
          <p class="title is-4" style="color:white;">Home</p>
        </router-link>
      </div>
      <div class="level-right">
        <div v-show="user">
          <router-link to="/profile" style="margin-right:5px;">
            <button class="button is-small is-warning">Profile</button>
          </router-link>
        </div>
        <div v-show="!user" style="margin-right:5px;">
          <router-link to="/login">
            <button class="button is-success is-small">Login</button>
          </router-link>
        </div>
        <div v-show="user">
          <button @click="signoutButtonPressed" class="button is-danger is-small">Logout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data () {
    return {
      user: null
    }
  },
  created () {
    firebase.auth().onAuthStateChanged(user => {
      this.user = user
    })
  },
  methods: {
    signoutButtonPressed (e) {
      e.stopPropagation()
      firebase.auth().signOut()
      this.$router.push({ name: 'Login' })
    }
  }
}
</script>
