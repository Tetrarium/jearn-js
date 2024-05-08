// export function largerDivider(a, b) {
//   const [max, min] = a > b ? [a, b] : [b, a];

//   const remainder = max % min;

//   if (remainder > 0) {
//     return largerDivider(min, remainder);
//   }

//   return min;
// };

export function largerDivider(a, b) {
  let [max, min] = a > b ? [a, b] : [b, a];

  let remainder = max % min;
  while (remainder > 0) {
    max = min;
    min = remainder;
    remainder = max % min;
  }

  return min;
}