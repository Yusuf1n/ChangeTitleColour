let heading = document.getElementById('heading');
let btn = document.getElementById('btn');
let items = document.getElementsByClassName('item');

btn1.onclick = () => {
    heading.style.color = 'blue';
}
btn1.addEventListener('click', () => {
    heading.style.color = 'blue';
});

btn2.onclick = () => {
    heading.style.color = 'red';
}
btn2.addEventListener('click', () => {
    heading.style.color = 'red';
});

btn3.onclick = () => {
    heading.style.color = 'green';
}
btn3.addEventListener('click', () => {
    heading.style.color = 'green';
});

btn4.onclick = () => {
    heading.style.color = 'yellow';
}
btn4.addEventListener('click', () => {
    heading.style.color = 'yellow';
});


for (const item of items) {
    item.onclick = (event) => {
        console.log(event);
    }
}