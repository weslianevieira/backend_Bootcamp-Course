/*
   A vira U
   T vira A
   C vira G
   G vira C 

   input:  "ATTGCTGCGCATTAACGACGCGTA"
   output: "UAACGACGCGUAAUUGCUGCGCAU"
            UAACGACGCGUAAUUGCUGCGCAU
*/

function converterDNAparaRNA(dna: string): string {
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
        // Se a base não for uma das esperadas, mantém a mesma base no RNA
        rna += base;
        break;
    }
  }

  return rna;
}

// Exemplo de uso
const dna = "ATTGCTGCGCATTAACGACGCGTA";
const rna = converterDNAparaRNA(dna);
console.log(rna);