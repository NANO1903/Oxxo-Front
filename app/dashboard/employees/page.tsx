import { API_URL } from "@/constants";
import { Employee, Location } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import EmployeeCard from "./_components/EmployeeCard";
import CreateEmployee from "./_components/CreateEmployee";
import FormCreateEmployee from "./_components/FormCreateEmployee";
import ListEmployees from "./_components/ListEmployees";

const EmployeesPage = async () => {
  const header = await authHeaders();
  if (!header) return null;

  const employees: Employee[] = await (await fetch(`${API_URL}/employees`, {
    headers: {
      'content-type': 'application/json',
      ...header
    },
    next: {
      tags: [`dashboard:employees`]
    }
  })).json();

  const locations: Location[] = await (await fetch(`${API_URL}/locations`, {
    headers: {
      'content-type': 'application/json',
      ...header
    },
    next: {
      tags: [`dashboard:locations`]
    }
  })).json();

  return (
    <div className="w-full h-[90vh] flex flex-row overflow-y-auto">
      <div className="w-11/12 pt-10 pl-10">
        <div className="flex flex-wrap grow-0 gap-4 max-h-72 w-full">
          <ListEmployees employees={employees} locations={locations}/>
        </div>
      </div>
      <div className="w-1/12 items-center pt-10 flex flex-col">
        <CreateEmployee>
          <FormCreateEmployee locations={locations} />
        </CreateEmployee>
      </div>
    </div>
  )

};

export default EmployeesPage;