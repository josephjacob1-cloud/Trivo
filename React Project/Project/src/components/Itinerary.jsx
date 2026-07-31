import '../css/style.css'
export default function Itinerary({ itinerary, inclusions, exclusions }) {
    return (<>
        <div className=''>

            <div className="container mt-4 ">
                <div className="row ">
                    <div className="col-sm-6 rounded-4 border border-gray-300 mt-4 mb-4 mx-1 p-3">
                        <p className="h5">Itinerary ({itinerary.length} Days)</p>
                        {
                            itinerary.map((day, i) =>
                                <div key={i} className='itinerary-row'>
                                    <div className="days me-4"><span style={{ textAlign: 'left' }}>Day {day.day}</span></div>
                                    <div className='content-box'>
                                        <b>{day.title}</b><br />
                                        <span>{day.description}</span>
                                    </div>
                                </div>
                            )
                        }

                    </div>
                    <div className="col-sm-3 rounded-4 border border-gray-300 mt-4 mb-4 mx-1 p-3">
                        <p className='h4'>Inclusions</p>
                        {
                            inclusions.map((inc, i) =>
                                <div key={i} className='inclusions'>
                                    <i class="bi bi-check-circle-fill text-success me-2"></i>
                                    <span>{inc}</span>
                                </div>
                            )
                        }
                    </div>
                    <div className="col-sm-2 rounded-4 border border-gray-300 mt-4 mb-4 mx-1 p-3">
                        <p className='h4'>Exclusions</p>
                        {
                            exclusions.map((e, i) =>
                                <div key={i} className='inclusions'>
                                    <i class="bi bi-check-circle-fill text-danger  me-2"></i>
                                    <span>{e}</span>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    </>)
}