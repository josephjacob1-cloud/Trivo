import '../../css/style.css'
import image2 from '../../assets/slider/image2.jpg'
import { useContext, useEffect, useState } from 'react';
import UserContext from '../UserContext';
import { useNavigate } from 'react-router-dom';
import { BASE_URL, GET_PACKAGES_CUSTOMERS } from '../../api/api';
import { getPackages } from '../../api/packageApi';
export default function Packages() {


    const userData = useContext(UserContext)
    // const packages = userData.places.slice(0, 12);
    const [packages, setPackages] = useState([])
    const navigate = useNavigate()
    const role = localStorage.getItem("role");
    const [searchKey, setSearchKey] = useState("")
    // const [destinationFilter, setDestinationFilter] = useState("");
    // const [durationFilter, setDurationFilter] = useState("");
    // const [budgetFilter, setBudgetFilter] = useState("");
    // const [sortBy, setSortBy] = useState("latest");
    
    useEffect(() => {
        window.scrollTo(0, 0);
        handlePackages()
    }, [])


    const handlePackages = async () => {
        console.log("fetching DB")
        try {

            const data = await getPackages()
            setPackages(data)
            // userData.setPlaces(data)
            // packages = data;            
        } catch (err) {
            console.log(err.message);
        }
    };
    const filteredPackages = packages.filter((p) => {
        const search = searchKey.toLowerCase().trim();

        return (
            p.packageName?.toLowerCase().includes(search) ||
            p.name?.toLowerCase().includes(search) ||
            p.category?.toLowerCase().includes(search) ||
            p.destination?.some((d) =>
                d.city?.toLowerCase().includes(search) ||
                d.country?.toLowerCase().includes(search)
            )
        );
    });

    return (<>
        <div >

            <div className='packagesHeadSec'>
                <div style={{ textAlign: 'right' }} className='pt-2 px-2'>
                    {/* <button className='btn btn-info text-white fw-bold' onClick={(e)=>navigate('addpackage')}>+Add Package</button> */}
                    {(role === "agent" || role === "consultant") && (
                        <button
                            className="btn btn-info text-white fw-bold"
                            onClick={() => navigate("/addpackage")}
                        >
                            + Add Package
                        </button>
                    )}

                </div>
                <div className='pkHeadTexts'>
                    <p className='pkTxt1'>Home {'>'} Tour Packages</p>
                    <p className='h1 pkTxt2'>Explore Amazing <br />Tour Packages</p>
                    <p className='pkTxt3'>Find the best destination around the world with our exclusice tour packages</p>
                    <div className="input-group">
                        <input value={searchKey} onChange={(e) => setSearchKey(e.target.value)} type="search" className="form-control" placeholder="Search tou destination or packages" aria-label="Search" aria-describedby="search-addon" />
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
                <div className='container'>
                    <div className='row' style={{ display: 'flex', flexWrap: 'wrap' }}>

                        {filteredPackages.length > 0 ? (
                            filteredPackages.map((p) => (
                                <Card
                                    key={p.id}
                                    pack={p}
                                    path={BASE_URL}
                                    select={userData.setSelectedPackage}
                                />
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <h5>No packages found</h5>
                                <p className="text-muted">
                                    Try searching with another package name or destination.
                                </p>
                            </div>
                        )}

                    </div>
                </div>
            </div>

        </div>
    </>)
}
function Card({ pack, path, select }) {
    const navigate = useNavigate()
    const coverImage = pack.coverImage
        ? `${path.replace(/\/+$/, "")}/${pack.coverImage.replace(/^\/+/, "")}`
        : ""
    return <div className="col-sm-3 placeCard" onClick={(e) => {
        // select(pack);
        navigate("/packages/view/" + pack.id)
    }}>
        <img src={coverImage} alt={pack.packageName} className='placeImg' />
        <div className="placeCardText">
            <p className='pTitleTxt'>{pack.packageName}</p>
            <p className='pLocTxr'>{pack.destination[0].city} | {pack.destination[0].country}</p>
        </div>
    </div>

}