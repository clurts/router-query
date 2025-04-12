import { Outlet } from "react-router";


export default function Layout() {

    return(
        <>
            <header>
                my app
            </header>
            <Outlet />
            <footer>
                <small>&copy; 2025 - Carsten Lund</small>
            </footer>
        </>
    )
}