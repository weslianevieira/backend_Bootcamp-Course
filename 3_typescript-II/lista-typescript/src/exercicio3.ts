export enum GENRE {
    ACTION = "action",
    DRAMA = "drama",
    COMEDY = "comedy",
    ROMANCE = "romance",
    HORROR = "horror"
}

type TMovie = {
    name: string,
    year: number,
    genre: GENRE,
    punctuation?: number
}

export function imprintInfoOrganized(name: string, year: number, genre: GENRE, punctuation?: number): TMovie {
    if (punctuation) {
        return {
            name,
            year,
            genre,
            punctuation
        }

    } else {
        return {
            name,
            year,
            genre
        }
    }

}

console.log(imprintInfoOrganized('As Branquelas', 2004, GENRE.COMEDY, 5))
// { name: 'As Branquelas', year: 2004, genre: 'comedy', punctuatuion: 5 }
console.log(imprintInfoOrganized('As Branquelas', 2004, GENRE.COMEDY))
// { name: 'As Branquelas', year: 2004, genre: 'comedy' }