import { API_URL } from "@/constants"
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import { Location } from "@/entitites";

const LocationsPage = async ({ searchParams }: { searchParams: Promise<{ store?: string }> }) => {
    const response = await fetch(`${API_URL}/locations`, {
        headers: {
            ...authHeaders
        },
        next: {
            tags: ["dashboard:locations"]
        }
    });
    let data: Location[] = await response.json(); 
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
        ...data
    ];
    const params = await searchParams;
    return (
        <div className="w-8/12">
            <div className="w-full flex flex-col items-center h-[90vh] bg-red-100">
                <div className="w-1/2 my-10">
                    <SelectLocation locations={data} store={params.store} />
                </div>
                <div className="w-4/12">
                    <LocationCard store={params.store} />
                </div>
                <div className="w-6/12">
                    <FormNewLocation searchParams={searchParams} />
                </div>
                <div className="my-5">
                    <DeleteLocationButton searchParams={searchParams} />
                </div>
            </div>
        </div>
    );
};

export default LocationsPage;