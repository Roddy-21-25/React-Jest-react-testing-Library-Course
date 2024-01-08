/* eslint-disable testing-library/no-render-in-setup */
import { render, screen, fireEvent } from "@testing-library/react";
import TextBox from "../components/TextBox";

describe("TextBox Component", () => {
  let article;
  let button;

  //? lo que hacemos es declarar un beforeEach para que ejecute un codigo antes de cada text.
  beforeEach(() => {
    render(<TextBox />);
    article = screen.getByRole("article", { name: "parrafo principal" });
    button = screen.getByRole("button", { name: "Pulsa para modificar" });
  });

  test("la caja de texto se encuentra en el documento", () => {
    expect(article).toBeInTheDocument();
  });

  test("la caja con el texto tiene un color inicial", () => {
    expect(article).toHaveStyle({
      backgroundColor: "indigo",
    });
  });

  //? fireEvent => emula acciones como si el usuario estuviese haciendolas
  test("si al pulsar el boton cambia el color de fondo", () => {
    fireEvent.click(button);
    expect(article).toHaveStyle({
      backgroundColor: "tomato",
    });
  });
});
