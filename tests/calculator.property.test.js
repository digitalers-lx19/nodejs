import { describe, test, expect } from "@jest/globals";
import fc from "fast-check";
import { add, subtract, multiply, divide, power, sqrt, modulo } from "../src/calculator.js";

describe("Calculadora - Accurate-Driven (Property-Based Testing)", () => {
    describe("Propiedades de la suma (add)", () => {
        test("conmutatividad: add(a, b) === add(b, a)", () => {
            fc.assert(
                fc.property(fc.integer(), fc.integer(), (a, b) => {
                    expect(add(a, b)).toBe(add(b, a));
                })
            );
        });

        test("asociatividad: add(a, add(b, c)) === add(add(a, b), c)", () => {
            fc.assert(
                fc.property(fc.integer(), fc.integer(), fc.integer(), (a, b, c) => {
                    expect(add(a, add(b, c))).toBe(add(add(a, b), c));
                })
            );
        });

        test("elemento neutro: add(a, 0) === a", () => {
            fc.assert(
                fc.property(fc.integer(), (a) => {
                    expect(add(a, 0)).toBe(a);
                })
            );
        });

        test("elemento opuesto: add(a, -a) === 0", () => {
            fc.assert(
                fc.property(fc.integer(), (a) => {
                    expect(add(a, -a)).toBeCloseTo(0, 10);
                })
            );
        });

        test("precisión con decimales", () => {
            fc.assert(
                fc.property(
                    fc.double({ min: -1000, max: 1000 }).filter(Number.isFinite),
                    fc.double({ min: -1000, max: 1000 }).filter(Number.isFinite),
                    (a, b) => {
                        expect(add(a, b)).toBeCloseTo(a + b, 10);
                    }
                )
            );
        });
    });

    describe("Propiedades de la resta (subtract)", () => {
        test("inversa de suma: subtract(add(a, b), b) === a", () => {
            fc.assert(
                fc.property(fc.integer(), fc.integer(), (a, b) => {
                    expect(subtract(add(a, b), b)).toBe(a);
                })
            );
        });
    });

    describe("Propiedades de la multiplicación (multiply)", () => {
        test("conmutatividad: multiply(a, b) === multiply(b, a)", () => {
            fc.assert(
                fc.property(fc.integer(), fc.integer(), (a, b) => {
                    expect(multiply(a, b)).toBe(multiply(b, a));
                })
            );
        });

        test("asociatividad: multiply(a, multiply(b, c)) === multiply(multiply(a, b), c)", () => {
            fc.assert(
                fc.property(fc.integer({ min: -100, max: 100 }), fc.integer({ min: -100, max: 100 }), fc.integer({ min: -100, max: 100 }), (a, b, c) => {
                    expect(multiply(a, multiply(b, c))).toBe(multiply(multiply(a, b), c));
                })
            );
        });

        test("elemento neutro: multiply(a, 1) === a", () => {
            fc.assert(
                fc.property(fc.integer(), (a) => {
                    expect(multiply(a, 1)).toBe(a);
                })
            );
        });

        test("propiedad del cero: multiply(a, 0) === 0 (o -0)", () => {
            fc.assert(
                fc.property(fc.integer(), (a) => {
                    const result = multiply(a, 0);
                    expect(result === 0 || result === -0).toBe(true);
                })
            );
        });
    });

    describe("Propiedades de la división (divide)", () => {
        test("inversa de multiplicación: divide(multiply(a, b), b) === a (b ≠ 0)", () => {
            fc.assert(
                fc.property(fc.integer(), fc.integer({ min: 1, max: 1000 }), (a, b) => {
                    expect(divide(multiply(a, b), b)).toBeCloseTo(a, 10);
                })
            );
        });

        test("dividir por cero lanza error", () => {
            fc.assert(
                fc.property(fc.integer(), (a) => {
                    expect(() => divide(a, 0)).toThrow("No se puede dividir por cero");
                })
            );
        });
    });

    describe("Propiedades de la potencia (power)", () => {
        test("potencia cero: power(a, 0) === 1", () => {
            fc.assert(
                fc.property(fc.integer({ min: -100, max: 100 }), (a) => {
                    expect(power(a, 0)).toBe(1);
                })
            );
        });

        test("potencia de 1: power(1, a) === 1", () => {
            fc.assert(
                fc.property(fc.integer({ min: -100, max: 100 }), (a) => {
                    expect(power(1, a)).toBe(1);
                })
            );
        });

        test("cero a exponente negativo lanza error", () => {
            fc.assert(
                fc.property(fc.integer({ min: -100, max: -1 }), (a) => {
                    expect(() => power(0, a)).toThrow("No se puede elevar cero a un exponente negativo");
                })
            );
        });

        test("suma de exponentes: power(a, m) * power(a, n) === power(a, m + n)", () => {
            fc.assert(
                fc.property(
                    fc.integer({ min: 1, max: 10 }),
                    fc.integer({ min: -5, max: 5 }),
                    fc.integer({ min: -5, max: 5 }),
                    (a, m, n) => {
                        if (m + n < -5 || m + n > 10) return;
                        expect(multiply(power(a, m), power(a, n))).toBeCloseTo(power(a, m + n), 5);
                    }
                )
            );
        });
    });

    describe("Propiedades de la raíz cuadrada (sqrt)", () => {
        test("sqrt de cuadrado perfecto: sqrt(a * a) === |a|", () => {
            fc.assert(
                fc.property(fc.integer({ min: -1000, max: 1000 }), (a) => {
                    expect(sqrt(multiply(a, a))).toBe(Math.abs(a));
                })
            );
        });

        test("sqrt siempre devuelve un valor no negativo", () => {
            fc.assert(
                fc.property(fc.integer({ min: 0, max: 100000 }), (a) => {
                    expect(sqrt(a)).toBeGreaterThanOrEqual(0);
                })
            );
        });

        test("sqrt de número negativo lanza error", () => {
            fc.assert(
                fc.property(fc.integer({ min: -100000, max: -1 }), (a) => {
                    expect(() => sqrt(a)).toThrow("No se puede calcular la raíz cuadrada de un número negativo");
                })
            );
        });
    });

    describe("Propiedades del módulo (modulo)", () => {
        test("modulo siempre es menor al divisor", () => {
            fc.assert(
                fc.property(
                    fc.integer({ min: -1000, max: 1000 }),
                    fc.integer({ min: 1, max: 1000 }),
                    (a, b) => {
                        expect(modulo(a, b)).toBeLessThan(b);
                    }
                )
            );
        });

        test("modulo por 1 siempre es 0 (o -0)", () => {
            fc.assert(
                fc.property(fc.integer(), (a) => {
                    const result = modulo(a, 1);
                    expect(result === 0 || result === -0).toBe(true);
                })
            );
        });
    });

    describe("Precisión numérica", () => {
        test("suma de flotantes pequeños mantiene precisión", () => {
            fc.assert(
                fc.property(
                    fc.integer({ min: 1, max: 9999 }).map(n => n / 10000),
                    fc.integer({ min: 1, max: 9999 }).map(n => n / 10000),
                    (a, b) => {
                        expect(add(a, b)).toBeCloseTo(a + b, 6);
                    }
                )
            );
        });

        test("división de enteros pequeños mantiene precisión", () => {
            fc.assert(
                fc.property(
                    fc.integer({ min: 1, max: 1000 }),
                    fc.integer({ min: 1, max: 1000 }),
                    (a, b) => {
                        expect(divide(a, b)).toBeCloseTo(a / b, 10);
                    }
                )
            );
        });
    });
});