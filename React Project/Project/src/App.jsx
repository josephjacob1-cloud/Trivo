import './css/style.css'
import './components/Navbar'
import Navbar from './components/Navbar'
import { useEffect, useState } from 'react'
import UserContext from "./components/UserContext"
import Home from './components/Home'
import Footer from './components/Footer'
import Packages from './components/package/Packages'
import Consultant from './components/Consultant/Consultant'
import MyBooking from './components/myBooking/MyBooking'
import AboutUs from './components/AboutUs'
import ContactUs from './components/Consultant/ContactUs'
import PackageView from './components/package/PackageView'
import { BrowserRouter, Route, Routes, NavLink, useNavigate, Outlet } from 'react-router-dom'
import ConsultantList from './components/Consultant/ConsultantList'
import ConsultantReports from './components/Consultant/ConsultantReports'
import ConsultantAssign from './components/Consultant/ConsultantAssign'
import ConsultantRegistration from './components/Consultant/ConsultantRegistration'
import MyTours from './components/myBooking/MyTours'
import MyEnquiry from './components/myBooking/MyEnquiry'
import MySupport from './components/myBooking/MySupport'
import MyApprovals from './components/myBooking/MyApprovals'
import Login from './components/Login'
import SignUp from './components/SignUp'
import PackageManagement from './components/package/PackageManagement'
import PackageList from './components/package/PackageList'
import PackageApprovals from './components/package/PackageApprovals'
import PackageCreate from './components/package/PackageCreate'
import DestinationManagement from './components/destination/DestinationManagement'
import DestinationList from './components/destination/DestinationList'
import ProtectedRoute from './components/ProtectedRoute'
import DestinationCreate from './components/destination/DestinationCreate'
import DestinationEdit from './components/destination/DestinationEdit'
import ScrollToTop from './components/ScrollToTop'




