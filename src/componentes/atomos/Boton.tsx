import { Link } from "react-router-dom"

interface BotonProps {
    id: number;
}

function Boton({id}: BotonProps){
    return (
        <Link
            to={`/producto/${id}`}
            className="btn btn-warning fw-bold text-dark w-100 py-2"
        >
            Ver producto
        </Link>
    )
}
export default Boton;