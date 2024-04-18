export default function numFormat(num) {
  let result = '';
  const [integerStr, fraction] = num.toString().split('.');

  let thousandCount = 1;

  for (let i = integerStr.length - 1; i > 0; i--) {
    result = integerStr[i] + result;
    thousandCount++;

    if (thousandCount > 3 && integerStr[i - 1] !== '-') {
      thousandCount = 1;
      result = ' ' + result;
    }
  }

  result = integerStr[0] + result;

  return fraction ? [result, fraction].join('.') : result;
}
