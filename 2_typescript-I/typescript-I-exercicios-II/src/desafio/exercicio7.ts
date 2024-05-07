export function formaRNA(): string {
const DNA = "ATT GCT GCG CAT TAA CGA CGC GTA"
    
// O exercício pede pra trocar C por G e G por C. 
// Se isso for feito em sequência a tranformação será feita e revertida.
// Para isso não acontecer usamos um terceiero valor para armazenar o valor. 
let RNA1 = DNA.replace(/[A]/g, "U")
let RNA2 = RNA1.replace(/[T]/g, "A")
let RNA3 = RNA2.replace(/[C]/g, "X")
let RNA4 = RNA3.replace(/[G]/g, "C")
let RNA = RNA4.replace(/[X]/g, "G")

return RNA

}


