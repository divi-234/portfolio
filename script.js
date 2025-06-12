const button = document.getElementById('show-image-button');
const image = document.getElementById('my-image');

button.addEventListener('click', () => {
  if (image.style.display === 'none') {
    image.style.display = 'block';
  } else {
    image.style.display = 'none';
  }
});