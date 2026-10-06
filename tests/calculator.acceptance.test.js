import { describe, test, expect, beforeAll, afterAll } from "@jest/globals";
import request from "supertest";
import { createServer } from "../src/api.js";

const app = createServer();

describe("Calculadora - Acceptance-Driven Testing", () => {
    describe("Criterios de aceptación: Suma", () => {
        test("aceptar: suma de números positivos devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/add").query({ a: 3, b: 6 });
            expect(res.status).toBe(200);
            expect(res.body).toHaveProperty("result");
            expect(res.body.result).toBe(9);
        });

        test("aceptar: suma de números negativos devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/add").query({ a: -3, b: -6 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(-9);
        });
    });

    describe("Criterios de aceptación: Resta", () => {
        test("aceptar: resta de números positivos devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/subtract").query({ a: 10, b: 4 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(6);
        });

        test("aceptar: resta de números negativos devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/subtract").query({ a: -3, b: -6 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(3);
        });
    });

    describe("Criterios de aceptación: Multiplicación", () => {
        test("aceptar: multiplicación de números positivos devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/multiply").query({ a: 3, b: 6 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(18);
        });

        test("aceptar: multiplicación por cero devuelve cero", async () => {
            const res = await request(app).get("/api/calculator/multiply").query({ a: 5, b: 0 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(0);
        });

        test("aceptar: multiplicación de números negativos devuelve resultado negativo", async () => {
            const res = await request(app).get("/api/calculator/multiply").query({ a: -3, b: 6 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(-18);
        });
    });

    describe("Criterios de aceptación: División", () => {
        test("aceptar: división de números positivos devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/divide").query({ a: 12, b: 4 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(3);
        });

        test("rechazar: división por cero devuelve error 400", async () => {
            const res = await request(app).get("/api/calculator/divide").query({ a: 10, b: 0 });
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty("error");
            expect(res.body.error).toBe("No se puede dividir por cero");
        });
    });

    describe("Criterios de aceptación: Potencia", () => {
        test("aceptar: potencia de un número devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/power").query({ base: 2, exp: 3 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(8);
        });

        test("aceptar: potencia con exponente negativo devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/power").query({ base: 2, exp: -2 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(0.25);
        });
    });

    describe("Criterios de aceptación: Raíz Cuadrada", () => {
        test("aceptar: raíz cuadrada de un número positivo devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/sqrt").query({ value: 9 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(3);
        });

        test("aceptar: raíz cuadrada de cero devuelve cero", async () => {
            const res = await request(app).get("/api/calculator/sqrt").query({ value: 0 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(0);
        });

        test("rechazar: raíz cuadrada de número negativo devuelve error 400", async () => {
            const res = await request(app).get("/api/calculator/sqrt").query({ value: -1 });
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty("error");
            expect(res.body.error).toBe("No se puede calcular la raíz cuadrada de un número negativo");
        });
    });

    describe("Criterios de aceptación: Módulo", () => {
        test("aceptar: módulo de dos números devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/modulo").query({ a: 10, b: 3 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(1);
        });

        test("aceptar: módulo con números negativos devuelve resultado correcto", async () => {
            const res = await request(app).get("/api/calculator/modulo").query({ a: -10, b: 3 });
            expect(res.status).toBe(200);
            expect(res.body.result).toBe(-1);
        });
    });

    describe("Criterios de aceptación: Validación de API", () => {
        test("rechazar: operación no soportada devuelve error 400", async () => {
            const res = await request(app).get("/api/calculator/desconocida").query({ a: 1, b: 2 });
            expect(res.status).toBe(400);
            expect(res.body).toHaveProperty("error");
            expect(res.body.error).toBe("Operación 'desconocida' no soportada");
        });

        test("aceptar: respuesta siempre tiene formato JSON", async () => {
            const res = await request(app).get("/api/calculator/add").query({ a: 3, b: 6 });
            expect(res.header["content-type"]).toContain("application/json");
        });

        test("aceptar: endpoint raíz responde con 404", async () => {
            const res = await request(app).get("/");
            expect(res.status).toBe(404);
        });
    });
});