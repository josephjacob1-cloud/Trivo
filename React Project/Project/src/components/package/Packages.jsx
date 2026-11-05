import '../../css/style.css'
import image2 from '../../assets/slider/image2.jpg'
import { useContext, useEffect } from 'react';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, GET_PACKAGES_CUSTOMERS } from '../../config/api'; 
export default function Packages() {

    
    // const IMG_PATH = "http://127.0.0.1:8000/"
    // const IMG_PATH = "src/assets/places/"



    const userData = useContext(UserContext)
    const packages = userData.places.slice(0, 12);
    const navigate = useNavigate()
    
     useEffect(()=>{
       window.scrollTo(0, 0);
       handlePackages()
    },[])


    const handlePackages = async () => {
        console.log("fetching DB")
        try {
            const response = await fetch( 
                GET_PACKAGES_CUSTOMERS
            );
            const data = await response.json();
            userData.setPlaces(data)
            if (!response.ok) {
                throw new Error("Failed to fetch packages");
            }else{        
                userData.setSelectedPackage(null)  
            }        
        } catch (err) {
            console.log(err.message);
        }
    };


    return (<>
        <div >
            
            <div className='packagesHeadSec'>
                <div style={{textAlign:'right'}} className='pt-2 px-2'>
                    <button className='btn btn-info text-white fw-bold' onClick={(e)=>navigate('addpackage')}>+Add Package</button></div>
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
                            <Card key={p.id} pack={p} path={BASE_URL} select= {userData.setSelectedPackage}></Card>
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
        navigate("/packages/view/"+pack.id)
        }}>
       <img src={path + pack.coverImage} alt={pack.packageName} className='placeImg' />
          <div className="placeCardText">
            <p className='pTitleTxt'>{pack.packageName}</p>
            <p className='pLocTxr'>{pack.destination.city} | {pack.destination.country}</p> 
        </div>
    </div>

}