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
    }

   },
   beforeCreate(){
   // console.log(this.todos);
    console.log(this.newTodo);
   },
   created(){
  //  console.log(this.todos);
    console.log(this.newTodo);
   }

};

Vue.createApp(todosApp).mount('#app');