<template>
  <div id ="_mdb-navbar" class="flexible-content">
    <!--Navbar-->
    <mdb-navbar class="navBar" scrolling>
      <mdb-navbar-brand>Broccoli Engineering AB</mdb-navbar-brand>
      <mdb-navbar-toggler>
        <mdb-navbar-nav right>
          <!-- <mdb-nav-item>Du är inloggad som administratör</mdb-nav-item> -->
          <p>Du är inloggad som administratör</p>
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
      <mdb-list-group class="list-group-flush ">
        <!-- <router-link to="/dashboard" @click.native="activeItem = 1"> -->
          <mdb-list-group-item
            ><mdb-icon
              icon="chart-pie"
              class="mr-3"
            />Admin Dashboard</mdb-list-group-item
          >
        <!-- </router-link> -->
         <router-link class="mt-3" to="/notifications" @click.native="activeItem = 10">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 10 && 'active'"
            ><mdb-icon icon="table" class="mr-3" />Notifikationer</mdb-list-group-item
          >
        </router-link>
      
        <router-link class="mt-3" to="/objects" @click.native="activeItem = 3">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 3 && 'active'"
            ><mdb-icon icon="table" class="mr-3" />Objekter</mdb-list-group-item
          >
        </router-link>

        <router-link class="mt-3" to="/auctions" @click.native="activeItem = 6">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 6 && 'active'"
            ><mdb-icon icon="shopping-bag" class="mr-3" />Auktioner</mdb-list-group-item
          >
        </router-link>
        <router-link class="mt-3" to="/latestbids" @click.native="activeItem = 11">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 11 && 'active'"
            ><mdb-icon icon="gavel" class="mr-3" />Senaste bud</mdb-list-group-item
          >
        </router-link>
        <router-link class="mt-3" to="/invoices" @click.native="activeItem = 7">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 7 && 'active'"
            ><mdb-icon icon="file-invoice-dollar" class="mr-3" />Fakturering</mdb-list-group-item
          >
        </router-link>
        <router-link class="mt-3" to="/managements" @click.native="activeItem = 9">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 9 && 'active'"
            ><mdb-icon icon="users" class="mr-3" />Användar Hantering</mdb-list-group-item
          >
        </router-link>
        <router-link class="mt-3" to="/adduser" @click.native="activeItem = 12">
          <mdb-list-group-item
            :action="true"
            :class="activeItem === 12 && 'active'"
            ><mdb-icon icon="users" class="mr-3" />Lägg till användare</mdb-list-group-item
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
  // mdbNavItem,
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
    // mdbNavItem,
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
* {
  box-shadow: none !important;
}
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
  /* box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); */
  z-index: 1050;
  background-color: #EDEDEE;
  /* background-image: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%); */
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
/* Navbar background and light gray-line */
div {
  background-color: #ededee;
}

.navBar {
  border-bottom: 2px solid rgba(0,0,0,0.1) !important;
  background-color: #ededee;
}
.flexible-navbar {
}

mdb-navbar-brand {
  display: flex;
}

</style>
