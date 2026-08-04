import '../css/style.css'
import image1 from '../assets/slider/image1.jpg'
import image2 from '../assets/slider/image2.jpg'
import image3 from '../assets/slider/image3.jpg'

import Effel from '../assets/places/eiffel-tower-paris.jpg'
import Burj from '../assets/places/burj-khalifa-exterior.jpg'
import Taj from '../assets/places/taj-mahal.jpg'
import Opera from '../assets/places/sydney-opera-house-harbour-bridge.jpg'
import Everest from '../assets/places/mount-everest.jpg'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate = useNavigate()
    return (<>
        <div>
            <div id="simpleSlider" className="carousel slide" data-bs-ride="carousel">

                {/* Images Container */}
                <div className="carousel-inner">

                    {/* Slide 1 */}
                    <div className="carousel-item active">
                        <img
                            src={image1}
                            className="d-block w-100"
                            alt="Beach"
                        />
                    </div>

                    {/* Slide 2 */}
                    <div className="carousel-item">
                        <img
                            src={image2}
                            className="d-block w-100"
                            alt="Mountains"
                        />
                    </div>

                    {/* Slide 3 */}
                    <div className="carousel-item">
                        <img
                            src={image3}
                            className="d-block w-100"
                            alt="City"
                        />
                    </div>

                </div>

                {/* Left Arrow */}
                <button className="carousel-control-prev" type="button" data-bs-target="#simpleSlider" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </button>

                {/* Right Arrow */}
                <button className="carousel-control-next" type="button" data-bs-target="#simpleSlider" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </button>

            </div>
            <div className='container '>
                <div className='row'>
                    <div className="col-sm-3 placeCard" style={{cursor:'pointer'}} onClick={(e)=>navigate("/packages/view/1")}>
                        <img src={Effel} alt="Effel" className='placeImg' />
                        <div className="placeCardText">
                            <p className='pTitleTxt'>Effect Tower</p>
                            <p className='pLocTxr'>Paris</p>
                        </div>
                    </div>
                    <div className="col-sm-3 placeCard" style={{cursor:'pointer'}} onClick={(e)=>navigate("/packages/view/5")}>
                        <img src={Burj} alt="Burj" className='placeImg' />
                        <div className="placeCardText">
                            <p className='pTitleTxt'>Burj Khalifa</p>
                            <p className='pLocTxr'>UAE</p>
                        </div>
                    </div>
                    <div className="col-sm-3 placeCard" style={{cursor:'pointer'}} onClick={(e)=>navigate("/packages/view/5")}>
                        <img src={Taj} alt="Taj" className='placeImg' />
                        <div className="placeCardText">
                            <p className='pTitleTxt'>Taj Mahal</p>
                            <p className='pLocTxr'>New Delhi</p>
                        </div>
                    </div>
                    <div className="col-sm-3 placeCard" style={{cursor:'pointer'}} onClick={(e)=>navigate("/packages")}>
                        <img src={Opera} alt="Opera" className='placeImg' />
                        <div className="placeCardText">
                            <p className='fs-5 text-white shadow  bgTeal p-2' style={{opacity:'0.7', borderRadius:'10px',margin:'0 0 50px 60px'}}>Explore More</p>
                            
                        </div>
                    </div>
                </div>

                <p className="h5 reviewHead">Review Highlights</p>
                <div className='row'>
                    <div className="col-sm-3 reviewCard p-3 ">
                        <p className='h6 fw-bold'>“Free tour of Malaysia”</p>
                        <p className=''>Arrangements were perfect. We really enjoyed. Personnel at locations were very helpful. Everything... View More</p>
                        <div className='color-red reviewStar'>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            <span>(4.5/5)</span>
                        </div>
                    </div>

                    <div className="col-sm-3 reviewCard p-3 ">
                        <p className='h6 fw-bold'>“Free tour of Malaysia”</p>
                        <p className=''>Arrangements were perfect. We really enjoyed. Personnel at locations were very helpful. Everything... View More</p>
                        <div className='color-red reviewStar'>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            <span>(4.5/5)</span>
                        </div>
                    </div>

                    <div className="col-sm-3 reviewCard p-3 ">
                        <p className='h6 fw-bold'>“Free tour of Malaysia”</p>
                        <p className=''>Arrangements were perfect. We really enjoyed. Personnel at locations were very helpful. Everything... View More</p>
                        <div className='color-red reviewStar'>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            <span>(4.5/5)</span>
                        </div>
                    </div>

                    <div className="col-sm-3 reviewCard p-3 ">
                        <p className='h6 fw-bold'>“Free tour of Malaysia”</p>
                        <p className=''>Arrangements were perfect. We really enjoyed. Personnel at locations were very helpful. Everything... View More</p>
                        <div className='color-red reviewStar'>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                            <span>(4.5/5)</span>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    </>)
}