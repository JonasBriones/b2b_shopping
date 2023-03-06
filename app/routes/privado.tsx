import { Outlet } from "@remix-run/react";

const Privado = () => {
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default Privado;