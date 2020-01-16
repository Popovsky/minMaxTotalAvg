// 1,3,kjdghfd,2,kfjdg,5,jhfkjdg,4
const container = document.createElement('div');
const input = document.createElement('input');
const btn = document.createElement('button');
const minValue = document.createElement('p');
const maxValue = document.createElement('p');
const totalValue = document.createElement('p');
const avgValue = document.createElement('p');
const getMinAndMaxElements = arr => {
    let min = arr[0], max = arr[0], total = 0, avg;
    arr.map(el => el < min ? min = el : null);
    arr.map(el => el > max ? max = el : null);
    arr.map(el => total+= el);
    avg = Math.round(total / arr.length);
    minValue.innerHTML = `min - ${min}`;
    maxValue.innerHTML = `max - ${max}`;
    totalValue.innerHTML = `total - ${total}`;
    avgValue.innerHTML = `avg - ${avg}`;
};
btn.innerHTML = 'Выполнить';
btn.onclick = () => {
    let arrNum = [];
    const arrStr = input.value.split(',');
    arrStr.map(el => +el >= 0 || +el < 0 ? arrNum.push(+el) : null);
    getMinAndMaxElements(arrNum);
};
container.appendChild(input);
container.appendChild(btn);
container.appendChild(minValue);
container.appendChild(maxValue);
container.appendChild(totalValue);
container.appendChild(avgValue);
document.getElementById('root').appendChild(container);
