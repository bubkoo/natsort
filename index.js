var naturalSort = function (options) {

    'use strict';

    options = options || {};

    var normalize = options.insensitive ?
        function (s) {
            return ('' + s).toLowerCase();
        } :
        function (s) {
            return '' + s;
        };

    var GREATER = options.desc ? -1 : 1;
    var SMALLER = -GREATER;

    return function (a, b) {

        var sre = /(^[ ]*|[ ]*$)/g;
        // convert all to strings and trim()
        var x = normalize(a).replace(sre, '') || '';
        var y = normalize(b).replace(sre, '') || '';

        // Return immediately if at least one of the values is empty.
        if (!x && !y) {
            return 0;
        }
        if (!x && y) {
            return SMALLER;
        }
        if (x && !y) {
            return GREATER;
        }


        var nre = /(^-?[0-9]+(\.?[0-9]*)[df]?e?[0-9]?$|^0x[0-9a-f]+$|[0-9]+)/gi;
        // chunk/tokenize
        var xN = x.replace(nre, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');
        var yN = y.replace(nre, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0');


        var dre = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/;
        var hre = /^0x[0-9a-f]+$/i;
        // numeric, hex or date detection
        var xD = parseInt(x.match(hre)) || (xN.length !== 1 && x.match(dre) && Date.parse(x));
        var yD = parseInt(y.match(hre)) || xD && y.match(dre) && Date.parse(y) || null;

        // try and sort Hex codes or Dates
        if (yD) {
            if (xD < yD) {
                return SMALLER;
            } else if (xD > yD) {
                return GREATER;
            }
        }


        var ore = /^0/;

        // natural sorting through split numeric strings and default strings
        for (var i = 0, l = Math.max(xN.length, yN.length); i < l; i++) {

            var iX = xN[i];
            var iY = yN[i];

            // find floats not starting with '0', string or 0 if not defined (Clint Priest)
            var xF = !(iX || '').match(ore) && parseFloat(iX) || iX || 0;
            var yF = !(iY || '').match(ore) && parseFloat(iY) || iY || 0;

            // handle numeric vs string comparison - number < string - (Kyle Adams)
            if (isNaN(xF) !== isNaN(yF)) {
                return (isNaN(xF)) ? GREATER : SMALLER;
            }
            // rely on string comparison if different types
            // - i.e. '02' < 2 != '02' < '2'
            else if (typeof xF !== typeof yF) {
                xF += '';
                yF += '';
            }

            if (xF < yF) {
                return SMALLER;
            }

            if (xF > yF) {
                return GREATER;
            }
        }

        return 0;
    };
};


// exports
// -------

(function (root, factory) {
    if (typeof exports === 'object' && typeof module === 'object') {
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        exports['naturalSort'] = factory();
    } else {
        root['naturalSort'] = factory();
    }
})(this, function () {
    return naturalSort;
});
