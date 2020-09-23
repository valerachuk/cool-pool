<template>
  <v-app>

    <cpl-header>
    </cpl-header>

    <v-main>
      <router-view>
      </router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import CplHeader from '@/components/cpl-header/cpl-header.component.vue';

export default Vue.extend({
  name: 'App',

  components: {
    CplHeader,
  },
});
</script>

<style lang="css">
  .main-spacer {
    height: 30vh;
  }

  .v-main {
    background-color: aliceblue;
  }
</style>