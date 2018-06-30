const firebaseApi = require('./firebaseApi');

$('#main-carousel').flickity({
  setGallerySize: false,
  pageDots: false,
  initialIndex: 2,
  prevNextButtons: false,
  dragThreshold: 100,
  selectedAttraction: 0.8,
  friction: 0.7,
});

$('nav a').on('click', function (event) {
  $('#main-carousel').flickity('select', $(event.target).data('slide'));
});

firebaseApi.getContent();
