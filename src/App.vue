<template>
  <base-container title="Vuex" v-if="isAuth">
    <TheCounter></TheCounter>
    <FavouriteValue></FavouriteValue>
    <button @click="addOne">Add 1</button>
    <ChangeCounter></ChangeCounter>
  </base-container>

  <BaseContainer title="Auth">
    <UserAuth></UserAuth>
  </BaseContainer>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth,
  },
  computed: {
        isAuth() {
            return this.$store.getters.userIsAuthenticated;
        }
    },
  methods: {
    addOne() {
      this.$store.dispatch('increment');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>