export function Container() {
  this.element = document.createElement('div');
  this.element.classList.add('container');
  this.element.textContent = 'Container';

  /**
   * @param {HTMLElement} elem 
   */
  this.appendTo = function(elem) {
    elem.appendChild(this.element);
  }
}
