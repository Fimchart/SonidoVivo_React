// src/tests/Auth.test.tsx
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';

// Envoltorio para que los componentes tengan acceso a los contextos
const renderWithProviders = (ui: React.ReactElement) => {
  return render(
    <AuthProvider>
      <CartProvider>
        <MemoryRouter>{ui}</MemoryRouter>
      </CartProvider>
    </AuthProvider>
  );
};

describe('Pruebas de Formularios (Validaciones y Eventos)', () => {
  it('13. Login debe mostrar error si los campos están vacíos', async () => {
    renderWithProviders(<Login />);
    const boton = screen.getByRole('button', { name: /Ingresar a mi cuenta/i });
    
    fireEvent.click(boton); // Hacemos clic sin llenar campos
    
    await waitFor(() => {
      expect(screen.getByText('Debes completar ambos campos.')).toBeInTheDocument();
    });
  });

  it('14. Login debe actualizar el valor del input al escribir', () => {
    renderWithProviders(<Login />);
    const inputCorreo = screen.getByPlaceholderText('ejemplo@correo.cl');
    
    fireEvent.change(inputCorreo, { target: { value: 'test@correo.cl' } });
    
    expect(inputCorreo).toHaveValue('test@correo.cl');
  });

  it('15. Registro debe validar que el correo tenga un formato correcto', async () => {
    renderWithProviders(<Registro />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('ejemplo@correo.cl'), { target: { value: 'correo-invalido' } });
    fireEvent.change(screen.getByPlaceholderText('Crea una contraseña'), { target: { value: '123456' } }); // <-- Corregido
    fireEvent.change(screen.getByPlaceholderText('Repite la contraseña'), { target: { value: '123456' } }); // <-- Corregido
    
    fireEvent.click(screen.getByRole('button', { name: /Registrarme/i }));

    await waitFor(() => {
      expect(screen.getByText('Ingresa un formato de correo válido.')).toBeInTheDocument();
    });
  });

  it('16. Registro debe validar que las contraseñas coincidan', async () => {
    renderWithProviders(<Registro />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('ejemplo@correo.cl'), { target: { value: 'test@test.cl' } });
    fireEvent.change(screen.getByPlaceholderText('Crea una contraseña'), { target: { value: '123456' } }); // 
    fireEvent.change(screen.getByPlaceholderText('Repite la contraseña'), { target: { value: '654321' } }); // 
    
    fireEvent.click(screen.getByRole('button', { name: /Registrarme/i }));

    await waitFor(() => {
      expect(screen.getByText('Las contraseñas no coinciden.')).toBeInTheDocument();
    });
  });



  it('17. Registro debe validar el largo de la contraseña', async () => {
    renderWithProviders(<Registro />);
    
    fireEvent.change(screen.getByPlaceholderText('Tu nombre'), { target: { value: 'Test' } });
    fireEvent.change(screen.getByPlaceholderText('ejemplo@correo.cl'), { target: { value: 'test@test.cl' } });
    fireEvent.change(screen.getByPlaceholderText('Crea una contraseña'), { target: { value: '123' } }); // 
    fireEvent.change(screen.getByPlaceholderText('Repite la contraseña'), { target: { value: '123' } }); // 
    
    fireEvent.click(screen.getByRole('button', { name: /Registrarme/i }));

    await waitFor(() => {
      expect(screen.getByText('Debe tener al menos 6 caracteres.')).toBeInTheDocument();
    });
  });
});