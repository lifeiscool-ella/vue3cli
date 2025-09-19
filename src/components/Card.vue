<template>
  <div style="background-color: aquamarine">
    <textarea>1111</textarea>
  </div>
</template>
<script>
import lib from "@/scripts/lib";

export default {
  name: "Card",
  props:{
    item: Object
  },
  setup(){
    return {lib}
  }
}
</script>
<style scoped>

</style>