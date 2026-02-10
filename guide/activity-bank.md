---
title: Banco de Actividades
---

# 8. Banco de Actividades

El Banco de Actividades es una vista centralizada que permite consultar **todas las actividades (preguntas)** registradas en el sistema, agrupadas por aventura. A diferencia del listado de actividades dentro de una sección, esta vista ofrece una perspectiva global de todo el contenido.

Se accede desde el menú lateral: **Banco de Actividades**.

**Roles con acceso:**
<RoleTag role="super-admin" /> <RoleTag role="editor" />

## 8.1 Vista general

<ImagePlaceholder label="Banco de Actividades con selector de aventura y tabla de actividades" />

### Selector de aventura

En la parte superior de la pantalla se encuentra un **desplegable** que permite elegir la aventura cuyos datos desea consultar. Al ingresar a la sección, se selecciona automáticamente la primera aventura disponible.

### Banner de advertencia

::: warning Aventura con jugadores registrados
Si la aventura seleccionada tiene jugadores registrados, aparecerá un banner de color ámbar indicando que **la edición está restringida** para proteger la estructura del juego. Mientras este banner esté visible, ciertas acciones como navegar al editor de actividades estarán deshabilitadas.
:::

## 8.2 Filtros

La sección dispone de dos filtros para localizar actividades rápidamente:

| Filtro | Descripción |
|---|---|
| **Buscar** | Campo de texto libre que filtra por título de actividad o por texto de la pregunta. |
| **Tipo de pregunta** | Desplegable con las opciones: **Todos los tipos**, **Respuesta única**, **Respuesta múltiple** o **Arrastrar y soltar**. |

::: tip
Los filtros se reinician automáticamente al cambiar de aventura en el selector superior.
:::

## 8.3 Tabla de actividades

La tabla principal muestra todas las actividades de la aventura seleccionada con las siguientes columnas:

| Columna | Descripción |
|---|---|
| **Actividad** | Título del paso/actividad. Si la pregunta no está asignada a ninguna actividad, se muestra la etiqueta **"Sin asignar"** en color ámbar. |
| **Tipo** | Etiqueta de color indicando el tipo de pregunta: **"Única"**, **"Múltiple"** o **"Arrastrar"**. |
| **Pregunta** | Texto de la pregunta (truncado). Al pasar el cursor se muestra un tooltip con el texto completo. |
| **Sponsor** | Nombre del sponsor asociado a la pregunta, o **"--"** si no tiene sponsor vinculado. |
| **Respuestas** | Número de respuestas configuradas para la pregunta. |
| **Acciones** | Botones de **navegar** y **eliminar** (ver sección 8.4). |

<ImagePlaceholder label="Tabla del banco de actividades con columnas Actividad, Tipo, Pregunta, Sponsor, Respuestas y Acciones" />

::: info
El pie de la tabla muestra el **total de actividades** que coinciden con los filtros aplicados actualmente.
:::

## 8.4 Acciones disponibles

Cada fila de la tabla dispone de dos botones de acción:

| Botón | Icono | Acción | Condición |
|---|---|---|---|
| **Navegar** | Enlace externo | Abre el editor de la actividad correspondiente dentro de su sección y nivel. | **Deshabilitado** si la aventura tiene jugadores registrados. |
| **Eliminar** | Papelera | Elimina la pregunta de forma permanente previa confirmación. | **Solo disponible** para preguntas **huérfanas** (sin actividad asignada). |

::: warning Solo preguntas huérfanas
El botón de eliminar únicamente aparece habilitado en las preguntas con estado **"Sin asignar"**. Las preguntas vinculadas a una actividad deben eliminarse desde el editor de actividades de su sección correspondiente.
:::

## 8.5 Añadir actividad

Para agregar una nueva actividad al sistema:

1. Haga clic en el botón **"Añadir Actividad"** en la cabecera de la sección.
2. Se abrirá un **diálogo de selección de ubicación** con tres pasos secuenciales:

| Paso | Campo | Descripción |
|---|---|---|
| 1 | **Aventura** | Seleccione la aventura a la que pertenecerá la nueva actividad. |
| 2 | **Nivel** | Seleccione el nivel dentro de la aventura elegida. |
| 3 | **Sección** | Seleccione la sección dentro del nivel elegido. |

3. Al confirmar la selección, el sistema le redirigirá automáticamente al **formulario de creación de actividad** dentro de la sección seleccionada.

<ImagePlaceholder label="Diálogo de selección de ubicación: Aventura, Nivel y Sección" />

::: tip
Cada selector se habilita de forma secuencial: primero debe elegir la aventura para que se carguen sus niveles, y luego elegir el nivel para que se carguen sus secciones.
:::
