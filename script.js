// function toggleMode() {
//   const html = document.documentElement;
//   if (html.classList.contains('light')) {
//     html.classList.remove('light');
//   } else {
//     html.classList.add('light');
//   }
// }
// Ou então:

function toggleMode() {
  const html = document.documentElement;
  html.classList.toggle('light');
  const foto = document.querySelector('#profile img');
  if (html.classList.contains('light')) {
    foto.setAttribute('src', './assets/profile-2.png');
  } else {
    foto.setAttribute('src', './assets/profile.png');
  }
}
