//Create the required Classes with each inheriting Class as specified in the Problem Statement.
function main() {
    // Crete your class media with proper constructor properties and methods as mentioned.
  
    //Create a Class Song extending the Media with proper constructor ,properties and methods
  
    //Create a class Podcast inherting from the MEdia
  
    //Create class PopSong and PockSong using Song class
  
    //Create NewsPodcast and ComedyPodcast using the Podcast class.
  
    //Your code will be evaluated on basis of these operation.
    const popSong = new PopSong(
      "Shape of You",
      "Ed Sheeran",
      235,
      "÷",
      "Pop",
      0.825,
      0.652
    );
    console.log(popSong.getTitle()); // should output 'Shape of You'
    console.log(popSong.getArtist()); // should output 'Ed Sheeran'
    console.log(popSong.getDuration()); // should output 235
  
    console.log(popSong.getAlbum()); // should output '÷'
    console.log(popSong.getGenre()); // should output 'Pop'
    console.log(popSong.getDanceability()); // should output 0.825
    console.log(popSong.getEnergy()); // should output 0.652
  
    const rockSong = new RockSong(
      "Stairway to Heaven",
      "Led Zeppelin",
      482,
      "Led Zeppelin IV",
      "Rock",
      0.056,
      63.5
    );
    console.log(rockSong.getTitle()); // should output 'Stairway to Heaven'
    console.log(rockSong.getArtist()); // should output 'Led Zeppelin'
    console.log(rockSong.getDuration()); // should output 482
    console.log(rockSong.getAlbum()); // should output 'Led Zeppelin IV'
    console.log(rockSong.getGenre()); // should output 'Rock'
    console.log(rockSong.getDistortion()); // should output 0.056
    console.log(rockSong.getTempo()); // should output 63.5
  
    const newsPodcast = new NewsPodcast(
      "The Daily",
      "The New York Times",
      30,
      "Michael Barbaro",
      "News",
      "The New York Times"
    );
    console.log(newsPodcast.getTitle()); // should
    // output 'The Daily'
    console.log(newsPodcast.getArtist()); // should output 'The New York Times'
    console.log(newsPodcast.getDuration()); // should output 30
    console.log(newsPodcast.getHost()); // should output 'Michael Barbaro'
    console.log(newsPodcast.getTopic()); // should output 'News'
    console.log(newsPodcast.getSource()); // should output 'The New York Times'
  
    const comedyPodcast = new ComedyPodcast(
      "My Favorite Murder",
      "Karen Kilgariff and Georgia Hardstark",
      60,
      "Karen Kilgariff and Georgia Hardstark",
      "Comedy",
      "Karen Kilgariff and Georgia Hardstark",
      4.8
    );
    console.log(comedyPodcast.getTitle()); // should output 'My Favorite Murder'
    console.log(comedyPodcast.getArtist()); // should output 'Karen Kilgariff and Georgia Hardstark'
    console.log(comedyPodcast.getDuration()); // should output 60
    console.log(comedyPodcast.getHost()); // should output 'Karen Kilgariff and Georgia Hardstark'
    console.log(comedyPodcast.getTopic()); // should output 'Comedy'
    console.log(comedyPodcast.getComedian()); // should output 'Karen Kilgariff and Georgia Hardstark'
  
    console.log(comedyPodcast.getRating()); // should output 4.8
    return {
      Media,
      Song,
      Podcast,
      PopSong,
      RockSong,
      NewsPodcast,
      ComedyPodcast
    };
  }
  