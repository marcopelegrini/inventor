var DATAInventor = DATAInventor || {};

DATAInventor.Generators = DATAInventor.Generators || {};

DATAInventor.Generators.RENAVAM = {
  // Code extract from https://github.com/Goulartvic/gerador-renavam
  generateRandom: function () {
    var randomNumber = Math.floor((Math.random() * 9) + 0);
    return randomNumber;
  },

  renavam: function() {
    var n0 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n1 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n2 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n3 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n4 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n5 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n6 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n7 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n8 = DATAInventor.Generators.RENAVAM.generateRandom();
    var n9 = DATAInventor.Generators.RENAVAM.generateRandom();

    var moduloOnze = (((n0 * 3) + (n1 * 2) + (n2 * 9) + (n3 * 8) + (n4 * 7) + (n5 * 6) + (n6 * 5) + (n7 * 4) + (n8 * 3) + (n9 * 2)) * 10) % 11;

    if (moduloOnze === 10) {
      moduloOnze = 0;
    }
    return '' + n0 + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + moduloOnze;
  }
};
