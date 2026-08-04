import { useState } from "react";

export default function ThumbSlider() {
    const images = ["/src/assets/places/acropolis-athens-sunset.jpg",
        "/src/assets/places/angkor-wat.jpg",
        "/src/assets/places/burj-khalifa-exterior.jpg",
        "/src/assets/places/chichen-itza-mayan-ruins.jpg",
        "/src/assets/places/colosseum-rome.jpg",
        "/src/assets/places/cristo-redentor-rio.jpg",
        "/src/assets/places/desert-point-grand-canyon-south-rim-view.jpg",
        "/src/assets/places/djemaa-el-fna-marrakech-square-dusk.jpg",
        "/src/assets/places/eiffel-tower-paris.jpg",
        "/src/assets/places/empire-state-building-helicopter-view.jpg",
        "/src/assets/places/granada-alhambra.jpg",
        "/src/assets/places/great-barrier-reef.jpg",
        "/src/assets/places/great-wall-of-china.jpg",
        "/src/assets/places/hagia-sophia-istanbul-1.jpg",
        "/src/assets/places/halong-bay-mountains.jpg",
        "/src/assets/places/leaning-tower-of-pisa.jpg",
        "/src/assets/places/machu-picchu-view.jpg",
        "/src/assets/places/mount-everest.jpg",
        "/src/assets/places/mount-fuji.jpg",
        "/src/assets/places/niagara-falls-new-york.jpg",
        "/src/assets/places/notre-dame-towers.jpg",
        "/src/assets/places/palace-of-versailles.jpg",
        "/src/assets/places/palace-of-westminster-big-ben.jpg",
        "/src/assets/places/pyramids-giza.jpg",
        "/src/assets/places/sagrada-familia-passion-facade.jpg",
        "/src/assets/places/salar-de-uyuni-2.jpg",
        "/src/assets/places/san-francisco-golden-gate-bridge.jpg",
        "/src/assets/places/statue-of-liberty.jpg",
        "/src/assets/places/stonehenge-england.jpg",
        "/src/assets/places/st-peters-basilica-rome.jpg",
        "/src/assets/places/sydney-opera-house-harbour-bridge.jpg",
        "/src/assets/places/table-mountain.jpg",
        "/src/assets/places/taj-mahal.jpg",
        "/src/assets/places/times-square.jpg",
        "/src/assets/places/zayid-mosque-abu-dhabi.jpg",]

    const rNumber = Math.floor(Math.random() * ((images.length - 10)) + 1)
    const selectedImgs = images.slice(rNumber, rNumber + 6);


    return (<>
        <div className="">
            <p className="h4">Gallery</p>
            {
                <div>
                    {selectedImgs.map((img, i) =>
                        <img src={img} alt="Thumb" width='160' className="rounded-3 m-1"/>
                    )
                    }
                </div>
            }

        </div>
    </>)
}