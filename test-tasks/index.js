/**
 * Дана функция numberWithSpaces
 *
 * Условия:
 *  1. Изучить данную функцию, описать как она работает и для чего нужна
 *  2. Переписать функцию, используя другие, более понятные способы
 *
 * Требования
 *  1. Исходная функция numberWithSpaces должна остаться без изменений,
 *    ваша задача реализовать функцию newFunc, которая выполняет те же
 *    самые действия
 *  2. Все задания необходимо делать на сайте https://www.typescript.org/play
 *
 * Тесты: На странице есть блок с тестами, он должен оставаться без изменений
 *  Задание считается выполненым, если все тесты завершились без FAILED
 *
 * Дополнительное задание
 * В коде есть теоритическая ошибка, которая вернет undefined. Если вы обнаружите
 * ее, это будет огромным плюсом
 *
 * Решение
 * https://www.typescriptlang.org/play?target=99#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
 */
var numberWithSpaces = function (x, fullValue) {
    try {
        if (fullValue) {
            var parts = x.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            return parts.join(".");
        }
        else {
            var secondNumber = x.toString()[2] === '0' ? '' : x.toString()[2];
            var needDot = secondNumber ? '.' : '';
            var thirdNumber = x.toString()[3] === '0' ? '' : x.toString()[3];
            var needDot3 = thirdNumber ? '.' : '';
            if (x.toString().length > 12) {
                return '999B+';
            }
            else if (x.toString().length === 12) {
                return x.toString()[0] + x.toString()[1] + x.toString()[2] + needDot3 + thirdNumber + 'B';
            }
            else if (x.toString().length === 11) {
                if (thirdNumber) {
                    return x.toString()[0] + x.toString()[1] + '.' + x.toString()[2] + x.toString()[3] + 'B';
                }
                else {
                    return x.toString()[0] + x.toString()[1] + needDot + secondNumber + 'B';
                }
            }
            else if (x.toString().length === 10) {
                return x.toString()[0] + '.' + x.toString()[1] + secondNumber + 'B';
            }
            else if (x.toString().length === 9) {
                return x.toString()[0] + x.toString()[1] + x.toString()[2] + needDot3 + thirdNumber + 'M';
            }
            else if (x.toString().length === 8) {
                if (thirdNumber) {
                    return x.toString()[0] + x.toString()[1] + '.' + x.toString()[2] + x.toString()[3] + 'M';
                }
                else {
                    return x.toString()[0] + x.toString()[1] + needDot + secondNumber + 'M';
                }
            }
            else if (x.toString().length === 7) {
                return x.toString()[0] + '.' + x.toString()[1] + secondNumber + 'M';
            }
            else {
                var parts = x.toString().split(".");
                parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
                return parts.join(".");
            }
        }
    }
    catch (e) {
        console.log("[numberWithSpaces] error with ".concat(e));
    }
};
// const newFunc = (x: number, fullValue?: boolean): string => {
//   try {
//     if (fullValue) {
//       const parts = x.toString().split('.');
//       parts[0] = (+parts[0]).toLocaleString();
//       return parts.join('.');
//     }
//     x = +x.toString().split('.').join('0');
//     if (Math.abs(x) > 1e12) {
//       return '999B+';
//     }
//     if (Math.abs(x) >= 1e6) {
//       x = +x.toString().split('').map((n, i) => i < 4 ? n : 0).join('');
//       return x.toLocaleString('en-US', {
//         notation: 'compact',
//         compactDisplay: 'short',
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 2,
//       });
//     }
//     return x.toLocaleString();
//   } catch (e) {
//     console.log(e);
//     console.log(`[numberWithSpaces] error with ${e}`);
//     return '';
//   }
// };
var newFunc = function (x, fullValue) {
    if (fullValue) {
        var parts = x.toString().split('.');
        parts[0] = (+parts[0]).toLocaleString();
        return parts.join('.');
    }
    x = +x.toString().split('.').join('0');
    if (Math.abs(x) > 1e12) {
        return '999B+';
    }
    if (Math.abs(x) >= 1e6) {
        x = +x.toString().split('').map(function (n, i) { return i < 4 ? n : 0; }).join('');
        return x.toLocaleString('en-US', {
            notation: 'compact',
            compactDisplay: 'short',
            minimumFractionDigits: 0,
            maximumFractionDigits: 2,
        });
    }
    return x.toLocaleString();
};
(function () {
    var tests = [
        123, 10001, 153056, 5132.51321, -1, -5561321313, 99999, 12345678, 912321561321, 912301561321, 51231411.31313131, 0,
    ];
    tests.forEach(function (number, index) {
        var _a, _b, _c, _d;
        var old = numberWithSpaces(number, false);
        var old1 = numberWithSpaces(number, true);
        var newN = (_b = (_a = newFunc(number, false)) === null || _a === void 0 ? void 0 : _a.replace(/\xa0/g, ' ')) === null || _b === void 0 ? void 0 : _b.replace(/\u202f/g, ' ');
        var newN1 = (_d = (_c = newFunc(number, true)) === null || _c === void 0 ? void 0 : _c.replace(/\xa0/g, ' ')) === null || _d === void 0 ? void 0 : _d.replace(/\u202f/g, ' ');
        var status = (old == newN && old1 == newN1);
        console.log("#".concat(index + 1), status ? "OK" : "FAILED", !status ? "".concat(old, " == ").concat(newN, " | ").concat(old1, " == ").concat(newN1) : '');
    });
})();
