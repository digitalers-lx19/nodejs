import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { sum, subtract, product, divide, pow, sqrt, modulo } from "../src/calculator.js";

describe("Calculadora: Operaciones Basicas", () => {
    test("sum: debe sumar dos números positivos", () => {
        assert.strictEqual(sum(3, 6), 9);
    });
    test("sum: debe sumar números negativos", () => {
        assert.strictEqual(sum(-3, -6), -9);
    });
    test("sum: debe sumar valores opuestos dando cero", () => {
        assert.strictEqual(sum(3, -3), 0);
    });
    test("subtract: debe restar dos números positivos", () => {
        assert.strictEqual(subtract(10, 4), 6);
    });
    test("subtract: debe restar números negativos", () => {
        assert.strictEqual(subtract(-3, -6), 3);
    });
});
describe("Calculadora: Operaciones Intermedias", () => {
    test("product: debe multiplicar dos números positivos", () => {
        assert.strictEqual(product(3, 6), 18);
    });
    test("product: debe multiplicar por cero", () => {
        assert.strictEqual(product(5, 0), 0);
    });
    test("product: debe multiplicar números negativos", () => {
        assert.strictEqual(product(-3, 6), -18);
    });
    test("divide: debe dividir dos números positivos", () => {
        assert.strictEqual(divide(12, 4), 3);
    });
    test("divide: debe lanzar error al dividir entre cero", () => {
        assert.throws(() => divide(10, 0), /No se puede dividir por cero/);
    });
    test("divide: debe dividir números negativos", () => {
        assert.strictEqual(divide(-12, 4), -3);
    });
    test("modulo: debe calcular el resto correctamente", () => {
        assert.strictEqual(modulo(10, 3), 1);
    });
    test("modulo: debe calcular resto con números negativos", () => {
        assert.strictEqual(modulo(-10, 3), -1);
    });
})
describe("Calculadora: Operaciones Avanzadas", () => {
    test("pow: debe elevar a una potencia positiva", () => {
        assert.strictEqual(pow(2, 3), 8);
    });
    test("pow: debe elevar a una potencia negativa", () => {
        assert.strictEqual(pow(2, -2), 0.25);
    });
    test("pow: debe lanzar error al elevar cero a exponente negativo", () => {
        assert.throws(() => pow(0, -2), /No se puede elevar cero a un exponente negativo/);
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
})