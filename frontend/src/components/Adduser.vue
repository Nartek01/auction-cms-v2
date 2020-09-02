<template>
  <section id="adduser">
    <h1>Create a user form!</h1>
    <form action="POST">
      <p class="h4 text-center mb-4"></p>
        <div class="grey-text">

          <mdb-input 
            label="Your name" 
            icon="user" 
            group type="text" 
            validate error="wrong" 
            success="right"/>

          <mdb-input 
          label="Lastname" 
          icon="user" 
          group type="text" 
          validate error="wrong" 
          success="right"/>

          <mdb-input 
          label="Company name" 
          icon="building" 
          group type="text" 
          validate error="wrong" 
          success="right"/>

          <mdb-input 
            label="Your email" 
            icon="envelope" 
            group type="email" 
            validate error="wrong" 
            success="right"/>

          <mdb-input 
            label="Type your email again" 
            icon="envelope" 
            group type="email" 
            validate error="wrong" 
            success="right"/>

        <mdb-input 
            label="Subject" 
            icon="tag" 
            group type="email" 
            validate error="wrong" 
            success="right"/>

          <mdb-textarea 
            :row="2" 
            label="Your message" 
            icon="pencil"/>
          </div>

          <div class="text-center">
            <router-link to="/adduserv2">
              <mdb-btn outline="secondary">Next<mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn>
            </router-link>
          </div>
    </form>
    <!-- <div class="col">
    <form action="POST">
    <span class="m-1">Username</span>
    <input v-model="username" placeholder="Enter a username">
    <span class="m-1">Name</span>
    <input v-model="name" placeholder="Enter your name">
    <span class="m-1">Surname</span>
    <input v-model="surname" placeholder="Enter a surname">
    <span class="m-1">Enter your email</span>
    <input v-model="email" placeholder="Enter Email Adress">
    <span class="m-1">Enter your email again</span>
    <input v-model="email" placeholder="Phone number">
    <span class="m-1">Phone number</span>
    <input v-model="phone" placeholder="Phone number">
    </form>
    </div>
    <h1>Create a user with credentials</h1>
    <th>
      <tr><p>Username: {{ username }}</p></tr>
      <tr><p>Name: {{ name }}</p></tr>
      <tr><p>Surname: {{ surname }}</p></tr>
      <tr><p>Email: {{ email }}</p></tr>
      <tr><p>Phone number: {{ phone }}</p></tr>
    </th> -->
  </section>
</template>

<script>
import {
  mdbInput,
  mdbBtn,
  mdbTextarea
  } from 'mdbvue'

export default {
name: 'Adduser',
components: {
  mdbInput,
  mdbBtn,
  mdbTextarea
},
data() {
    return {
      email: '',
      phone: '',
      username: '',
      name: '',
      surname: ''
    }
  }
}
</script>

<style>

</style>