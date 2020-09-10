<template>
  <div class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="flexible-navbar white" light position="top" scrolling>
      <mdb-navbar-brand
        >Broccoli Engineering AB</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav left>
          <mdb-nav-item>You are logged in as Auction Site Owner</mdb-nav-item>
        </mdb-navbar-nav>
        
      </mdb-navbar-toggler>
    </mdb-navbar>
    <!--/.Navbar-->
    <!-- Sidebar -->
    <div class="sidebar-fixed position-fixed">
      <a class="logo-wrapper">
        <div class="m-3"></div>
        <!-- <img alt="" class="img-fluid" src="./assets/logo-mdb-vue-small.png"> -->
        </a>
      <mdb-list-group class="list-group-flush">

        <router-link to="/notifications" @click.native="activeItem = 1">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 1 && 'active'"
            ><mdb-icon icon="users" class="mr-3" />Notifications</mdb-list-group-item
          >
        </router-link>

         <router-link to="/objects" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            ><mdb-icon icon="table" class="mr-3" />Objects</mdb-list-group-item
          >
        </router-link>


         <router-link to="/auctions" @click.native="activeItem = 6">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 6 && 'active'"
            ><mdb-icon icon="shopping-bag" class="mr-3" />Auctions</mdb-list-group-item
          >
        </router-link>


       
        <router-link to="/latestbids" @click.native="activeItem = 11">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 11 && 'active'"
            ><mdb-icon icon="gavel" class="mr-3" />Latest bids</mdb-list-group-item
          >
        </router-link>


        <router-link to="/invoices" @click.native="activeItem = 7">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 7 && 'active'"
            ><mdb-icon icon="file-invoice-dollar" class="mr-3" />Invoices</mdb-list-group-item
          >
        </router-link>


        <router-link to="/managements" @click.native="activeItem = 9">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 9 && 'active'"
            ><mdb-icon icon="users" class="mr-3" />Managements</mdb-list-group-item
          >
        </router-link>

       

        <router-link to="/adduser" @click.native="activeItem = 12">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 12 && 'active'"
            ><mdb-icon icon="users" class="mr-3" />Add User</mdb-list-group-item
          >
        </router-link>
      </mdb-list-group>
    </div>
    <!-- /Sidebar  -->
    <main>
      <div class="mt-5 p-5">
        <router-view></router-view>
      </div>
      
    </main>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavItem,
  mdbNavbarNav,
  mdbNavbarToggler,
 
  mdbIcon,
  mdbListGroup,
  mdbListGroupItem,
 
  waves
} from "mdbvue";

export default {
  name: "AdminTemplate",
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavItem,
    mdbNavbarNav,
    mdbNavbarToggler,
    // mdbBtn,
    mdbListGroup,
    mdbListGroupItem,
    mdbIcon,
   
  },
  data() {
    return {
      activeItem: 1
    };
  },
  beforeMount() {
    this.activeItem = this.$route.matched[0].props.default.page;
  },
  mixins: [waves]
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");
.navbar-light .navbar-brand {
  margin-left: 15px;
  color: #2196f3 !important;
  font-weight: bolder;
}
</style>

<style scoped>
main {
  background-color: #ededee;
}

.flexible-content {
  transition: padding-left 0.3s;
  padding-left: 270px;
}

.flexible-navbar {
  transition: padding-left 0.5s;
  padding-left: 270px;
}

.sidebar-fixed {
  left: 0;
  top: 0;
  height: 100vh;
  width: 270px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 1050;
  background-color: #fff;
  padding: 1.5rem;
  padding-top: 0;
}

.sidebar-fixed .logo-wrapper img {
  width: 100%;
  padding: 2.5rem;
}

.sidebar-fixed .list-group-item {
  display: block !important;
  transition: background-color 0.3s;
}

.sidebar-fixed .list-group .active {
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  border-radius: 5px;
}

@media (max-width: 1199.98px) {
  .sidebar-fixed {
    display: none;
  }
  .flexible-content {
    padding-left: 0;
  }
  .flexible-navbar {
    padding-left: 10px;
  }
}
</style>
