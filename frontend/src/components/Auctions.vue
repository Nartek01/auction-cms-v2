<template>
  <section id="auctions">
    <mdb-row>
      <mdb-col md="12">
        <mdb-card cascade narrow class="mt-5">
          <mdb-view class="gradient-card-header blue darken-2">
            <h4 class="h4-responsive text-white">Auction Management</h4>
          </mdb-view>
          <mdb-card-body>
            <h3 class="mt-5 text-left"><strong>Live Auction</strong></h3>
            <mdb-tbl>
              <thead>
                <tr><th>Edit items below</th><th></th><th>Objcts name</th><th>ObjectID</th><th>Who added</th></tr>
              </thead><tbody>
                <tr>
                  <button type="button" class="btn btn-primary">Edit</button>
                  <th scope="row">1</th><td>Seamaster 30 - 1960</td><td>#3265</td><td>@mdo</td>
                </tr>
                <tr>
                  <button type="button" class="btn btn-primary">Edit</button>
                  <th scope="row">2</th><td>Persian Carpet</td><td>#9532</td><td>@fat</td>
                  </tr>
                <tr>
                  <button type="button" class="btn btn-primary">Edit</button>
                  <th scope="row">3</th><td>Macbook Pro 2017</td><td>#9054</td><td>@twitter</td>
                  </tr>
              </tbody>
            </mdb-tbl>

            <!-- <h3 class="mt-5 text-left"><strong>Pre Auction</strong></h3>
            <mdb-tbl>
              <thead>
                <tr><th>#</th><th>Objcts name</th><th>ObjectID</th><th>Who added</th></tr>
              </thead><tbody>
                <tr><th scope="row">1</th><td>Seamaster 30 - 1960</td><td>#3265</td><td>@mdo</td></tr>
                <tr><th scope="row">2</th><td>Persian Carpet</td><td>#9532</td><td>@fat</td></tr>
                <tr><th scope="row">3</th><td>Macbook Pro 2017</td><td>#9054</td><td>@twitter</td></tr>
              </tbody>
            </mdb-tbl> -->
            <!-- <h3 class="mt-5 text-left"><strong>Table head options</strong></h3>
            <p>To change a background-color of thead (or any other element) use our color classes. If you are going to use a dark background you should also consider white text (to provide a proper contrast) by adding .text-white class. </p>
            <mdb-tbl>
              <thead class="blue-grey lighten-4">
                <tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
              </tbody>
            </mdb-tbl> -->
            <!-- <mdb-tbl>
              <thead class="mdb-color darken-3">
                <tr class="text-white"><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
              </tbody>
            </mdb-tbl> -->
            <!-- <h3 class="mt-5 text-left"><strong>Striped rows:</strong></h3>
            <table class="table table-striped">
              <thead>
                <tr><th>#</th><th>First Name</th><th>Last Name</th><th>Username</th></tr>
              </thead>
              <tbody>
                <tr><th scope="row">1</th><td>Mark</td><td>Otto</td><td>@mdo</td></tr><tr><th scope="row">2</th><td>Jacob</td><td>Thornton</td><td>@fat</td></tr><tr><th scope="row">3</th><td>Larry</td><td>the Bird</td><td>@twitter</td></tr>
              </tbody>
            </table> -->
          </mdb-card-body>
        </mdb-card>
      </mdb-col>
    </mdb-row>
  </section>
</template>

<script>
import { mdbRow, mdbCol, mdbCard, mdbView, mdbCardBody, mdbTbl } from 'mdbvue'

export default {
  name: 'Auctions',
  components: {
    mdbRow,
    mdbCol,
    mdbCard,
    mdbView,
    mdbCardBody,
    mdbTbl
  },
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card.card-cascade .view.gradient-card-header {
  padding: 1rem 1rem;
  text-align: center;
}
.card.card-cascade h3,
.card.card-cascade h4 {
  margin-bottom: 0;
}
</style>
