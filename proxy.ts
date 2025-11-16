import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "./constants";

export function proxy(req: NextRequest) {
    const { pathname } = req.nextUrl;
    const hasToken = req.cookies.has(TOKEN_NAME);
    
    // Deja pasar preflights y otros métodos especiales
    if (req.method === "OPTIONS") return NextResponse.next();

    // Home -> dashboard
    if (pathname === "/") {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // Rutas protegidas
    if (pathname.startsWith("/dashboard")) {
        if (!hasToken) {
            return NextResponse.redirect(new URL("/login", req.url));
        }
        return NextResponse.next();
    }

    // Evita que un usuario logueado entre a /login
    if (pathname === "/login" && hasToken) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    return NextResponse.next();
}