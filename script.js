// creat element
 const main = document.createElement('main');
 main.id = ('keyboard');
 document.body.prepend(main);
 
 const textarea = document.createElement('textarea');
 main.append(textarea);
 textarea.id = ('textarea');
 textarea.autofocus = true;
 
 const keyboard = document.createElement('div');
 keyboard.id = ('keyboard-keys');
 main.append(keyboard);
 
 let CapsLock = false;
 // language translation

 const someText = document.createElement('p');
 keyboard.append(someText);
 someText.textContent = 'To switch the keyboard to another language press ShiftLeft+AltLeft';

 // array key
const keyArrEnCaps = [
  ['~', '!', "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", 'Delete', ],
  ['CapsLock', "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", '"', `|`, 'Enter',],
  ["Shift", '|', "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", '↑', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "alt", "Ctrl", "←", "↓", "→", ],
];
const keyArrRu = [
  ['ё', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", ],
  ['CapsLock', "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", 'Enter',],
  ["Shift","я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", '↑', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "alt", "Ctrl", "←", "↓", "→", ],
];
const keyArrRuCaps = [
  ['Ё', '!', '"', "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", 'Backspace', ],
  ['Tab', "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", 'Delete', ],
  ['CapsLock', "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", `/`, 'Enter',],
  ["Shift", '/', "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", '↑', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→", ],
];
const keyArrEn = [ // updated
  ['`', '1', "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", 'Backspace', ],
  ['Tab', "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\" , ],
  ['CapsLock', "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", 'Enter',],
  ["Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", '↑', "Shift", ],
  ["Ctrl", "Win", "Alt", " ", "Alt", "Ctrl", "←", "↓", "→", ],
];
let keyboard_code = [
  ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",],
  ["Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash",],
  ["CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",],
  ["ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash","ArrowUp", "ShiftRight",],
  ["ControlLeft", "MetaLeft", "AltLeft","Space", "AltRight","ControlRight","ArrowLeft","ArrowDown","ArrowRight",],
  ];
//create key
const createKey = (element, keyboard_code) =>{
let key = document.createElement('div');
key.className = 'key';
key.id = keyboard_code;
if (element === ' '){
  key.id = 'Space';
}
key.textContent = `${element}`;
switch (element) {
  case ' ':
    key.classList.add('space');
    break;
  case 'Backspace':
  case 'Tab':
  case 'CapsLock':
  case 'Shift':  
  case 'Enter':
    key.classList.add('big-key');
    break;
}
keyboard.append(key);
};

const updateKey = (element, keyboard_code) =>{ 
let updKey = document.getElementById(keyboard_code) 
updKey.textContent = `${element}`; 
console.log(updKey) 
}; 



//create keyboard
const createKeyboard = (arrayButton,arrayKeyCode) => {
for (let i = 0; i<5;i++) {
  for (let j = 0; j<arrayButton[i].length;j++) {
    createKey(arrayButton[i][j],arrayKeyCode[i][j])
  }
}
}

const updateKeyboard = (arrayButton,arrayKeyCode) => { 
for (let i = 0; i<5;i++) { 
  for (let j = 0; j<arrayButton[i].length;j++) { 
    updateKey(arrayButton[i][j],arrayKeyCode[i][j]) 
  } 
} 
} 

let savedLang = 'en' 
let lang = keyArrEn 
if (localStorage.lang){ 
if (localStorage.lang === 'ru'){ 
  savedLang = localStorage.lang 
  lang = keyArrRu 
} else if (localStorage.lang === 'en'){ 
  savedLang = localStorage.lang 
  lang = keyArrEn 
} 
} 

createKeyboard(lang,keyboard_code); 
let shift = 'off' 
let alt = 'off' 

//active tab
document.addEventListener('keydown', (event) => {
event.preventDefault()
let buttonKey = document.querySelector([`#${event.code}`]);  
buttonKey.classList.add('active');
if (event.code === 'ShiftLeft') { 
  shift = 'on' 
} else if (event.code === 'AltLeft') { 
  alt = 'on' 
}
if ((event.code === 'ShiftLeft' && alt === 'on') || (event.code === 'AltLeft' && shift === 'on')) { 
  if ( lang === keyArrRu){ 
    lang = keyArrEn 
    localStorage.lang = 'en' 
    updateKeyboard(lang,keyboard_code); 
  } else if (lang === keyArrEn){ 
    lang = keyArrRu 
    localStorage.lang = 'ru' 
    updateKeyboard(lang,keyboard_code); 
  } 
} 
if(buttonKey.textContent.length === 1) {
  document.querySelector('#textarea').value += buttonKey.textContent;       
} 
activTabs(event);

});

document.addEventListener('keyup', (event) => {
let buttonKey = document.querySelector([`#${event.code}`]); 
buttonKey.classList.remove('active');
if (event.code === 'ShiftLeft') { 
  shift = 'off'  
} else if (event.code === 'AltLeft') { 
  alt = 'off' 
} 
});

document.querySelector('#keyboard-keys').addEventListener('click', (event) => {
 
  if (event.target.classList.contains('key')) {
    event.target.classList.add('active');
    setTimeout(()=>{ event.target.classList.remove('active');}, 300);
    activTabs(event);
  }
}); 
  
   function activTabs (event) {
    if(event.target.textContent.length === 1) {
      if (!CapsLock){
        document.querySelector('#textarea').value+=event.target.textContent;
      } else {
        document.querySelector('#textarea').value+=event.target.textContent.toUpperCase();
      }
    }
    if (event.target.textContent === 'Enter' || event.key === 'Enter'){   
      event.preventDefault();
      document.querySelector('#textarea').value += '\n';
    }
    if (event.code === 'Space') {                          
      event.preventDefault();
      document.querySelector('#textarea').value += ' ';
    }
   if (event.target.textContent === 'Tab' || event.code === 'Tab'){
      event.preventDefault();
      if (document.querySelector('#textarea').value.length > 0) {
        document.querySelector('#textarea').value += '\t';
      }
    }
   if (event.target.textContent === 'Backspace' || event.key === 'Backspace'){
      document.querySelector('#textarea').setRangeText('', document.querySelector('#textarea').selectionStart, document.querySelector('#textarea').selectionEnd, 'end');
      if (document.querySelector('#textarea').selectionStart === document.querySelector('#textarea').selectionEnd) {
        document.querySelector('#textarea').setRangeText('', document.querySelector('#textarea').selectionStart - 1, document.querySelector('#textarea').selectionEnd, 'end');
      }
    }
   if (event.target.id === 'CapsLock' || event.key === 'CapsLock'){
    if (!CapsLock) {
      CapsLock = true;
    } else {
      CapsLock = false;
    }
  };
}

