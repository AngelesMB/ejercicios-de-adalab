import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

// test("nombreDelTest", () => {
//   // Preparación
//   // Actuación
//   // Aserción
// });

// Comprobar que tenga un título "Probando ando"
test("Renders title", () => {
  render(<App />);
  const titleElem = screen.getByText(/probando ando/i);
  expect(titleElem).toBeInTheDocument();
});

// Agrupados dentro de un describe
describe("Check form", () => {
  // Que tiene un label "Nombre de usuario"
  test("Renders label for username", () => {
    render(<App />);
    const labelElem = screen.getByText(/nombre de usuario/i);
    expect(labelElem).toBeInTheDocument();
  });

  // Otro label con "Email"
  test("Renders label for email", () => {
    render(<App />);
    const labelElem = screen.getByText(/email/i);
    expect(labelElem).toBeInTheDocument();
  });
});
