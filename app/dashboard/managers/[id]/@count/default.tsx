import { API_URL } from "@/constants";
import { Manager } from "@/entitites";
import { authHeaders } from "@/helpers/authHeaders";
import { Card, CardBody } from "@heroui/react";

const CountManagers = async () => {
    const header = await authHeaders();
    const response = await fetch(`${API_URL}/manager`, {
        headers: {
            ...header
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });

    const managers: Manager[] = await response.json();
    const countNoStore = managers.filter((manager: Manager) => !manager.location).length;
    let max: number = 0;
    let salary: number = 0;
    managers.forEach((manager: Manager) => {
        if (manager.managerSalary > max) max = manager.managerSalary;
        salary += manager.managerSalary;
    });

    return (
        <Card className="w-fit px-2 py-2">
            <CardBody>
                <h1>Hay {managers.length} manager{managers.length > 1 ? "s" : ""}</h1>
                <h1>Hay {countNoStore} sin tienda</h1>
                <h1>El salario máximo es: {max} </h1>
                <h1>El salario promedio es: {salary/managers.length} </h1>
            </CardBody>
        </Card>
    );
}

export default CountManagers;