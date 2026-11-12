import React, { useContext, useEffect, useState } from 'react'
import DestinationSelector from '../destination/DestinationSelector'
import UserContext from '../UserContext'
import { getAllDestinations } from '../../api/destinationApi'
import ArrayInput from './ArrayInput'
import ItineraryInput from './ItineraryInput';
import HotelInput from "./HotelInput";
import TransportInput from "./TransportInput";
import { addPackage } from '../../api/packageApi'

export default function PackageCreate() {
  // const packages = useContext(UserContext).places;
  const userData = useContext(UserContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [days, setDays] = useState(0);
  const [price, setPrice] = useState(0);
  // const [destination_ids, setDestinationIDs] = useState([]);
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [highlights, setHighlights] = useState(["Eiffel Tower visit", "Louvre Museum tour"]);
  const [itinerary, setItinerary] = useState([]);
  const [inclusions, setInclusions] = useState(["Breakfast", "Hotel accommodation"]);
  const [exclusions, setExclusions] = useState(["Travel Insurance", "Airfare", "Personal expenses"]);
  const [hotel, setHotel] = useState([]);
  const [transport, setTransport] = useState([
    {
      drop: true,
      type: "Luxury Tourist Coach & Vistadome Train",
      pickup: true,
      airportTransfer: true
    }
  ]);
  const [languages, setLanguages] = useState(["English"]);
  const [meetingPoint, setMeetingPoint] = useState("");
  const [tourType, setTourType] = useState("Friends & Family");
  const [maxGuests, setMaxGuests] = useState(30);
  const [minimumAge, setMinimumAge] = useState(1);
  const [cancellationPolicy, setCancellationPolicy] = useState("");
  // const [destination, setDestination] = useState([])
  const [destinations, setDestinations] = useState([]);
  const [selectedDestinationIds, setSelectedDestinationIds] = useState([]);
  const [searchDestination, setSearchDestination] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const [mode, setMode] = useState("")

  const filteredDestinations = destinations.filter(item =>
    item.name.toLowerCase().includes(searchDestination.toLowerCase())
  );
  const handleDestinationChange = (id) => {
    setSelectedDestinationIds(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
    console.log(" ids - ", selectedDestinationIds)
  };
  const getDestinations = async () => {
    try {
      const data = await getAllDestinations();
      setDestinations(data)
      console.log("destination" + data)
    } catch (error) {
      setError(error.message);
    }

  };
  const handleAddPackage = async () => {
    const formData = new FormData()
    formData.append("name", name);
    formData.append("days", days);
    formData.append("category", category);
    formData.append("price", price);
    formData.append("description", description);

    // formData.append("destination_ids", JSON.stringify(selectedDestinationIds));
    formData.append("destination_ids", selectedDestinationIds.join(","));
    // highlights.forEach(item =>
    //   formData.append("highlights", item)
    // );
    formData.append("highlights", JSON.stringify(highlights));

    // inclusions.forEach(item =>
    //   formData.append("inclusions", item)
    // );
    formData.append("inclusions", JSON.stringify(inclusions))

    // exclusions.forEach(item =>
    //   formData.append("exclusions", item)
    // );

    formData.append("exclusions", JSON.stringify(exclusions))

    // languages.forEach(item =>
    //   formData.append("languages", item)
    // );
    formData.append("languages", JSON.stringify(languages))

    if (coverImage) {
      formData.append("image", coverImage);
    }

    formData.append("itinerary", JSON.stringify(itinerary));
    formData.append("hotel", JSON.stringify(hotel));
    formData.append("transport", JSON.stringify(transport));
    formData.append("meetingPoint", meetingPoint);
    formData.append("tourType", tourType);
    formData.append("maxGuests", maxGuests);
    formData.append("minimumAge", minimumAge);
    formData.append("cancellationPolicy", cancellationPolicy);

    // Check FormData contents
    for (const [key, value] of formData.entries()) {
      console.log(key, value);
    }
    if (!validateForm()) {
      return;
    }
    try {
      const data = await addPackage(formData)
      console.log("package added " + data)
    } catch (error) {
      console.log(error)
    }
  }
  const validateForm = () => {

    if (!name.trim()) {
      alert("Please enter package name");
      return false;
    }

    if (!category) {
      alert("Please select package category");
      return false;
    }

    if (!days || days < 1) {
      alert("Please enter valid number of days");
      return false;
    }

    if (!price || price <= 0) {
      alert("Please enter valid package price");
      return false;
    }

    if (selectedDestinationIds.length === 0) {
      alert("Please select at least one destination");
      return false;
    }

    if (!description.trim()) {
      alert("Please enter package description");
      return false;
    }

    if (!coverImage) {
      alert("Please select package cover image");
      return false;
    }

    if (highlights.length === 0) {
      alert("Please add at least one package highlight");
      return false;
    }

    if (itinerary.some(item => !item.title.trim() || !item.description.trim())) {
      alert("Please complete all itinerary details");
      return false;
    }

    if (hotel.some(item => !item.name.trim() || !item.category.trim() || !item.roomType.trim() || !item.checkIn.trim() || !item.checkOut.trim())) {
      alert("Please complete all hotel details");
      return false;
    }

    if (transport.some(item => !item.type.trim())) {
      alert("Please enter transport type");
      return false;
    }

    if (!meetingPoint.trim()) {
      alert("Please enter meeting point");
      return false;
    }

    if (!tourType) {
      alert("Please select tour type");
      return false;
    }

    if (!maxGuests || maxGuests < 1) {
      alert("Please enter valid maximum guests");
      return false;
    }

    if (minimumAge < 0) {
      alert("Minimum age cannot be negative");
      return false;
    }

    if (!cancellationPolicy.trim()) {
      alert("Please enter cancellation policy");
      return false;
    }

    return true;
  };
  const resetData = () => {

  }
  useEffect(() => {
    setItinerary(prev =>
      Array.from(
        { length: Math.max(0, Number(days) || 0) },
        (_, index) =>
          prev[index] || {
            day: index + 1,
            title: "",
            description: ""
          }
      )
    );
  }, [days]);
  useEffect(() => {
    if (userData.selectedPackage) {
      setMode("edit");

    }
    getDestinations();


    return () => {
      resetData()
    };
  }, [])
  return (

    <div className='container'>
      <div className="row">
        <p>Create New Package</p>
        <div className="col-sm-6 ">
          <div className="card-body shadow px-4 pb-4">
            <div className='mb-2'>
              <label htmlFor="">Package Name</label><br />
              <input type="text" className='form-control' placeholder='Enter Package Name' value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className='mb-2 '>
              <label htmlFor="">Category</label><br />
              <input type="radio" name='category' value="International"
                checked={category === "International"}
                onChange={(e) => setCategory(e.target.value)} />International
              <input type="radio" name='category' value="Domestic"
                checked={category === "Domestic"}
                onChange={(e) => setCategory(e.target.value)} />Domestic
            </div>
            <div className='mb-2 '>
              <label htmlFor="">Days:</label><br />
              <input type="text" className='form-control' placeholder='Days' value={days} onChange={(e) => setDays(e.target.value)} />
            </div>
            <div className='mb-2 '>
              <label htmlFor="">Price:</label><br />
              <input type="text" className='form-control' placeholder='Total Amount' value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <div className='mb-2 '>
              <label className="form-label">Package Cover Image</label>

              <input
                type="file"
                className="form-control"
                accept="image/jpeg,image/png,image/webp"
                onChange={(e) => {
                  const file = e.target.files[0];

                  if (file) {
                    setCoverImage(file);
                    setPreviewImage(URL.createObjectURL(file));
                  }
                }}
              />

              {previewImage && (
                <div className="mt-3">
                  <img
                    src={previewImage}
                    alt="Package Cover Preview"
                    style={{
                      width: "200px",
                      height: "120px",
                      objectFit: "cover",
                      borderRadius: "8px"
                    }}
                  />

                  <button
                    type="button"
                    className="btn btn-sm btn-outline-danger ms-2"
                    onClick={() => {
                      setCoverImage(null);
                      setPreviewImage("");
                    }}
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
            <div>

              <div className="mb-3">

                <label className="form-label fw-bold">
                  Select Destinations
                </label>

                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Search destinations..."
                  value={searchDestination}
                  onChange={(e) => setSearchDestination(e.target.value)}
                />

                <div
                  className="border rounded p-3"
                  style={{
                    maxHeight: "250px",
                    overflowY: "auto"
                  }}
                >
                  {filteredDestinations.map(item => (
                    <div className="form-check mb-2" key={item.id}>

                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`destination-${item.id}`}
                        checked={selectedDestinationIds.includes(item.id)}
                        onChange={() => handleDestinationChange(item.id)}
                      />

                      <label
                        className="form-check-label"
                        htmlFor={`destination-${item.id}`}
                      >
                        {item.name}
                        <small className="text-muted ms-2">
                          (ID: {item.id})
                        </small>
                      </label>

                    </div>
                  ))}

                  {filteredDestinations.length === 0 && (
                    <p className="text-muted mb-0">
                      No destinations found.
                    </p>
                  )}
                </div>

                <div className="mt-2">
                  <small className="text-muted">
                    Selected destinations: {selectedDestinationIds.length}
                  </small>
                </div>

              </div>

            </div>
          </div>
          <div className='mb-2 '>
            <label htmlFor="">Description:</label><br />
            <textarea name="" id="" placeholder='Description' style={{ width: "100%" }} value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
          </div>
          <div className='mb-2 '>
            <label className="form-label">
              Meeting Point
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter meeting point"
              value={meetingPoint}
              onChange={e => setMeetingPoint(e.target.value)}
            />
          </div>
          <div className='mb-2 '>
            <label className="form-label">
              Tour Type
            </label>
            <select
              className="form-select"
              value={tourType}
              onChange={e => setTourType(e.target.value)}
            >
              <option value="Friends & Family">Friends & Family</option>
              <option value="Group Tour">Group Tour</option>
              <option value="Private Tour">Private Tour</option>
              <option value="Couple Tour">Couple Tour</option>
              <option value="Adventure Tour">Adventure Tour</option>
              <option value="Corporate Tour">Corporate Tour</option>
              <option value="Family Tour">Family Tour</option>
            </select>
          </div>
          <div className='mb-2 '>
            <label className="form-label">
              Maximum Guests
            </label>
            <input
              type="number"
              min="1"
              className="form-control"
              value={maxGuests}
              onChange={e => setMaxGuests(Number(e.target.value))}
            />
          </div>
          <div className='mb-2 '>
            <label className="form-label">
              Minimum Age
            </label>
            <input
              type="number"
              min="0"
              className="form-control"
              value={minimumAge}
              onChange={e => setMinimumAge(Number(e.target.value))}
            />
          </div>

          <div className='mb-2 '></div>


        </div>




        <div className="col-sm-6 ">

          <div className='mb-2 '>
            <ArrayInput
              label="Package Highlights"
              items={highlights}
              setItems={setHighlights}
              placeholder="Enter package highlight"
            />
          </div>
          <div className='mb-2 '>
            <ArrayInput
              label="Inclusions"
              items={inclusions}
              setItems={setInclusions}
              placeholder="Enter package inclusion"
            />
          </div>
          <div className='mb-2 '>
            <ArrayInput
              label="Exclusions"
              items={exclusions}
              setItems={setExclusions}
              placeholder="Enter package exclusion"
            />
          </div>
          <div className='mb-2 '>
            <ArrayInput
              label="Languages"
              items={languages}
              setItems={setLanguages}
              placeholder="Enter supported language"
            />
          </div>
          <div className='mb-2 '>

            {/* <div className="mb-3">
              <label className="form-label">Package Duration (Days)</label>

              <input
                type="number"
                className="form-control"
                min="1"
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
              />
            </div>

            <ItineraryInput
              days={days}
              items={itinerary}
              setItems={setItinerary}
            /> */}

            <ItineraryInput
              days={days}
              items={itinerary}
              setItems={setItinerary}
            />

          </div>

          <div className='mb-2 '>
            <HotelInput
              destinations={destinations}
              selectedDestinationIds={selectedDestinationIds}
              hotel={hotel}
              setHotel={setHotel}
            />
          </div>

          <div className='mb-2 '>
            <TransportInput
              transport={transport}
              setTransport={setTransport}
            />
          </div>
          <div className='mb-2 '>
            <label className="form-label">
              Cancellation Policy
            </label>
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter cancellation policy"
              value={cancellationPolicy}
              onChange={e => setCancellationPolicy(e.target.value)}
            />
          </div>
          <div className='mb-2 '>
            <button className='btn btn-primary bgTeal' onClick={(e) => handleAddPackage()}>Add Package</button>
          </div>
        </div>


      </div>

    </div>

  )
}
// function Details({ des, id, select }) {
//   return (<>
//     <div>
//       <input type='checkbox' className='mx-2' />{des.name} : <i style={{ fontSize: '12px' }}>{des.city}, {des.country}</i></div>
//   </>)
// }