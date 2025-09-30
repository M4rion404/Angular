interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    songTitle: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    songTitle: "Ocean Man",
    details: {
        author: "Harrison Ford",
        year: 2004
    }
}

const songTitle = 'New Song';

const {
     songTitle:anotherSong,
      songDuration:duration,
      details
    } = audioPlayer;

const { author } = details;

// console.log('Song Title:', songTitle);
// console.log('Song Title:', anotherSong);
// console.log('Duration:', duration);
// console.log('Author:', author);

const [ p1, p2, trunks='Not found']: string[] = ['Goku', 'Vegeta',];


console.log('Personaje 3:', trunks);




export {};