<template>
  <div>
    <TextInput @newTodo="addTodo" />
    <div class="todo-list" v-if="todos.length">
      <TodoListItem
        v-for="todo in todos"
        :key="todo.id"
        :todo="todo"
        @remove="removeTodo"
      />
    </div>
    <p class="empty-state-message" v-else>
      Nothing left in the list. Add a new not todo in the input above.
    </p>
  </div>
</template>

<script>
import TextInput from "./TextInput.vue";
import TodoListItem from "./TodoListItem.vue";

const initialTodos = [{ id: 1, text: "Do not sleep on a meeting" }];
let nextTodoId = initialTodos.length + 1;

export default {
  components: {
    TextInput,
    TodoListItem,
  },
  data() {
    return {
      todos: initialTodos,
    };
  },
  methods: {
    addTodo(todo) {
      const trimmedText = todo.trim();
      if (trimmedText) {
        this.todos.unshift({
          id: nextTodoId++,
          text: trimmedText,
        });
      }
    },
    removeTodo(idToRemove) {
      this.todos = this.todos.filter((todo) => {
        return todo.id !== idToRemove;
      });
    },
  },
};
</script>
