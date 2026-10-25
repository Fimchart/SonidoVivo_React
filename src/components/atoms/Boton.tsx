// src/components/atoms/Boton.tsx
import { Link } from "react-router-dom";
import type { ReactNode } from "react";

interface BotonProps {
    children: ReactNode;
    to?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'danger' | 'warning';
    type?: "button" | "submit" | "reset";
}

function Boton({ children, to, onClick, variant = 'primary', type = "button" }: BotonProps) {
    const btnClass = `btn btn-${variant}`;

    if (to) {
        return (
            <Link to={to} className={btnClass}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={btnClass}>
            {children}
        </button>
    );
}

export default Boton;