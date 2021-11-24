import  {v4 as uuidv4 } from "uuid";

const  Movies = [
  {
    Id:uuidv4(),
    Title: "Dont Breath 2",
    Description: "Blind veteran Norman Nordstrom has been hiding out for a years in cabin. He lives with a young girl and has recreated the family stolen from him by a drunken driver. Their quiet life together is soon shattered when a group of  criminals kidnaps her",
    PosterURL: "https://m.media-amazon.com/images/M/MV5BNjU5MTU2NjEtNmE5OC00MzY1LWFhM2YtOGEyYmYwZDBkOTczXkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg",
    Rating: 5,
    Trailer: "https://www.youtube.com/embed/gRbG2tjHYCA" ,

  },
  {
    Id:uuidv4(),
    Title: "Dune" ,
    Description: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people" ,
    PosterURL: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg" ,
    Rating: 5 ,
    Trailer: "https://www.youtube.com/watch?v=n9xhJrPXop4",
  },
  {
    Id:uuidv4(),
    Title: "No Time To Die" ,
    Description: "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help." ,
    PosterURL: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg" ,
    Rating: 5 ,
    Trailer: "https://www.youtube.com/watch?v=N_gD9-Oa0fg",
  },
  {
    Id:uuidv4(),
    Title: "Suicide squad" ,
    Description: "he government sends the most dangerous supervillains in the world -- Bloodsport, Peacemaker, King Shark, Harley Quinn and others -- to the remote, enemy-infused island of Corto Maltese. Armed with high-tech weapons," ,
    PosterURL: "https://m.media-amazon.com/images/M/MV5BMjM1OTMxNzUyM15BMl5BanBnXkFtZTgwNjYzMTIzOTE@._V1_.jpg" ,
    Rating: 5 ,
    Trailer: "https://www.youtube.com/watch?v=JuDLepNa7hw",
   
  },
  {
    Id:uuidv4(),
    Title: "Dirty Grandpa" ,
    Description: "After his wife's demise, Dick tricks his grandson, Jason, to drive him to Florida. Unaware of Dick's intentions, Jason finds himself in a series of misadventures." ,
    PosterURL: "https://m.media-amazon.com/images/M/MV5BMzk0NzkyNDk2M15BMl5BanBnXkFtZTgwNDczOTU3NzE@._V1_FMjpg_UX1000_.jpg" ,
    Rating: 5 ,
    Trailer: "https://www.youtube.com/watch?v=aZSzMIFZT7Q",
  },
  ]
  export default Movies;