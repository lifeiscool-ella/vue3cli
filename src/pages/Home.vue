<template>
  <div>

    <div v-for="(item, idx) in state.items" :key="idx">
      {{item.name}}
      <img :src="item.imagePath" alt="" class="my-image"/>
      <span class="img" :style="{backgroundImage:`url({item.imagePath})`}"/>
      <small>{{lib.getNumberFormatted(item.price)}}</small>
      <Card :item="item"/>
    </div>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import axios from "axios";
import {reactive} from "vue";
import lib from "../scripts/lib";

export default {
  name: "Home",
  computed: {
    lib() {
      return lib
    }
  },
  components: {Card},
  setup() {
    const state = reactive({
      items:[]
    })
    axios.get("/rest/items").then((res) => {//{data}
      console.log(res)
      state.items = res.data;
    })
    return {state}
  }
}
</script>
<style scoped>
.card .img{
  display: inline-block;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
}
.my-image {
  width: 200px;
  height: 150px;
  object-fit: cover; /* contain, fill, none, scale-down 등 선택 가능 */
}
</style>