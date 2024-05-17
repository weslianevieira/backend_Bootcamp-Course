"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.imprintInfoOrganized = exports.GENRE = void 0;
var GENRE;
(function (GENRE) {
    GENRE["ACTION"] = "action";
    GENRE["DRAMA"] = "drama";
    GENRE["COMEDY"] = "comedy";
    GENRE["ROMANCE"] = "romance";
    GENRE["HORROR"] = "horror";
})(GENRE || (exports.GENRE = GENRE = {}));
function imprintInfoOrganized(name, year, genre, punctuation) {
    if (punctuation) {
        return {
            name,
            year,
            genre,
            punctuation
        };
    }
    else {
        return {
            name,
            year,
            genre
        };
    }
}
exports.imprintInfoOrganized = imprintInfoOrganized;
console.log(imprintInfoOrganized('As Branquelas', 2004, GENRE.COMEDY, 5));
// { name: 'As Branquelas', year: 2004, genre: 'comedy', punctuatuion: 5 }
console.log(imprintInfoOrganized('As Branquelas', 2004, GENRE.COMEDY));
// { name: 'As Branquelas', year: 2004, genre: 'comedy' }
