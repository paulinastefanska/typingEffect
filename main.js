const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');
const txt = ['Hello!', 'My name is Paulina', 'I am Junior Front-end Developer'];


let activeLetter = -15;
let activeText = 0;

const addLetter = () => {
  if (activeLetter >= 0) {
    spanText.textContent += txt[activeText][activeLetter];
  }
  activeLetter++;
  if (activeLetter === txt[activeText].length) {
    activeText++;
    if (activeText === txt.length) return;
    return setTimeout(() => {
      activeLetter = -10;
      spanText.textContent = "";
      addLetter();
    }, 1500)
  }
  setTimeout(addLetter, 80);
}
addLetter();

const cursorAnimation = () => {
  spanCursor.classList.toggle('active');
}
setInterval(cursorAnimation, 400);