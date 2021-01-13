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
    editItem: function() {
      alert()
    },
    saveItems: function() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  },
})

//チェックボックスの状態の保存もできるが、保存タイミングはaddボタンが押された時に行われる。
