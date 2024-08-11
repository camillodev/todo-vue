<script setup>
import { ref } from 'vue';

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div class="home">
    <h1>Todo List</h1>
    {{ msg }} {{ list.length }}
    <br />
    <input
      class="new-input"
      type="text"
      v-model="newInput"
      @keydown="handleKeydown"
      placeholder="Pressione uma tecla"
    />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
