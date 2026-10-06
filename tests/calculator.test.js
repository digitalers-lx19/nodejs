import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { add, subtract, multiply, divide, power, sqrt, modulo } from "../src/calculator.js";

describe("Calculadora - Test-Driven Development (TDD)", () => {
    test("add: debe sumar dos números positivos", () => {
        assert.strictEqual(add(3, 6), 9);
    });

    test("add: debe sumar números negativos", () => {
        assert.strictEqual(add(-3, -6), -9);
    });

    test("add: debe sumar valores opuestos dando cero", () => {
        assert.strictEqual(add(3, -3), 0);
    });

    test("subtract: debe restar dos números positivos", () => {
        assert.strictEqual(subtract(10, 4), 6);
    });

    test("subtract: debe restar números negativos", () => {
        assert.strictEqual(subtract(-3, -6), 3);
    });

    test("multiply: debe multiplicar dos números positivos", () => {
        assert.strictEqual(multiply(3, 6), 18);
    });

    test("multiply: debe multiplicar por cero", () => {
        assert.strictEqual(multiply(5, 0), 0);
    });

    test("multiply: debe multiplicar números negativos", () => {
        assert.strictEqual(multiply(-3, 6), -18);
    });

    test("divide: debe dividir dos números positivos", () => {
        assert.strictEqual(divide(12, 4), 3);
    });

    test("divide: debe lanzar error al dividir por cero", () => {
        assert.throws(() => divide(10, 0), /No se puede dividir por cero/);
    });

    test("divide: debe dividir números negativos", () => {
        assert.strictEqual(divide(-12, 4), -3);
    });

    test("power: debe elevar a una potencia positiva", () => {
        assert.strictEqual(power(2, 3), 8);
    });

    test("power: debe elevar a una potencia negativa", () => {
        assert.strictEqual(power(2, -2), 0.25);
    });

    test("power: debe lanzar error al elevar cero a exponente negativo", () => {
        assert.throws(() => power(0, -2), /No se puede elevar cero a un exponente negativo/);
    });

    test("sqrt: debe calcular raíz cuadrada de un número positivo", () => {
        assert.strictEqual(sqrt(9), 3);
    });

    test("sqrt: debe calcular raíz cuadrada de cero", () => {
        assert.strictEqual(sqrt(0), 0);
    });

    test("sqrt: debe lanzar error para número negativo", () => {
        assert.throws(() => sqrt(-1), /No se puede calcular la raíz cuadrada de un número negativo/);
    });

    test("modulo: debe calcular el módulo correctamente", () => {
        assert.strictEqual(modulo(10, 3), 1);
    });

    test("modulo: debe calcular módulo con números negativos", () => {
        assert.strictEqual(modulo(-10, 3), -1);
    });
});