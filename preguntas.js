// Base de datos de preguntas para cada nivel
// Cada pregunta tiene: texto, opciones (array), indice de la correcta
const preguntas = [
  // Nivel 1: Ecuaciones
  [
    {
      texto: 'Jeffry encuentra una puerta cerrada. Para abrirla, resuelve: 2x + 3 = 11',
      opciones: ['x = 4', 'x = 3', 'x = 5'],
      correcta: 0
    },
    {
      texto: 'Locki necesita comida. ¿Cuánto vale x en x - 5 = 2?',
      opciones: ['x = 6', 'x = 7', 'x = 8'],
      correcta: 1
    },
    {
      texto: 'El ratón dejó una pista: 3x = 12. ¿Cuál es el valor de x?',
      opciones: ['x = 4', 'x = 3', 'x = 5'],
      correcta: 0
    }
  ],
  // Nivel 2: Inecuaciones
  [
    {
      texto: 'Locki ve una sombra. Para acercarse, resuelve: 3x - 2 > 7',
      opciones: ['x > 3', 'x > 2', 'x > 1'],
      correcta: 0
    },
    {
      texto: 'Jeffry escucha un ruido. ¿Para qué valores de x se cumple 2x + 1 < 9?',
      opciones: ['x < 4', 'x < 5', 'x < 3'],
      correcta: 0
    },
    {
      texto: 'El ratón corre rápido. Resuelve: x - 4 >= 2',
      opciones: ['x >= 6', 'x >= 2', 'x >= 8'],
      correcta: 0
    }
  ],
  // Nivel 3: Límites y Derivadas
  [
    {
      texto: 'El ratón corre por la sala. ¿Cuál es la derivada de f(x) = x^2 + 3x?',
      opciones: ['2x + 3', 'x + 3', '2x'],
      correcta: 0
    },
    {
      texto: 'Locki salta la mesa. Calcula el límite: lim(x->2) (x^2 - 4)',
      opciones: ['0', '4', '2'],
      correcta: 0
    },
    {
      texto: 'Jeffry observa la velocidad de Locki: v(t) = 3t^2. ¿Cuál es la aceleración en t=2?',
      opciones: ['12', '6', '8'],
      correcta: 0
    }
  ]
]; 