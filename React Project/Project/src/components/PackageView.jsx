import { useContext } from "react"
import UserContext from "./UserContext"
import '../css/style.css'
import StarRating from "./StarRating";
import ThumbSlider from "./ThumbSlider";
import Itinerary from "./Itinerary";

export default function PackageView() {
    const pack = useContext(UserContext).selectedPackage;
    const IMG_PATH = "src/assets/places/"
    return (<>
        <div>
            <div
                style={{
                    backgroundImage: `url(${IMG_PATH + pack.destination.images.cover})`,
                    width: '100%',
                    height: '400px',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}>
                <div className="container-fluild mx-4">
                    <div className="row">
                        <div className="col-sm-9 mt-2">
                            <p className="textHeadWhite">
                                <i class="bi bi-box-arrow-left me-2"></i>
                                <span>Back to Packages</span></p>
                            <p style={{ visibility: pack.featured ? 'visible' : 'none', width: '120px' }} className="featuresDivItems">

                                <i className="bi bi-star-fill goldenStar"></i>
                                <span> Featured</span>
                            </p>
                            <p className="h2 textHeadWhite">{pack.packageName}</p>
                            <p className="textHeadWhite">
                                <i className="bi bi-geo-alt"></i>
                                {pack.destination.city} | {pack.destination.country}
                            </p>
                            <p>
                                {/* <i className="bi bi-star"></i> */}
                                <StarRating rating={pack.rating.average}></StarRating>
                                <span className="textHeadWhite" >
                                    <span className="mx-2">{pack.rating.average}</span>
                                    <span>|</span>
                                    <span className="mx-2 me-5">{pack.rating.totalReviews} Reviews</span>

                                    <span>{pack.bookingCount} Booked</span></span>
                            </p>
                            <div className="featuresDiv">
                                <p className="featuresDivItems"><i class="bi bi-calendar-week"> </i>
                                    <span>{pack.duration.text}</span>
                                </p>
                                <p className="featuresDivItems"><i class="bi bi-people"></i>
                                    <span>Max {pack.maxGuests} Guests</span>
                                </p>
                                <p className="featuresDivItems"><i class="bi bi-person-standing"></i>
                                    <span>Age {pack.minimumAge} +</span>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm-3 priceCard">
                            <p className="discount">{pack.price.discount}% OFF</p>
                            <p className="origPrice"><strike>{pack.price.currency} {pack.price.original}</strike></p>
                            <p className="text-primary fs-4 fw-bold my-0">{pack.price.currency} {pack.price.offer}</p>
                            <p>Per person</p>
                            <p>

                                <i class="bi bi-clipboard-check colTeal me-2"></i>
                                {pack.cancellationPolicy}
                            </p>
                            <p>
                                <button className="btn btn-primary w-100 bgTeal mb-3 fw-bold">Book Now</button>
                                <button className="btn btn-white w-100 btn-outline-primary fw-bold">Enquire Now</button>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            {/* -----------CONTENT PART */}
            <div className="container mt-4">
                <div className="row">
                    <div className="col-sm-9">
                        <p className="h4">About This Tour</p>
                        <p>{pack.description}</p>
                        <p className="h6 fw-bold mt-5">Tour Highlights</p>
                        <div style={{ display: 'flex' }}>
                            <div className="hilights">
                                <i class="bi bi-buildings-fill"></i><br />
                                <span>{pack.highlights[0]}</span>
                            </div>
                            <div className="hilights">
                                <i class="bi bi-cup-hot-fill"></i><br />
                                <span>{pack.highlights[1]}</span>
                            </div>
                            <div className="hilights">
                                <i class="bi bi-car-front-fill"></i><br />
                                <span>{pack.highlights[2]}</span>
                            </div>
                            <div className="hilights">
                                <i class="bi bi-binoculars-fill"></i><br />
                                <span>{pack.highlights[3]}</span>
                            </div>
                            <div className="hilights">
                                <i class="bi bi-eyeglasses"></i><br />
                                <span>{pack.highlights[4]}</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-3 rounded-5 border border-gray-300 mt-4 mb-4">
                        <p className="h4 mt-4 mx-4">Quick Info</p>
                        <div className="qucickElmnts">
                            <i class="bi bi-geo-alt"></i>
                            <span>
                                <b>Meeting Point</b><br />
                                <span>{pack.meetingPoint}</span>
                            </span>
                        </div>
                        <div className="qucickElmnts">
                            <i class="bi bi-tag"></i>
                            <span>
                                <b>Tour Type</b><br />
                                <span>{pack.tourType}</span>
                            </span>
                        </div>
                        <div className="qucickElmnts">
                            <i class="bi bi-globe-central-south-asia"></i>
                            <span>
                                <b>Language</b><br />
                                <span>{pack.languages[0]}, {pack.languages[1]}</span>
                            </span>
                        </div>
                        <div className="qucickElmnts">
                            <i class="bi bi-people"></i>
                            <span>
                                <b>Maximum Guests</b><br />
                                <span>{pack.maxGuests} Guests</span>
                            </span>
                        </div>
                        <div className="qucickElmnts">
                            <i class="bi bi-person-check-fill"></i>
                            <span>
                                <b>Minimum Age</b><br />
                                <span>{pack.minimumAge} Years</span>
                            </span>
                        </div>
                        <div className="qucickElmnts">
                            <i class="bi bi-car-front"></i>
                            <span>
                                <b>Transport</b><br />
                                <span>{pack.transport.type}</span>
                            </span>
                        </div>
                    </div>
                </div>

                <div>
                    <ThumbSlider></ThumbSlider>
                </div>
            </div>
            <div>
                <Itinerary itinerary={pack.itinerary} inclusions={pack.inclusions} exclusions={pack.exclusions} ></Itinerary>
            </div>

        </div>
    </>)
}