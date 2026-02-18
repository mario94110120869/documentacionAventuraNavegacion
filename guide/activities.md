---
title: Actividades y preguntas
---
# Actividades y preguntas

Las actividades son la unidad de contenido jugable dentro de cada sección. Cada actividad contiene una pregunta con sus respuestas. Desde esta sección puedes crear, editar, visualizar, generar con IA y eliminar actividades.

## 7.1 Listado de actividades

Al acceder a la sección **Actividades**, se muestra el listado de todas las actividades de la sección seleccionada.

![](/images/actividadesseccion.png)

### Columnas del listado

| Columna              | Descripción                                                                          |
| -------------------- | ------------------------------------------------------------------------------------ |
| **Nombre**           | Nombre de la actividad.                                                              |
| **Tipo de pregunta** | Tipo de pregunta asociada (selección única, selección múltiple, arrastrar y soltar). |
| **Pregunta**         | Texto de la pregunta de la actividad.                                                |
| **Orden**            | Posición de la actividad dentro de la sección.                                       |
| **Acciones**         | Botones de acción disponibles para cada actividad.                                   |

### Acciones por actividad

Cada actividad en el listado dispone de las siguientes acciones:

| Acción          | Descripción                                                                |
| --------------- | -------------------------------------------------------------------------- |
| **Ver detalle** | Accede a la vista de detalle de la actividad con la pregunta y respuestas. |
| **Editar**      | Abre el formulario de edición de la actividad.                             |
| **Eliminar**    | Elimina la actividad de forma permanente.                                  |

::: info
El listado de actividades muestra únicamente las actividades de la sección actualmente seleccionada. Para ver actividades de otra sección, selecciónala primero desde el listado de secciones.
:::

## 7.2 Crear una actividad

Para crear una nueva actividad, haz clic en el botón **Crear actividad** ubicado en la parte superior del listado.

![](/images/formulariocrearactividad.png)

El formulario de creación se divide en tres secciones principales:

### Sección 1: Información de la actividad

| Campo           | Tipo        | Descripción                                    | Obligatorio |
| --------------- | ----------- | ---------------------------------------------- | ----------- |
| **Nombre**      | Texto       | Nombre de la actividad.                        | Sí          |
| **Descripción** | Texto largo | Descripción de la actividad.                   | No          |
| **Sección**     | Selector    | Sección a la que pertenece la actividad.       | Sí          |
| **Orden**       | Numérico    | Posición de la actividad dentro de la sección. | Sí          |

### Sección 2: Pregunta

| Campo                     | Tipo              | Descripción                                                 | Obligatorio |
| ------------------------- | ----------------- | ----------------------------------------------------------- | ----------- |
| **Texto de la pregunta**  | Texto largo       | Enunciado de la pregunta que verá el jugador.               | Sí          |
| **Tipo de pregunta**      | Selector          | Tipo de interacción de la pregunta.                         | Sí          |
| **Imagen de la pregunta** | Archivo de imagen | Imagen complementaria que acompaña la pregunta.             | No          |
| **Explicación**           | Texto largo       | Explicación que se muestra al jugador después de responder. | No          |

### Sección 3: Respuestas

La configuración de respuestas depende del tipo de pregunta seleccionado.

### Tipos de pregunta

| Tipo                   | Descripción                                                                          | Configuración de respuestas                                                         |
| ---------------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------- |
| **Selección única**    | El jugador debe seleccionar una sola respuesta correcta de entre varias opciones.    | Se configuran múltiples opciones de respuesta y se marca una como correcta.         |
| **Selección múltiple** | El jugador debe seleccionar todas las respuestas correctas de entre varias opciones. | Se configuran múltiples opciones de respuesta y se marcan una o más como correctas. |
| **Arrastrar y soltar** | El jugador debe arrastrar elementos a sus posiciones correctas.                      | Se configuran los elementos arrastrables y sus posiciones de destino correctas.     |

![](/images/preguntaseleccionunica.png)

![](/images/seleccionmultiple.png)

![](/images/preguntaarrastrarysoltar.png)

### Pasos para crear una actividad

1. Haz clic en el botón **Crear actividad**.
2. Completa la **información de la actividad** (nombre, descripción, sección, orden).
3. Escribe el **texto de la pregunta** y selecciona el **tipo de pregunta**.
4. Configura las **respuestas** según el tipo de pregunta seleccionado:

   * Para **selección única**: agrega las opciones y marca la correcta.
   * Para **selección múltiple**: agrega las opciones y marca todas las correctas.
   * Para **arrastrar y soltar**: configura los elementos y sus posiciones.
5. Haz clic en **Guardar** para crear la actividad.

