const resultBox = document.querySelector('#result');
const circle = document.createElement('div');
circle.className = 'circle';


const controlForm = document.getElementById('circle-control');
console.dir(controlForm.elements);

let circleParams = {
  cx: 150,
  cy: 150,
  radius: 100,
  bgcolor: '#ff0000',
}


/**
 * 
 * @param {{
 *  cx: number;
 *  cy: number;
 *  radius: number;
 *  bgcolor: number;
 * }} params 
 */
function rerenderCircle(params) {
  const { cx, cy, radius, bgcolor } = params;

  circle.style.left = cx + 'px';
  circle.style.top = cy + 'px';
  circle.style.backgroundColor = bgcolor;
  circle.style.width = circle.style.height = 0;
  resultBox.append(circle);

  setTimeout(() => {
    circle.style.height = circle.style.width = radius * 2 + 'px';
  })

  
}

// renderCircle(circleParams);

console.log(controlForm.elements)


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
  rerenderCircle(circleParams);
}

controlForm.addEventListener('submit', handleSubmit);
