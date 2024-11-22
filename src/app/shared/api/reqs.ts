import { headers } from "next/headers";

export async function getClientData() {
    try {
        return headers()
    } catch (e) {
        console.error(`>> err: ${e}`)
    }
} 