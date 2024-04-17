/**
 * Re-open class
 * 
 * https://www.codewars.com/kata/53d628de83db278fb1000710/train/javascript
 */

export default String.prototype.myToUpper = function () {
  return this.replace(/[a-zа-я]/g, ch => String.fromCharCode(ch.charCodeAt() - 32));
};