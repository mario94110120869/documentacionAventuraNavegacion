---
title: Secciones
---
# Secciones

Las secciones son subdivisiones de un nivel. Cada sección agrupa actividades y se posiciona en el mapa del nivel. Desde esta sección puedes crear, editar, visualizar y eliminar secciones.

## 6.1 Listado de secciones

Al acceder a la sección **Secciones**, se muestra el listado de todas las secciones del nivel seleccionado.

![](/images/seccionennivel.png)

### Vista previa del mapa

En la parte superior del listado se muestra una vista previa del mapa del nivel con la ubicación de las secciones representadas como puntos. Esta vista permite identificar rápidamente la distribución espacial de las secciones.

![](/images/vistapreviamejorada.png)

### Columnas del listado

| Columna              | Descripción                                                      |
| -------------------- | ---------------------------------------------------------------- |
| **Nombre(titulo)**   | Nombre de la sección.                                            |
| **Descripción**      | Descripción breve de la sección.                                 |
| **Actividades**      | Número de actividades que contiene la sección.                   |
| **Orden**            | Posición de la sección dentro del nivel.                         |
| **Posición en mapa** | Indica si la sección tiene posición asignada en el mapa (Sí/No). |
| **Acciones**         | Botones de acción disponibles para cada sección.                 |

::: info
El listado de secciones muestra únicamente las secciones del nivel actualmente seleccionado. Para ver secciones de otro nivel, selecciónalo primero desde el listado de niveles.
:::

## 6.2 Crear una sección

Para crear una nueva sección, haz clic en el botón **Crear sección** ubicado en la parte superior del listado.

![](/images/crearseccion.png)

![](/images/formulariocrearseccion.png)

### Campos del formulario

| Campo              | Tipo        | Descripción                                        | Obligatorio |
| ------------------ | ----------- | -------------------------------------------------- | ----------- |
| **Nombre(titulo)** | Texto       | Nombre de la sección.                              | Sí          |
| **Descripción**    | Texto largo | Descripción de la sección que verán los jugadores. | Sí          |
| **Nivel**          | Selector    | Nivel al que pertenece la sección.                 | Sí          |
| **Orden**          | Numérico    | Posición de la sección dentro del nivel.           | Sí          |

### Pasos para crear una sección

1. Haz clic en el botón **Crear sección**.
2. Selecciona el **nivel** al que pertenecerá la sección.
3. Completa los campos del formulario.
4. Haz clic en **Guardar** para crear la sección.

### Generación con IA

El formulario de creación incluye la opción de **generar contenido con IA**.

1. Haz clic en el botón **Generar con IA**.
2. El sistema generará un nombre y una descripción sugeridos basados en el contexto del nivel y la aventura.
3. Revisa el contenido generado y ajústalo si es necesario.
4. Completa los demás campos y haz clic en **Guardar**.



![](/images/modalgeneralseccionconia.png)

::: tip
La generación con IA tiene en cuenta el nombre y la descripción del nivel y la aventura para generar contenido coherente con la temática general.
:::

## 6.3 Editar una sección

Para editar una sección existente, haz clic en el botón **Editar** en el listado de secciones.

<ImagePlaceholder label="Formulario de edición de sección" />

El formulario de edición contiene los mismos campos que el de creación, con los valores actuales de la sección precargados. Puedes modificar cualquier campo y hacer clic en **Guardar** para confirmar los cambios.

::: tip
Desde la edición de una sección también puedes acceder directamente al listado de actividades de esa sección para gestionar su contenido.
:::

## 6.4 Eliminar una sección

Para eliminar una sección, haz clic en el botón **Eliminar** en el listado de secciones y confirma la acción en el diálogo de confirmación.

<ImagePlaceholder label="Diálogo de confirmación de eliminación de sección" />

::: warning
**Eliminación en cascada.** Al eliminar una sección se eliminan automáticamente todas sus actividades y preguntas asociadas. Asegúrate de que deseas eliminar todo el contenido de la sección antes de confirmar.
:::

### Pasos para eliminar una sección

1. Accede al listado de secciones.
2. Haz clic en el botón **Eliminar** de la sección que deseas eliminar.
3. Se mostrará un diálogo de confirmación indicando los elementos que se eliminarán en cascada.
4. Confirma la eliminación.

::: danger
Esta acción es irreversible. Una vez eliminada la sección, no es posible recuperar su contenido ni el de sus actividades y preguntas asociadas.
:::
