import deleteManager from "@/actions/managers/delete";
import { Button } from "@heroui/react";
import { LuTrash2 } from "react-icons/lu";

export default function DeleteManagerButton({ managerId }: { managerId: string }) {
  const deleteManagerById = deleteManager.bind(null, managerId);

  return (
    <form action={deleteManagerById}>
      <Button type="submit" className="bg-red-600 text-white">
        <LuTrash2 size="20" />
      </Button>
    </form>
  );
}
