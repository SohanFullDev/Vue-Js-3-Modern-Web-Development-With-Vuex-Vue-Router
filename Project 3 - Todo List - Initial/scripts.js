/*
var todos = [
    {
        text: 'Learn HTML, CSS and Javascript',
        done: true

    },
    {
        text: 'Learn the basics of Vue JS',
        done: false

    }


];*/

const todosApp = {
   data(){
    return {
       // todos: window.todos,
        todos: [],
        newTodo: {
            done: false
        }
    }

   },
   methods: {
    addTodo: function(){
       if(this.newTodo.text){
        this.todos.push(this.newTodo);
        this.newTodo = {
            done:false
        };
        localStorage.setItem("todos", JSON.stringify(this.todos));
        //check inspect application

       } else {
         alert("To-do text is required");
       }
    },/*
    storeTodos(){
        localStorage.setItem("todos", JSON.stringify(this.todos));
    console.log('updated');
    }*/

   },
 
   created(){
    this.todos = localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")): this.todos;

   },
   updated(){
  localStorage.setItem("todos", JSON.stringify(this.todos));
   // console.log('updated');

   }

};

Vue.createApp(todosApp).mount('#app');