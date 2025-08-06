<!-- <Katex :expression="'\( X_1 = [0.23, 0.88] \), \( X_5 = [0.68, 0.43] \)'" inline /> -->

<template>
  <div v-html="html" :class="block ? 'block' : 'inline'" />
</template>


<script setup lang="ts">
import { computed } from 'vue'
import { renderToString } from 'katex'
 
const props: any = defineProps({
  expression: String,
  block: Boolean
})
 
const html = computed(() =>
  renderToString(props.expression, {
    displayMode: props.block,
    throwOnError: false
  })
)
</script>
 

 
<style scoped>
.block {
  text-align: center;
  margin: 1em 0;
}
.inline {
  display: inline-block;
}
</style>