<template>
  <div v-if="event">
    <!-- Render when event.title is found -->
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>

<script>
import EventService from '@/services/EventService'
export default {
  props: ['id'],
  data() {
    return {
      event: null,
    }
  },
  created() {
    // Fetch Event by ID and Set local data (line 11)
    EventService.getEventById(this.id)
      .then((response) => {
        console.log(`events: ${response.data}`)
        this.event = response.data
      })
      .catch((error) => {
        console.error(error)
      })
  },
}
</script>
