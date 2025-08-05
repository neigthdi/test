<script setup lang="ts">
import { computed } from 'vue'
import { renderToString } from 'katex'
import 'katex/dist/katex.min.css'
 
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
 
<template>
  <div v-html="html" :class="block ? 'block' : 'inline'" />
</template>
 
<style>
.block {
  text-align: center;
  margin: 1em 0;
}
.inline {
  display: inline-block;
}
</style>