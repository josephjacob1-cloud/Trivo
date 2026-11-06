import { BASE_URL } from "../../api/api"
export default function ThumbSlider({ destination }) {
      return (<>
        <div className="">
            
            <p className="h4">Gallery</p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {destination?.[0]?.images?.map((img) => (
                    <div>
                        <img
                            key={img.id}
                            src={`${BASE_URL}${img.image_url}`}
                            alt={img.alt_text || pack.destination[0].name}                            
                            className="rounded-1 m-1 package-thumb-image"
                        />
                        <br />
                        <p className="" style={{textAlign:'center'}}>{img.alt_text || destination[0].name}</p>
                    </div>
                ))}
            </div>
        </div>
    </>)
}