console.log('hello prithibi');

const app = Vue.createApp({
  // data, functions
  // template: `<h2>I am the templates</h2>`

  data() {
    return {
      title: 'hello beautiful world',
      age: 4,
      showContent: true,
      x: 0,
      y: 0,
      books: [
        {title : 'Dopamine detox', author: 'Thibaut Meurisse'},
        {title : 'Avatar:The way of water', author: 'James Cameron'},
        {title : 'Rich dad, Poor dad', author: 'Robert T'},
      ]
    };
  },
  methods: {
    changeTitle() {
      this.title = 'Is it working properly 😌'
    },
    showContentToggle(){
        this.showContent = !this.showContent
    },
    handleEvents(e, data){
        console.log(e, e.type)
        if(data){
            console.log(data);
        }
    },
    handleMousemove(e){
        this.x = e.offsetX;
        this.y = e.offsetY;
    }
  },
});

app.mount('#app');
