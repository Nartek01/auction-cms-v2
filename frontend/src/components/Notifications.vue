<template>
  <section id="notifications">
    <h1>Notifications here!</h1>
            <mdb-col lg="6" class="mb-4">
          <mdb-card>
            <mdb-card-body>
              <section>
                <div class="text-center mb-5">
                </div>
                <mdb-row>
                <mdb-btn color="primary" size="sm" @click.native="showFluidModalTop = true">Permission sell</mdb-btn>
                      <mdb-modal fullHeight position="top" :show="showFluidModalTop" @close="showFluidModalTop = false">
                        <mdb-modal-header>
                          <mdb-modal-title>Account Credentials updated!</mdb-modal-title>
                        </mdb-modal-header>
                        <mdb-modal-body>You are able to sell/create your own auction now!</mdb-modal-body>
                        <mdb-modal-footer>
                          <mdb-btn color="secondary" @click.native="showFluidModalTop = false">Close</mdb-btn>
                        </mdb-modal-footer>
                      </mdb-modal>
                </mdb-row>
              </section>
            </mdb-card-body>
          </mdb-card>
        </mdb-col>
  </section>
</template>
<script>
import {
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
} from 'mdbvue'
export default {
  name: "Notifications",
  components: {
    mdbBtn,
    mdbModal,
    mdbModalHeader,
    mdbModalTitle,
    mdbModalBody,
  },
  data() {
    return {
      showFrameModalTop: false,
      showFrameModalBottom: false,
      showSideModalTopRight: false,
      showSideModalTopLeft: false,
      showSideModalBottomRight: false,
      showSideModalBottomLeft: false,
      showCentralModalSmall: false,
      showCentralModalMedium: false,
      showCentralModalLarge: false,
      showCentralModalFluid: false,
      showFluidModalRight: false,
      showFluidModalLeft: false,
      showFluidModalTop: false,
      showFluidModalBottom: false,
    }
  }
}
</script>

<style>

</style>