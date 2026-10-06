# language: es
Característica: Calculadora
  Como usuario de la calculadora
  Quiero realizar operaciones matemáticas básicas
  Para obtener resultados precisos

Escenario: Suma de dos números positivos
  Dado que el usuario ingresa los valores 3 y 6
  Cuando realiza una suma
  Entonces el resultado debe ser 9

Escenario: Suma de números negativos
  Dado que el usuario ingresa los valores -3 y -6
  Cuando realiza una suma
  Entonces el resultado debe ser -9

Escenario: Resta de dos números positivos
  Dado que el usuario ingresa los valores 10 y 4
  Cuando realiza una resta
  Entonces el resultado debe ser 6

Escenario: Multiplicación de dos números positivos
  Dado que el usuario ingresa los valores 3 y 6
  Cuando realiza una multiplicación
  Entonces el resultado debe ser 18

Escenario: Multiplicación por cero
  Dado que el usuario ingresa los valores 5 y 0
  Cuando realiza una multiplicación
  Entonces el resultado debe ser 0

Escenario: División de dos números positivos
  Dado que el usuario ingresa los valores 12 y 4
  Cuando realiza una división
  Entonces el resultado debe ser 3

Escenario: División por cero debe lanzar error
  Dado que el usuario ingresa los valores 10 y 0
  Cuando realiza una división
  Entonces debe mostrar el error "No se puede dividir por cero"

Escenario: Potencia de un número
  Dado que el usuario ingresa los valores 2 y 3
  Cuando realiza una potencia
  Entonces el resultado debe ser 8

Escenario: Raíz cuadrada de un número positivo
  Dado que el usuario ingresa el valor 9
  Cuando calcula la raíz cuadrada
  Entonces el resultado debe ser 3

Escenario: Raíz cuadrada de un número negativo debe lanzar error
  Dado que el usuario ingresa el valor -1
  Cuando calcula la raíz cuadrada
  Entonces debe mostrar el error "No se puede calcular la raíz cuadrada de un número negativo"

Escenario: Módulo de dos números
  Dado que el usuario ingresa los valores 10 y 3
  Cuando calcula el módulo
  Entonces el resultado debe ser 1