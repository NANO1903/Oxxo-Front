"use server";

import { API_URL, TOKEN_NAME } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import axios from "axios";

export default async function deleteLocation(formData: FormData) {
    const header = await authHeaders();
    const locationId = formData.get("deleteValue");
    if (!locationId) return;
    axios.delete(`${API_URL}/locations/${locationId}`, {
        headers: {
            ...header
        }
    });
}