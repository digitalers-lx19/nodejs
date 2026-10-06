import { Given, When, Then, Before } from "@cucumber/cucumber";
import assert from "node:assert/strict";
import { add, subtract, multiply, divide, power, sqrt, modulo } from "../../src/calculator.js";

let a, b, result, error;

Before(() => {
    a = undefined;
    b = undefined;
    result = undefined;
    error = undefined;
});

Given("que el usuario ingresa los valores {int} y {int}", (val1, val2) => {
    a = val1;
    b = val2;
});

Given("que el usuario ingresa el valor {int}", (val1) => {
    a = val1;
});

When("realiza una suma", () => {
    result = add(a, b);
});

When("realiza una resta", () => {
    result = subtract(a, b);
});

When("realiza una multiplicación", () => {
    result = multiply(a, b);
});

When("realiza una división", () => {
    try {
        result = divide(a, b);
    } catch (e) {
        error = e.message;
    }
});

When("realiza una potencia", () => {
    result = power(a, b);
});

When("calcula la raíz cuadrada", () => {
    try {
        result = sqrt(a);
    } catch (e) {
        error = e.message;
    }
});

When("calcula el módulo", () => {
    result = modulo(a, b);
});

Then("el resultado debe ser {int}", (expected) => {
    assert.strictEqual(result, expected);
});

Then("debe mostrar el error {string}", (expectedError) => {
    assert.strictEqual(error, expectedError);
});