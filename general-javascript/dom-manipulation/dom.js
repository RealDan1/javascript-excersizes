const container = document.querySelector('#container');

const para = document.createElement('p');
para.textContent = "Hey I'm red!";
para.style.color = 'red';
para.style.backgroundColor = 'yellow';
container.appendChild(para);

const heading3 = document.createElement('h3');
heading3.textContent = "Hey I'm Blue";
heading3.style.color = 'blue';
container.appendChild(heading3);

const div2 = document.createElement('div');
div2.style.backgroundColor = 'pink';
div2.style.border = 'solid black';
container.appendChild(div2);

const heading1 = document.createElement('h1');
heading1.textContent = "I'm in a div";
div2.appendChild(heading1);

const para2 = document.createElement('p');
para2.textContent = 'Me too!';
div2.appendChild(para2);
