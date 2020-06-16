<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :color="color"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      :permanent="permanent"
      :src="bg"
      absolute
      dark
    >
      <!-- -->
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

        <div>
          <v-btn
            @click="tryRouter"
            small
            color="primary"
          >Try Router</v-btn>
          <br>
          <v-btn
            @click="tryArticle"
            small
            color="green"
          >Try Article</v-btn>
        </div>
        <!-- If using vue-router -->
        <router-link to="/">Home</router-link><br>
        <router-link to="/profile">Profile</router-link>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      background: false,
      color: 'primary',
      drawer: true,
      expandOnHover: false,
      miniVariant: false,
      permanent: false,
      right: false
    };
  },
  methods: {
    tryRouter() {
      console.log('tryRouter !!');
      this.$router.push({ path: '/profile' });
    }
  },
  computed: {
    bg() {
      return this.background
        ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg'
        : undefined;
    }
  }
};
</script>

<style>
</style>
