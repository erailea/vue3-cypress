<template>
  <form @submit.prevent="emitNewTodoEvent" class="add-todo-form">
    <input
      type="text"
      class="input"
      placeholder="Add a new not todo"
      v-model="todo"
      ref="textInput"
    />
    <input type="submit" value="Add" />
  </form>
</template>

<script>
export default {
  data() {
    return {
      todo: "",
    };
  },
  methods: {
    emitNewTodoEvent(e) {
      e.preventDefault();
      this.$emit("newTodo", this.todo);
      this.todo = "";
      // Use nextTick to focus on the input after the DOM update
      this.$nextTick(() => {
        this.$refs.textInput.focus();
      });
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  padding: 8px 10px;
  border: 1px solid #32485f;
}

.add-todo-form {
  width: 100%;
  display: flex;
  align-items: center;
}

input[type="submit"] {
  margin-left: 5px;
  padding: 8px 10px;
  border: 1px solid #32485f;
  background-color: #32485f;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  width: 3rem;
}

input[type="submit"]:hover {
  background-color: #00c185;
  border: 1px solid #00c185;
  color: #254355;
}
</style>
