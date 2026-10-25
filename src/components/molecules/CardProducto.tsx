import Boton from '../atoms/Boton';
import './CardProducto.css'; // <-- IMPORTANTE: Importar los estilos

interface CardProps {
    id: number;
    titulo: string;
    descripcion: string;
    precio: number;
    imagen: string;
    categoria: string;
}

function CardProducto({ id, titulo, descripcion, precio, imagen, categoria }: CardProps) {
    const precioFormateado = new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(precio);

    return (
        <div className="product-card">
            <div className="product-image">
                <span className="product-badge">{categoria}</span>
                <img src={imagen} alt={titulo} />
            </div>
            
            <div className="product-info">
                <span className="product-category">{categoria}</span>
                <h3>{titulo}</h3>
                <p className="product-description">{descripcion}</p>
                
                <div className="product-footer">
                    <span className="product-price">{precioFormateado}</span>
                    <Boton to={`/producto/${id}`} variant="primary">
                        Ver más
                    </Boton>
                </div>
            </div>
        </div>
    );
}

export default CardProducto;