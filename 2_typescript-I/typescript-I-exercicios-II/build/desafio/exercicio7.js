"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formaRNA = void 0;
function formaRNA() {
    const DNA = "ATT GCT GCG CAT TAA CGA CGC GTA";
    let RNA1 = DNA.replace(/[A]/g, "U");
    let RNA2 = RNA1.replace(/[T]/g, "A");
    let RNA3 = RNA2.replace(/[C]/g, "X");
    let RNA4 = RNA3.replace(/[G]/g, "C");
    let RNA5 = RNA4.replace(/[X]/g, "G");
    return RNA5;
}
exports.formaRNA = formaRNA;
// ATT GCT GCG CAT TAA CGA CGC GTA
// UAA CGA CGC GUA AUU GCU GCG CAU
