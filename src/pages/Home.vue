<template>
  <div>
    <div v-for="i in 12" :key="i">
      <Card/>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import axios from "axios";

export default {
  name: "Home",
  components: {Card},
  setup() {
    axios.get("/rest/items").then((res) => {
      console.log(res)
    })
  }
}
</script>
<style scoped></style>