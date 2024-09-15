const resultBox = document.querySelector('#result');
const circle = document.createElement('div');
circle.className = 'circle';

const controlForm = document.getElementById('circle-control');

let circleParams = {
  cx: 150,
  cy: 150,
  radius: 100,
  bgcolor: '#ff0000',
}

/**
 * 
 * @param {string} hex 
 * @returns {string}
 */
function getContrastColor(hex) {
  hex = hex.replace('#', '');

  const [r, g, b] = new Array(3)
    .fill('')
    .map((_, i) => {
      const j = i * 2;
      return parseInt(hex.substring(j, j + 2), 16);
    });
  
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;

  return brightness > 128 ? '#000000' : '#ffffff';
}

/**
 * 
 * @param {{
 *  cx: number;
 *  cy: number;
 *  radius: number;
 *  bgcolor: number;
 * }} params
 * @return {Promise<HTMLElement>}
 */
function rerenderCircle(params) {
  const { cx, cy, radius, bgcolor } = params;

  circle.style.left = cx + 'px';
  circle.style.top = cy + 'px';
  circle.style.backgroundColor = bgcolor;
  circle.style.width = circle.style.height = 0;
  circle.style.fontSize = params.radius / 4 + 'px';
  circle.style.color = getContrastColor(bgcolor);
  circle.textContent = '';
  resultBox.append(circle);

  return new Promise(res => {
    setTimeout(() => {
      circle.style.height = circle.style.width = radius * 2 + 'px';

      circle.addEventListener('transitionend', function handler() {
        circle.removeEventListener('transitionend', handler);
        res(circle);
      });
    })
  })


  
}

/**
 * 
 * @param {HTMLFormControlsCollection} collection 
 * @param {() => {}} handler 
 */
function bindOnChangeHandler(collection, handler) {
  [...collection].forEach(elem => {
    if(elem.tagName === 'INPUT') {
      elem.addEventListener('change', handler)
    }
  });
}

/**
 * 
 * @param {InputEvent} evt 
 */
const handleChange = (evt) => {
  const { name, value } = evt.target;

  circleParams[name] = isFinite(value) ? +value : value;
}

bindOnChangeHandler(controlForm.elements, handleChange);

/**
 * 
 * @param {SubmitEvent} evt 
 */
const handleSubmit = (evt) => {
  evt.preventDefault();
  rerenderCircle(circleParams)
    .then(elem => elem.textContent = 'Hello World!');
}

controlForm.addEventListener('submit', handleSubmit);
