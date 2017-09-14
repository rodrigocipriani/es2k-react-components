'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeSymbols = removeSymbols;
exports.capitalizePortuguese = capitalizePortuguese;
//eslint-disable-next-line
function removeSymbols(input) {

  var output = input;

  var map = {
    a: /[\xE0-\xE6]/g,
    A: /[\xC0-\xC6]/g,
    e: /[\xE8-\xEB]/g,
    E: /[\xC8-\xCB]/g,
    i: /[\xEC-\xEF]/g,
    I: /[\xCC-\xCF]/g,
    o: /[\xF2-\xF6]/g,
    O: /[\xD2-\xD6]/g,
    u: /[\xF9-\xFC]/g,
    U: /[\xD9-\xDC]/g,
    c: /\xE7/g,
    C: /\xC7/g,
    n: /\xF1/g,
    N: /\xD1/g
  };

  //eslint-disable-next-line
  for (var c in map) {

    var regex = map[c];
    output = output.replace(regex, c);
  }

  return output;
}

function capitalizePortuguese(input) {

  var chunks = input.split(' ');

  var charArtigo = ['d'];

  var outputChunks = chunks.map(function (chunk) {

    var o = chunk.toLowerCase();

    var isArtigo = chunk.length <= 3 && charArtigo.indexOf(chunk.charAt(0)) > -1;

    return isArtigo ? o.charAt(0).toUpperCase() + chunk.slice(1) : o;
  });

  return outputChunks.join(' ');
}