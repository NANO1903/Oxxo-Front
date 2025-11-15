import axios from "axios";
import { cookies } from "next/headers";
import { API_URL, TOKEN_NAME } from "@/constants"
import SelectLocation from "./_components/SelectLocation";
import { Location } from "@/entitites";
import LocationCard from "./_components/LocationCard";

const LocationsPage = async ({ searchParams }: { searchParams: Promise<{ store?: string }> }) => {
    const userCookies = cookies();
    const token = (await userCookies).get(TOKEN_NAME)?.value;
    let { data } = await axios.get<Location[]>(`${API_URL}/locations`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe",
            manager: {
                managerId: "0",
                managerFullName: "",
                managerPhoneNumber: "",
                managerEmail: "", 
                managerSalary: 0
            }
        },
        ... data
    ];
    const params = await searchParams;
    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-red-100">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={params.store} />
                </div>
                <div className="w-4/12">
                    <LocationCard store={(await searchParams).store}/>
                </div>
            </div>
        </div>
    );
};

export default LocationsPage;