const App = {
  data() {
    return {
      counter: 0,
      url: "",
      imagesArray: [
        "url('../img/contBcg-0.jpeg') center/cover fixed no-repeat",
        "url('../img/contBcg-1.jpeg') center/cover fixed no-repeat",
        "url('../img/contBcg-2.jpeg') center/cover fixed no-repeat",
        "url('../img/contBcg-3.jpeg') center/cover fixed no-repeat",
        "url('../img/contBcg-4.jpeg') center/cover fixed no-repeat",
      ],
    };
  },

  methods: {
    click(direction) {
      if (direction === "right") {
        this.counter > 4 ? (this.counter = 0) : this.counter++;
        this.url = this.imagesArray[this.counter];
      } else if (direction === "left") {
        this.counter < 0 ? (this.counter = 4) : this.counter--;
        this.url = this.imagesArray[this.counter];
      }
    },
  },
};

Vue.createApp(App).mount(".container");
