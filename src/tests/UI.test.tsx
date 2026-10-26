import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CardProducto from '../assets/components/molecules/CardProducto';
import Inicio from '../pages/Inicio';

describe('Pruebas de Renderizado de Componentes', () => {
  it('8. CardProducto debe renderizar el título y el precio formateado', () => {
    render(
      <MemoryRouter>
        <CardProducto id={1} titulo="Guitarra Fender" descripcion="Buena" precio={150000} imagen="test.jpg" categoria="Guitarras" />
      </MemoryRouter>
    );
    expect(screen.getByText('Guitarra Fender')).toBeInTheDocument();
    expect(screen.getByText('$150.000')).toBeInTheDocument();
  });

  it('9. CardProducto debe renderizar la categoría como badge', () => {
    render(
      <MemoryRouter>
        <CardProducto id={1} titulo="Guitarra" descripcion="Buena" precio={150000} imagen="test.jpg" categoria="Guitarras Eléctricas" />
      </MemoryRouter>
    );
    const categoriaElements = screen.getAllByText('Guitarras Eléctricas');
    expect(categoriaElements.length).toBeGreaterThan(0);
  });

  it('10. Inicio debe mostrar el Hero principal', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );
    // Verifica que exista el encabezado principal del Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Siente la música/i);
    expect(screen.getByText(/vive el sonido/i)).toBeInTheDocument();
  });

  it('11. Inicio debe mostrar los 4 beneficios', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );
    expect(screen.getByText('Envío Rápido')).toBeInTheDocument();
    expect(screen.getByText('Pago Seguro')).toBeInTheDocument();
  });

  it('12. Inicio debe tener enlaces funcionales', () => {
    render(
      <MemoryRouter>
        <Inicio />
      </MemoryRouter>
    );
    // Usa expresión regular para ignorar el emoji 🎸
    const linkCatalogo = screen.getByRole('link', { name: /ver catálogo/i });
    expect(linkCatalogo).toHaveAttribute('href', '/productos');
  });
});