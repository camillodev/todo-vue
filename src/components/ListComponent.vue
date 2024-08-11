<script setup>
import { ref, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const list = computed(() => store.getters.getList);
const msg = computed(() => store.getters.getMsg);

const newInput = ref('');
const handleKeydown = (event) => {
  const key = event.key;
  if (key === 'Enter') {
    store.dispatch('addItemToList', newInput.value);
    newInput.value = '';
  }
};

const deleteItem = (item) => {
  store.dispatch('deleteItemFromList', item);
};
</script>

<template>
 
  <div class="list" v-for="(item, index) in list">
    <div class="check">
      <input type="checkbox" id="scales" name="index" />
      <label for="index"> {{ item }}</label>
    </div>
    <button class="btn-delete" @click="deleteItem(item)">
      <i class="fas fa-trash"></i>
    </button>
  </div>
</template>

<style scoped>
.list {
  text-align: left;
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

input {
  margin-right: 10px;
}

.new-input {
  text-align: left;
  margin-bottom: 15px;
}

.btn-delete {
  background: none;
  color: red;
  margin-left: 50px;
  visibility: hidden;
}
.list:hover .btn-delete,
.list:active .btn-delete {
  visibility: visible;
}
</style>
