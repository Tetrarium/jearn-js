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
var newFunc = function (x, fullValue) {
    try {
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
    }
    catch (e) {
        console.log(e);
        console.log("[numberWithSpaces] error with ".concat(e));
        return '';
    }
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
