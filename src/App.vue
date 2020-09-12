<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <router-link class="d-flex align-center" to="/">

        <v-icon x-large class="mr-3 white--text">
          mdi-form-select
        </v-icon>

        <h1 class="font-weight-medium white--text">Cool#Pool</h1>

      </router-link>

    </v-app-bar>

    <v-main>
      <router-view>
      </router-view>
      <div class="main-spacer"></div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',


  data: () => ({
    //
  }),
});
</script>

<style lang="css">
  .main-spacer {
    height: 180px;
  }

  .v-main {
    background-color: aliceblue;
  }
</style>