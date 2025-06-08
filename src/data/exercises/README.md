# 📚 Sistema de Ejercicios Modular - Gurilab

## 🏗️ Estructura de Directorios

```
src/data/exercises/
├── index.js                     # Sistema de carga dinámica
├── README.md                    # Esta documentación
├── math/                        # Matemáticas
│   ├── segundo/                 # Segundo año
│   │   ├── addition.js          # ✅ Sumas (10 ejercicios)
│   │   ├── subtraction.js       # 🚧 Restas (placeholder)
│   │   ├── multiplication.js    # 🚧 Multiplicaciones (futuro)
│   │   └── division.js          # 🚧 Divisiones (futuro)
│   └── quinto/                  # Quinto año
│       ├── addition.js          # ✅ Sumas (10 ejercicios)
│       ├── subtraction.js       # 🚧 Restas (placeholder)
│       ├── multiplication.js    # 🚧 Multiplicaciones (futuro)
│       └── division.js          # 🚧 Divisiones (futuro)
├── art/                         # 🎨 Arte (futuro)
│   ├── segundo/
│   └── quinto/
└── geography/                   # 🌍 Geografía (futuro)
    ├── segundo/
    └── quinto/
```

## 🎯 Características del Sistema

### ✅ **Escalabilidad**
- Cada materia tiene su propia carpeta
- Cada año escolar tiene su subcarpeta
- Cada tipo de ejercicio tiene su archivo independiente

### ✅ **Mantenibilidad**
- Archivos pequeños y enfocados (≤10 ejercicios por archivo)
- Estructura predecible y consistente
- Fácil adición de nuevo contenido

### ✅ **Flexibilidad**
- Carga dinámica de ejercicios según selección del usuario
- Cache automático para mejorar rendimiento
- Detección automática de contenido disponible

## 📝 Formato de Ejercicios

Cada archivo de ejercicios debe exportar un array con el siguiente formato:

```javascript
const exercises = [
  {
    id: "S2-ADD-01",              // ID único: [Año][Tipo]-[Número]
    level: 2,                     // Nivel de dificultad (1-3)
    type: "addition",             // Tipo de ejercicio
    subject: "math",              // Materia
    year: "segundo",              // Año escolar
    question: "⚽ Pregunta con contexto uruguayo...",
    options: ["35", "39", "41", "33"],  // 4 opciones
    answer: "39",                 // Respuesta correcta
    explanation: "23 + 16 = 39",  // Explicación opcional
    theme: "deportes",            // Temática del ejercicio
    difficulty: "easy"            // Dificultad específica
  }
  // ... más ejercicios
];

export default exercises;
```

## 🇺🇾 Temáticas Uruguayas

Los ejercicios incluyen contextos familiares para niños uruguayos:

### **🏃‍♂️ Deportes**
- Fútbol (Nacional vs Peñarol, Centenario)
- Básquet (Aguada, Nacional)

### **🍖 Gastronomía**
- Asado, parrilladas, chorizos
- Bizcochos, dulce de leche

### **🎭 Cultura**
- Carnaval, murgas, comparsas
- Cuarteto de Nos, música nacional

### **🏖️ Lugares**
- Punta del Este, Pocitos
- Ciudad Vieja, Tristán Narvaja

### **🐄 Campo**
- Estancias, ganado
- Tradiciones rurales

### **🧉 Tradiciones**
- Mate, yerba
- Costumbres locales

## 🚀 Cómo Agregar Nuevo Contenido

### 1. **Nueva Materia**
```bash
mkdir src/data/exercises/nueva-materia
mkdir src/data/exercises/nueva-materia/segundo
mkdir src/data/exercises/nueva-materia/quinto
```

### 2. **Nuevo Año Escolar**
```bash
mkdir src/data/exercises/math/nuevo-año
```

### 3. **Nuevo Tipo de Ejercicio**
Crear archivo: `src/data/exercises/math/segundo/nuevo-tipo.js`

### 4. **Actualizar configuración**
Modificar `src/data/exercises/index.js`:
- Agregar nueva materia a `subjects`
- Agregar nuevos tipos a `exerciseTypes`
- Agregar año a `yearToLevel` si es necesario

## 📊 Estado Actual

### ✅ **Completado**
- **Matemáticas > Segundo > Sumas**: 10 ejercicios listos
- **Matemáticas > Quinto > Sumas**: 10 ejercicios listos

### 🚧 **En Desarrollo**
- Restas para Segundo y Quinto año
- Multiplicaciones y Divisiones

### 🎯 **Próximamente**
- Arte y Geografía
- Más años escolares (Primero, Tercero, etc.)
- Ejercicios interactivos avanzados

## 🛠️ Sistema Técnico

### **Carga Dinámica** (`exerciseLoader`)
- Importación asíncrona de módulos
- Cache automático para rendimiento
- Detección de contenido disponible

### **Componentes Actualizados**
- `SubjectSelect.jsx`: Materias dinámicas
- `AgeSelect.jsx`: Años con verificación de disponibilidad
- `ExerciseSession.jsx`: Carga modular de ejercicios

### **Beneficios**
- 🚀 Mejor rendimiento (carga solo lo necesario)
- 🧹 Código más limpio y modular
- 📈 Fácil escalabilidad horizontal
- 🔧 Mantenimiento simplificado
