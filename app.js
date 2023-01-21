console.log('hello prithibi');

const app = Vue.createApp({
  // data, functions
  // template: `<h2>I am the templates</h2>`

  data() {
    return {
      url: 'https://vuejs.org/guide/quick-start.html#using-vue-from-cdn',
      title: 'hello beautiful world',
      age: 4,
      showContent: true,
      x: 0,
      y: 0,
      books: [
        { title: 'Dopamine detox', author: 'Thibaut Meurisse', img: 'assets/1.jpg' },
        { title: 'Avatar:The way of water', author: 'James Cameron', img: 'assets/2.jpg' },
        { title: 'Rich dad, Poor dad', author: 'Robert T', img: 'assets/3.jpg' },
      ],
    };
  },
  methods: {
    changeTitle() {
      this.title = 'Is it working properly 😌';
    },
    showContentToggle() {
      this.showContent = !this.showContent;
    },
    handleEvents(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
  },
});

app.mount('#app');
