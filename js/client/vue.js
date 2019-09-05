let app = new Vue({
  el: '#app',
  data: {
    title: 'Task List',
    inputTask: '',
    tasks: [
      {task: '121', id: 1},
      {task: '122', id: 2},
      {task: '123', id: 3},
    ], 
    count: 1,
  },
  methods:{
      addItem: function(){
      if(this.inputTask !== ""){
        let request = new XMLHttpRequest();
        request.open("POST", "/insert", true);
        request.setRequestHeader("Content-Type", "application/json");
        
        let vue = this;
       
        
        let insert = function () {
          let obj = { id: this.count++, task: this.inputTask };
      
          this.tasks.push( obj );
          
          this.inputTask = "";
        };
        request.addEventListener('load', insert.bind(vue));

        request.send(JSON.stringify({ "id": this.count, "task": this.inputTask }));
      }
    },
    deleteItem: function (index) {
      let request = new XMLHttpRequest();
      request.open("POST", "/erase", true);
      request.setRequestHeader("Content-Type", "application/json");

      console.log('************');

      let vue = this;

      let erase = function () {
        console.log(this.tasks);
        this.tasks.splice(index,1);
      };
      
      request.addEventListener('load', erase.bind(vue) );

      request.send( JSON.stringify( { "id": this.tasks[index].id } ));
    }
  }
});