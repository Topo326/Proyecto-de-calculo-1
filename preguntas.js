// Base de datos de preguntas para cada nivel
// Cada pregunta tiene: texto, opciones (array), indice de la correcta
const preguntas = [
  // Nivel 1: Ecuaciones
  [
    {
      texto: 'Resuelve: 3x + 5 = 20',
      opciones: ['x = 6', 'x = 5', 'x = 7'],  // Correcta en índice 1
      correcta: 1
    },
    {
      texto: 'Resuelve: log₂(x) + log₂(x - 4) = 5',
      opciones: ['x = 4', 'x = 2', 'x = 8'],  // Correcta en índice 2
      correcta: 2
    }
  ],
  
  // Nivel 2: Inecuaciones
  [
    {
      texto: 'Resuelve: 2x - 6 < 10',
      opciones: ['x = 8', 'x < 8', 'x > 8'],  // Correcta en índice 1
      correcta: 1
    },
    {
      texto: 'Resuelve: (x + 3)/(x - 2) ≥ 1',
      opciones: ['x < 2', 'x ≥ 3', 'x > 2'],  // Correcta en índice 2
      correcta: 2
    }
  ],
  
  // Nivel 3: Límites
  [
    {
      texto: 'Calcula: lim x→3 (2x + 1)',
      opciones: ['6', '7', '5'],  // Correcta en índice 1
      correcta: 1
    },
    {
      texto: 'Calcula: lim x→0 sen(5x)/(3x)',
      opciones: ['1', '0', '5/3'],  // Correcta en índice 2
      correcta: 2
    }
  ],
  
  // Nivel 4: Derivadas
  [
    {
      texto: 'Deriva: f(x) = 4x³ - 2x + 7',
      opciones: ['8x² - 2', '12x² - 2', '4x² - 2'],  // Correcta en índice 1
      correcta: 1
    },
    {
      texto: 'Deriva: f(x) = ln((x² + 1)/eˣ)',
      opciones: ['1/(x² + 1) - 1', '(2x)/(x² + 1)', '(2x)/(x² + 1) - 1'],  // Correcta en índice 2
      correcta: 2
    }
  ]
];