import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import { AuthProvider } from '../context/AuthContext';
import { CartProvider } from '../context/CartContext';

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
    const botones = screen.getAllByRole('button');
    const botonSubmit = botones.find(b => b.getAttribute('type') === 'submit') || botones[0];
    
    fireEvent.click(botonSubmit);
    
    await waitFor(() => {
      expect(screen.getByText('Debes completar ambos campos.')).toBeInTheDocument();
    });
  });

  it('14. Login debe actualizar el valor del input al escribir', () => {
    renderWithProviders(<Login />);
    const inputs = screen.getAllByRole('textbox');
    const inputCorreo = inputs[0];
    
    fireEvent.change(inputCorreo, { target: { value: 'test@correo.cl' } });
    
    expect(inputCorreo).toHaveValue('test@correo.cl');
  });

  it('15. Registro debe validar que el correo tenga un formato correcto', async () => {
    renderWithProviders(<Registro />);
    const inputs = screen.getAllByRole('textbox');
    
    if (inputs.length >= 2) {
      fireEvent.change(inputs[0], { target: { value: 'Test' } });
      fireEvent.change(inputs[1], { target: { value: 'correo-invalido' } });
    }
    
    const botones = screen.getAllByRole('button');
    const botonSubmit = botones.find(b => b.getAttribute('type') === 'submit') || botones[0];
    fireEvent.click(botonSubmit);

    await waitFor(() => {
      // Especificamos el mensaje exacto para evitar colisión con el <label> de "Correo"
      expect(screen.getByText('Ingresa un formato de correo válido.')).toBeInTheDocument();
    });
  });

  it('16. Registro debe validar que las contraseñas coincidan', async () => {
    renderWithProviders(<Registro />);
    const inputs = screen.getAllByRole('textbox');
    
    if (inputs.length >= 2) {
      fireEvent.change(inputs[0], { target: { value: 'Test' } });
      fireEvent.change(inputs[1], { target: { value: 'test@test.cl' } });
    }

    const passInputs = document.querySelectorAll('input[type="password"]');
    if (passInputs.length >= 2) {
      fireEvent.change(passInputs[0], { target: { value: '123456' } });
      fireEvent.change(passInputs[1], { target: { value: '654321' } });
    }

    const botones = screen.getAllByRole('button');
    const botonSubmit = botones.find(b => b.getAttribute('type') === 'submit') || botones[0];
    fireEvent.click(botonSubmit);

    await waitFor(() => {
      expect(screen.getByText('Las contraseñas no coinciden.')).toBeInTheDocument();
    });
  });

  it('17. Registro debe validar el largo de la contraseña', async () => {
    renderWithProviders(<Registro />);
    const inputs = screen.getAllByRole('textbox');
    
    if (inputs.length >= 2) {
      fireEvent.change(inputs[0], { target: { value: 'Test' } });
      fireEvent.change(inputs[1], { target: { value: 'test@test.cl' } });
    }

    const passInputs = document.querySelectorAll('input[type="password"]');
    if (passInputs.length >= 2) {
      fireEvent.change(passInputs[0], { target: { value: '123' } });
      fireEvent.change(passInputs[1], { target: { value: '123' } });
    }

    const botones = screen.getAllByRole('button');
    const botonSubmit = botones.find(b => b.getAttribute('type') === 'submit') || botones[0];
    fireEvent.click(botonSubmit);

    await waitFor(() => {
      expect(screen.getByText('Debe tener al menos 6 caracteres.')).toBeInTheDocument();
    });
  });
});