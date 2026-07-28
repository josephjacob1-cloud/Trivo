import '../css/style.css'
import image1 from '../assets/slider/image1.jpg'
import image2 from '../assets/slider/image2.jpg'
import image3 from '../assets/slider/image3.jpg'
import Taj from '../assets/Taj.jpeg'
export default function Home() {
    return (<>
        <div>
            <h2>Home</h2>
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
            <div className='container'>
                <div className='row'>
                  
                </div>

            </div>
        </div>
    </>)
}