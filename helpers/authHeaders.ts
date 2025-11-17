import { TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { cache } from "react";

export const authHeaders = cache(async () => {
    console.log("CALLED");

    const userCookies = cookies();
    const token = (await userCookies).get(TOKEN_NAME)?.value;
    return {
        'Authorization': `Bearer ${token}`
    }
})