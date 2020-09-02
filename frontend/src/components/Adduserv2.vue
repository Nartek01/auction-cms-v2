<template>
  <section id="adduserv2">
    <h1>Company configuration</h1>
    <form action="POST">
      <p class="h4 text-center mb-4"></p>
        <div class="grey-text">

          <mdb-input 
            label="Company name"
            icon="user"
            group type="text"
            validate error="wrong" 
            success="right"/>

          <mdb-input
            label="Adress"
            icon="user"
            group type="text" 
            validate error="wrong" 
            success="right"/>

          <mdb-input
            label="Organisation number"
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
            <router-link to="/dashboard">
              <mdb-btn outline="secondary">Done<mdb-icon far icon="paper-plane" class="ml-1"/></mdb-btn>
            </router-link>
          </div>
    </form>
    </section>
</template>

<script>
import {
  mdbInput,
  mdbBtn,
  mdbTextarea
  } from 'mdbvue'

export default {
name: 'Adduserv2',
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