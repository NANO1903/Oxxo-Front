import { API_URL } from "@/constants";
import { Employee } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import Link from "next/link";
import EmployeePhotoCard from "./_components/EmployeePhotoCard";
import EmployeeCard from "./_components/EmployeeCard";

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

  return (
    <div className="w-full h-[90vh] p-10 overflow-y-auto">
      <div className="flex flex-wrap grow-0 gap-4 max-h-72 w-full">
        {
          employees.map((employee: Employee) => {
            if (employee.employeePhoto)
              return <EmployeePhotoCard employee={employee} key={employee.employeeId} />
            else
              return <EmployeeCard employee={employee} key={employee.employeeId} />
          })
        }
      </div>
    </div>
  )

};

export default EmployeesPage;