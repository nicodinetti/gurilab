// Ejercicios de Sumas para Quinto Año - Temática Uruguaya
// Números de 3-4 dígitos, contextualizados con cultura, deportes, comida y lugares de Uruguay

const exercises = [
  {
    id: "Q5-ADD-01",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "⚽ En el último clásico en el Estadio Centenario había 43,567 hinchas de Nacional y 38,429 hinchas de Peñarol. ¿Cuántas personas había en total en el estadio?",
    options: ["79,845", "81,996", "82,134", "80,567"],
    answer: "81,996",
    explanation: "43,567 + 38,429 = 81,996 personas en total",
    theme: "deportes",
    difficulty: "medium"
  },

  {
    id: "Q5-ADD-02",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🍖 En la parrillada 'El Fogón' vendieron 2,847 chorizos el domingo y 1,569 morcillas. ¿Cuántos embutidos vendieron en total?",
    options: ["4,316", "4,416", "4,215", "4,516"],
    answer: "4,416",
    explanation: "2,847 + 1,569 = 4,416 embutidos en total",
    theme: "gastronomia",
    difficulty: "medium"
  },

  {
    id: "Q5-ADD-03",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🏖️ Durante enero llegaron 15,678 turistas argentinos a Punta del Este y 7,834 turistas brasileños. ¿Cuántos turistas visitaron Punta del Este?",
    options: ["23,412", "23,612", "23,512", "23,312"],
    answer: "23,512",
    explanation: "15,678 + 7,834 = 23,512 turistas en total",
    theme: "turismo",
    difficulty: "hard"
  },

  {
    id: "Q5-ADD-04",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🎭 En el desfile de murgas participaron 3,456 murguistas y 2,789 bailarines de comparsas. ¿Cuántos artistas desfilaron en total?",
    options: ["6,145", "6,345", "6,245", "6,045"],
    answer: "6,245",
    explanation: "3,456 + 2,789 = 6,245 artistas en total",
    theme: "carnaval",
    difficulty: "medium"
  },

  {
    id: "Q5-ADD-05",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🐄 La estancia 'Don José' tiene 4,567 vacas Hereford y 2,834 vacas Angus. ¿Cuántas vacas tiene la estancia en total?",
    options: ["7,301", "7,401", "7,501", "7,201"],
    answer: "7,401",
    explanation: "4,567 + 2,834 = 7,401 vacas en total",
    theme: "campo",
    difficulty: "medium"
  },

  {
    id: "Q5-ADD-06",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🏛️ En el museo Artigas visitaron 1,845 escolares en abril y 2,367 en mayo. ¿Cuántos escolares visitaron el museo en esos dos meses?",
    options: ["4,112", "4,312", "4,212", "4,012"],
    answer: "4,212",
    explanation: "1,845 + 2,367 = 4,212 escolares en total",
    theme: "historia",
    difficulty: "medium"
  },

  {
    id: "Q5-ADD-07",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🧉 La yerbera 'La Merced' vendió 5,678 kilos de yerba en marzo y 3,456 kilos en abril. ¿Cuántos kilos vendió en total?",
    options: ["9,134", "9,234", "9,034", "9,334"],
    answer: "9,134",
    explanation: "5,678 + 3,456 = 9,134 kilos en total",
    theme: "tradicion",
    difficulty: "hard"
  },

  {
    id: "Q5-ADD-08",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🏀 En el partido de básquet entre Aguada y Nacional fueron 6,789 hinchas de Aguada y 4,567 de Nacional. ¿Cuántos hinchas había en total?",
    options: ["11,256", "11,456", "11,356", "11,156"],
    answer: "11,356",
    explanation: "6,789 + 4,567 = 11,356 hinchas en total",
    theme: "deportes",
    difficulty: "hard"
  },

  {
    id: "Q5-ADD-09",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🎵 En el concierto del Cuarteto de Nos vendieron 8,934 entradas anticipadas y 2,456 en el día del show. ¿Cuántas entradas vendieron en total?",
    options: ["11,290", "11,390", "11,490", "11,190"],
    answer: "11,390",
    explanation: "8,934 + 2,456 = 11,390 entradas en total",
    theme: "musica",
    difficulty: "hard"
  },

  {
    id: "Q5-ADD-10",
    level: 3,
    type: "addition",
    subject: "math",
    year: "quinto",
    question: "🏘️ En la feria de Tristán Narvaja se vendieron 3,678 libros usados y 1,845 discos de vinilo. ¿Cuántos artículos se vendieron en total?",
    options: ["5,423", "5,623", "5,523", "5,323"],
    answer: "5,523",
    explanation: "3,678 + 1,845 = 5,523 artículos en total",
    theme: "cultura",
    difficulty: "medium"
  }
];

export default exercises;
