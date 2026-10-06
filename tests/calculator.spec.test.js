import { describe, test, expect } from "@jest/globals";
import { add, subtract, multiply, divide, power, sqrt, modulo } from "../src/calculator.js";

describe("Calculadora - Specification-Driven (Jest)", () => {
    describe("add", () => {
        test("debe sumar dos números positivos", () => {
            expect(add(3, 6)).toBe(9);
        });

        test("debe sumar números negativos", () => {
            expect(add(-3, -6)).toBe(-9);
        });

        test("debe sumar valores opuestos resultando cero", () => {
            expect(add(3, -3)).toBe(0);
        });
    });

    describe("subtract", () => {
        test("debe restar dos números positivos", () => {
            expect(subtract(10, 4)).toBe(6);
        });

        test("debe restar números negativos", () => {
            expect(subtract(-3, -6)).toBe(3);
        });
    });

    describe("multiply", () => {
        test("debe multiplicar dos números positivos", () => {
            expect(multiply(3, 6)).toBe(18);
        });

        test("debe multiplicar por cero", () => {
            expect(multiply(5, 0)).toBe(0);
        });

        test("debe multiplicar números negativos", () => {
            expect(multiply(-3, 6)).toBe(-18);
        });
    });

    describe("divide", () => {
        test("debe dividir dos números positivos", () => {
            expect(divide(12, 4)).toBe(3);
        });

        test("debe dividir números negativos", () => {
            expect(divide(-12, 4)).toBe(-3);
        });

        test("debe lanzar error al dividir por cero", () => {
            expect(() => divide(10, 0)).toThrow("No se puede dividir por cero");
        });
    });

    describe("power", () => {
        test("debe elevar a una potencia positiva", () => {
            expect(power(2, 3)).toBe(8);
        });

        test("debe elevar a una potencia negativa", () => {
            expect(power(2, -2)).toBe(0.25);
        });

        test("debe lanzar error al elevar cero a exponente negativo", () => {
            expect(() => power(0, -2)).toThrow("No se puede elevar cero a un exponente negativo");
        });
    });

    describe("sqrt", () => {
        test("debe calcular raíz cuadrada de un número positivo", () => {
            expect(sqrt(9)).toBe(3);
        });

        test("debe calcular raíz cuadrada de cero", () => {
            expect(sqrt(0)).toBe(0);
        });

        test("debe lanzar error para número negativo", () => {
            expect(() => sqrt(-1)).toThrow("No se puede calcular la raíz cuadrada de un número negativo");
        });
    });

    describe("modulo", () => {
        test("debe calcular el módulo correctamente", () => {
            expect(modulo(10, 3)).toBe(1);
        });

        test("debe calcular módulo con números negativos", () => {
            expect(modulo(-10, 3)).toBe(-1);
        });
    });
});