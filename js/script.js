const slides = [
  {
    image: "img/01.jpg",
    title: "Svezia",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    image: "img/02.jpg",
    title: "Svizzera",
    text: "Lorem ipsum.",
  },
  {
    image: "img/03.jpg",
    title: "Gran Bretagna",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    image: "img/04.jpg",
    title: "Germania",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.",
  },
  {
    image: "img/05.jpg",
    title: "Paradise",
    text: "Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.",
  },
];

const appVue = new Vue({
  el: ".slider-wrapper",

  data: {
    slides: slides,
    currentImage: slides[0],
    time: null,
  },

  methods: {
    isActive: function (slide) {
      return slide === this.currentImage;
    },

    clickedArrow: function (direction) {
      let index = this.slides.indexOf(this.currentImage);
      if (this.slides[index + direction] !== undefined) {
        this.currentImage = this.slides[index + direction];
      }
    },

    clickedSlide: function (slide) {
      this.currentImage = slide;
    },

    cycleSlides: function () {
      let index = this.slides.indexOf(this.currentImage);
      if (this.slides[index + 1] !== undefined) {
        this.currentImage = this.slides[index + 1];
      } else {
        this.currentImage = this.slides[0];
      }
    },

    stopAutoplay: function () {
      clearInterval(this.time);
    },

    startAutoplay: function () {
      this.time = setInterval(() => {
        this.cycleSlides();
      }, 3000);
    },
  },

  mounted() {
    this.startAutoplay()
  },
});
