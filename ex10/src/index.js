function myFunction(){
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Micheal Jackson",
            title: "Thriller",
            release_year: 1983,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            }
        }
    };
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;