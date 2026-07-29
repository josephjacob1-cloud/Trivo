import { useContext } from "react"
import UserContext from "./UserContext"

export default function PackageView() {
    const userData = useContext(UserContext)

    return (<>
        <div>
            <h2>Package View{typeof userData.selectedPackage}</h2>
            {/* {
                userData.selectedPackage.map((p,i)=>
                <div>
                    <p>{p.name}</p>
                    <p>{p.state} | {p.country}</p>
                </div>
                )
            } */}
            {/* {(userData?.selectedPackage || []).map((pkg) => (
                <div key={pkg.id}>{pkg.name}</div>
            ))} */}

            <div>
                {Object.entries(userData.selectedPackage).map(([key, value]) => (
                    <div key={key}>
                        <strong>{key}:</strong> {typeof value === 'object' ? JSON.stringify(value) : value}
                    </div>
                ))}
            </div>

        </div>
    </>)
}