<template>
  <div class="events">
    <h1>Events for good</h1>

    <!-- Pass as props -->
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

export default {
  name: "Home",
  components: {
    EventCard,
  },

  created() {
    // axios
    //   .get(
    //     "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3/events"
    //   )

    EventService.getEvents()
      .then((response) => {
        console.log(`events: ${response.data}`);
        this.events = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  data() {
    return {
      events: null,
    };
  },

  // Static Data
  // data() {
  //   return {
  //     events: [
  //       {
  //         id: 439842032,
  //         category: "front-end",
  //         title: "Vue is great!",
  //         description: "Vue is for dev by dev",
  //         location: "China",
  //         data: "August 22, 2021",
  //         time: "12:00",
  //         petsAllowed: false,
  //         organizer: "Ayman",
  //       },
  //       {
  //         id: 439842032,
  //         category: "front-end",
  //         title: "Vue is great!",
  //         description: "Vue is for dev by dev",
  //         location: "China",
  //         data: "August 22, 2021",
  //         time: "12:00",
  //         petsAllowed: false,
  //         organizer: "Ayman",
  //       },
  //     ],
  //   };
  // },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
