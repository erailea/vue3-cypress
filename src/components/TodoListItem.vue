<template>
  <div class="todo-item">
    <div class="todo-text" :title="todo.text">
      {{ todo.text + " " + todo.id }}
    </div>
    <button
      class="remove-button"
      type="button"
      @click="$emit('remove', todo.id)"
    >
      x
    </button>
  </div>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
}
.todo-text {
  flex: 1;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

button {
  width: 3rem;
  margin-left: 5px;
  padding: 8px 10px;
  border: 1px solid #32485f;
  background-color: #32485f;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  background-color: #32485f;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #9b1414a2;
  border: 1px solid #9b1414a2;
  color: #254355;
}

li:not(:first) {
  margin-top: 3px;
}
li:not(:last-child) {
  margin-bottom: 3px;
}
</style>
