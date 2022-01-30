import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../components/App";

// Comprobar que abre en target blank
test("Opens in new tab", () => {
  render(<App />);
  const linkElem = screen.getByText(/blog/i);
  expect(linkElem).toHaveAttribute("target", "_blank");
});

// Comprobar que no abre en target blank
test("Does not open in new tab", () => {
  render(<App />);
  const linkElem = screen.getByText(/contacto/i);
  expect(linkElem).toHaveAttribute("target", "");
});
