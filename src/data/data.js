import concert from "../assets/images/concert.png";
import baseball from "../assets/images/baseball.png";
import theater from "../assets/images/theater.png";
import comedy from "../assets/images/comedy.png";
import bball from "../assets/images/bball.png";
import food from "../assets/images/food.png";
import park from "../assets/images/park.png";
import art from "../assets/images/art.png";


const events = [
    {
        id: 1,
        title: "Rock Concert",
        price: "$35",
        url: concert,
        time: "6:30 - 8:30 PM",
        description: "A live concert featuring popular artists.",
        location: "Downtown Arena",
    },
    {
        id: 2,
        title: "Theater",
        price: "$60",
        url: theater,
        time: "7:00 - 9:00 PM",
        location: "City Theater",
        description: "A captivating theater performance.",
    },
    {
        id: 3,
        title: "Comedy Show",
        price: "$75",
        url: comedy,
        time: "8:00 - 10:00 PM",
        location: "Comedy Club",
        description: "A hilarious comedy show with top comedians.",
    },
    {
        id: 4,
        title: "Baseball Game",
        price: "$35",
        time: "1:00 - 4:00 PM",
        location: "Wrigley Field",
        url: baseball,
        description: "Cubs vs Cardinals: Game 3 of the Series",
    },
    {
        id: 5,
        title: "Basketball Game",
        time: "7:00 - 10:00 PM",
        location: "Downtown Arena",
        price: "$60",
        url: bball,
        description: "Bulls vs Timberwolves: Game 5 of the Series",
    },
    {
        id: 6,
        title: "Asian Food Festival",
        description: "A culinary journey through Asian cuisine.",
        location: "City Park",
        time: "11:00 AM - 5:00 PM",
        price: "$75",
        url: food,
    },
    {
        id: 7,
        title: "Amusement Park",
        location: "Downtown Amusement Park",
        time: "10:00 AM - 10:00 PM",
        price: "$60",
        url: park,
        description: "Enjoy thrilling rides all day long",
    },
    {
        id: 8,
        title: "Art Museum",
        location: "City Art Museum",
        time: "10:00 AM - 6:00 PM",
        price: "$15",
        url: art,
        description: "Explore the latest art exhibitions and collections.",
    },
];

export default events; 