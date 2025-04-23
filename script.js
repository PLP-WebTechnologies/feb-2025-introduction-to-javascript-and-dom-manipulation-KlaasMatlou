function changeText() {
    const para = document.getElementById('description');
    para.textContent = 'LOOK AT ME NOW!!😎😎 AM I NOT COOL?...🐱‍🏍';
}
    
function changeStyle() {
    const title = document.getElementById('main-title');
    title.style.color = 'chocolate';
    title.style.fontSize = '5em';
    title.style.backgroundColor = 'blue';
    title.style.fontFamily = 'comic sans ms';
    title.style.textAlign = 'center';
    title.style.border = '5px solid red';
}
  
function addElement() {
    const container = document.getElementById('element-container');
    const newDiv = document.createElement('div');
    newDiv.textContent = 'This is an Added NEW Element!';
    newDiv.classList.add('dynamic-element');
    container.appendChild(newDiv);
}
  
function removeElement() {
    const container = document.getElementById('element-container');
    if (container.lastElementChild) {
      container.removeChild(container.lastElementChild);
    }
}