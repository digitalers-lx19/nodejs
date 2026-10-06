const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

function divide(a, b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero");
    }
    return a / b;
}

function power(base, exponent) {
    if (base === 0 && exponent < 0) {
        throw new Error("No se puede elevar cero a un exponente negativo");
    }
    return Math.pow(base, exponent);
}

function sqrt(value) {
    if (value < 0) {
        throw new Error("No se puede calcular la raíz cuadrada de un número negativo");
    }
    return Math.sqrt(value);
}

const modulo = (a, b) => a % b;

export { add, subtract, multiply, divide, power, sqrt, modulo };