<template>
  <div class="event-card">
    <router-link
      class="event-link"
      :to="{ name: 'EventDetails', params: { id: event.id } }"
    >
      <!-- `msg` is From parent component `Home.vue` -->
      <!-- <h1>{{ msg }}</h1> -->

      <!-- Display event data -->

      <span>@ {{ event.time }} on {{ event.date }}</span>
      <h1>{{ event.title }}</h1>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'EventCard',

  props: {
    event: Object,
  },
  // data() {
  //   return {
  //     event: {
  //       id: 439842032,
  //       category: "front-end",
  //       title: "Vue is great!",
  //       description: "Vue is for dev by dev",
  //       location: "China",
  //       data: "August 22, 2021",
  //       time: "12:00",
  //       petsAllowed: false,
  //       organizer: "Ayman",
  //     },
  //   };
  // },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 200px;
  cursor: pointer;
  border: 1px solid black;
  margin-bottom: 18px;
}
.event-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
.event-link {
  color: #2c3e50;
  text-decoration: none;
}
</style>