function App() {
  const [isLogin, setIsLogin] = useState(false)
  const [userName, setUserName] = useState("Guest")
  const [page, setPage] = useState("home")

  const places = [
    {
      "id": 1,
      "packageCode": "TW-FR-001",
      "packageName": "Paris Explorer",
      "slug": "paris-explorer",
      "destination": {
        "id": 1,
        "name": "Eiffel Tower",
        "slug": "eiffel-tower",
        "country": "France",
        "city": "Paris",
        "continent": "Europe",
        "category": "Monument",
        "description": "An iconic iron tower in Paris and one of the world's most recognizable landmarks. It offers panoramic views of the city from multiple observation decks.",
        "visitorCountPerYear": "Approximately 7 million",
        "bestTimeToVisit": "April to June, September to October",
        "recommendedVisitDuration": "2-3 hours",
        "coordinates": {
          "latitude": 48.85837,
          "longitude": 2.294481
        },
        "address": {
          "street": "Champ de Mars",
          "postalCode": "75007",
          "city": "Paris",
          "country": "France"
        },
        "images": {
          "cover": "eiffel-tower-paris.jpg",
          "thumbnail": "eiffel-tower-thumb.jpg",
          "gallery": [
            "eiffel-gallery-1.jpg",
            "eiffel-gallery-2.jpg",
            "eiffel-gallery-3.jpg",
            "eiffel-gallery-4.jpg"
          ]
        },
        "links": {
          "official": "https://www.toureiffel.paris",
          "wikipedia": "https://en.wikipedia.org/wiki/Eiffel_Tower",
          "googleMaps": "https://maps.google.com/?q=48.85837,2.294481"
        },
        "unesco": false,
        "newSevenWonders": false,
        "tags": [
          "Paris",
          "France",
          "Tower",
          "Landmark",
          "Photography"
        ]
      },
      "category": "International",
      "tourType": "Group Tour",
      "duration": {
        "days": 4,
        "nights": 3,
        "text": "4 Days / 3 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 899,
        "discount": 15,
        "offer": 764
      },
      "rating": {
        "average": 4.8,
        "totalReviews": 245
      },
      "description": "Experience the beauty of Paris with guided sightseeing, luxury accommodation, delicious cuisine, and unforgettable memories. Explore the Eiffel Tower, Seine River, famous museums, and the vibrant streets of Paris.",
      "coverImage": "paris-explorer-cover.jpg",
      "gallery": [
        "paris-gallery-1.jpg",
        "paris-gallery-2.jpg",
        "paris-gallery-3.jpg",
        "paris-gallery-4.jpg"
      ],
      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Eiffel Tower Entry",
        "Seine River Cruise",
        "Louvre Museum Visit",
        "Professional English Guide",
        "Luxury Air-Conditioned Coach",
        "Free Wi-Fi During Travel"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Paris",
          "description": "Airport pickup, hotel check-in, evening leisure walk around the Eiffel Tower."
        },
        {
          "day": 2,
          "title": "Paris City Tour",
          "description": "Visit the Eiffel Tower, Seine River Cruise, Arc de Triomphe and Champs-Élysées."
        },
        {
          "day": 3,
          "title": "Museum & Shopping",
          "description": "Explore the Louvre Museum followed by shopping at famous Paris boutiques."
        },
        {
          "day": 4,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and airport transfer."
        }
      ],
      "inclusions": [
        "3 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Luxury AC Coach",
        "Professional Tour Guide",
        "Sightseeing Tickets",
        "All Local Transfers"
      ],
      "exclusions": [
        "International Airfare",
        "Visa Charges",
        "Lunch & Dinner",
        "Travel Insurance",
        "Personal Expenses",
        "Tips & Gratuities"
      ],
      "hotel": {
        "name": "Hotel Paris Central",
        "category": "4 Star",
        "roomType": "Deluxe Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM"
      },
      "transport": {
        "type": "Luxury AC Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "Charles de Gaulle Airport",
      "availableDates": [
        "2026-08-10",
        "2026-08-20",
        "2026-09-05",
        "2026-09-25"
      ],
      "maxGuests": 30,
      "minimumAge": 5,
      "languages": [
        "English",
        "French"
      ],
      "cancellationPolicy": "Free cancellation up to 48 hours before departure.",
      "importantInformation": [
        "Carry a valid passport.",
        "Wear comfortable walking shoes.",
        "Keep travel insurance documents with you.",
        "Follow the tour guide's instructions at all attractions."
      ],
      "faq": [
        {
          "question": "Are flight tickets included?",
          "answer": "No. International airfare is not included in the package."
        },
        {
          "question": "Is airport pickup available?",
          "answer": "Yes. Complimentary airport pickup and drop are included."
        },
        {
          "question": "Can children join this tour?",
          "answer": "Yes. Children above 5 years are welcome."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "Rahul D",
          "rating": 5,
          "date": "2026-04-15",
          "comment": "Fantastic experience! The itinerary was well planned and the hotel was excellent."
        },
        {
          "id": 2,
          "name": "Sarah M",
          "rating": 4,
          "date": "2026-05-20",
          "comment": "Great sightseeing and professional guide. Highly recommended."
        },
        {
          "id": 3,
          "name": "Anita Joseph",
          "rating": 5,
          "date": "2026-06-18",
          "comment": "A memorable Paris vacation with excellent service."
        }
      ],
      "contact": {
        "phone": "+1-234-567-890",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 1284,
      "wishlistCount": 542,
      "createdDate": "2026-01-15",
      "updatedDate": "2026-06-20"
    },
    {
      "id": 2,
      "packageCode": "TW-CN-002",
      "packageName": "Great Wall Discovery",
      "slug": "great-wall-discovery",
      "destination": {
        "id": 2,
        "name": "Great Wall of China",
        "slug": "great-wall-of-china",
        "country": "China",
        "city": "Beijing Region",
        "continent": "Asia",
        "category": "Historic Monument",
        "description": "An ancient series of fortifications stretching thousands of kilometers across northern China.",
        "visitorCountPerYear": "More than 10 million",
        "bestTimeToVisit": "Spring and Autumn",
        "recommendedVisitDuration": "Half day to full day",
        "coordinates": {
          "latitude": 40.4319,
          "longitude": 116.5704
        },
        "images": {
          "cover": "great-wall-of-china.jpg",
          "thumbnail": "great-wall-thumb.jpg",
          "gallery": [
            "great-wall-gallery-1.jpg",
            "great-wall-gallery-2.jpg",
            "great-wall-gallery-3.jpg",
            "great-wall-gallery-4.jpg"
          ]
        },
        "links": {
          "wikipedia": "https://en.wikipedia.org/wiki/Great_Wall_of_China",
          "googleMaps": "https://maps.google.com/?q=40.4319,116.5704"
        },
        "unesco": true,
        "newSevenWonders": true,
        "tags": [
          "China",
          "Great Wall",
          "UNESCO",
          "Historic",
          "Wonder"
        ]
      },
      "category": "International",
      "tourType": "Group Tour",
      "duration": {
        "days": 5,
        "nights": 4,
        "text": "5 Days / 4 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 1099,
        "discount": 18,
        "offer": 901
      },
      "rating": {
        "average": 4.9,
        "totalReviews": 318
      },
      "description": "Discover China's rich history with an unforgettable journey through Beijing and the Great Wall. Visit historic landmarks, experience authentic Chinese culture, and enjoy comfortable accommodation with guided sightseeing.",
      "coverImage": "great-wall-package-cover.jpg",
      "gallery": [
        "beijing-1.jpg",
        "great-wall-1.jpg",
        "great-wall-2.jpg",
        "forbidden-city.jpg"
      ],
      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Great Wall Visit",
        "Forbidden City Tour",
        "Tiananmen Square",
        "Professional English Guide",
        "Luxury Air-Conditioned Coach",
        "Traditional Chinese Dinner"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Beijing",
          "description": "Airport pickup, hotel check-in and evening free for leisure."
        },
        {
          "day": 2,
          "title": "Beijing City Tour",
          "description": "Visit Tiananmen Square, the Forbidden City and Wangfujing Street."
        },
        {
          "day": 3,
          "title": "Great Wall Excursion",
          "description": "Full-day guided tour to the Mutianyu section of the Great Wall with cable car experience."
        },
        {
          "day": 4,
          "title": "Temple of Heaven",
          "description": "Explore the Temple of Heaven and enjoy local cultural performances."
        },
        {
          "day": 5,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and airport transfer."
        }
      ],
      "inclusions": [
        "4 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Coach",
        "Professional Tour Guide",
        "Great Wall Entry Ticket",
        "City Sightseeing"
      ],
      "exclusions": [
        "International Airfare",
        "Visa Charges",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],
      "hotel": {
        "name": "Beijing Grand Hotel",
        "category": "4 Star",
        "roomType": "Deluxe Room",
        "checkIn": "02:00 PM",
        "checkOut": "12:00 PM"
      },
      "transport": {
        "type": "Luxury AC Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "Beijing Capital International Airport",
      "availableDates": [
        "2026-08-15",
        "2026-09-01",
        "2026-09-20",
        "2026-10-05"
      ],
      "maxGuests": 25,
      "minimumAge": 6,
      "languages": [
        "English",
        "Chinese"
      ],
      "cancellationPolicy": "Free cancellation up to 72 hours before departure.",
      "importantInformation": [
        "Carry your passport at all times.",
        "Wear comfortable walking shoes.",
        "Bring a light jacket during spring and autumn.",
        "Keep drinking water with you while visiting the Great Wall."
      ],
      "faq": [
        {
          "question": "Is the Great Wall cable car included?",
          "answer": "Yes. Cable car tickets are included in the package."
        },
        {
          "question": "Do I need a Chinese visa?",
          "answer": "Yes. Travelers should obtain a valid visa before departure."
        },
        {
          "question": "Is this tour suitable for senior citizens?",
          "answer": "Yes. However, climbing the Great Wall requires moderate physical fitness."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "Michael T",
          "rating": 5,
          "date": "2026-03-22",
          "comment": "The Great Wall was absolutely breathtaking. Everything was perfectly organized."
        },
        {
          "id": 2,
          "name": "Priya N",
          "rating": 5,
          "date": "2026-05-18",
          "comment": "Excellent hotel, friendly guide and an unforgettable experience."
        },
        {
          "id": 3,
          "name": "Daniel W",
          "rating": 4,
          "date": "2026-06-12",
          "comment": "Very good itinerary with enough free time to explore Beijing."
        }
      ],
      "contact": {
        "phone": "+1-234-567-890",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 978,
      "wishlistCount": 386,
      "createdDate": "2026-01-20",
      "updatedDate": "2026-06-25"
    },
    {
      "id": 3,
      "packageCode": "TW-US-003",
      "packageName": "New York Explorer",
      "slug": "new-york-explorer",
      "destination": {
        "id": 3,
        "name": "Statue of Liberty",
        "slug": "statue-of-liberty",
        "country": "United States",
        "city": "New York",
        "continent": "North America",
        "category": "Monument",
        "description": "The Statue of Liberty is one of the most iconic symbols of freedom in the world. Located on Liberty Island, it welcomes millions of visitors every year and offers spectacular views of New York Harbor.",
        "visitorCountPerYear": "Approximately 4.5 million",
        "bestTimeToVisit": "April to June, September to November",
        "recommendedVisitDuration": "4-6 hours",
        "coordinates": {
          "latitude": 40.6892,
          "longitude": -74.0445
        },
        "address": {
          "street": "Liberty Island",
          "postalCode": "10004",
          "city": "New York",
          "country": "United States"
        },
        "images": {
          "cover": "statue-of-liberty.jpg",
          "thumbnail": "statue-of-liberty-thumb.jpg",
          "gallery": [
            "liberty-gallery-1.jpg",
            "liberty-gallery-2.jpg",
            "liberty-gallery-3.jpg",
            "liberty-gallery-4.jpg"
          ]
        },
        "links": {
          "official": "https://www.nps.gov/stli/",
          "wikipedia": "https://en.wikipedia.org/wiki/Statue_of_Liberty",
          "googleMaps": "https://maps.google.com/?q=40.6892,-74.0445"
        },
        "unesco": true,
        "newSevenWonders": false,
        "tags": [
          "USA",
          "New York",
          "Liberty",
          "Monument",
          "Freedom"
        ]
      },
      "category": "International",
      "tourType": "Group Tour",
      "duration": {
        "days": 5,
        "nights": 4,
        "text": "5 Days / 4 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 1299,
        "discount": 12,
        "offer": 1143
      },
      "rating": {
        "average": 4.8,
        "totalReviews": 421
      },
      "description": "Explore the vibrant city of New York with visits to the Statue of Liberty, Times Square, Central Park, Brooklyn Bridge, and the Empire State Building. Enjoy guided sightseeing, comfortable accommodation, and unforgettable city experiences.",
      "coverImage": "new-york-explorer-cover.jpg",
      "gallery": [
        "newyork-1.jpg",
        "newyork-2.jpg",
        "newyork-3.jpg",
        "newyork-4.jpg"
      ],
      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Statue of Liberty Ferry Ticket",
        "Empire State Building Visit",
        "Central Park Tour",
        "Times Square Night Tour",
        "Brooklyn Bridge Walk",
        "Professional Tour Guide",
        "Luxury AC Coach"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in New York",
          "description": "Airport pickup, hotel check-in and evening visit to Times Square."
        },
        {
          "day": 2,
          "title": "Statue of Liberty",
          "description": "Ferry ride to Liberty Island, Statue of Liberty and Ellis Island Museum visit."
        },
        {
          "day": 3,
          "title": "City Sightseeing",
          "description": "Visit Central Park, Rockefeller Center, Fifth Avenue and Empire State Building."
        },
        {
          "day": 4,
          "title": "Brooklyn & Shopping",
          "description": "Walk across Brooklyn Bridge followed by shopping and leisure time."
        },
        {
          "day": 5,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and airport transfer."
        }
      ],
      "inclusions": [
        "4 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Coach",
        "Professional Tour Guide",
        "Statue of Liberty Ferry Ticket",
        "City Sightseeing"
      ],
      "exclusions": [
        "International Airfare",
        "USA Visa Charges",
        "Lunch & Dinner",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],
      "hotel": {
        "name": "Manhattan Grand Hotel",
        "category": "4 Star",
        "roomType": "Deluxe Room",
        "checkIn": "03:00 PM",
        "checkOut": "11:00 AM"
      },
      "transport": {
        "type": "Luxury AC Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "John F. Kennedy International Airport (JFK)",
      "availableDates": [
        "2026-08-12",
        "2026-09-08",
        "2026-10-10",
        "2026-11-05"
      ],
      "maxGuests": 30,
      "minimumAge": 5,
      "languages": [
        "English",
        "Spanish"
      ],
      "cancellationPolicy": "Free cancellation up to 72 hours before departure.",
      "importantInformation": [
        "Carry your passport and visa.",
        "Wear comfortable walking shoes.",
        "Keep a light jacket during evenings.",
        "Arrive at the ferry terminal at least 30 minutes before departure."
      ],
      "faq": [
        {
          "question": "Is the Statue of Liberty ticket included?",
          "answer": "Yes. Ferry tickets to Liberty Island and Ellis Island are included."
        },
        {
          "question": "Are meals included?",
          "answer": "Daily breakfast is included. Lunch and dinner are excluded."
        },
        {
          "question": "Can I visit the crown of the Statue of Liberty?",
          "answer": "Crown access depends on availability and must be booked in advance."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "James R",
          "rating": 5,
          "date": "2026-03-18",
          "comment": "Fantastic trip! The Statue of Liberty was the highlight of our vacation."
        },
        {
          "id": 2,
          "name": "Aisha K",
          "rating": 5,
          "date": "2026-05-06",
          "comment": "Very well organized. Excellent hotel and knowledgeable guide."
        },
        {
          "id": 3,
          "name": "Carlos M",
          "rating": 4,
          "date": "2026-06-14",
          "comment": "Great itinerary with enough free time to explore New York."
        }
      ],
      "contact": {
        "phone": "+1-234-567-890",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 1452,
      "wishlistCount": 612,
      "createdDate": "2026-02-01",
      "updatedDate": "2026-06-30"
    },
    {
      "id": 4,
      "packageCode": "TW-PE-004",
      "packageName": "Machu Picchu Adventure",
      "slug": "machu-picchu-adventure",
      "destination": {
        "id": 4,
        "name": "Machu Picchu",
        "slug": "machu-picchu",
        "country": "Peru",
        "city": "Cusco",
        "continent": "South America",
        "category": "Historic Site",
        "description": "Machu Picchu is an ancient Incan citadel nestled high in the Andes Mountains. It is one of the world's most famous archaeological sites and a UNESCO World Heritage Site.",
        "visitorCountPerYear": "Approximately 1.5 million",
        "bestTimeToVisit": "May to September",
        "recommendedVisitDuration": "Full Day",
        "coordinates": {
          "latitude": -13.1631,
          "longitude": -72.5450
        },
        "address": {
          "street": "Historic Sanctuary of Machu Picchu",
          "postalCode": "08680",
          "city": "Cusco Region",
          "country": "Peru"
        },
        "images": {
          "cover": "machu-picchu-view.jpg",
          "thumbnail": "machu-picchu-thumb.jpg",
          "gallery": [
            "machu-gallery-1.jpg",
            "machu-gallery-2.jpg",
            "machu-gallery-3.jpg",
            "machu-gallery-4.jpg"
          ]
        },
        "links": {
          "official": "https://www.peru.travel",
          "wikipedia": "https://en.wikipedia.org/wiki/Machu_Picchu",
          "googleMaps": "https://maps.google.com/?q=-13.1631,-72.5450"
        },
        "unesco": true,
        "newSevenWonders": true,
        "tags": [
          "Peru",
          "Machu Picchu",
          "UNESCO",
          "Inca",
          "Adventure"
        ]
      },
      "category": "International",
      "tourType": "Adventure Tour",
      "duration": {
        "days": 6,
        "nights": 5,
        "text": "6 Days / 5 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 1499,
        "discount": 15,
        "offer": 1274
      },
      "rating": {
        "average": 4.9,
        "totalReviews": 376
      },
      "description": "Experience the breathtaking beauty of Machu Picchu with guided archaeological tours, scenic train journeys, and the rich culture of Peru. Explore Cusco, the Sacred Valley, and the magnificent Inca citadel.",
      "coverImage": "machu-package-cover.jpg",
      "gallery": [
        "cusco-1.jpg",
        "machu-1.jpg",
        "machu-2.jpg",
        "sacred-valley.jpg"
      ],
      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Machu Picchu Entry Ticket",
        "Scenic Train Journey",
        "Sacred Valley Tour",
        "Cusco City Tour",
        "Professional Tour Guide",
        "Luxury Tourist Coach"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cusco",
          "description": "Airport pickup, hotel check-in and leisure time to acclimatize to the altitude."
        },
        {
          "day": 2,
          "title": "Cusco City Tour",
          "description": "Visit Plaza de Armas, Qorikancha Temple and Sacsayhuamán Fortress."
        },
        {
          "day": 3,
          "title": "Sacred Valley",
          "description": "Explore Pisac Market, Ollantaytambo Fortress and overnight stay."
        },
        {
          "day": 4,
          "title": "Machu Picchu",
          "description": "Scenic train ride followed by a guided tour of Machu Picchu."
        },
        {
          "day": 5,
          "title": "Leisure & Shopping",
          "description": "Free time for shopping, local cuisine and optional cultural activities."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and airport transfer."
        }
      ],
      "inclusions": [
        "5 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury Tourist Coach",
        "Round Trip Train Tickets",
        "Machu Picchu Entry Ticket",
        "Professional English Guide",
        "City Sightseeing"
      ],
      "exclusions": [
        "International Airfare",
        "Peru Visa Charges (if applicable)",
        "Lunch & Dinner",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Adventure Activities"
      ],
      "hotel": {
        "name": "Cusco Mountain Resort",
        "category": "4 Star",
        "roomType": "Deluxe Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM"
      },
      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "Alejandro Velasco Astete International Airport, Cusco",
      "availableDates": [
        "2026-08-18",
        "2026-09-12",
        "2026-10-08",
        "2026-11-10"
      ],
      "maxGuests": 20,
      "minimumAge": 10,
      "languages": [
        "English",
        "Spanish"
      ],
      "cancellationPolicy": "Free cancellation up to 7 days before departure.",
      "importantInformation": [
        "Carry your passport.",
        "Acclimatize to the altitude before strenuous activities.",
        "Wear hiking shoes and comfortable clothing.",
        "Bring sunscreen, sunglasses and a reusable water bottle."
      ],
      "faq": [
        {
          "question": "Is the train ticket included?",
          "answer": "Yes. Round-trip scenic train tickets are included."
        },
        {
          "question": "Is hiking mandatory?",
          "answer": "No. Most visitors can comfortably explore the main archaeological site without extensive hiking."
        },
        {
          "question": "What is the altitude of Machu Picchu?",
          "answer": "Approximately 2,430 meters (7,970 feet) above sea level."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "Emily J",
          "rating": 5,
          "date": "2026-04-12",
          "comment": "Absolutely unforgettable! Machu Picchu exceeded all expectations."
        },
        {
          "id": 2,
          "name": "Arun K",
          "rating": 5,
          "date": "2026-05-28",
          "comment": "Excellent organization, knowledgeable guide and beautiful scenery."
        },
        {
          "id": 3,
          "name": "Sophia L",
          "rating": 4,
          "date": "2026-06-16",
          "comment": "Wonderful experience with comfortable accommodation and great sightseeing."
        }
      ],
      "contact": {
        "phone": "+1-234-567-890",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 864,
      "wishlistCount": 395,
      "createdDate": "2026-02-10",
      "updatedDate": "2026-06-28"
    },
    {
      "id": 5,
      "packageCode": "TW-IN-005",
      "packageName": "Taj Mahal Heritage Tour",
      "slug": "taj-mahal-heritage-tour",
      "destination": {
        "id": 5,
        "name": "Taj Mahal",
        "slug": "taj-mahal",
        "country": "India",
        "city": "Agra",
        "continent": "Asia",
        "category": "Monument",
        "description": "The Taj Mahal is an ivory-white marble mausoleum built by Mughal Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is one of the world's most admired architectural masterpieces.",
        "visitorCountPerYear": "Approximately 8 million",
        "bestTimeToVisit": "October to March",
        "recommendedVisitDuration": "3-5 hours",
        "coordinates": {
          "latitude": 27.1751,
          "longitude": 78.0421
        },
        "address": {
          "street": "Dharmapuri",
          "postalCode": "282001",
          "city": "Agra",
          "country": "India"
        },
        "images": {
          "cover": "taj-mahal.jpg",
          "thumbnail": "taj-mahal-thumb.jpg",
          "gallery": [
            "taj-gallery-1.jpg",
            "taj-gallery-2.jpg",
            "taj-gallery-3.jpg",
            "taj-gallery-4.jpg"
          ]
        },
        "links": {
          "official": "https://www.tajmahal.gov.in",
          "wikipedia": "https://en.wikipedia.org/wiki/Taj_Mahal",
          "googleMaps": "https://maps.google.com/?q=27.1751,78.0421"
        },
        "unesco": true,
        "newSevenWonders": true,
        "tags": [
          "India",
          "Agra",
          "Taj Mahal",
          "UNESCO",
          "Wonder"
        ]
      },
      "category": "Domestic",
      "tourType": "Heritage Tour",
      "duration": {
        "days": 4,
        "nights": 3,
        "text": "4 Days / 3 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 699,
        "discount": 15,
        "offer": 594
      },
      "rating": {
        "average": 4.9,
        "totalReviews": 512
      },
      "description": "Discover India's rich Mughal heritage with a memorable journey to the Taj Mahal, Agra Fort, Fatehpur Sikri and the bustling local markets of Agra. Enjoy comfortable accommodation, guided sightseeing and authentic Indian cuisine.",
      "coverImage": "taj-package-cover.jpg",
      "gallery": [
        "taj-tour-1.jpg",
        "taj-tour-2.jpg",
        "agra-fort.jpg",
        "fatehpur-sikri.jpg"
      ],
      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport/Railway Station Pickup & Drop",
        "Taj Mahal Sunrise Visit",
        "Agra Fort Tour",
        "Fatehpur Sikri Excursion",
        "Professional Tour Guide",
        "Luxury Air-Conditioned Coach",
        "Local Shopping Experience"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Agra",
          "description": "Pickup from airport or railway station, hotel check-in and evening visit to Mehtab Bagh."
        },
        {
          "day": 2,
          "title": "Taj Mahal & Agra Fort",
          "description": "Early morning visit to the Taj Mahal followed by Agra Fort and local handicraft shopping."
        },
        {
          "day": 3,
          "title": "Fatehpur Sikri",
          "description": "Excursion to Fatehpur Sikri with guided sightseeing and local cuisine."
        },
        {
          "day": 4,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to airport or railway station."
        }
      ],
      "inclusions": [
        "3 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport/Railway Transfers",
        "Luxury AC Vehicle",
        "Professional Tour Guide",
        "Sightseeing as per Itinerary",
        "All Toll & Parking Charges"
      ],
      "exclusions": [
        "Airfare or Train Tickets",
        "Monument Entry Fees",
        "Lunch & Dinner",
        "Travel Insurance",
        "Personal Expenses",
        "Camera Charges"
      ],
      "hotel": {
        "name": "Royal Agra Palace Hotel",
        "category": "4 Star",
        "roomType": "Deluxe Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM"
      },
      "transport": {
        "type": "Luxury AC Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "Agra Airport / Agra Cantt Railway Station",
      "availableDates": [
        "2026-09-05",
        "2026-09-19",
        "2026-10-10",
        "2026-11-14"
      ],
      "maxGuests": 28,
      "minimumAge": 3,
      "languages": [
        "English",
        "Hindi"
      ],
      "cancellationPolicy": "Free cancellation up to 72 hours before departure.",
      "importantInformation": [
        "Carry a valid photo ID.",
        "Wear comfortable walking shoes.",
        "The Taj Mahal is closed every Friday.",
        "Photography drones are not permitted inside the monument.",
        "Carry a hat and drinking water during summer."
      ],
      "faq": [
        {
          "question": "Are monument tickets included?",
          "answer": "No. Monument entry tickets are excluded unless mentioned in the package."
        },
        {
          "question": "Can I visit the Taj Mahal at sunrise?",
          "answer": "Yes. The itinerary includes an early morning sunrise visit."
        },
        {
          "question": "Is this package suitable for families?",
          "answer": "Yes. This package is ideal for couples, families and senior citizens."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "Rahul Sharma",
          "rating": 5,
          "date": "2026-02-18",
          "comment": "Excellent arrangements and a beautiful sunrise visit to the Taj Mahal."
        },
        {
          "id": 2,
          "name": "Emily Watson",
          "rating": 5,
          "date": "2026-03-29",
          "comment": "The guide was knowledgeable and the hotel exceeded expectations."
        },
        {
          "id": 3,
          "name": "Arjun Nair",
          "rating": 4,
          "date": "2026-05-16",
          "comment": "Well-planned itinerary with comfortable transportation."
        }
      ],
      "contact": {
        "phone": "+91-9876543210",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 1735,
      "wishlistCount": 842,
      "createdDate": "2026-02-15",
      "updatedDate": "2026-07-01"
    },
    {
      "id": 6,
      "packageCode": "TW-IT-006",
      "packageName": "Rome & Colosseum Experience",
      "slug": "rome-colosseum-experience",
      "destination": {
        "id": 6,
        "name": "Colosseum",
        "slug": "colosseum",
        "country": "Italy",
        "city": "Rome",
        "continent": "Europe",
        "category": "Historical Monument",
        "description": "The Colosseum is the largest ancient amphitheatre ever built and one of the greatest architectural achievements of the Roman Empire. It remains one of Italy's most visited tourist attractions.",
        "visitorCountPerYear": "Approximately 7.6 million",
        "bestTimeToVisit": "April to June, September to October",
        "recommendedVisitDuration": "3-4 hours",
        "coordinates": {
          "latitude": 41.8902,
          "longitude": 12.4922
        },
        "address": {
          "street": "Piazza del Colosseo",
          "postalCode": "00184",
          "city": "Rome",
          "country": "Italy"
        },
        "images": {
          "cover": "colosseum-rome.jpg",
          "thumbnail": "colosseum-thumb.jpg",
          "gallery": [
            "colosseum-gallery-1.jpg",
            "colosseum-gallery-2.jpg",
            "colosseum-gallery-3.jpg",
            "roman-forum.jpg"
          ]
        },
        "links": {
          "official": "https://colosseo.it",
          "wikipedia": "https://en.wikipedia.org/wiki/Colosseum",
          "googleMaps": "https://maps.google.com/?q=41.8902,12.4922"
        },
        "unesco": true,
        "newSevenWonders": true,
        "tags": [
          "Italy",
          "Rome",
          "Colosseum",
          "UNESCO",
          "Roman Empire"
        ]
      },
      "category": "International",
      "tourType": "Historical Tour",
      "duration": {
        "days": 5,
        "nights": 4,
        "text": "5 Days / 4 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 1199,
        "discount": 18,
        "offer": 983
      },
      "rating": {
        "average": 4.9,
        "totalReviews": 462
      },
      "description": "Discover the fascinating history of Ancient Rome with visits to the Colosseum, Roman Forum, Vatican City, Trevi Fountain and other iconic landmarks. Enjoy guided sightseeing, authentic Italian cuisine and premium accommodation.",
      "coverImage": "rome-colosseum-cover.jpg",
      "gallery": [
        "rome-1.jpg",
        "rome-2.jpg",
        "vatican-city.jpg",
        "trevi-fountain.jpg"
      ],
      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Colosseum Skip-the-Line Entry",
        "Roman Forum Tour",
        "Vatican Museums Visit",
        "St. Peter's Basilica",
        "Trevi Fountain",
        "Spanish Steps",
        "Professional English Guide"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Rome",
          "description": "Airport pickup, hotel check-in and evening walk around Piazza Navona."
        },
        {
          "day": 2,
          "title": "Ancient Rome",
          "description": "Guided tour of the Colosseum, Roman Forum and Palatine Hill."
        },
        {
          "day": 3,
          "title": "Vatican City",
          "description": "Visit Vatican Museums, Sistine Chapel and St. Peter's Basilica."
        },
        {
          "day": 4,
          "title": "Rome City Tour",
          "description": "Explore Trevi Fountain, Pantheon, Spanish Steps and enjoy free time for shopping."
        },
        {
          "day": 5,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Rome Fiumicino Airport."
        }
      ],
      "inclusions": [
        "4 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Coach",
        "Professional English Guide",
        "Colosseum Entry Ticket",
        "Roman Forum Entry",
        "Vatican Museum Ticket",
        "City Sightseeing"
      ],
      "exclusions": [
        "International Airfare",
        "Schengen Visa Charges",
        "Lunch & Dinner",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Tours"
      ],
      "hotel": {
        "name": "Hotel Artemide Rome",
        "category": "4 Star",
        "roomType": "Superior Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM",
        "amenities": [
          "Free Wi-Fi",
          "Breakfast Included",
          "Fitness Center",
          "Restaurant",
          "Airport Shuttle"
        ]
      },
      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "Leonardo da Vinci–Fiumicino Airport (FCO)",
      "availableDates": [
        "2026-08-22",
        "2026-09-14",
        "2026-10-05",
        "2026-11-09"
      ],
      "maxGuests": 24,
      "minimumAge": 5,
      "languages": [
        "English",
        "Italian"
      ],
      "cancellationPolicy": "Free cancellation up to 5 days before departure.",
      "importantInformation": [
        "Carry a valid passport and Schengen visa.",
        "Wear comfortable walking shoes.",
        "Dress modestly when visiting churches and the Vatican.",
        "Carry a reusable water bottle during sightseeing."
      ],
      "faq": [
        {
          "question": "Are Colosseum tickets included?",
          "answer": "Yes. Skip-the-line entry tickets are included."
        },
        {
          "question": "Is Vatican City included in the itinerary?",
          "answer": "Yes. A full-day Vatican City tour is included."
        },
        {
          "question": "Can I extend my stay in Rome?",
          "answer": "Yes. Additional hotel nights can be arranged upon request."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "Luca Bianchi",
          "rating": 5,
          "date": "2026-03-18",
          "comment": "Fantastic itinerary with excellent guides and comfortable accommodation."
        },
        {
          "id": 2,
          "name": "Sophia Williams",
          "rating": 5,
          "date": "2026-04-26",
          "comment": "The Colosseum and Vatican tours were unforgettable. Highly recommended!"
        },
        {
          "id": 3,
          "name": "Anand Kumar",
          "rating": 4,
          "date": "2026-06-09",
          "comment": "Well organized tour with plenty of time to explore Rome at your own pace."
        }
      ],
      "contact": {
        "phone": "+39-06-12345678",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 1264,
      "wishlistCount": 573,
      "createdDate": "2026-02-20",
      "updatedDate": "2026-07-02"
    },
    {
      "id": 7,
      "packageCode": "TW-BR-007",
      "packageName": "Rio Wonders Escape",
      "slug": "rio-wonders-escape",
      "destination": {
        "id": 7,
        "name": "Christ the Redeemer",
        "slug": "christ-the-redeemer",
        "country": "Brazil",
        "city": "Rio de Janeiro",
        "continent": "South America",
        "category": "Monument",
        "description": "Christ the Redeemer is one of the world's most iconic statues, standing atop Corcovado Mountain overlooking Rio de Janeiro. It is a symbol of peace and one of the New Seven Wonders of the World.",
        "visitorCountPerYear": "Approximately 2 million",
        "bestTimeToVisit": "May to October",
        "recommendedVisitDuration": "3-4 hours",
        "coordinates": {
          "latitude": -22.9519,
          "longitude": -43.2105
        },
        "address": {
          "street": "Parque Nacional da Tijuca",
          "postalCode": "22241-330",
          "city": "Rio de Janeiro",
          "country": "Brazil"
        },
        "images": {
          "cover": "cristo-redentor-rio.jpg",
          "thumbnail": "christ-thumb.jpg",
          "gallery": [
            "christ-gallery-1.jpg",
            "christ-gallery-2.jpg",
            "copacabana.jpg",
            "sugarloaf.jpg"
          ]
        },
        "links": {
          "official": "https://cristoredentoroficial.com.br",
          "wikipedia": "https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)",
          "googleMaps": "https://maps.google.com/?q=-22.9519,-43.2105"
        },
        "unesco": false,
        "newSevenWonders": true,
        "tags": [
          "Brazil",
          "Rio",
          "Christ",
          "Wonder",
          "Corcovado"
        ]
      },
      "category": "International",
      "tourType": "City & Heritage Tour",
      "duration": {
        "days": 6,
        "nights": 5,
        "text": "6 Days / 5 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 1399,
        "discount": 20,
        "offer": 1119
      },
      "rating": {
        "average": 4.9,
        "totalReviews": 389
      },
      "description": "Experience the vibrant culture of Rio de Janeiro with visits to Christ the Redeemer, Sugarloaf Mountain, Copacabana Beach, Ipanema Beach and historic city attractions. Enjoy Brazilian hospitality, comfortable accommodation and guided sightseeing.",
      "coverImage": "rio-wonders-cover.jpg",
      "gallery": [
        "rio-1.jpg",
        "rio-2.jpg",
        "copacabana-beach.jpg",
        "sugarloaf-cablecar.jpg"
      ],
      "highlights": [
        "4-Star Beachside Hotel",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Christ the Redeemer Ticket",
        "Sugarloaf Mountain Cable Car",
        "Copacabana Beach Tour",
        "Ipanema Beach Visit",
        "Samba Show",
        "Professional English Guide",
        "Luxury Tourist Coach"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Rio",
          "description": "Airport pickup, hotel check-in and evening walk along Copacabana Beach."
        },
        {
          "day": 2,
          "title": "Christ the Redeemer",
          "description": "Train ride to Corcovado Mountain and guided visit to Christ the Redeemer."
        },
        {
          "day": 3,
          "title": "Sugarloaf Mountain",
          "description": "Cable car ride to Sugarloaf Mountain followed by panoramic city views."
        },
        {
          "day": 4,
          "title": "Rio City Tour",
          "description": "Visit Selarón Steps, Maracanã Stadium and Metropolitan Cathedral."
        },
        {
          "day": 5,
          "title": "Culture & Leisure",
          "description": "Free time for shopping followed by an evening Brazilian Samba show."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Rio International Airport."
        }
      ],
      "inclusions": [
        "5 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury Tourist Coach",
        "Christ the Redeemer Entry Ticket",
        "Sugarloaf Cable Car Ticket",
        "Professional Tour Guide",
        "City Sightseeing"
      ],
      "exclusions": [
        "International Airfare",
        "Brazil Visa Charges (if applicable)",
        "Lunch & Dinner",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],
      "hotel": {
        "name": "Windsor Excelsior Copacabana",
        "category": "4 Star",
        "roomType": "Ocean View Deluxe",
        "checkIn": "03:00 PM",
        "checkOut": "12:00 PM",
        "amenities": [
          "Free Wi-Fi",
          "Swimming Pool",
          "Fitness Center",
          "Restaurant",
          "Beach Access"
        ]
      },
      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "Rio de Janeiro–Galeão International Airport (GIG)",
      "availableDates": [
        "2026-08-18",
        "2026-09-15",
        "2026-10-12",
        "2026-11-16"
      ],
      "maxGuests": 22,
      "minimumAge": 5,
      "languages": [
        "English",
        "Portuguese"
      ],
      "cancellationPolicy": "Free cancellation up to 5 days before departure.",
      "importantInformation": [
        "Carry a valid passport.",
        "Wear lightweight clothing and comfortable footwear.",
        "Bring sunscreen and sunglasses.",
        "Keep your valuables secure in crowded tourist areas."
      ],
      "faq": [
        {
          "question": "Is the train to Christ the Redeemer included?",
          "answer": "Yes. Round-trip train tickets are included."
        },
        {
          "question": "Are beach activities included?",
          "answer": "No. Beach activities are optional and can be booked separately."
        },
        {
          "question": "Is the Samba show included?",
          "answer": "Yes. One evening cultural Samba performance is included."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "Lucas Pereira",
          "rating": 5,
          "date": "2026-04-08",
          "comment": "Amazing experience! The views from Christ the Redeemer were unforgettable."
        },
        {
          "id": 2,
          "name": "Emma Johnson",
          "rating": 5,
          "date": "2026-05-19",
          "comment": "Excellent hotel, great guide and a perfect Rio itinerary."
        },
        {
          "id": 3,
          "name": "Sanjay Patel",
          "rating": 4,
          "date": "2026-06-21",
          "comment": "Very well organized tour with enough free time to explore the beaches."
        }
      ],
      "contact": {
        "phone": "+55-21-4000-1234",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 1186,
      "wishlistCount": 521,
      "createdDate": "2026-02-25",
      "updatedDate": "2026-07-05"
    },
    {
      "id": 8,
      "packageCode": "TW-JO-008",
      "packageName": "Petra Desert Heritage Tour",
      "slug": "petra-desert-heritage-tour",
      "destination": {
        "id": 8,
        "name": "Petra",
        "slug": "petra",
        "country": "Jordan",
        "city": "Wadi Musa",
        "continent": "Asia",
        "category": "Archaeological Site",
        "description": "Petra is an ancient Nabataean city carved into rose-red sandstone cliffs. Known as the 'Rose City', it is one of the most spectacular archaeological sites in the world and a UNESCO World Heritage Site.",
        "visitorCountPerYear": "Approximately 1 million",
        "bestTimeToVisit": "March to May, September to November",
        "recommendedVisitDuration": "Full Day",
        "coordinates": {
          "latitude": 30.3285,
          "longitude": 35.4444
        },
        "address": {
          "street": "Petra Archaeological Park",
          "postalCode": "71810",
          "city": "Wadi Musa",
          "country": "Jordan"
        },
        "images": {
          "cover": "table-mountain.jpg",
          "thumbnail": "petra-thumb.jpg",
          "gallery": [
            "petra-gallery-1.jpg",
            "petra-gallery-2.jpg",
            "petra-gallery-3.jpg",
            "wadi-rum.jpg"
          ]
        },
        "links": {
          "official": "https://visitpetra.jo",
          "wikipedia": "https://en.wikipedia.org/wiki/Petra",
          "googleMaps": "https://maps.google.com/?q=30.3285,35.4444"
        },
        "unesco": true,
        "newSevenWonders": true,
        "tags": [
          "Jordan",
          "Petra",
          "UNESCO",
          "Archaeology",
          "Rose City"
        ]
      },
      "category": "International",
      "tourType": "Heritage & Adventure Tour",
      "duration": {
        "days": 5,
        "nights": 4,
        "text": "5 Days / 4 Nights"
      },
      "price": {
        "currency": "USD",
        "original": 1249,
        "discount": 17,
        "offer": 1037
      },
      "rating": {
        "average": 4.9,
        "totalReviews": 341
      },
      "description": "Explore the legendary city of Petra and the stunning landscapes of Jordan. This tour combines ancient history, desert adventures, Bedouin culture and breathtaking scenery for an unforgettable Middle Eastern experience.",
      "coverImage": "petra-tour-cover.jpg",
      "gallery": [
        "petra-treasury.jpg",
        "petra-monastery.jpg",
        "wadi-rum-camp.jpg",
        "dead-sea-view.jpg"
      ],
      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Petra Full-Day Guided Tour",
        "Wadi Rum Desert Safari",
        "Bedouin Camp Experience",
        "Dead Sea Visit",
        "Professional English Guide",
        "Luxury Air-Conditioned Vehicle"
      ],
      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Amman",
          "description": "Airport pickup, hotel check-in and evening orientation tour of Amman."
        },
        {
          "day": 2,
          "title": "Petra Exploration",
          "description": "Travel to Petra and enjoy a full-day guided tour of the Treasury, Royal Tombs and ancient city."
        },
        {
          "day": 3,
          "title": "Petra & Wadi Rum",
          "description": "Morning visit to the Monastery followed by transfer to Wadi Rum for a 4x4 desert safari and Bedouin camp stay."
        },
        {
          "day": 4,
          "title": "Dead Sea Experience",
          "description": "Travel to the Dead Sea for relaxation, floating experience and leisure time."
        },
        {
          "day": 5,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Queen Alia International Airport."
        }
      ],
      "inclusions": [
        "4 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Vehicle",
        "Professional Tour Guide",
        "Petra Entry Ticket",
        "Wadi Rum Desert Safari",
        "Bedouin Camp Dinner",
        "Dead Sea Access"
      ],
      "exclusions": [
        "International Airfare",
        "Jordan Visa Charges",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Camel Ride"
      ],
      "hotel": {
        "name": "Petra Moon Hotel",
        "category": "4 Star",
        "roomType": "Deluxe Mountain View",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM",
        "amenities": [
          "Free Wi-Fi",
          "Breakfast Included",
          "Swimming Pool",
          "Restaurant",
          "Desert View Terrace"
        ]
      },
      "transport": {
        "type": "Luxury Tourist Vehicle",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },
      "meetingPoint": "Queen Alia International Airport, Amman (AMM)",
      "availableDates": [
        "2026-09-02",
        "2026-09-28",
        "2026-10-20",
        "2026-11-11"
      ],
      "maxGuests": 18,
      "minimumAge": 8,
      "languages": [
        "English",
        "Arabic"
      ],
      "cancellationPolicy": "Free cancellation up to 5 days before departure.",
      "importantInformation": [
        "Carry a valid passport with at least 6 months validity.",
        "Wear comfortable walking or hiking shoes.",
        "Carry sunscreen, a hat and sufficient water.",
        "Temperatures can vary significantly between day and night in the desert."
      ],
      "faq": [
        {
          "question": "Is the Petra entry ticket included?",
          "answer": "Yes. Full-day Petra entry is included in the package."
        },
        {
          "question": "Will we stay in a desert camp?",
          "answer": "Yes. One night in a traditional Bedouin-style desert camp in Wadi Rum is included."
        },
        {
          "question": "Is the Dead Sea visit included?",
          "answer": "Yes. The package includes access to a Dead Sea resort area."
        }
      ],
      "reviews": [
        {
          "id": 1,
          "name": "Hassan A",
          "rating": 5,
          "date": "2026-03-14",
          "comment": "Petra was beyond imagination and the Wadi Rum camp was a magical experience."
        },
        {
          "id": 2,
          "name": "Maria Gonzalez",
          "rating": 5,
          "date": "2026-05-02",
          "comment": "Excellent organization, knowledgeable guide and unforgettable desert scenery."
        },
        {
          "id": 3,
          "name": "Rohit Menon",
          "rating": 4,
          "date": "2026-06-18",
          "comment": "Wonderful heritage tour with a perfect mix of history and adventure."
        }
      ],
      "contact": {
        "phone": "+962-6-550-1234",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },
      "status": "Active",
      "featured": true,
      "bookingCount": 947,
      "wishlistCount": 438,
      "createdDate": "2026-03-01",
      "updatedDate": "2026-07-06"
    },
    {
      "id": 9,
      "packageCode": "TW-EG-009",
      "packageName": "Pyramids & Nile Discovery",
      "slug": "pyramids-nile-discovery",

      "destination": {
        "id": 9,
        "name": "Pyramids of Giza",
        "slug": "pyramids-of-giza",
        "country": "Egypt",
        "city": "Giza",
        "continent": "Africa",
        "category": "Ancient Wonder",
        "description": "The Pyramids of Giza are among the oldest and most magnificent monuments in the world. Built over 4,500 years ago, they are the only surviving Wonder of the Ancient World and continue to attract millions of visitors every year.",

        "visitorCountPerYear": "Approximately 14 million",

        "bestTimeToVisit": "October to April",

        "recommendedVisitDuration": "4-6 hours",

        "coordinates": {
          "latitude": 29.9792,
          "longitude": 31.1342
        },

        "address": {
          "street": "Al Haram",
          "postalCode": "12556",
          "city": "Giza",
          "country": "Egypt"
        },

        "images": {
          "cover": "pyramids-giza.jpg",
          "thumbnail": "pyramids-thumb.jpg",
          "gallery": [
            "pyramids-gallery-1.jpg",
            "pyramids-gallery-2.jpg",
            "sphinx-gallery.jpg",
            "nile-cruise.jpg"
          ]
        },

        "links": {
          "official": "https://egymonuments.gov.eg",
          "wikipedia": "https://en.wikipedia.org/wiki/Giza_pyramid_complex",
          "googleMaps": "https://maps.google.com/?q=29.9792,31.1342"
        },

        "unesco": true,
        "newSevenWonders": false,

        "tags": [
          "Egypt",
          "Pyramids",
          "Giza",
          "Sphinx",
          "Ancient Egypt"
        ]
      },

      "category": "International",

      "tourType": "History & Culture Tour",

      "duration": {
        "days": 6,
        "nights": 5,
        "text": "6 Days / 5 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 1499,
        "discount": 17,
        "offer": 1244
      },

      "rating": {
        "average": 4.9,
        "totalReviews": 521
      },

      "description": "Journey through the land of the Pharaohs with visits to the Great Pyramids of Giza, the Sphinx, Egyptian Museum, Khan El Khalili Bazaar and a relaxing Nile River dinner cruise. Experience Egypt's fascinating history with expert guides and premium accommodation.",

      "coverImage": "giza-package-cover.jpg",

      "gallery": [
        "giza-1.jpg",
        "giza-2.jpg",
        "egyptian-museum.jpg",
        "nile-evening.jpg"
      ],

      "highlights": [
        "5-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Great Pyramid Entry",
        "Sphinx Visit",
        "Egyptian Museum Tour",
        "Nile River Dinner Cruise",
        "Khan El Khalili Bazaar",
        "Professional Egyptologist Guide",
        "Luxury Air-Conditioned Coach"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cairo",
          "description": "Airport pickup, hotel check-in and welcome dinner."
        },
        {
          "day": 2,
          "title": "Pyramids of Giza",
          "description": "Visit the Great Pyramid, Pyramid of Khafre, Pyramid of Menkaure and the Great Sphinx."
        },
        {
          "day": 3,
          "title": "Egyptian Museum",
          "description": "Explore the Egyptian Museum followed by shopping at Khan El Khalili Bazaar."
        },
        {
          "day": 4,
          "title": "Old Cairo",
          "description": "Visit Cairo Citadel, Al-Azhar Mosque and enjoy an evening Nile Dinner Cruise."
        },
        {
          "day": 5,
          "title": "Free Exploration",
          "description": "Leisure day with optional excursions or shopping."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Cairo International Airport."
        }
      ],

      "inclusions": [
        "5 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Coach",
        "Professional Egyptologist Guide",
        "Pyramids Entry Ticket",
        "Egyptian Museum Ticket",
        "Nile Dinner Cruise"
      ],

      "exclusions": [
        "International Airfare",
        "Egypt Visa Charges",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Camel Ride Charges"
      ],

      "hotel": {
        "name": "Steigenberger Pyramids Cairo",
        "category": "5 Star",
        "roomType": "Deluxe Pyramid View",
        "checkIn": "03:00 PM",
        "checkOut": "12:00 PM",
        "amenities": [
          "Swimming Pool",
          "Free Wi-Fi",
          "Breakfast Included",
          "Restaurant",
          "Fitness Center",
          "Airport Shuttle"
        ]
      },

      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Cairo International Airport (CAI)",

      "availableDates": [
        "2026-09-10",
        "2026-10-08",
        "2026-11-12",
        "2026-12-10"
      ],

      "maxGuests": 24,

      "minimumAge": 6,

      "languages": [
        "English",
        "Arabic"
      ],

      "cancellationPolicy": "Free cancellation up to 7 days before departure.",

      "importantInformation": [
        "Carry your passport throughout the tour.",
        "Wear lightweight cotton clothing.",
        "Bring sunscreen, sunglasses and a hat.",
        "Respect local customs and dress modestly.",
        "Stay hydrated during desert excursions."
      ],

      "faq": [
        {
          "question": "Are pyramid entry tickets included?",
          "answer": "Yes. Entry to the Giza Plateau is included in the package."
        },
        {
          "question": "Is the Nile Dinner Cruise included?",
          "answer": "Yes. One evening dinner cruise on the Nile River is included."
        },
        {
          "question": "Can I ride a camel near the pyramids?",
          "answer": "Yes. Camel rides are available at an additional cost."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Ahmed H",
          "rating": 5,
          "date": "2026-03-18",
          "comment": "An unforgettable journey through ancient Egypt. The guide was exceptional."
        },
        {
          "id": 2,
          "name": "Sophia Green",
          "rating": 5,
          "date": "2026-05-02",
          "comment": "Loved every moment. The Nile dinner cruise was magical."
        },
        {
          "id": 3,
          "name": "Joseph Mathew",
          "rating": 4,
          "date": "2026-06-21",
          "comment": "Excellent itinerary, comfortable hotel and knowledgeable guides."
        }
      ],

      "contact": {
        "phone": "+20-2-1234-5678",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "inActive",
      "featured": true,
      "bookingCount": 1527,
      "wishlistCount": 684,
      "createdDate": "2026-03-05",
      "updatedDate": "2026-07-10"
    },
    {
      "id": 10,
      "packageCode": "TW-AU-010",
      "packageName": "Sydney Harbour Explorer",
      "slug": "sydney-harbour-explorer",

      "destination": {
        "id": 10,
        "name": "Sydney Opera House",
        "slug": "sydney-opera-house",
        "country": "Australia",
        "city": "Sydney",
        "continent": "Australia",
        "category": "Performing Arts Centre",
        "description": "The Sydney Opera House is one of the world's most recognizable architectural masterpieces and a UNESCO World Heritage Site. Located on Sydney Harbour, it is Australia's most iconic landmark.",

        "visitorCountPerYear": "Approximately 10.9 million",

        "bestTimeToVisit": "September to November, March to May",

        "recommendedVisitDuration": "3-5 hours",

        "coordinates": {
          "latitude": -33.8568,
          "longitude": 151.2153
        },

        "address": {
          "street": "Bennelong Point",
          "postalCode": "2000",
          "city": "Sydney",
          "country": "Australia"
        },

        "images": {
          "cover": "sydney-opera-house-harbour-bridge.jpg",
          "thumbnail": "opera-house-thumb.jpg",
          "gallery": [
            "opera-gallery-1.jpg",
            "opera-gallery-2.jpg",
            "harbour-bridge.jpg",
            "bondi-beach.jpg"
          ]
        },

        "links": {
          "official": "https://www.sydneyoperahouse.com",
          "wikipedia": "https://en.wikipedia.org/wiki/Sydney_Opera_House",
          "googleMaps": "https://maps.google.com/?q=-33.8568,151.2153"
        },

        "unesco": true,
        "newSevenWonders": false,

        "tags": [
          "Australia",
          "Sydney",
          "Opera House",
          "UNESCO",
          "Harbour"
        ]
      },

      "category": "International",

      "tourType": "City & Sightseeing Tour",

      "duration": {
        "days": 6,
        "nights": 5,
        "text": "6 Days / 5 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 1699,
        "discount": 15,
        "offer": 1444
      },

      "rating": {
        "average": 4.9,
        "totalReviews": 476
      },

      "description": "Experience the beauty of Sydney with guided tours of the Sydney Opera House, Sydney Harbour Bridge, Bondi Beach, Darling Harbour and the Blue Mountains. Enjoy premium accommodation, scenic harbour cruises and unforgettable Australian hospitality.",

      "coverImage": "sydney-package-cover.jpg",

      "gallery": [
        "sydney-1.jpg",
        "opera-house-night.jpg",
        "bondi-beach.jpg",
        "blue-mountains.jpg"
      ],

      "highlights": [
        "4-Star Harbour View Hotel",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Sydney Opera House Guided Tour",
        "Sydney Harbour Cruise",
        "Harbour Bridge Photo Stop",
        "Bondi Beach Visit",
        "Blue Mountains Day Trip",
        "Professional English Guide",
        "Luxury Air-Conditioned Coach"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Sydney",
          "description": "Airport pickup, hotel check-in and evening stroll around Circular Quay."
        },
        {
          "day": 2,
          "title": "Sydney City Tour",
          "description": "Guided visit to the Sydney Opera House, Royal Botanic Garden and Harbour Bridge."
        },
        {
          "day": 3,
          "title": "Harbour Cruise & Bondi",
          "description": "Enjoy a scenic Sydney Harbour Cruise followed by leisure time at Bondi Beach."
        },
        {
          "day": 4,
          "title": "Blue Mountains",
          "description": "Full-day excursion to the Blue Mountains, Scenic World and Three Sisters lookout."
        },
        {
          "day": 5,
          "title": "Darling Harbour",
          "description": "Visit Darling Harbour, SEA LIFE Aquarium and enjoy shopping at Queen Victoria Building."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Sydney Airport."
        }
      ],

      "inclusions": [
        "5 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Coach",
        "Professional Tour Guide",
        "Sydney Opera House Guided Tour",
        "Sydney Harbour Cruise",
        "Blue Mountains Excursion",
        "City Sightseeing"
      ],

      "exclusions": [
        "International Airfare",
        "Australian Visa Charges",
        "Lunch & Dinner",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Adventure Activities"
      ],

      "hotel": {
        "name": "Amora Hotel Jamison Sydney",
        "category": "5 Star",
        "roomType": "Deluxe Harbour View",
        "checkIn": "03:00 PM",
        "checkOut": "11:00 AM",
        "amenities": [
          "Free Wi-Fi",
          "Indoor Swimming Pool",
          "Spa",
          "Fitness Centre",
          "Restaurant",
          "Breakfast Included"
        ]
      },

      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Sydney Kingsford Smith Airport (SYD)",

      "availableDates": [
        "2026-09-18",
        "2026-10-16",
        "2026-11-20",
        "2026-12-18"
      ],

      "maxGuests": 26,

      "minimumAge": 5,

      "languages": [
        "English"
      ],

      "cancellationPolicy": "Free cancellation up to 7 days before departure.",

      "importantInformation": [
        "Carry a valid passport and Australian visa.",
        "Wear comfortable walking shoes.",
        "Bring sunscreen, sunglasses and a hat.",
        "Weather can change quickly, so carry a light jacket.",
        "Swimming at Bondi Beach should only be between the safety flags."
      ],

      "faq": [
        {
          "question": "Is the Sydney Harbour Cruise included?",
          "answer": "Yes. A scenic harbour cruise is included in the package."
        },
        {
          "question": "Does the package include the Blue Mountains?",
          "answer": "Yes. A full-day Blue Mountains excursion is included."
        },
        {
          "question": "Can I attend an Opera House performance?",
          "answer": "Performance tickets can be arranged at an additional cost, subject to availability."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Olivia Brown",
          "rating": 5,
          "date": "2026-04-22",
          "comment": "Fantastic trip! The harbour cruise and Opera House tour were unforgettable."
        },
        {
          "id": 2,
          "name": "Daniel Harris",
          "rating": 5,
          "date": "2026-05-27",
          "comment": "Excellent hotel, great itinerary and wonderful guides."
        },
        {
          "id": 3,
          "name": "Neha Menon",
          "rating": 4,
          "date": "2026-06-18",
          "comment": "Beautiful destinations with plenty of time to explore Sydney on our own."
        }
      ],

      "contact": {
        "phone": "+61-2-9876-5432",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "inActive",
      "featured": true,
      "bookingCount": 1384,
      "wishlistCount": 642,
      "createdDate": "2026-03-10",
      "updatedDate": "2026-07-12"
    },
    {
      "id": 11,
      "packageCode": "TW-IN-011",
      "packageName": "Golden Temple Spiritual Retreat",
      "slug": "golden-temple-spiritual-retreat",

      "destination": {
        "id": 11,
        "name": "Golden Temple",
        "slug": "golden-temple",
        "country": "India",
        "city": "Amritsar",
        "continent": "Asia",
        "category": "Religious Site",
        "description": "The Golden Temple, also known as Sri Harmandir Sahib, is the holiest Gurdwara of Sikhism. Famous for its golden architecture, sacred lake and community kitchen, it welcomes millions of pilgrims and tourists every year.",

        "visitorCountPerYear": "Approximately 6 million",

        "bestTimeToVisit": "October to March",

        "recommendedVisitDuration": "4-5 hours",

        "coordinates": {
          "latitude": 31.6200,
          "longitude": 74.8765
        },

        "address": {
          "street": "Golden Temple Road",
          "postalCode": "143006",
          "city": "Amritsar",
          "country": "India"
        },

        "images": {
          "cover": "hagia-sophia-istanbul-1.jpg",
          "thumbnail": "golden-temple-thumb.jpg",
          "gallery": [
            "golden-temple-1.jpg",
            "golden-temple-2.jpg",
            "langar-hall.jpg",
            "wagah-border.jpg"
          ]
        },

        "links": {
          "official": "https://sgpc.net",
          "wikipedia": "https://en.wikipedia.org/wiki/Golden_Temple",
          "googleMaps": "https://maps.google.com/?q=31.6200,74.8765"
        },

        "unesco": false,
        "newSevenWonders": false,

        "tags": [
          "India",
          "Punjab",
          "Golden Temple",
          "Amritsar",
          "Spiritual"
        ]
      },

      "category": "Domestic",

      "tourType": "Spiritual & Heritage Tour",

      "duration": {
        "days": 4,
        "nights": 3,
        "text": "4 Days / 3 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 499,
        "discount": 12,
        "offer": 439
      },

      "rating": {
        "average": 4.9,
        "totalReviews": 692
      },

      "description": "Experience the spiritual atmosphere of the Golden Temple, witness the famous Wagah Border ceremony, explore the historic Jallianwala Bagh and enjoy authentic Punjabi hospitality and cuisine.",

      "coverImage": "golden-temple-package-cover.jpg",

      "gallery": [
        "amritsar-1.jpg",
        "golden-temple-night.jpg",
        "wagah-border-ceremony.jpg",
        "jallianwala-bagh.jpg"
      ],

      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Railway Station / Airport Pickup & Drop",
        "Golden Temple Guided Visit",
        "Langar Experience",
        "Jallianwala Bagh Tour",
        "Wagah Border Ceremony",
        "Local Punjabi Food Tour",
        "Professional Tour Guide",
        "Luxury AC Vehicle"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Amritsar",
          "description": "Pickup from airport or railway station, hotel check-in and evening visit to the illuminated Golden Temple."
        },
        {
          "day": 2,
          "title": "Golden Temple & Heritage",
          "description": "Morning prayers at the Golden Temple, Langar experience and visit to Jallianwala Bagh."
        },
        {
          "day": 3,
          "title": "Wagah Border",
          "description": "Explore local markets before witnessing the famous Beating Retreat Ceremony at Wagah Border."
        },
        {
          "day": 4,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Sri Guru Ram Dass Jee International Airport or Amritsar Railway Station."
        }
      ],

      "inclusions": [
        "3 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport/Railway Transfers",
        "Luxury AC Vehicle",
        "Professional Tour Guide",
        "Golden Temple Guided Tour",
        "Wagah Border Visit",
        "Sightseeing as per Itinerary"
      ],

      "exclusions": [
        "Airfare / Train Tickets",
        "Lunch & Dinner (Except Complimentary Langar)",
        "Travel Insurance",
        "Personal Expenses",
        "Shopping Expenses",
        "Optional Activities"
      ],

      "hotel": {
        "name": "Ramada by Wyndham Amritsar",
        "category": "4 Star",
        "roomType": "Deluxe Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM",
        "amenities": [
          "Free Wi-Fi",
          "Swimming Pool",
          "Restaurant",
          "Fitness Centre",
          "Breakfast Included"
        ]
      },

      "transport": {
        "type": "Luxury AC Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Sri Guru Ram Dass Jee International Airport (ATQ)",

      "availableDates": [
        "2026-09-06",
        "2026-10-04",
        "2026-11-08",
        "2026-12-13"
      ],

      "maxGuests": 30,

      "minimumAge": 2,

      "languages": [
        "English",
        "Hindi",
        "Punjabi"
      ],

      "cancellationPolicy": "Free cancellation up to 72 hours before departure.",

      "importantInformation": [
        "Head covering is mandatory inside the Golden Temple.",
        "Shoes must be removed before entering the temple complex.",
        "Dress modestly while visiting religious places.",
        "Photography is restricted in certain areas.",
        "Carry a valid government-issued photo ID."
      ],

      "faq": [
        {
          "question": "Is entry to the Golden Temple free?",
          "answer": "Yes. Entry is free for everyone regardless of religion."
        },
        {
          "question": "Is Langar included?",
          "answer": "Yes. Visitors can enjoy the free community meal (Langar)."
        },
        {
          "question": "Is the Wagah Border ceremony included?",
          "answer": "Yes. Transportation and guided visit are included."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Harpreet Singh",
          "rating": 5,
          "date": "2026-03-11",
          "comment": "A peaceful and unforgettable spiritual experience. Everything was perfectly organized."
        },
        {
          "id": 2,
          "name": "Maria Lopez",
          "rating": 5,
          "date": "2026-04-24",
          "comment": "Beautiful place, excellent guide and the Langar experience was truly memorable."
        },
        {
          "id": 3,
          "name": "Vishnu Raj",
          "rating": 4,
          "date": "2026-06-17",
          "comment": "Great itinerary with comfortable accommodation and excellent transportation."
        }
      ],

      "contact": {
        "phone": "+91-183-400-5678",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "Active",
      "featured": true,
      "bookingCount": 1846,
      "wishlistCount": 918,
      "createdDate": "2026-03-15",
      "updatedDate": "2026-07-15"
    },
    {
      "id": 12,
      "packageCode": "TW-MX-012",
      "packageName": "Chichen Itza Heritage Adventure",
      "slug": "chichen-itza-heritage-adventure",

      "destination": {
        "id": 12,
        "name": "Chichen Itza",
        "slug": "chichen-itza",
        "country": "Mexico",
        "city": "Yucatán",
        "continent": "North America",
        "category": "Archaeological Site",
        "description": "Chichen Itza is one of the most important archaeological sites of the ancient Maya civilization and is renowned for the iconic El Castillo pyramid. It is both a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",

        "visitorCountPerYear": "Approximately 2.6 million",

        "bestTimeToVisit": "November to April",

        "recommendedVisitDuration": "5-6 hours",

        "coordinates": {
          "latitude": 20.6843,
          "longitude": -88.5678
        },

        "address": {
          "street": "Carretera Mérida - Puerto Juárez",
          "postalCode": "97751",
          "city": "Yucatán",
          "country": "Mexico"
        },

        "images": {
          "cover": "chichen-itza-mayan-ruins.jpg",
          "thumbnail": "chichen-itza-thumb.jpg",
          "gallery": [
            "chichen-gallery-1.jpg",
            "el-castillo.jpg",
            "cenote-ik-kil.jpg",
            "valladolid-city.jpg"
          ]
        },

        "links": {
          "official": "https://www.inah.gob.mx",
          "wikipedia": "https://en.wikipedia.org/wiki/Chichen_Itza",
          "googleMaps": "https://maps.google.com/?q=20.6843,-88.5678"
        },

        "unesco": true,
        "newSevenWonders": true,

        "tags": [
          "Mexico",
          "Chichen Itza",
          "Maya",
          "UNESCO",
          "Wonder"
        ]
      },

      "category": "International",

      "tourType": "Culture & Heritage Tour",

      "duration": {
        "days": 5,
        "nights": 4,
        "text": "5 Days / 4 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 1349,
        "discount": 16,
        "offer": 1133
      },

      "rating": {
        "average": 2.9,
        "totalReviews": 437
      },

      "description": "Explore the legendary Mayan city of Chichen Itza, swim in the crystal-clear Cenote Ik Kil, stroll through the colonial streets of Valladolid, and experience authentic Mexican culture with expert local guides.",

      "coverImage": "chichen-package-cover.jpg",

      "gallery": [
        "maya-ruins.jpg",
        "cenote-tour.jpg",
        "valladolid-square.jpg",
        "mexico-cultural-show.jpg"
      ],

      "highlights": [
        "4-Star Resort Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Chichen Itza Guided Tour",
        "Cenote Ik Kil Swimming Experience",
        "Valladolid City Tour",
        "Traditional Mexican Dinner",
        "Professional Archaeological Guide",
        "Luxury Air-Conditioned Coach",
        "Cultural Performance"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cancún",
          "description": "Airport pickup, resort check-in and evening free for relaxation."
        },
        {
          "day": 2,
          "title": "Chichen Itza",
          "description": "Full-day guided exploration of El Castillo, Temple of the Warriors and the Great Ball Court."
        },
        {
          "day": 3,
          "title": "Cenote & Valladolid",
          "description": "Swim in Cenote Ik Kil followed by sightseeing and shopping in Valladolid."
        },
        {
          "day": 4,
          "title": "Mexican Culture",
          "description": "Enjoy local cuisine, cultural performances and optional beach leisure."
        },
        {
          "day": 5,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Cancún International Airport."
        }
      ],

      "inclusions": [
        "4 Nights Resort Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Coach",
        "Professional Tour Guide",
        "Chichen Itza Entry Ticket",
        "Cenote Ik Kil Entry",
        "City Sightseeing"
      ],

      "exclusions": [
        "International Airfare",
        "Mexico Tourist Tax",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Water Activities"
      ],

      "hotel": {
        "name": "Hacienda Chichen Resort",
        "category": "4 Star",
        "roomType": "Garden View Deluxe",
        "checkIn": "03:00 PM",
        "checkOut": "12:00 PM",
        "amenities": [
          "Free Wi-Fi",
          "Outdoor Pool",
          "Spa",
          "Restaurant",
          "Breakfast Included"
        ]
      },

      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Cancún International Airport (CUN)",

      "availableDates": [
        "2026-09-12",
        "2026-10-17",
        "2026-11-14",
        "2026-12-19"
      ],

      "maxGuests": 24,

      "minimumAge": 5,

      "languages": [
        "English",
        "Spanish"
      ],

      "cancellationPolicy": "Free cancellation up to 5 days before departure.",

      "importantInformation": [
        "Carry your passport throughout the trip.",
        "Wear lightweight clothing and comfortable walking shoes.",
        "Bring swimwear and a towel for the cenote visit.",
        "Carry sunscreen, sunglasses and a hat.",
        "Stay hydrated during outdoor sightseeing."
      ],

      "faq": [
        {
          "question": "Is Chichen Itza entry included?",
          "answer": "Yes. Entry tickets are included in the package."
        },
        {
          "question": "Can we swim in the cenote?",
          "answer": "Yes. Swimming at Cenote Ik Kil is included."
        },
        {
          "question": "Is this package family-friendly?",
          "answer": "Yes. The itinerary is suitable for couples, families and senior travelers."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Carlos Mendoza",
          "rating": 5,
          "date": "2026-04-15",
          "comment": "An incredible experience exploring the Mayan ruins. Everything was perfectly organized."
        },
        {
          "id": 2,
          "name": "Emma Wilson",
          "rating": 5,
          "date": "2026-05-28",
          "comment": "Loved the cenote and the cultural tour. Excellent hotel and friendly guides."
        },
        {
          "id": 3,
          "name": "Rajesh Kumar",
          "rating": 4,
          "date": "2026-06-30",
          "comment": "Great value for money with an excellent itinerary and comfortable transportation."
        }
      ],

      "contact": {
        "phone": "+52-998-123-4567",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "Active",
      "featured": true,
      "bookingCount": 1098,
      "wishlistCount": 514,
      "createdDate": "2026-03-20",
      "updatedDate": "2026-07-18"
    },
    {
      "id": 13,
      "packageCode": "TW-PE-013",
      "packageName": "Machu Picchu Adventure",
      "slug": "machu-picchu-adventure",

      "destination": {
        "id": 13,
        "name": "Machu Picchu",
        "slug": "machu-picchu",
        "country": "Peru",
        "city": "Cusco",
        "continent": "South America",
        "category": "Ancient Inca Citadel",
        "description": "Machu Picchu is a breathtaking 15th-century Inca citadel nestled high in the Andes Mountains. It is one of the world's greatest archaeological treasures, a UNESCO World Heritage Site, and one of the New Seven Wonders of the World.",

        "visitorCountPerYear": "Approximately 1.6 million",

        "bestTimeToVisit": "May to September",

        "recommendedVisitDuration": "Full Day",

        "coordinates": {
          "latitude": -13.1631,
          "longitude": -72.5450
        },

        "address": {
          "street": "Historic Sanctuary of Machu Picchu",
          "postalCode": "08680",
          "city": "Cusco Region",
          "country": "Peru"
        },

        "images": {
          "cover": "machu-picchu.jpg",
          "thumbnail": "machu-picchu-thumb.jpg",
          "gallery": [
            "machu-gallery-1.jpg",
            "machu-gallery-2.jpg",
            "inca-trail.jpg",
            "cusco-city.jpg"
          ]
        },

        "links": {
          "official": "https://tuboleto.cultura.pe",
          "wikipedia": "https://en.wikipedia.org/wiki/Machu_Picchu",
          "googleMaps": "https://maps.google.com/?q=-13.1631,-72.5450"
        },

        "unesco": true,
        "newSevenWonders": true,

        "tags": [
          "Peru",
          "Machu Picchu",
          "Inca",
          "UNESCO",
          "Adventure"
        ]
      },

      "category": "International",

      "tourType": "Adventure & Heritage Tour",

      "duration": {
        "days": 6,
        "nights": 5,
        "text": "6 Days / 5 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 1899,
        "discount": 18,
        "offer": 1557
      },

      "rating": {
        "average": 4.9,
        "totalReviews": 582
      },

      "description": "Embark on an unforgettable journey through Peru's Sacred Valley. Explore the magnificent Machu Picchu, discover the rich Inca heritage of Cusco, visit Ollantaytambo, and enjoy spectacular Andean mountain scenery with experienced local guides.",

      "coverImage": "machu-package-cover.jpg",

      "gallery": [
        "machu-tour-1.jpg",
        "machu-tour-2.jpg",
        "sacred-valley.jpg",
        "ollantaytambo.jpg"
      ],

      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Machu Picchu Entry Ticket",
        "Scenic Vistadome Train Journey",
        "Sacred Valley Tour",
        "Cusco City Sightseeing",
        "Professional English Guide",
        "Luxury Tourist Transport",
        "Traditional Peruvian Dinner"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Cusco",
          "description": "Airport pickup, hotel check-in and leisure time to acclimatize to the altitude."
        },
        {
          "day": 2,
          "title": "Sacred Valley",
          "description": "Visit Pisac Market, Ollantaytambo Fortress and enjoy scenic Andean landscapes."
        },
        {
          "day": 3,
          "title": "Machu Picchu",
          "description": "Travel by Vistadome train and enjoy a guided tour of the magnificent Machu Picchu."
        },
        {
          "day": 4,
          "title": "Cusco Heritage Tour",
          "description": "Explore Sacsayhuamán, Qorikancha Temple and Cusco Plaza de Armas."
        },
        {
          "day": 5,
          "title": "Free Exploration",
          "description": "Enjoy shopping, local cafés and optional adventure activities around Cusco."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Alejandro Velasco Astete International Airport."
        }
      ],

      "inclusions": [
        "5 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury Tourist Vehicle",
        "Professional Tour Guide",
        "Machu Picchu Entry Ticket",
        "Vistadome Train Tickets",
        "Sacred Valley Excursion",
        "Cusco City Tour"
      ],

      "exclusions": [
        "International Airfare",
        "Peru Visa (if applicable)",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Hiking Activities"
      ],

      "hotel": {
        "name": "Casa Andina Premium Cusco",
        "category": "4 Star",
        "roomType": "Superior Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM",
        "amenities": [
          "Free Wi-Fi",
          "Restaurant",
          "Spa",
          "Breakfast Included",
          "Airport Shuttle"
        ]
      },

      "transport": {
        "type": "Luxury Tourist Coach & Vistadome Train",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Alejandro Velasco Astete International Airport (CUZ)",

      "availableDates": [
        "2026-08-21",
        "2026-09-18",
        "2026-10-23",
        "2026-11-20"
      ],

      "maxGuests": 18,

      "minimumAge": 10,

      "languages": [
        "English",
        "Spanish"
      ],

      "cancellationPolicy": "Free cancellation up to 7 days before departure.",

      "importantInformation": [
        "Carry your original passport.",
        "Altitude sickness medication is recommended.",
        "Wear trekking shoes and layered clothing.",
        "Carry sunscreen, sunglasses and a reusable water bottle.",
        "Machu Picchu entry is time-slot based."
      ],

      "faq": [
        {
          "question": "Is the Vistadome train included?",
          "answer": "Yes. Round-trip Vistadome train tickets are included."
        },
        {
          "question": "Is hiking required?",
          "answer": "No. The standard guided tour requires only moderate walking."
        },
        {
          "question": "Is this package suitable for seniors?",
          "answer": "Yes, provided they are comfortable with moderate walking and high-altitude travel."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Carlos Rivera",
          "rating": 5,
          "date": "2026-04-12",
          "comment": "An unforgettable experience! Machu Picchu exceeded every expectation."
        },
        {
          "id": 2,
          "name": "Emily Roberts",
          "rating": 5,
          "date": "2026-05-30",
          "comment": "Excellent organization, beautiful hotels and knowledgeable guides."
        },
        {
          "id": 3,
          "name": "Arun Nair",
          "rating": 4,
          "date": "2026-06-28",
          "comment": "Wonderful itinerary with breathtaking scenery throughout the journey."
        }
      ],

      "contact": {
        "phone": "+51-84-555-6789",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "Active",
      "featured": true,
      "bookingCount": 1142,
      "wishlistCount": 598,
      "createdDate": "2026-03-25",
      "updatedDate": "2026-07-20"
    },
    {
      "id": 14,
      "packageCode": "TW-CN-014",
      "packageName": "Great Wall of China Discovery",
      "slug": "great-wall-of-china-discovery",

      "destination": {
        "id": 14,
        "name": "Great Wall of China",
        "slug": "great-wall-of-china",
        "country": "China",
        "city": "Beijing",
        "continent": "Asia",
        "category": "Historical Monument",
        "description": "The Great Wall of China is one of the world's greatest engineering achievements, stretching thousands of kilometers across northern China. It is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",

        "visitorCountPerYear": "Approximately 10 million",

        "bestTimeToVisit": "April to May, September to October",

        "recommendedVisitDuration": "Full Day",

        "coordinates": {
          "latitude": 40.4319,
          "longitude": 116.5704
        },

        "address": {
          "street": "Mutianyu Great Wall Scenic Area",
          "postalCode": "101406",
          "city": "Beijing",
          "country": "China"
        },

        "images": {
          "cover": "great-wall-china.jpg",
          "thumbnail": "great-wall-thumb.jpg",
          "gallery": [
            "great-wall-1.jpg",
            "great-wall-2.jpg",
            "forbidden-city.jpg",
            "temple-of-heaven.jpg"
          ]
        },

        "links": {
          "official": "https://www.mutianyugreatwall.com",
          "wikipedia": "https://en.wikipedia.org/wiki/Great_Wall_of_China",
          "googleMaps": "https://maps.google.com/?q=40.4319,116.5704"
        },

        "unesco": true,
        "newSevenWonders": true,

        "tags": [
          "China",
          "Beijing",
          "Great Wall",
          "UNESCO",
          "Wonder"
        ]
      },

      "category": "International",

      "tourType": "History & Culture Tour",

      "duration": {
        "days": 7,
        "nights": 6,
        "text": "7 Days / 6 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 1749,
        "discount": 20,
        "offer": 1399
      },

      "rating": {
        "average": 4.9,
        "totalReviews": 618
      },

      "description": "Discover China's rich history with an unforgettable journey through Beijing. Walk along the magnificent Great Wall, explore the Forbidden City, admire the Temple of Heaven, and experience authentic Chinese culture, cuisine and traditions.",

      "coverImage": "great-wall-package-cover.jpg",

      "gallery": [
        "beijing-1.jpg",
        "mutianyu-wall.jpg",
        "forbidden-city-tour.jpg",
        "summer-palace.jpg"
      ],

      "highlights": [
        "5-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Great Wall Guided Tour",
        "Forbidden City Visit",
        "Temple of Heaven Tour",
        "Summer Palace Excursion",
        "Traditional Peking Duck Dinner",
        "Professional English Guide",
        "Luxury Air-Conditioned Coach"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Beijing",
          "description": "Airport pickup, hotel check-in and evening leisure."
        },
        {
          "day": 2,
          "title": "Great Wall Adventure",
          "description": "Full-day excursion to the Mutianyu section of the Great Wall with cable car access."
        },
        {
          "day": 3,
          "title": "Forbidden City",
          "description": "Visit Tiananmen Square, the Forbidden City and Jingshan Park."
        },
        {
          "day": 4,
          "title": "Temple of Heaven",
          "description": "Explore the Temple of Heaven followed by a traditional tea ceremony."
        },
        {
          "day": 5,
          "title": "Summer Palace",
          "description": "Enjoy a guided tour of the Summer Palace and Kunming Lake."
        },
        {
          "day": 6,
          "title": "Local Culture",
          "description": "Shopping at Wangfujing Street and enjoy a traditional Peking Duck dinner."
        },
        {
          "day": 7,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Beijing Capital International Airport."
        }
      ],

      "inclusions": [
        "6 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury AC Coach",
        "Professional English Guide",
        "Great Wall Entry Ticket",
        "Cable Car Ride",
        "Forbidden City Entry",
        "Temple of Heaven Entry",
        "Summer Palace Entry"
      ],

      "exclusions": [
        "International Airfare",
        "China Visa Charges",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Activities"
      ],

      "hotel": {
        "name": "Novotel Beijing Peace",
        "category": "5 Star",
        "roomType": "Executive Room",
        "checkIn": "02:00 PM",
        "checkOut": "12:00 PM",
        "amenities": [
          "Free Wi-Fi",
          "Indoor Swimming Pool",
          "Fitness Centre",
          "Restaurant",
          "Breakfast Included",
          "Business Lounge"
        ]
      },

      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Beijing Capital International Airport (PEK)",

      "availableDates": [
        "2026-09-08",
        "2026-10-06",
        "2026-11-10",
        "2026-12-08"
      ],

      "maxGuests": 28,

      "minimumAge": 6,

      "languages": [
        "English",
        "Mandarin"
      ],

      "cancellationPolicy": "Free cancellation up to 7 days before departure.",

      "importantInformation": [
        "Carry your passport and valid Chinese visa.",
        "Wear comfortable walking shoes.",
        "The Great Wall involves climbing steps and uneven terrain.",
        "Carry a light jacket during spring and autumn.",
        "Respect local customs while visiting historical sites."
      ],

      "faq": [
        {
          "question": "Which section of the Great Wall is included?",
          "answer": "The package includes a guided visit to the popular Mutianyu section."
        },
        {
          "question": "Is the cable car ride included?",
          "answer": "Yes. Round-trip cable car tickets are included."
        },
        {
          "question": "Can vegetarian meals be arranged?",
          "answer": "Yes. Vegetarian meal options are available upon request."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Li Wei",
          "rating": 5,
          "date": "2026-04-18",
          "comment": "Walking on the Great Wall was a dream come true. Everything was perfectly organized."
        },
        {
          "id": 2,
          "name": "Michael Anderson",
          "rating": 5,
          "date": "2026-05-26",
          "comment": "Excellent guide, comfortable hotel and an amazing cultural experience."
        },
        {
          "id": 3,
          "name": "Anjali Nair",
          "rating": 4,
          "date": "2026-06-29",
          "comment": "Fantastic itinerary with plenty of time to explore Beijing's iconic attractions."
        }
      ],

      "contact": {
        "phone": "+86-10-8888-5678",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "Active",
      "featured": true,
      "bookingCount": 1624,
      "wishlistCount": 785,
      "createdDate": "2026-03-28",
      "updatedDate": "2026-07-22"
    },
    {
      "id": 15,
      "packageCode": "TW-IT-015",
      "packageName": "Colosseum & Rome Heritage Tour",
      "slug": "colosseum-rome-heritage-tour",

      "destination": {
        "id": 15,
        "name": "Colosseum",
        "slug": "colosseum",
        "country": "Italy",
        "city": "Rome",
        "continent": "Europe",
        "category": "Historical Monument",
        "description": "The Colosseum is the largest ancient amphitheatre ever built and one of Rome's most iconic landmarks. Constructed nearly 2,000 years ago, it stands as a symbol of the Roman Empire and attracts millions of visitors every year.",

        "visitorCountPerYear": "Approximately 7.6 million",

        "bestTimeToVisit": "April to June, September to October",

        "recommendedVisitDuration": "3-5 hours",

        "coordinates": {
          "latitude": 41.8902,
          "longitude": 12.4922
        },

        "address": {
          "street": "Piazza del Colosseo",
          "postalCode": "00184",
          "city": "Rome",
          "country": "Italy"
        },

        "images": {
          "cover": "colosseum.jpg",
          "thumbnail": "colosseum-thumb.jpg",
          "gallery": [
            "colosseum-1.jpg",
            "roman-forum.jpg",
            "trevi-fountain.jpg",
            "vatican-city.jpg"
          ]
        },

        "links": {
          "official": "https://colosseo.it",
          "wikipedia": "https://en.wikipedia.org/wiki/Colosseum",
          "googleMaps": "https://maps.google.com/?q=41.8902,12.4922"
        },

        "unesco": true,
        "newSevenWonders": false,

        "tags": [
          "Italy",
          "Rome",
          "Colosseum",
          "Roman Empire",
          "UNESCO"
        ]
      },

      "category": "International",

      "tourType": "History & Culture Tour",

      "duration": {
        "days": 6,
        "nights": 5,
        "text": "6 Days / 5 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 1599,
        "discount": 18,
        "offer": 1311
      },

      "rating": {
        "average": 4.9,
        "totalReviews": 548
      },

      "description": "Discover the timeless beauty of Rome with guided visits to the Colosseum, Roman Forum, Vatican City, Trevi Fountain and Piazza Navona. Enjoy authentic Italian cuisine, premium accommodation and unforgettable cultural experiences.",

      "coverImage": "rome-package-cover.jpg",

      "gallery": [
        "rome-1.jpg",
        "colosseum-night.jpg",
        "vatican-museum.jpg",
        "spanish-steps.jpg"
      ],

      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Airport Pickup & Drop",
        "Colosseum Guided Tour",
        "Roman Forum Entry",
        "Vatican Museums Visit",
        "St. Peter's Basilica",
        "Trevi Fountain Tour",
        "Traditional Italian Dinner",
        "Luxury Air-Conditioned Coach"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Rome",
          "description": "Airport pickup, hotel check-in and evening walk around Piazza Navona."
        },
        {
          "day": 2,
          "title": "Ancient Rome",
          "description": "Guided tour of the Colosseum, Roman Forum and Palatine Hill."
        },
        {
          "day": 3,
          "title": "Vatican City",
          "description": "Visit the Vatican Museums, Sistine Chapel and St. Peter's Basilica."
        },
        {
          "day": 4,
          "title": "Rome City Tour",
          "description": "Explore Trevi Fountain, Spanish Steps, Pantheon and Piazza Venezia."
        },
        {
          "day": 5,
          "title": "Leisure Day",
          "description": "Shopping, local cafés and optional excursions before a traditional Italian dinner."
        },
        {
          "day": 6,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Leonardo da Vinci–Fiumicino Airport."
        }
      ],

      "inclusions": [
        "5 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport Transfers",
        "Luxury Tourist Coach",
        "Professional English Guide",
        "Colosseum Entry Ticket",
        "Roman Forum Entry",
        "Vatican Museums Entry",
        "City Sightseeing"
      ],

      "exclusions": [
        "International Airfare",
        "Italy Tourist Tax",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Optional Tours"
      ],

      "hotel": {
        "name": "Hotel Artemide Rome",
        "category": "4 Star",
        "roomType": "Deluxe Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM",
        "amenities": [
          "Free Wi-Fi",
          "Restaurant",
          "Spa",
          "Fitness Centre",
          "Breakfast Included"
        ]
      },

      "transport": {
        "type": "Luxury Tourist Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Leonardo da Vinci–Fiumicino Airport (FCO)",

      "availableDates": [
        "2026-09-14",
        "2026-10-12",
        "2026-11-16",
        "2026-12-14"
      ],

      "maxGuests": 26,

      "minimumAge": 5,

      "languages": [
        "English",
        "Italian"
      ],

      "cancellationPolicy": "Free cancellation up to 5 days before departure.",

      "importantInformation": [
        "Carry your passport throughout the tour.",
        "Wear comfortable walking shoes.",
        "Dress modestly while visiting churches and the Vatican.",
        "Carry a reusable water bottle during sightseeing.",
        "Photography restrictions apply in some museum sections."
      ],

      "faq": [
        {
          "question": "Are Colosseum tickets included?",
          "answer": "Yes. Skip-the-line entry tickets are included."
        },
        {
          "question": "Is Vatican City included in the itinerary?",
          "answer": "Yes. The Vatican Museums and St. Peter's Basilica are included."
        },
        {
          "question": "Can vegetarian meals be arranged?",
          "answer": "Yes. Vegetarian and vegan meal options are available on request."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Marco Rossi",
          "rating": 5,
          "date": "2026-04-20",
          "comment": "Excellent tour with knowledgeable guides and outstanding historical experiences."
        },
        {
          "id": 2,
          "name": "Jennifer Clark",
          "rating": 5,
          "date": "2026-05-18",
          "comment": "Everything was perfectly planned. The Colosseum was simply breathtaking."
        },
        {
          "id": 3,
          "name": "Akhil Thomas",
          "rating": 4,
          "date": "2026-06-22",
          "comment": "Wonderful itinerary, comfortable hotel and plenty of free time to explore Rome."
        }
      ],

      "contact": {
        "phone": "+39-06-4567-8901",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "Active",
      "featured": true,
      "bookingCount": 1478,
      "wishlistCount": 692,
      "createdDate": "2026-04-01",
      "updatedDate": "2026-07-25"
    },
    {
      "id": 16,
      "packageCode": "TW-IN-016",
      "packageName": "Taj Mahal Heritage Escape",
      "slug": "taj-mahal-heritage-escape",

      "destination": {
        "id": 16,
        "name": "Taj Mahal",
        "slug": "taj-mahal",
        "country": "India",
        "city": "Agra",
        "continent": "Asia",
        "category": "Historical Monument",
        "description": "The Taj Mahal is one of the world's most celebrated architectural masterpieces, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal. It is a UNESCO World Heritage Site and one of the New Seven Wonders of the World.",

        "visitorCountPerYear": "Approximately 8 million",

        "bestTimeToVisit": "October to March",

        "recommendedVisitDuration": "3-4 hours",

        "coordinates": {
          "latitude": 27.1751,
          "longitude": 78.0421
        },

        "address": {
          "street": "Dharmapuri",
          "postalCode": "282001",
          "city": "Agra",
          "country": "India"
        },

        "images": {
          "cover": "taj-mahal.jpg",
          "thumbnail": "taj-mahal-thumb.jpg",
          "gallery": [
            "taj-mahal-1.jpg",
            "taj-mahal-sunrise.jpg",
            "agra-fort.jpg",
            "mehtab-bagh.jpg"
          ]
        },

        "links": {
          "official": "https://www.asiagracircle.in/taj-mahal",
          "wikipedia": "https://en.wikipedia.org/wiki/Taj_Mahal",
          "googleMaps": "https://maps.google.com/?q=27.1751,78.0421"
        },

        "unesco": true,
        "newSevenWonders": true,

        "tags": [
          "India",
          "Agra",
          "Taj Mahal",
          "UNESCO",
          "Wonder"
        ]
      },

      "category": "Domestic",

      "tourType": "Heritage & Cultural Tour",

      "duration": {
        "days": 4,
        "nights": 3,
        "text": "4 Days / 3 Nights"
      },

      "price": {
        "currency": "USD",
        "original": 549,
        "discount": 15,
        "offer": 467
      },

      "rating": {
        "average": 4.9,
        "totalReviews": 836
      },

      "description": "Experience the timeless beauty of the Taj Mahal with sunrise and sunset views. Explore Agra Fort, Mehtab Bagh, Fatehpur Sikri and enjoy authentic Mughlai cuisine while staying in premium accommodation.",

      "coverImage": "taj-package-cover.jpg",

      "gallery": [
        "taj-tour-1.jpg",
        "agra-fort-tour.jpg",
        "fatehpur-sikri.jpg",
        "mehtab-bagh-evening.jpg"
      ],

      "highlights": [
        "4-Star Hotel Accommodation",
        "Daily Breakfast",
        "Railway Station / Airport Pickup & Drop",
        "Sunrise Taj Mahal Visit",
        "Agra Fort Guided Tour",
        "Fatehpur Sikri Excursion",
        "Mehtab Bagh Sunset View",
        "Traditional Mughlai Dinner",
        "Professional Tour Guide",
        "Luxury Air-Conditioned Vehicle"
      ],

      "itinerary": [
        {
          "day": 1,
          "title": "Arrival in Agra",
          "description": "Pickup from airport or railway station, hotel check-in and evening visit to Mehtab Bagh."
        },
        {
          "day": 2,
          "title": "Taj Mahal & Agra Fort",
          "description": "Early morning sunrise visit to the Taj Mahal followed by Agra Fort and local handicraft shopping."
        },
        {
          "day": 3,
          "title": "Fatehpur Sikri",
          "description": "Full-day excursion to Fatehpur Sikri and Buland Darwaza with local sightseeing."
        },
        {
          "day": 4,
          "title": "Departure",
          "description": "Breakfast, hotel checkout and transfer to Agra Airport or Railway Station."
        }
      ],

      "inclusions": [
        "3 Nights Hotel Accommodation",
        "Daily Breakfast",
        "Airport/Railway Transfers",
        "Luxury AC Vehicle",
        "Professional Tour Guide",
        "Taj Mahal Entry Ticket",
        "Agra Fort Entry",
        "Fatehpur Sikri Tour",
        "Sightseeing as per Itinerary"
      ],

      "exclusions": [
        "Airfare / Train Tickets",
        "Lunch & Dinner (Except Mentioned)",
        "Travel Insurance",
        "Personal Expenses",
        "Camera Fees (if applicable)",
        "Optional Activities"
      ],

      "hotel": {
        "name": "Radisson Hotel Agra",
        "category": "4 Star",
        "roomType": "Superior Room",
        "checkIn": "02:00 PM",
        "checkOut": "11:00 AM",
        "amenities": [
          "Free Wi-Fi",
          "Swimming Pool",
          "Restaurant",
          "Spa",
          "Breakfast Included"
        ]
      },

      "transport": {
        "type": "Luxury AC Coach",
        "pickup": true,
        "drop": true,
        "airportTransfer": true
      },

      "meetingPoint": "Agra Airport / Agra Cantt Railway Station",

      "availableDates": [
        "2026-09-05",
        "2026-10-10",
        "2026-11-14",
        "2026-12-19"
      ],

      "maxGuests": 30,

      "minimumAge": 3,

      "languages": [
        "English",
        "Hindi"
      ],

      "cancellationPolicy": "Free cancellation up to 72 hours before departure.",

      "importantInformation": [
        "Carry a valid government-issued photo ID.",
        "The Taj Mahal is closed every Friday.",
        "Large bags, food and drones are not permitted inside the monument.",
        "Wear comfortable walking shoes.",
        "Visit early morning for the best photography and fewer crowds."
      ],

      "faq": [
        {
          "question": "Is the Taj Mahal entry ticket included?",
          "answer": "Yes. Entry tickets are included in the package."
        },
        {
          "question": "Can we visit the Taj Mahal at sunrise?",
          "answer": "Yes. The itinerary includes a sunrise visit on Day 2."
        },
        {
          "question": "Is Fatehpur Sikri included?",
          "answer": "Yes. A full-day excursion to Fatehpur Sikri is included."
        }
      ],

      "reviews": [
        {
          "id": 1,
          "name": "Rakesh Sharma",
          "rating": 5,
          "date": "2026-04-10",
          "comment": "Watching the sunrise over the Taj Mahal was unforgettable. Excellent arrangements."
        },
        {
          "id": 2,
          "name": "Sophia Martin",
          "rating": 5,
          "date": "2026-05-18",
          "comment": "Fantastic guide, comfortable hotel and well-planned sightseeing."
        },
        {
          "id": 3,
          "name": "Anand Pillai",
          "rating": 4,
          "date": "2026-06-21",
          "comment": "Great heritage tour with enough time to explore Agra at our own pace."
        }
      ],

      "contact": {
        "phone": "+91-562-456-7890",
        "email": "booking@trivoworld.com",
        "website": "https://www.trivoworld.com"
      },

      "status": "Active",
      "featured": true,
      "bookingCount": 2138,
      "wishlistCount": 1054,
      "createdDate": "2026-04-05",
      "updatedDate": "2026-07-26"
    }
  ]
  const [selectedPackage, setSelectedPackage] = useState(places[0]);
  const [totalConsultantList, setTotalConsultantList] = useState([])
  const [consultants, setConsultants] = useState(null)
  const [destination, setDestination] = useState({})
  const userData = { isLogin, setIsLogin, userName, setUserName, page, setPage, selectedPackage, setSelectedPackage, places, consultants, setConsultants, setTotalConsultantList, destination, setDestination }
  useEffect(() => {
    console.log(selectedPackage.name)
    console.log(selectedPackage.highlights)
    window.scrollTo(0, 0);
  }, [selectedPackage]);



  return (
    <>
      <div>
        <BrowserRouter>
        <ScrollToTop></ScrollToTop>
          <UserContext.Provider value={userData}>
            <Navbar></Navbar>
            <Routes>

              <Route path='' element={<Home></Home>}></Route>
              <Route path='login' element={<Login></Login>}></Route>
              <Route path='signup' element={<SignUp></SignUp>}></Route>
              <Route path='contact' element={<ContactUs></ContactUs>}></Route>
              <Route path='about' element={<AboutUs></AboutUs>}></Route>
              <Route element={<ProtectedRoute> </ProtectedRoute>}>
                <Route path='packages' element={<Outlet />} >
                  <Route path='' element={<Packages></Packages>}></Route>
                  <Route path='view/*' element={<PackageView></PackageView>}></Route>
                  <Route path='addpackage' element={<PackageManagement></PackageManagement>}>
                    <Route path="" element={<PackageCreate></PackageCreate>}></Route>
                    <Route path="packagelist" element={<PackageList></PackageList>}></Route>
                    <Route path='packageapprovals' element={<PackageApprovals></PackageApprovals>}></Route>

                  </Route>
                  <Route path='adddestination' element={<DestinationManagement></DestinationManagement>}>
                    <Route path='' element={<DestinationCreate></DestinationCreate>}></Route>
                    <Route path='destinationlist' element={<DestinationList></DestinationList>}></Route>
                    <Route path='editDestination' element={<DestinationEdit></DestinationEdit>}></Route>
                  </Route>


                </Route>
                <Route path='addpackage' element={<PackageManagement></PackageManagement>}></Route>
                <Route path='mybooking' element={<MyBooking></MyBooking>}>
                  <Route path='' element={<MyTours></MyTours>}></Route>
                  <Route path='enquiry' element={<MyEnquiry></MyEnquiry>}></Route>
                  <Route path='support' element={<MySupport></MySupport>}></Route>
                  <Route path='approvals' element={<MyApprovals></MyApprovals>}></Route>
                </Route>
                
                <Route path='consultant' element={<Consultant></Consultant>}>
                  <Route path='' element={<ConsultantList></ConsultantList>}></Route>
                  <Route path='reports' element={<ConsultantReports></ConsultantReports>}></Route>
                  <Route path='tours' element={<ConsultantAssign></ConsultantAssign>}></Route>
                  <Route path='addnew' element={<ConsultantRegistration></ConsultantRegistration>}></Route>
                </Route>
              </Route>

            </Routes>
            <Footer></Footer>
          </UserContext.Provider>
        </BrowserRouter>


        {/* <Packages></Packages>
        <PackageView></PackageView>
        <ContactUs></ContactUs>
        <AboutUs></AboutUs>

        <Home></Home>



        <MyBooking></MyBooking>
        <Consultant></Consultant>


        <Footer></Footer> */}


      </div>

    </>
  )
}

export default App
