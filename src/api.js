import express from "express";
import { add, subtract, multiply, divide, power, sqrt, modulo } from "./calculator.js";

function createServer() {
    const app = express();
    app.use(express.json());

    const operations = {
        add,
        subtract,
        multiply,
        divide,
        power,
        sqrt,
        modulo,
    };

    app.get("/api/calculator/:operation", (req, res) => {
        const { operation } = req.params;
        const { a, b, base, exp, value } = req.query;

        const fn = operations[operation];
        if (!fn) {
            return res.status(400).json({ error: `Operación '${operation}' no soportada` });
        }

        try {
            if (operation === "power") {
                return res.json({ result: fn(Number(base), Number(exp)) });
            }
            if (operation === "sqrt") {
                return res.json({ result: fn(Number(value)) });
            }
            return res.json({ result: fn(Number(a), Number(b)) });
        } catch (error) {
            return res.status(400).json({ error: error.message });
        }
    });

    return app;
}

export { createServer, add, subtract, multiply, divide, power, sqrt, modulo };