"use strict";
function converterDNAparaRNA(dna) {
    let rna = "";
    for (let i = 0; i < dna.length; i++) {
        let base = dna[i];
        switch (base) {
            case "A":
                rna += "U";
                break;
            case "T":
                rna += "A";
                break;
            case "C":
                rna += "G";
                break;
            case "G":
                rna += "C";
                break;
            default:
                rna += base;
                break;
        }
    }
    return rna;
}
const dna = "ATTGCTGCGCATTAACGACGCGTA";
const rna = converterDNAparaRNA(dna);
console.log(rna);
//# sourceMappingURL=ex7.js.map