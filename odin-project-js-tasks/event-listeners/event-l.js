// const btn1 = document.querySelector('#btn1');
// const btn2 = document.querySelector('#btn2');

// btn2.onclick = () => console.log('you shortcutted clicking');

// function alertFunction() {
//   console.log('you clicked a button!');
// }

// btn1.addEventListener('click', alertFunction);

// btn1.addEventListener('click', function (e) {
//   console.log(e.target);
// });

// btn1.addEventListener('click', function (e) {
//   e.target.style.background = 'blue';
// });

//Advanced loop through all buttons and add an event listener

const buttons = document.querySelectorAll('button');

buttons.forEach((buttonX) => {
  buttonX.addEventListener('click', () => {
    console.log(buttonX.id);
  });
});
