// Sistema de carga estática de ejercicios con registry
// Estructura: materia -> año escolar -> tipo de ejercicio

// Importaciones estáticas de todos los ejercicios disponibles
import mathSegundoAddition from './math/segundo/addition.js';
import mathQuintoAddition from './math/quinto/addition.js';
import mathSegundoSubtraction from './math/segundo/subtraction.js';
import mathQuintoSubtraction from './math/quinto/subtraction.js';

const exerciseLoader = {
  // Cache para evitar recargas innecesarias
  cache: new Map(),

  // Registry estático de ejercicios disponibles
  exerciseRegistry: {
    'math': {
      'segundo': {
        'addition': mathSegundoAddition,
        'subtraction': mathSegundoSubtraction
      },
      'quinto': {
        'addition': mathQuintoAddition,
        'subtraction': mathQuintoSubtraction
      }
    }
  },

  // Mapping de años escolares a niveles
  yearToLevel: {
    'Prep': 1,
    'Primero': 1,
    'Segundo': 2,
    'Tercero': 2,
    'Cuarto': 3,
    'Quinto': 3,
    'Sexto': 3
  },

  // Materias disponibles
  subjects: {
    'math': 'Matemáticas',
    'art': 'Arte',
    'geography': 'Geografía'
  },

  // Tipos de ejercicios por materia
  exerciseTypes: {
    'math': {
      'addition': 'Sumas',
      'subtraction': 'Restas',
      'multiplication': 'Multiplicaciones',
      'division': 'Divisiones'
    },
    'art': {
      'colors': 'Colores',
      'shapes': 'Formas',
      'artists': 'Artistas'
    },
    'geography': {
      'countries': 'Países',
      'capitals': 'Capitales',
      'rivers': 'Ríos'
    }
  },

  // Cargar ejercicios específicos
  loadExercises(subject, year, exerciseType) {
    const cacheKey = `${subject}-${year}-${exerciseType}`;

    // Verificar cache
    if (this.cache.has(cacheKey)) {
      console.log(`Cargando desde cache: ${cacheKey}`);
      return this.cache.get(cacheKey);
    }

    try {
      // Buscar en el registry estático
      const subjectData = this.exerciseRegistry[subject];
      if (!subjectData) {
        console.warn(`Materia no encontrada: ${subject}`);
        return [];
      }

      const yearData = subjectData[year];
      if (!yearData) {
        console.warn(`Año no encontrado: ${year} en ${subject}`);
        return [];
      }

      const exercises = yearData[exerciseType];
      if (!exercises || exercises.length === 0) {
        console.warn(`Tipo de ejercicio no encontrado o vacío: ${exerciseType} en ${subject}/${year}`);
        return [];
      }

      console.log(`Ejercicios cargados: ${exercises.length} para ${subject}/${year}/${exerciseType}`);

      // Guardar en cache
      this.cache.set(cacheKey, exercises);
      return exercises;
    } catch (error) {
      console.error(`Error cargando ejercicios para ${subject}/${year}/${exerciseType}:`, error);
      return [];
    }
  },

  // Verificar si hay ejercicios disponibles
  hasExercises(subject, year, exerciseType) {
    const exercises = this.loadExercises(subject, year, exerciseType);
    return exercises.length > 0;
  },

  // Obtener todos los años disponibles para una materia
  getAvailableYears(subject) {
    const availableYears = [];

    for (const [year, level] of Object.entries(this.yearToLevel)) {
      const hasAnyType = Object.keys(this.exerciseTypes[subject] || {}).some(type =>
        this.hasExercises(subject, year.toLowerCase(), type)
      );

      availableYears.push({
        name: year,
        level,
        available: hasAnyType
      });
    }

    return availableYears;
  },

  // Obtener tipos de ejercicios disponibles para una materia y año
  getAvailableTypes(subject, year) {
    const availableTypes = [];
    const types = this.exerciseTypes[subject] || {};

    for (const [type, name] of Object.entries(types)) {
      const available = this.hasExercises(subject, year.toLowerCase(), type);
      availableTypes.push({ type, name, available });
    }

    return availableTypes;
  }
};

export default exerciseLoader;
