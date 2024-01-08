import { titleCase } from "../components/ProfileCard";

describe("functions inside of ProfileCrd", () => {
  //? Luego dentro definimos otro describe que se encargara de hacer pruebas a x funcion.
  describe("Test to the funcion titleCase", () => {
    //? Como vamos a testear Unit Test o fnciones, lo unico que tenemos que tener claro es
    //? Cual es la entrada y cual es la salida.

    //? usamos esto para especificar el test
    test("debe retornar un string", () => {
      //? Invocamos la funcion.
      const result = titleCase("un valor");

      //? Ponemos la condicion.
      //? esto difiere entre funciones, en este caso, estamos testeando el tipo
      //? por ende usamos typeof y con toBe especificamos que sera un string.
      expect(typeof result).toBe("string");
    });

    test("debe retornar el string transformado", () => {
      expect(titleCase("en un lugar de la mancha")).toBe(
        "En Un Lugar De La Mancha"
      );
    });

    test("debe devolver un string vacio si recibe un string vacio", () => {
      expect(titleCase("")).toBe("");
    });

  });
});
