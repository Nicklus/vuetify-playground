<template>
  <div>
    <h1>Article Page !!</h1>
    <h2>ID :: {{ postID }}</h2>
  </div>
</template>

<script>
export default {
  beforeRouteEnter: (to, from, next) => {
    console.log(`Something happened !! You come from ${from.path}`);
    next();
  },
  props: {
    postID: String
  }
};
</script>

