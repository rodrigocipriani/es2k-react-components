 //eslint-disable-next-line
export function removeSymbols(input) {

  let output = input;

  const map = {
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
    N: /\xD1/g,
  };

  //eslint-disable-next-line
  for (const c in map) {

    const regex = map[c];
    output = output.replace(regex, c);

  }

  return output;

}

export function capitalizePortuguese(input) {

  const chunks = input.split(' ');

  const charArtigo = ['d'];

  const outputChunks = chunks.map((chunk) => {

    const o = chunk.toLowerCase();

    const isArtigo = chunk.length <= 3 && charArtigo.indexOf(chunk.charAt(0)) > -1;

    return isArtigo ? o.charAt(0).toUpperCase() + chunk.slice(1) : o;

  });

  return outputChunks.join(' ');

}
