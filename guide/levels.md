---
title: Niveles
---
# Niveles

Los niveles son subdivisiones de una aventura. Cada nivel agrupa secciones y puede tener un sponsor asociado. Desde esta sección puedes crear, editar, visualizar y eliminar niveles.

## 5.1 Listado de niveles

Al acceder a la sección **Niveles**, se muestra el listado de todos los niveles de la aventura seleccionada.

![](/images/listadoniveles.png)

### Columnas del listado

| Columna                 | Descripción                                      |
| ----------------------- | ------------------------------------------------ |
| **Imagen**              | Miniatura de la imagen del mapa del nivel.       |
| **Nombre(titulo)**      | Nombre del nivel.                                |
| **Descripción**         | Descripción breve del nivel.                     |
| **Secciones**           | Número de secciones que contiene el nivel.       |
| **Sponsor**             | Nombre del sponsor asociado al nivel (si tiene). |
| **Fecha de activación** | Fecha de activación del nivel (opcional).        |
| **Orden**               | Posición del nivel dentro de la aventura.        |
| **Acciones**            | Botones de acción disponibles para cada nivel.   |

::: info
El listado de niveles muestra únicamente los niveles de la aventura actualmente seleccionada. Para ver niveles de otra aventura, selecciónala primero desde el listado de aventuras.
:::

## 5.2 Crear un nivel

Para crear un nuevo nivel, haz clic en el botón **Crear nivel** ubicado en la parte superior del listado.

![](/images/crearnivel.png)

![](/images/formulariocrearnivel.png)

### Campos del formulario

| Campo                   | Tipo              | Descripción                                                      | Obligatorio |
| ----------------------- | ----------------- | ---------------------------------------------------------------- | ----------- |
| **Nombre(titulo)**      | Texto             | Nombre del nivel.                                                | Sí          |
| **Descripción**         | Texto largo       | Descripción del nivel que verán los jugadores.                   | Sí          |
| **Aventura**            | Selector          | Aventura a la que pertenece el nivel.                            | Sí          |
| **Orden**               | Numérico          | Este se crea secuencialmente.                                    | Sí          |
| **Imagen del mapa**     | Archivo de imagen | Imagen que se usará como fondo del mapa del nivel.               | No          |
| **Sponsor**             | Selector          | Sponsor asociado al nivel.                                       | No          |
| **Fecha de Activación** | Fecha             | Fecha de activacion del nivel para estar disponible en el juego. | No          |

### Pasos para crear un nivel

1. Haz clic en el botón **Crear nivel**.
2. Selecciona la **aventura** a la que pertenecerá el nivel.
3. Completa los campos del formulario.
4. Opcionalmente, sube una **imagen de mapa** y asigna un **sponsor**.
5. Haz clic en **Guardar** para crear el nivel.

### Generación con IA

El formulario de creación incluye la opción de **generar contenido con IA**. Esta funcionalidad permite generar automáticamente el nombre y la descripción del nivel.

1. Haz clic en el botón **Generar con IA**.
2. El sistema generará un nombre y una descripción sugeridos basados en el contexto de la aventura.
3. Revisa el contenido generado y ajústalo si es necesario.
4. Completa los demás campos y haz clic en **Guardar**.

![](/images/generarnivelesconia.png)

![](/images/modalgenerarnivelconia.png)

::: tip
La generación con IA tiene en cuenta el nombre y la descripción de la aventura para generar contenido coherente con la temática.
:::

## 5.3 Editar un nivel

Para editar un nivel existente, haz clic en el botón **Editar** en el listado de niveles.

![](/images/editarnivel.png)

El formulario de edición contiene los mismos campos que el de creación, con los valores actuales del nivel precargados.

### Gestión de imagen de mapa

Desde la edición del nivel puedes gestionar la imagen del mapa:

* **Cambiar imagen**: Haz clic en la imagen actual o en el botón **Cambiar imagen** para seleccionar una nueva imagen desde tu dispositivo.
* **Generar imagen con IA**: Haz clic en **Generar imagen con IA** para crear una imagen basada en el nombre y descripción del nivel.
* **Eliminar imagen**: Haz clic en **Eliminar imagen** para quitar la imagen de mapa del nivel.

![](/images/imagendelmapaeditar.png)

### Asignación de sponsor

Desde la edición del nivel puedes asignar o cambiar el sponsor asociado:

1. En el campo **Sponsor**, selecciona el sponsor deseado del listado desplegable.
2. Si deseas quitar el sponsor, selecciona la opción vacía.
3. Haz clic en **Guardar** para confirmar los cambios.

::: info
Los sponsors disponibles en el selector son los que han sido creados previamente en la sección de **Sponsors** del panel.
:::

## 5.4 Editor de posiciones de secciones

El editor de posiciones permite ubicar las secciones del nivel en el mapa interactivo.



![](/images/mapanivelesposicionseccion.png)

![](/images/mapanivelesposicionseccionenniveles.png)

### Pasos para posicionar secciones

1. Accede al detalle del nivel.
2. Haz clic en el botón **Editor de posiciones**.
3. Se mostrará el mapa del nivel con las secciones como puntos arrastrables.
4. **Arrastra** cada sección a la posición deseada en el mapa.
5. Haz clic en **Guardar posiciones** para confirmar los cambios.

::: tip
Las posiciones de las secciones en el mapa determinan dónde verán los jugadores cada sección dentro del nivel. Asegúrate de distribuirlas de forma lógica y accesible.
:::

## 5.5 Eliminar un nivel

Para eliminar un nivel, haz clic en el botón **Eliminar** en el listado de niveles y confirma la acción en el diálogo de confirmación.

<ImagePlaceholder label="Diálogo de confirmación de eliminación de nivel" />

::: warning
**Eliminación en cascada.** Al eliminar un nivel se eliminan automáticamente todas sus secciones, actividades y preguntas asociadas. Asegúrate de que deseas eliminar todo el contenido del nivel antes de confirmar.
:::

### Pasos para eliminar un nivel

1. Accede al listado de niveles.
2. Haz clic en el botón **Eliminar** del nivel que deseas eliminar.
3. Se mostrará un diálogo de confirmación indicando los elementos que se eliminarán en cascada.
4. Confirma la eliminación.

::: danger
Esta acción es irreversible. Una vez eliminado el nivel, no es posible recuperar su contenido ni el de sus secciones y actividades asociadas.
:::
