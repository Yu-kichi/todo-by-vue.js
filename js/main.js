const app = new Vue({
  el: "#app",
  data: {
    newItem: "",
    checkbox: false,
    todos: [],
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch (e) {
        localStorage.removeItem('todos');
      }
    }
  },
  methods: {
    addItem: function(event) {
      if (this.newItem === "") return

      let todo = {
        item: this.newItem,
        isDone: this.checkbox,
      }
      this.todos.push(todo),
        this.newItem = "",
        this.saveItems()
    },
    deleteItem: function(index) {
      this.todos.splice(index, 1);
      this.saveItems();
    },
    saveItems: function() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  },
})

