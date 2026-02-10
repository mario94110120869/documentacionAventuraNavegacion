---
title: Plantillas Visuales
---

# 16. Plantillas Visuales

Las plantillas visuales definen el esquema de colores que se aplica a la experiencia de juego del jugador. Cada aventura puede tener una plantilla asignada que personaliza la apariencia de la interfaz del juego. Se accede desde el menu lateral: **Plantillas**.

::: info
Las plantillas solo afectan la apariencia visual del juego para los jugadores. No modifican la estructura ni el contenido de las aventuras.
:::

---

## 16.1 Listado de plantillas

Las plantillas se muestran como **tarjetas en cuadricula** (hasta 3 columnas en pantallas grandes).

<ImagePlaceholder label="Listado de plantillas en formato de cuadricula con tarjetas de vista previa" />

### Informacion de cada tarjeta

| Elemento | Descripcion |
|---|---|
| **Vista previa de colores** | Area superior que muestra el fondo de la app, una franja con el fondo del header, y un circulo con gradiente de colores primario y secundario. |
| **Circulos de colores** | Cinco circulos que representan los colores: primario, secundario, acento, exito y error. |
| **Nombre** | Nombre de la plantilla. |
| **Aventuras** | Etiqueta con el numero de aventuras que utilizan esta plantilla. |
| **Acciones** | Botones de **editar** y **eliminar**. |

::: warning
Si la plantilla esta en uso por una o mas aventuras, **no se puede eliminar**. El sistema mostrara un mensaje de error indicando cuantas aventuras la usan. Debe desasignar la plantilla de todas las aventuras antes de poder eliminarla.
:::

---

## 16.2 Crear / Editar una plantilla

Haga clic en **"Nueva Plantilla"** para acceder al formulario de creacion, o en el boton de **editar** de una plantilla existente para modificarla.

<ImagePlaceholder label="Formulario de creacion de plantilla con vista previa en vivo a la derecha" />

El formulario se presenta en **dos columnas**:
- **Columna izquierda**: Formulario con todos los campos de configuracion.
- **Columna derecha**: **Vista previa en vivo** que se actualiza en tiempo real a medida que modifica los valores.

### Informacion general

| Campo | Requisitos |
|---|---|
| **Nombre** | Obligatorio. Minimo 2 caracteres. |

---

### Colores principales

Los colores principales definen la paleta base de la interfaz del juego.

| Campo | Descripcion | Valor por defecto |
|---|---|---|
| **Color Primario** | Botones, marcadores activos, elementos interactivos. | `#64ddff` |
| **Color Secundario** | Informacion, nivel actual, elementos informativos. | `#5bc4ff` |
| **Color de Acento** | Oro, recompensas, elemento activo, destacados. | `#ffd700` |
| **Color Bloqueado** | Elementos bloqueados, no disponibles. | `#636e72` |

Cada campo incluye un **selector de color visual** (color picker) y un **campo de texto** para ingresar el valor hexadecimal directamente.

---

### Colores de estado

Los colores de estado comunican al jugador el resultado de sus acciones dentro del juego.

| Campo | Descripcion | Valor por defecto |
|---|---|---|
| **Color de Exito** | Completado, logros, respuestas correctas. | `#4ade80` |
| **Color de Error** | Trampas, errores, respuestas incorrectas. | `#ef4444` |
| **Ubicacion del Jugador** | Marcador de posicion del jugador en el mapa. | `#00ff00` |

---

### Fondos y transparencias

#### Colores de fondo

| Campo | Descripcion | Valor por defecto |
|---|---|---|
| **Fondo de la App** | Color de fondo principal de la aplicacion. Soporta gradientes CSS. | Gradiente oscuro (135deg) |
| **Fondo del Header** | Barra de navegacion superior. Soporta gradientes CSS. | Gradiente oscuro (180deg) |
| **Fondo de Modales** | Fondo de dialogos y ventanas modales. Soporta valores RGBA para transparencia. | Gradiente oscuro con transparencia |

::: tip
Los campos de fondo aceptan tanto colores solidos (ej: `#1a1a2e`) como gradientes CSS completos (ej: `linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)`). Esto permite crear interfaces con mayor profundidad visual.
:::

#### Configuracion de transparencias

| Campo | Rango | Paso | Valor por defecto |
|---|---|---|---|
| **Navbar / Header** | 0 - 1 | 0.01 | 0.98 |
| **Menu** | 0 - 1 | 0.01 | 0.95 |
| **Contenedor de Preguntas** | 0 - 1 | 0.01 | 0.98 |

Donde **0** = completamente transparente y **1** = completamente opaco.

---

### Boton "Restaurar valores"

En la parte inferior del formulario se encuentra el boton **"Restaurar valores"**, que restablece **todos** los campos del formulario a sus valores predeterminados. Esto es util si ha realizado muchos cambios y desea volver al esquema de colores original.

::: warning
El boton "Restaurar valores" reinicia todos los campos del formulario inmediatamente. Asegurese de que desea perder los cambios actuales antes de pulsarlo.
:::

---

### Vista previa en vivo

<ImagePlaceholder label="Vista previa en vivo de la plantilla mostrando los colores aplicados a la interfaz del juego" />

La vista previa se ubica en la **columna derecha** del formulario y permanece **fija al hacer scroll**. Muestra una representacion visual de como se veran los colores seleccionados aplicados a la interfaz del juego, actualizandose **instantaneamente** con cada cambio en los campos del formulario.

La vista previa incluye:
- Simulacion del **fondo de la app** y el **header**.
- Muestra de **botones** con el color primario.
- Ejemplo de **elementos de acento** como recompensas.
- Indicadores de **exito** y **error**.
- Representacion del **marcador del jugador** en el mapa.

::: tip
Utilice la vista previa para experimentar con diferentes combinaciones de colores antes de guardar. Los cambios se reflejan en tiempo real, lo que permite iterar rapidamente sobre el diseno.
:::
