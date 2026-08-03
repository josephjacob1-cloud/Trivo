import '../css/style.css'
import image2 from '../assets/slider/image2.jpg'
import { useContext, useEffect } from 'react';
import UserContext from './UserContext';
import { useNavigate } from 'react-router-dom';

export default function Packages() {
    // const places = [
    //     {
    //         "id": 1,
    //         "name": "Eiffel Tower",
    //         "slug": "eiffel-tower",
    //         "country": "France",
    //         "city": "Paris",
    //         "continent": "Europe",
    //         "category": "Monument",
    //         "description": "An iconic iron tower in Paris and one of the world's most recognizable landmarks. It offers panoramic views of the city from multiple observation decks.",
    //         "visitorCountPerYear": "Approximately 7 million",
    //         "bestTimeToVisit": "April to June, September to October",
    //         "recommendedVisitDuration": "2-3 hours",
    //         "tips": [
    //             "Book tickets online in advance.",
    //             "Visit around sunset for daytime and nighttime views.",
    //             "Stay after dark to see the sparkling lights."
    //         ],
    //         "coordinates": {
    //             "latitude": 48.85837,
    //             "longitude": 2.294481
    //         },
    //         "address": {
    //             "street": "Champ de Mars",
    //             "postalCode": "75007",
    //             "city": "Paris",
    //             "country": "France"
    //         },
    //         "images": {
    //             "cover": "eiffel-tower-paris.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "links": {
    //             "official": "https://www.toureiffel.paris",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Eiffel_Tower",
    //             "googleMaps": "https://maps.google.com/?q=48.85837,2.294481"
    //         },
    //         "unesco": false,
    //         "newSevenWonders": false,
    //         "rating": 4.8,
    //         "tags": [
    //             "Paris",
    //             "France",
    //             "Tower",
    //             "Landmark",
    //             "Photography"
    //         ]
    //     },
    //     {
    //         "id": 2,
    //         "name": "Great Wall of China",
    //         "slug": "great-wall-of-china",
    //         "country": "China",
    //         "city": "Beijing Region",
    //         "continent": "Asia",
    //         "category": "Historic Monument",
    //         "description": "An ancient series of fortifications stretching thousands of kilometers across northern China.",
    //         "visitorCountPerYear": "More than 10 million",
    //         "bestTimeToVisit": "Spring and Autumn",
    //         "recommendedVisitDuration": "Half day to full day",
    //         "tips": [
    //             "Visit Mutianyu for fewer crowds.",
    //             "Wear comfortable walking shoes.",
    //             "Carry drinking water."
    //         ],
    //         "coordinates": {
    //             "latitude": 40.4319,
    //             "longitude": 116.5704
    //         },
    //         "images": {
    //             "cover": "great-wall-of-china.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "links": {
    //             "wikipedia": "https://en.wikipedia.org/wiki/Great_Wall_of_China",
    //             "googleMaps": "https://maps.google.com/?q=40.4319,116.5704"
    //         },
    //         "unesco": true,
    //         "newSevenWonders": true
    //     },
    //     {
    //         "id": 3,
    //         "name": "Statue of Liberty",
    //         "slug": "statue-of-liberty",
    //         "country": "United States",
    //         "city": "New York",
    //         "continent": "North America",
    //         "category": "Monument",
    //         "description": "A symbol of freedom located on Liberty Island in New York Harbor.",
    //         "visitorCountPerYear": "Around 4 million",
    //         "coordinates": {
    //             "latitude": 40.6892,
    //             "longitude": -74.0445
    //         },
    //         "images": {
    //             "cover": "statue-of-liberty.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "links": {
    //             "official": "https://www.nps.gov/stli/",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Statue_of_Liberty"
    //         },
    //         "unesco": true
    //     },
    //     {
    //         "id": 4,
    //         "name": "Machu Picchu",
    //         "slug": "machu-picchu",
    //         "country": "Peru",
    //         "city": "Cusco Region",
    //         "continent": "South America",
    //         "category": "Ancient Ruins",
    //         "description": "An Incan citadel situated high in the Andes Mountains.",
    //         "visitorCountPerYear": "Approximately 1.5 million",
    //         "coordinates": {
    //             "latitude": -13.1631,
    //             "longitude": -72.545
    //         },
    //         "images": {
    //             "cover": "machu-picchu-view.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "links": {
    //             "wikipedia": "https://en.wikipedia.org/wiki/Machu_Picchu"
    //         },
    //         "unesco": true,
    //         "newSevenWonders": true
    //     },
    //     {
    //         "id": 5,
    //         "name": "Taj Mahal",
    //         "slug": "taj-mahal",
    //         "country": "India",
    //         "city": "Agra",
    //         "continent": "Asia",
    //         "category": "Mausoleum",
    //         "description": "A white marble mausoleum built by Mughal emperor Shah Jahan.",
    //         "visitorCountPerYear": "Approximately 8 million",
    //         "coordinates": {
    //             "latitude": 27.1751,
    //             "longitude": 78.0421
    //         },
    //         "images": {
    //             "cover": "taj-mahal.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "links": {
    //             "official": "https://www.asiagracircle.in/",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Taj_Mahal"
    //         },
    //         "unesco": true,
    //         "newSevenWonders": true
    //     },
    //     {
    //         "id": 6,
    //         "name": "Colosseum",
    //         "slug": "colosseum",
    //         "country": "Italy",
    //         "city": "Rome",
    //         "continent": "Europe",
    //         "category": "Ancient Amphitheatre",
    //         "description": "The largest ancient amphitheatre ever built and a symbol of ancient Rome.",
    //         "coordinates": {
    //             "latitude": 41.8902,
    //             "longitude": 12.4922
    //         },
    //         "images": {
    //             "cover": "colosseum-rome.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "unesco": true,
    //         "newSevenWonders": true
    //     },
    //     {
    //         "id": 7,
    //         "name": "Christ the Redeemer",
    //         "slug": "christ-the-redeemer",
    //         "country": "Brazil",
    //         "city": "Rio de Janeiro",
    //         "continent": "South America",
    //         "category": "Statue",
    //         "coordinates": {
    //             "latitude": -22.9519,
    //             "longitude": -43.2105
    //         },
    //         "images": {
    //             "cover": "cristo-redentor-rio.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "unesco": false,
    //         "newSevenWonders": true
    //     },
    //     {
    //         "id": 8,
    //         "name": "Petra",
    //         "slug": "petra",
    //         "country": "Jordan",
    //         "city": "Wadi Musa",
    //         "continent": "Asia",
    //         "category": "Archaeological Site",
    //         "coordinates": {
    //             "latitude": 30.3285,
    //             "longitude": 35.4444
    //         },
    //         "images": {
    //             "cover": "colosseum-rome.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "unesco": true,
    //         "newSevenWonders": true
    //     },
    //     {
    //         "id": 9,
    //         "name": "Pyramids of Giza",
    //         "slug": "pyramids-of-giza",
    //         "country": "Egypt",
    //         "city": "Giza",
    //         "continent": "Africa",
    //         "category": "Ancient Monument",
    //         "coordinates": {
    //             "latitude": 29.9792,
    //             "longitude": 31.1342
    //         },
    //         "images": {
    //             "cover": "pyramids-giza.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "unesco": true
    //     },
    //     {
    //         "id": 10,
    //         "name": "Sydney Opera House",
    //         "slug": "sydney-opera-house",
    //         "country": "Australia",
    //         "city": "Sydney",
    //         "continent": "Australia",
    //         "category": "Performing Arts Centre",
    //         "coordinates": {
    //             "latitude": -33.8568,
    //             "longitude": 151.2153
    //         },
    //         "images": {
    //             "cover": "sydney-opera-house-harbour-bridge.jpg",
    //             "thumbnail": "",
    //             "gallery": []
    //         },
    //         "links": {
    //             "official": "https://www.sydneyoperahouse.com/",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Sydney_Opera_House"
    //         },
    //         "unesco": true
    //     },
    //     {
    //         "id": 11,
    //         "name": "Big Ben",
    //         "slug": "big-ben",
    //         "country": "United Kingdom",
    //         "city": "London",
    //         "continent": "Europe",
    //         "category": "Clock Tower",
    //         "description": "One of London's most famous landmarks, known for its iconic clock tower beside the Palace of Westminster.",
    //         "visitorCountPerYear": "Millions",
    //         "bestTimeToVisit": "May to September",
    //         "recommendedVisitDuration": "1-2 hours",
    //         "coordinates": {
    //             "latitude": 51.5007,
    //             "longitude": -0.1246
    //         },
    //         "images": {
    //             "cover": "palace-of-westminster-big-ben.jpg",
    //             "thumbnail": "/images/places/big-ben/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/big-ben/gallery1.jpg",
    //                 "/images/places/big-ben/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "London",
    //             "Clock",
    //             "Historic",
    //             "UK"
    //         ]
    //     },
    //     {
    //         "id": 12,
    //         "name": "Mount Fuji",
    //         "slug": "mount-fuji",
    //         "country": "Japan",
    //         "city": "Fujinomiya",
    //         "continent": "Asia",
    //         "category": "Mountain",
    //         "description": "Japan's highest mountain and an active volcano famous for its symmetrical cone.",
    //         "coordinates": {
    //             "latitude": 35.3606,
    //             "longitude": 138.7274
    //         },
    //         "images": {
    //             "cover": "mount-fuji.jpg",
    //             "thumbnail": "/images/places/mount-fuji/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/mount-fuji/gallery1.jpg",
    //                 "/images/places/mount-fuji/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Japan",
    //             "Mountain",
    //             "Nature"
    //         ]
    //     },
    //     {
    //         "id": 13,
    //         "name": "Niagara Falls",
    //         "slug": "niagara-falls",
    //         "country": "Canada / USA",
    //         "city": "Niagara Falls",
    //         "continent": "North America",
    //         "category": "Waterfall",
    //         "description": "A group of spectacular waterfalls on the border between Canada and the United States.",
    //         "coordinates": {
    //             "latitude": 43.0962,
    //             "longitude": -79.0377
    //         },
    //         "images": {
    //             "cover": "/images/places/niagara-falls/cover.jpg",
    //             "thumbnail": "/images/places/niagara-falls/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/niagara-falls/gallery1.jpg",
    //                 "/images/places/niagara-falls/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Waterfall",
    //             "Nature",
    //             "Canada",
    //             "USA"
    //         ]
    //     },
    //     {
    //         "id": 14,
    //         "name": "Angkor Wat",
    //         "slug": "angkor-wat",
    //         "country": "Cambodia",
    //         "city": "Siem Reap",
    //         "continent": "Asia",
    //         "category": "Temple",
    //         "description": "The world's largest religious monument and Cambodia's most iconic attraction.",
    //         "coordinates": {
    //             "latitude": 13.4125,
    //             "longitude": 103.867
    //         },
    //         "images": {
    //             "cover": "/images/places/angkor-wat/cover.jpg",
    //             "thumbnail": "/images/places/angkor-wat/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/angkor-wat/gallery1.jpg",
    //                 "/images/places/angkor-wat/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Temple",
    //             "Cambodia",
    //             "UNESCO"
    //         ]
    //     },
    //     {
    //         "id": 15,
    //         "name": "Burj Khalifa",
    //         "slug": "burj-khalifa",
    //         "country": "United Arab Emirates",
    //         "city": "Dubai",
    //         "continent": "Asia",
    //         "category": "Skyscraper",
    //         "description": "The world's tallest building with observation decks offering panoramic city views.",
    //         "coordinates": {
    //             "latitude": 25.1972,
    //             "longitude": 55.2744
    //         },
    //         "images": {
    //             "cover": "/images/places/burj-khalifa/cover.jpg",
    //             "thumbnail": "/images/places/burj-khalifa/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/burj-khalifa/gallery1.jpg",
    //                 "/images/places/burj-khalifa/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Dubai",
    //             "Skyscraper",
    //             "Modern"
    //         ]
    //     },
    //     {
    //         "id": 16,
    //         "name": "Stonehenge",
    //         "slug": "stonehenge",
    //         "country": "United Kingdom",
    //         "city": "Wiltshire",
    //         "continent": "Europe",
    //         "category": "Prehistoric Monument",
    //         "description": "A prehistoric stone circle believed to have ceremonial and astronomical significance.",
    //         "coordinates": {
    //             "latitude": 51.1789,
    //             "longitude": -1.8262
    //         },
    //         "images": {
    //             "cover": "/images/places/stonehenge/cover.jpg",
    //             "thumbnail": "/images/places/stonehenge/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/stonehenge/gallery1.jpg",
    //                 "/images/places/stonehenge/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "History",
    //             "Ancient",
    //             "England"
    //         ]
    //     },
    //     {
    //         "id": 17,
    //         "name": "Sagrada Família",
    //         "slug": "sagrada-familia",
    //         "country": "Spain",
    //         "city": "Barcelona",
    //         "continent": "Europe",
    //         "category": "Basilica",
    //         "description": "A world-famous basilica designed by Antoni Gaudí, still under development.",
    //         "coordinates": {
    //             "latitude": 41.4036,
    //             "longitude": 2.1744
    //         },
    //         "images": {
    //             "cover": "/images/places/sagrada-familia/cover.jpg",
    //             "thumbnail": "/images/places/sagrada-familia/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/sagrada-familia/gallery1.jpg",
    //                 "/images/places/sagrada-familia/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Barcelona",
    //             "Church",
    //             "Gaudi"
    //         ]
    //     },
    //     {
    //         "id": 18,
    //         "name": "Golden Gate Bridge",
    //         "slug": "golden-gate-bridge",
    //         "country": "United States",
    //         "city": "San Francisco",
    //         "continent": "North America",
    //         "category": "Bridge",
    //         "description": "An internationally recognized suspension bridge connecting San Francisco and Marin County.",
    //         "coordinates": {
    //             "latitude": 37.8199,
    //             "longitude": -122.4783
    //         },
    //         "images": {
    //             "cover": "/images/places/golden-gate-bridge/cover.jpg",
    //             "thumbnail": "/images/places/golden-gate-bridge/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/golden-gate-bridge/gallery1.jpg",
    //                 "/images/places/golden-gate-bridge/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Bridge",
    //             "California",
    //             "USA"
    //         ]
    //     },
    //     {
    //         "id": 19,
    //         "name": "Santorini",
    //         "slug": "santorini",
    //         "country": "Greece",
    //         "city": "Oia",
    //         "continent": "Europe",
    //         "category": "Island",
    //         "description": "A volcanic Greek island famous for its whitewashed buildings, blue domes, and spectacular sunsets.",
    //         "coordinates": {
    //             "latitude": 36.4618,
    //             "longitude": 25.3753
    //         },
    //         "images": {
    //             "cover": "/images/places/santorini/cover.jpg",
    //             "thumbnail": "/images/places/santorini/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/santorini/gallery1.jpg",
    //                 "/images/places/santorini/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Island",
    //             "Beach",
    //             "Sunset",
    //             "Greece"
    //         ]
    //     },
    //     {
    //         "id": 20,
    //         "name": "Mount Everest",
    //         "slug": "mount-everest",
    //         "country": "Nepal / China",
    //         "city": "Khumbu Region",
    //         "continent": "Asia",
    //         "category": "Mountain",
    //         "description": "The highest mountain on Earth above sea level and a dream destination for climbers.",
    //         "coordinates": {
    //             "latitude": 27.9881,
    //             "longitude": 86.925
    //         },
    //         "images": {
    //             "cover": "/images/places/mount-everest/cover.jpg",
    //             "thumbnail": "/images/places/mount-everest/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/mount-everest/gallery1.jpg",
    //                 "/images/places/mount-everest/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Mountain",
    //             "Adventure",
    //             "Himalayas"
    //         ]
    //     },
    //     {
    //         "id": 21,
    //         "name": "Grand Canyon",
    //         "slug": "grand-canyon",
    //         "country": "United States",
    //         "city": "Arizona",
    //         "continent": "North America",
    //         "category": "Natural Wonder",
    //         "description": "A vast canyon carved by the Colorado River, famous for its dramatic landscapes and colorful rock formations.",
    //         "visitorCountPerYear": "Approximately 5 million",
    //         "bestTimeToVisit": "March to May, September to November",
    //         "recommendedVisitDuration": "1-2 days",
    //         "coordinates": {
    //             "latitude": 36.1069,
    //             "longitude": -112.1129
    //         },
    //         "images": {
    //             "cover": "/images/places/grand-canyon/cover.jpg",
    //             "thumbnail": "/images/places/grand-canyon/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/grand-canyon/gallery1.jpg",
    //                 "/images/places/grand-canyon/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Nature",
    //             "Canyon",
    //             "Arizona",
    //             "USA"
    //         ]
    //     },
    //     {
    //         "id": 22,
    //         "name": "Louvre Museum",
    //         "slug": "louvre-museum",
    //         "country": "France",
    //         "city": "Paris",
    //         "continent": "Europe",
    //         "category": "Museum",
    //         "description": "The world's largest art museum and home to the Mona Lisa and thousands of historic masterpieces.",
    //         "visitorCountPerYear": "Approximately 8 million",
    //         "coordinates": {
    //             "latitude": 48.8606,
    //             "longitude": 2.3376
    //         },
    //         "images": {
    //             "cover": "/images/places/louvre-museum/cover.jpg",
    //             "thumbnail": "/images/places/louvre-museum/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/louvre-museum/gallery1.jpg",
    //                 "/images/places/louvre-museum/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Museum",
    //             "Art",
    //             "Paris",
    //             "France"
    //         ]
    //     },
    //     {
    //         "id": 23,
    //         "name": "Blue Mosque",
    //         "slug": "blue-mosque",
    //         "country": "Turkey",
    //         "city": "Istanbul",
    //         "continent": "Europe/Asia",
    //         "category": "Mosque",
    //         "description": "A magnificent Ottoman mosque famous for its blue İznik tiles and elegant domes.",
    //         "coordinates": {
    //             "latitude": 41.0054,
    //             "longitude": 28.9768
    //         },
    //         "images": {
    //             "cover": "/images/places/blue-mosque/cover.jpg",
    //             "thumbnail": "/images/places/blue-mosque/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/blue-mosque/gallery1.jpg",
    //                 "/images/places/blue-mosque/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Mosque",
    //             "Turkey",
    //             "Historic"
    //         ]
    //     },
    //     {
    //         "id": 24,
    //         "name": "Acropolis of Athens",
    //         "slug": "acropolis-athens",
    //         "country": "Greece",
    //         "city": "Athens",
    //         "continent": "Europe",
    //         "category": "Ancient Monument",
    //         "description": "An ancient citadel overlooking Athens, featuring the famous Parthenon temple.",
    //         "coordinates": {
    //             "latitude": 37.9715,
    //             "longitude": 23.7257
    //         },
    //         "images": {
    //             "cover": "/images/places/acropolis-athens/cover.jpg",
    //             "thumbnail": "/images/places/acropolis-athens/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/acropolis-athens/gallery1.jpg",
    //                 "/images/places/acropolis-athens/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Ancient",
    //             "History",
    //             "Athens"
    //         ]
    //     },
    //     {
    //         "id": 25,
    //         "name": "Mount Kilimanjaro",
    //         "slug": "mount-kilimanjaro",
    //         "country": "Tanzania",
    //         "city": "Moshi",
    //         "continent": "Africa",
    //         "category": "Mountain",
    //         "description": "Africa's highest mountain and one of the world's most popular trekking destinations.",
    //         "coordinates": {
    //             "latitude": -3.0674,
    //             "longitude": 37.3556
    //         },
    //         "images": {
    //             "cover": "/images/places/mount-kilimanjaro/cover.jpg",
    //             "thumbnail": "/images/places/mount-kilimanjaro/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/mount-kilimanjaro/gallery1.jpg",
    //                 "/images/places/mount-kilimanjaro/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Mountain",
    //             "Africa",
    //             "Adventure"
    //         ]
    //     },
    //     {
    //         "id": 26,
    //         "name": "Neuschwanstein Castle",
    //         "slug": "neuschwanstein-castle",
    //         "country": "Germany",
    //         "city": "Schwangau",
    //         "continent": "Europe",
    //         "category": "Castle",
    //         "description": "A fairy-tale castle in Bavaria that inspired Disney's Sleeping Beauty Castle.",
    //         "coordinates": {
    //             "latitude": 47.5576,
    //             "longitude": 10.7498
    //         },
    //         "images": {
    //             "cover": "/images/places/neuschwanstein-castle/cover.jpg",
    //             "thumbnail": "/images/places/neuschwanstein-castle/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/neuschwanstein-castle/gallery1.jpg",
    //                 "/images/places/neuschwanstein-castle/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Castle",
    //             "Germany",
    //             "Architecture"
    //         ]
    //     },
    //     {
    //         "id": 27,
    //         "name": "Banff National Park",
    //         "slug": "banff-national-park",
    //         "country": "Canada",
    //         "city": "Banff",
    //         "continent": "North America",
    //         "category": "National Park",
    //         "description": "Canada's oldest national park, famous for turquoise lakes, mountains, and wildlife.",
    //         "coordinates": {
    //             "latitude": 51.4968,
    //             "longitude": -115.9281
    //         },
    //         "images": {
    //             "cover": "/images/places/banff-national-park/cover.jpg",
    //             "thumbnail": "/images/places/banff-national-park/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/banff-national-park/gallery1.jpg",
    //                 "/images/places/banff-national-park/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Nature",
    //             "Canada",
    //             "Lakes"
    //         ]
    //     },
    //     {
    //         "id": 28,
    //         "name": "Moai Statues",
    //         "slug": "moai-statues",
    //         "country": "Chile",
    //         "city": "Easter Island",
    //         "continent": "South America",
    //         "category": "Archaeological Site",
    //         "description": "Massive stone statues created by the Rapa Nui people on Easter Island.",
    //         "coordinates": {
    //             "latitude": -27.1212,
    //             "longitude": -109.3664
    //         },
    //         "images": {
    //             "cover": "/images/places/moai-statues/cover.jpg",
    //             "thumbnail": "/images/places/moai-statues/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/moai-statues/gallery1.jpg",
    //                 "/images/places/moai-statues/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Easter Island",
    //             "History",
    //             "Chile"
    //         ]
    //     },
    //     {
    //         "id": 29,
    //         "name": "Victoria Falls",
    //         "slug": "victoria-falls",
    //         "country": "Zambia / Zimbabwe",
    //         "city": "Livingstone",
    //         "continent": "Africa",
    //         "category": "Waterfall",
    //         "description": "One of the world's largest waterfalls, known locally as 'The Smoke That Thunders'.",
    //         "coordinates": {
    //             "latitude": -17.9243,
    //             "longitude": 25.8572
    //         },
    //         "images": {
    //             "cover": "/images/places/victoria-falls/cover.jpg",
    //             "thumbnail": "/images/places/victoria-falls/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/victoria-falls/gallery1.jpg",
    //                 "/images/places/victoria-falls/gallery2.jpg"
    //             ]
    //         },
    //         "tags": [
    //             "Waterfall",
    //             "Africa",
    //             "Nature"
    //         ]
    //     },
    //     {
    //         "id": 30,
    //         "name": "Great Barrier Reef",
    //         "slug": "great-barrier-reef",
    //         "country": "Australia",
    //         "city": "Queensland",
    //         "continent": "Australia",
    //         "category": "Marine Park",
    //         "description": "The world's largest coral reef system and one of the most important marine ecosystems.",
    //         "coordinates": {
    //             "latitude": -18.2871,
    //             "longitude": 147.6992
    //         },
    //         "images": {
    //             "cover": "/images/places/great-barrier-reef/cover.jpg",
    //             "thumbnail": "/images/places/great-barrier-reef/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/great-barrier-reef/gallery1.jpg",
    //                 "/images/places/great-barrier-reef/gallery2.jpg"
    //             ]
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Coral Reef",
    //             "Australia",
    //             "Diving",
    //             "Nature"
    //         ]
    //     },
    //     {
    //         "id": 31,
    //         "name": "The White House",
    //         "slug": "the-white-house",
    //         "country": "United States",
    //         "city": "Washington, D.C.",
    //         "continent": "North America",
    //         "category": "Government Building",
    //         "description": "The official residence and workplace of the President of the United States.",
    //         "visitorCountPerYear": "Hundreds of thousands",
    //         "bestTimeToVisit": "Spring and Autumn",
    //         "recommendedVisitDuration": "1-2 hours",
    //         "coordinates": {
    //             "latitude": 38.8977,
    //             "longitude": -77.0365
    //         },
    //         "images": {
    //             "cover": "/images/places/the-white-house/cover.jpg",
    //             "thumbnail": "/images/places/the-white-house/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/the-white-house/gallery1.jpg",
    //                 "/images/places/the-white-house/gallery2.jpg"
    //             ]
    //         },
    //         "links": {
    //             "official": "https://www.whitehouse.gov",
    //             "wikipedia": "https://en.wikipedia.org/wiki/White_House"
    //         },
    //         "unesco": false,
    //         "tags": [
    //             "USA",
    //             "Washington DC",
    //             "Government",
    //             "Historic"
    //         ]
    //     },
    //     {
    //         "id": 32,
    //         "name": "Buckingham Palace",
    //         "slug": "buckingham-palace",
    //         "country": "United Kingdom",
    //         "city": "London",
    //         "continent": "Europe",
    //         "category": "Royal Palace",
    //         "description": "The official London residence of the British monarch and one of the city's most visited attractions.",
    //         "visitorCountPerYear": "Millions",
    //         "bestTimeToVisit": "Summer",
    //         "recommendedVisitDuration": "2 hours",
    //         "coordinates": {
    //             "latitude": 51.5014,
    //             "longitude": -0.1419
    //         },
    //         "images": {
    //             "cover": "/images/places/buckingham-palace/cover.jpg",
    //             "thumbnail": "/images/places/buckingham-palace/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/buckingham-palace/gallery1.jpg",
    //                 "/images/places/buckingham-palace/gallery2.jpg"
    //             ]
    //         },
    //         "links": {
    //             "official": "https://www.rct.uk",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Buckingham_Palace"
    //         },
    //         "unesco": false,
    //         "tags": [
    //             "London",
    //             "Royal",
    //             "Palace",
    //             "UK"
    //         ]
    //     },
    //     {
    //         "id": 33,
    //         "name": "The Kremlin",
    //         "slug": "the-kremlin",
    //         "country": "Russia",
    //         "city": "Moscow",
    //         "continent": "Europe",
    //         "category": "Historic Fortress",
    //         "description": "A fortified complex in the heart of Moscow that serves as the official residence of the Russian President.",
    //         "visitorCountPerYear": "Millions",
    //         "bestTimeToVisit": "May to September",
    //         "recommendedVisitDuration": "3-4 hours",
    //         "coordinates": {
    //             "latitude": 55.752,
    //             "longitude": 37.6175
    //         },
    //         "images": {
    //             "cover": "/images/places/the-kremlin/cover.jpg",
    //             "thumbnail": "/images/places/the-kremlin/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/the-kremlin/gallery1.jpg",
    //                 "/images/places/the-kremlin/gallery2.jpg"
    //             ]
    //         },
    //         "links": {
    //             "official": "https://www.kreml.ru",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Moscow_Kremlin"
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "Russia",
    //             "Moscow",
    //             "Fortress",
    //             "UNESCO"
    //         ]
    //     },
    //     {
    //         "id": 34,
    //         "name": "The Forbidden City",
    //         "slug": "the-forbidden-city",
    //         "country": "China",
    //         "city": "Beijing",
    //         "continent": "Asia",
    //         "category": "Imperial Palace",
    //         "description": "The former imperial palace of China, featuring nearly one thousand historic buildings.",
    //         "visitorCountPerYear": "More than 17 million",
    //         "bestTimeToVisit": "April to October",
    //         "recommendedVisitDuration": "Half day",
    //         "coordinates": {
    //             "latitude": 39.9163,
    //             "longitude": 116.3972
    //         },
    //         "images": {
    //             "cover": "/images/places/the-forbidden-city/cover.jpg",
    //             "thumbnail": "/images/places/the-forbidden-city/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/the-forbidden-city/gallery1.jpg",
    //                 "/images/places/the-forbidden-city/gallery2.jpg"
    //             ]
    //         },
    //         "links": {
    //             "official": "https://en.dpm.org.cn",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Forbidden_City"
    //         },
    //         "unesco": true,
    //         "tags": [
    //             "China",
    //             "Palace",
    //             "Beijing",
    //             "UNESCO"
    //         ]
    //     },
    //     {
    //         "id": 35,
    //         "name": "Mount Rushmore",
    //         "slug": "mount-rushmore",
    //         "country": "United States",
    //         "city": "Keystone",
    //         "continent": "North America",
    //         "category": "National Memorial",
    //         "description": "A massive granite sculpture featuring the faces of four U.S. presidents carved into the Black Hills of South Dakota.",
    //         "visitorCountPerYear": "Approximately 2 million",
    //         "bestTimeToVisit": "May to September",
    //         "recommendedVisitDuration": "2-3 hours",
    //         "coordinates": {
    //             "latitude": 43.8791,
    //             "longitude": -103.4591
    //         },
    //         "images": {
    //             "cover": "/images/places/mount-rushmore/cover.jpg",
    //             "thumbnail": "/images/places/mount-rushmore/thumb.jpg",
    //             "gallery": [
    //                 "/images/places/mount-rushmore/gallery1.jpg",
    //                 "/images/places/mount-rushmore/gallery2.jpg"
    //             ]
    //         },
    //         "links": {
    //             "official": "https://www.nps.gov/moru",
    //             "wikipedia": "https://en.wikipedia.org/wiki/Mount_Rushmore"
    //         },
    //         "unesco": false,
    //         "tags": [
    //             "USA",
    //             "Memorial",
    //             "Presidents",
    //             "South Dakota"
    //         ]
    //     }
    // ]
    
    const IMG_PATH = "src/assets/places/"
    



    const userData = useContext(UserContext)
    const packages = userData.places.slice(0, 12);
    
     useEffect(()=>{
       window.scrollTo(0, 0);
    },[])
    return (<>
        <div >
            <div className='packagesHeadSec'>
                <div className='pkHeadTexts'>
                    <p className='pkTxt1'>Home {'>'} Tour Packages</p>
                    <p className='h1 pkTxt2'>Explore Amazing <br />Tour Packages</p>
                    <p className='pkTxt3'>Find the best destination around the world with our exclusice tour packages</p>
                    <div className="input-group">
                        <input type="search" className="form-control" placeholder="Search tou destination or packages" aria-label="Search" aria-describedby="search-addon" />
                        <span className="input-group-text" id="search-addon">
                            <i className="bi bi-search"></i>
                        </span>

                    </div>
                </div>
            </div>
            <div className='container '>
                <div className='row'>
                    <div className='col-sm-2'>
                        <div style={{ display: 'flex' }} className='align-items-center text-center'>
                            <i className="bi bi-geo-alt pkIcons"></i>
                            <div><span>Destination</span><br />
                                <select name="" id="">
                                    <option value="">South Africs</option>
                                    <option value="">Paris</option>
                                    <option value="">UAE</option>
                                    <option value="">Sydny</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div style={{ display: 'flex' }} className='align-items-center text-center'>
                            <i className="bi bi-clock pkIcons"></i>
                            <div><span>Duration</span><br />
                                <select name="" id="">
                                    <option value="">One Week</option>
                                    <option value="">Three Days</option>
                                    <option value="">One Day</option>
                                    <option value="">10 Days</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-2'>
                        <div style={{ display: 'flex' }} className='align-items-center text-center'>
                            <i className="bi bi-currency-dollar pkIcons"></i>
                            <div><span>Budget</span><br />
                                <select name="" id="">
                                    <option value="">0 - 10000</option>
                                    <option value="">10001-100000</option>
                                    <option value="">100000 and </option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-2'>
                        <div style={{ display: 'flex' }} className='align-items-center text-center'>
                            <i className="bi bi-sun pkIcons"></i>
                            <div><span>Travel Type</span><br />
                                <select name="" id="">
                                    <option value="">Car</option>
                                    <option value="">Bus</option>
                                    <option value="">Flight</option>
                                    <option value="">Treking</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='col-sm-2'>
                        <div style={{ display: 'flex' }} className='align-items-center text-center'>
                            <i className="bi bi-sort-down pkIcons"></i>
                            <div><span>SOry by</span><br />
                                <select name="" id="">
                                    <option value="">Latest</option>
                                    <option value="">Popular</option>
                                    <option value="">Low to High</option>
                                    <option value="">High to Low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <div className='container'>
                <div className='row ' style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        packages.map((p, i) =>

                            // <div className="col-sm-3 placeCard">
                            //     <img src={IMG_PATH + p.images.cover} alt={p.name} className='placeImg' />
                            //     <div className="placeCardText">
                            //         <p className='pTitleTxt'>{p.name}</p>
                            //         <p className='pLocTxr'>{p.city} | {p.country}</p>
                            //     </div>
                            // </div>
                            // <PackageCard pack={p} path={IMG_PATH}></PackageCard>
                            <Card key={p.id} pack={p} path={IMG_PATH} select= {userData.setSelectedPackage}></Card>
                        )
                    }

                </div>
            </div>

        </div>
    </>)
}
function Card({pack, path, select}) {
    const navigate = useNavigate()
    return <div className="col-sm-3 placeCard" onClick={(e)=>{
        select(pack);
        navigate("/view/"+pack.id)
        }}>
       <img src={path + pack.destination.images.cover} alt={pack.packageName} className='placeImg' />
          <div className="placeCardText">
            <p className='pTitleTxt'>{pack.packageName}</p>
            <p className='pLocTxr'>{pack.destination.city} | {pack.destination.country}</p> 
        </div>
    </div>

}