::: tip
Agrega al menos 3 o 4 opciones de respuesta en preguntas de selección para hacer la actividad más desafiante para los jugadores.
:::

## 6.3 Editar una actividad

Para editar una actividad existente, haz clic en el botón **Editar** en el listado de actividades.

![](/images/editaractividad.png)

![](/images/formularioeditaractividades.png)

El formulario de edición contiene los mismos campos que el de creación, con los valores actuales de la actividad precargados y adicionales 2 campos más que son el de pista y el de sellos. Puedes modificar cualquier campo, incluida la pregunta y las respuestas.

### Gestor de pistas y sellos

Desde la edición de una actividad puedes gestionar los **sellos** asociados:

#### Sellos

* **Agregar sello**: Asigna un sello que el jugador obtendrá al completar correctamente la actividad.
* **Seleccionar sello**: Elige de entre los sponsor los sellos disponibles en el sistema.
* **Quitar sello**: Elimina el sello asociado a la actividad.

![](/images/sellodelaactividad.png)

![](/images/selloactividadsponsor.png)

::: info
Los sellos disponibles para asignar son los que han sido creados previamente en el sistema en el apartado de sponsor. Si necesitas un sello nuevo, créalo primero antes de asignarlo a la actividad.
:::

::: info
Los sellos pueden ser limitados o ilimitados; esta configuración es flexible.
Los sellos limitados cuentan con una cantidad disponible, la cual se irá decrementando automáticamente a medida que los jugadores los vayan obteniendo.

Nota:
Los sellos asignados a una actividad, independientemente de su disponibilidad, no podrán ser asignados a un tesoro ni a las premiaciones por lugares. De esta manera, nos aseguramos de que sean únicos y de que el jugador pueda ganar sellos sin repetirlos..
:::

#### Pistas

* **Agregar Pistas**: Asigna una Pista que el jugador obtendrá al completar correctamente la actividad.

![](/images/pistaenactividades.png)

![](/images/formulariopista.png)

## 6.4 Generación de actividades con IA

La generación con IA permite crear actividades completas (con pregunta y respuestas) de forma automática.

<ImagePlaceholder label="Generación de actividades con IA" />

### Pasos para generar actividades con IA

1. Accede al listado de actividades de la sección deseada.
2. Haz clic en el botón **Generar actividades con IA**.
3. Configura los parámetros de generación:

   * **Número de actividades** a generar.
   * **Tipo de pregunta** preferido (selección única, selección múltiple o arrastrar y soltar).
   * **Contexto adicional** o temática específica (opcional).
4. Haz clic en **Generar**.
5. El sistema creará las actividades con sus preguntas y respuestas automáticamente.
6. Revisa las actividades generadas y ajústalas si es necesario.

::: warning
La generación con IA puede tardar varios segundos dependiendo de la cantidad de actividades a generar. No cierres ni recargues la página mientras el proceso está en curso.
:::

::: tip
Revisa siempre el contenido generado por la IA. Aunque el sistema genera contenido coherente y relevante, es recomendable verificar la precisión de las preguntas y las respuestas correctas.
:::

## 7.5 Ver detalle de una actividad

La vista de detalle muestra toda la información de una actividad, incluyendo la pregunta y las respuestas configuradas.

<ImagePlaceholder label="Vista de detalle de una actividad" />

La vista de detalle incluye:

* **Nombre** y **descripción** de la actividad.
* **Texto de la pregunta** con su imagen (si tiene).
* **Tipo de pregunta**.
* **Opciones de respuesta** con indicación visual de cuáles son correctas.
* **Explicación** que se muestra al jugador después de responder (si tiene).
* **Trampa** asociada (si tiene).
* **Sello** asociado (si tiene).

::: info
La vista de detalle es de solo lectura. Para modificar la actividad, utiliza el botón **Editar** para acceder al formulario de edición.
:::

## 7.6 Eliminar una actividad

Para eliminar una actividad, haz clic en el botón **Eliminar** en el listado de actividades y confirma la acción en el diálogo de confirmación.

<ImagePlaceholder label="Diálogo de confirmación de eliminación de actividad" />

::: warning
**Sellos asociados.** Si la actividad tiene sellos asociados, al eliminarla se desvinculará el sello de la actividad. El sello no se elimina del sistema, pero dejará de estar asociado a esta actividad. Los jugadores que ya hayan obtenido el sello lo conservarán.
:::

### Pasos para eliminar una actividad

1. Accede al listado de actividades.
2. Haz clic en el botón **Eliminar** de la actividad que deseas eliminar.
3. Se mostrará un diálogo de confirmación.
4. Confirma la eliminación.

::: danger
Esta acción es irreversible. Una vez eliminada la actividad, no es posible recuperar su contenido, pregunta ni respuestas asociadas.
:::
