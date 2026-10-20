import { describe, test, expect } from "@jest/globals";
import { sum, subtract, product, divide, pow, sqrt, modulo } from "../src/calculator.js";

describe("Calculadora - Specification-Driven (Jest)", () => {
    describe("Calculadora: Operaciones Basicas", () => {
        test("debe sumar dos números positivos", () => {
            expect(sum(3, 6)).toBe(9);
        });
        test("debe sumar números negativos", () => {
            expect(sum(-3, -6)).toBe(-9);
        });
        test("debe sumar valores opuestos resultando cero", () => {
            expect(sum(3, -3)).toBe(0);
        });
        test("debe restar dos números positivos", () => {
            expect(subtract(10, 4)).toBe(6);
        });
        test("debe restar números negativos", () => {
            expect(subtract(-3, -6)).toBe(3);
        });
    });
    describe("Calculadora: Operaciones Intermedias", () => {
        test("debe multiplicar dos números positivos", () => {
            expect(product(3, 6)).toBe(18);
        });
        test("debe multiplicar por cero", () => {
            expect(product(5, 0)).toBe(0);
        });
        test("debe multiplicar números negativos", () => {
            expect(product(-3, 6)).toBe(-18);
        });
        test("debe dividir dos números positivos", () => {
            expect(divide(12, 4)).toBe(3);
        });
        test("debe dividir números negativos", () => {
            expect(divide(-12, 4)).toBe(-3);
        });
        test("debe lanzar error al dividir por cero", () => {
            expect(() => divide(10, 0)).toThrow("No se puede dividir por cero");
        });
    })
    describe("Calculadora: Operaciones Avanzadas", () => {
        test("debe elevar a una potencia positiva", () => {
            expect(pow(2, 3)).toBe(8);
        });
        test("debe elevar a una potencia negativa", () => {
            expect(pow(2, -2)).toBe(0.25);
        });
        test("debe lanzar error al elevar cero a exponente negativo", () => {
            expect(() => pow(0, -2)).toThrow("No se puede elevar cero a un exponente negativo");
        });
        test("debe calcular raíz cuadrada de un número positivo", () => {
            expect(sqrt(9)).toBe(3);
        });
        test("debe calcular raíz cuadrada de cero", () => {
            expect(sqrt(0)).toBe(0);
        });
        test("debe lanzar error para número negativo", () => {
            expect(() => sqrt(-1)).toThrow("No se puede calcular la raíz cuadrada de un número negativo");
        });
        test("debe calcular el módulo correctamente", () => {
            expect(modulo(10, 3)).toBe(1);
        });
        test("debe calcular módulo con números negativos", () => {
            expect(modulo(-10, 3)).toBe(-1);
        });
    })
});