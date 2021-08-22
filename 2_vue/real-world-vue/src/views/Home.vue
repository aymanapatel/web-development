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

export default {
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      events: [
        {
          id: 439842032,
          category: "front-end",
          title: "Vue is great!",
          description: "Vue is for dev by dev",
          location: "China",
          data: "August 22, 2021",
          time: "12:00",
          petsAllowed: false,
          organizer: "Ayman",
        },
        {
          id: 439842032,
          category: "front-end",
          title: "Vue is great!",
          description: "Vue is for dev by dev",
          location: "China",
          data: "August 22, 2021",
          time: "12:00",
          petsAllowed: false,
          organizer: "Ayman",
        },
      ],
    };
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
