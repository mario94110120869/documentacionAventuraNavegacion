---
title: Gestión de aventuras
---
# Gestión de aventuras

Las aventuras son la unidad principal del juego. Desde esta sección puedes crear, editar, visualizar, resetear y eliminar aventuras completas.

## 4.1 Listado de aventuras

Al acceder a la sección **Aventuras** del menú lateral, se muestra el listado de todas las aventuras registradas en el sistema.

![](/images/listadodeaventuras.png)

![](/images/columnadellistado.png)

### Columnas del listado

| Columna                  | Descripción                                               |
| ------------------------ | --------------------------------------------------------- |
| **Imagen**               | Miniatura de la imagen del mapa de la aventura.           |
| **Nombre y descripción** | Nombre de la aventura y descripción.                      |
| **Estado**               | Estado actual de la aventura (activa, inactiva)           |
| **Fecha**                | Fecha de la aventura.                                     |
| **Entidades**            | Niveles, tesoros y trampas disponible para cada aventura. |
| **Acciones**             | Botones de acción disponibles para cada aventura.         |

### Funciones del listado

* **Buscar**: Utiliza el campo de búsqueda para filtrar aventuras por nombre.
* **Paginación**: Navega entre páginas si hay muchas aventuras registradas.

### Acciones por aventura

Cada aventura en el listado dispone de las siguientes acciones:

| Acción                  | Descripción                                                                    |
| ----------------------- | ------------------------------------------------------------------------------ |
| **Premios por Lugares** | Accede a la vista para asignar premios por lugares dado la puntuación.         |
| **Ver detalle**         | Accede a la vista de detalle de la aventura con su mapa interactivo.           |
| **Editar**              | Abre el formulario de edición de la aventura.                                  |
| **Resetear**            | Restablece las estadísticas y progreso de la aventura.                         |
| **Eliminar**            | Elimina la aventura de forma permanente (solo <RoleTag role="super-admin" />). |

## 4.2 Crear una aventura

Para crear una nueva aventura, haz clic en el botón **Crear aventura** ubicado en la parte superior del listado.

![](/images/crearavnetura.png)

![](/images/formulariocrearavnetura.png)

### Campos del formulario

| Campo                                  | Tipo              | Descripción                                                                     | Obligatorio |
| -------------------------------------- | ----------------- | ------------------------------------------------------------------------------- | ----------- |
| **Nombre(Titulo)**                     | Texto             | Nombre de la aventura(Titulo).                                                  | Sí          |
| **Descripción**                        | Texto largo       | Descripción de la aventura que verán los jugadores.                             | No          |
| **Fecha Inicio y Fecha Fin**           | Fecha             | Fecha de la aventura no es relevante.                                           | No          |
| **Plantilla de colores para el juego** | Selector          | Por defecto en caso que no se agregue se seleccionara los colores por defectos. | No          |
| **Imagen del mapa**                    | Archivo de imagen | Imagen que se usará como fondo del mapa interactivo de la aventura.             | No          |
| **Estado**                             | Selector          | Estado de la aventura: activa o inactiva.(Por defecto activa)                   | Sí          |

### Pasos para crear una aventura

1. Haz clic en el botón **Crear aventura**.
2. Completa los campos del formulario.
3. Opcionalmente, sube una **imagen de mapa** o genera una con IA.
4. Haz clic en **Guardar** para crear la aventura.

::: tip
Si no subes una imagen de mapa al momento de crear la aventura, podrás agregarla después desde la vista de edición.
:::

### Generación con IA - Básico

El formulario de creación incluye la opción de **generar contenido con IA** de forma básica. Esta funcionalidad permite generar automáticamente el nombre y la descripción de la aventura.

1. Haz clic en el botón **Generar con IA**.
2. El sistema generará un nombre y una descripción sugeridos.
3. Revisa el contenido generado y ajústalo si es necesario.
4. Completa los demás campos y haz clic en **Guardar**.

![](/images/generacionaventuraconiabasica.png)

![](/images/modalcreacionaventurabasica.png)

### Generación con IA - Completo

La generación completa con IA permite crear una aventura con toda su estructura de niveles, secciones y actividades de forma automática.

1. Haz clic en el botón **Generar aventura completa con IA**.
2. Configura los parámetros de generación: número de niveles, secciones por nivel y actividades por sección.
3. Haz clic en **Generar**.
4. El sistema creará toda la estructura de la aventura automáticamente.
5. Revisa el contenido generado y ajústalo según sea necesario.

![](/images/generacionaventuraconiaavanzado.png)

![](/images/modalcreacionaventuraavanzado.png)

::: warning
La generación completa con IA puede tardar varios segundos dependiendo de la cantidad de contenido a generar. No cierres ni recargues la página mientras el proceso está en curso.
:::

## 4.3 Editar una aventura

Para editar una aventura existente, haz clic en el botón **Editar** en el listado de aventuras o desde la vista de detalle.

![](/images/editaraventura.png)

![](/images/formularioedicionaventura.png)

El formulario de edición contiene los mismos campos que el de creación, con los valores actuales de la aventura precargados.

### Gestión de imagen de mapa

Desde la edición de la aventura puedes gestionar la imagen del mapa interactivo:

#### Cambiar imagen

1. Haz clic en el botón **Cambiar imagen** o en la imagen actual.
2. Selecciona una nueva imagen desde tu dispositivo.
3. Haz clic en **Guardar** para confirmar el cambio.

![](/images/cambiarimagen.png)

![](/images/modalcambiarimagen.png)

#### Generar imagen con IA

1. Haz clic en el botón **Generar imagen con IA**.
2. El sistema generará una imagen de mapa basada en el nombre y la descripción de la aventura.
3. Revisa la imagen generada.
4. Haz clic en **Guardar** para confirmar.

![](/images/generacionimagenconiadeseformularoedicion.png)

![](/images/formulariogeneracionimagenconia.png)

#### Eliminar imagen

1. Haz clic en el botón **Eliminar imagen**.
2. Confirma la acción en el diálogo de confirmación.
3. La imagen será eliminada y el mapa quedará sin fondo.

::: warning
Al eliminar la imagen del mapa, los jugadores verán el mapa sin imagen de fondo hasta que se asigne una nueva.
:::

## 4.4 Detalle de una aventura

La vista de detalle muestra toda la información de una aventura junto con su mapa interactivo.

![](/images/detalle.png)

![](/images/detalledelaaventura.png)

### Mapa interactivo

El mapa interactivo muestra la estructura visual de la aventura:

* Los **niveles** se representan como áreas o regiones en el mapa.
* Las **secciones** se muestran como puntos posicionados dentro de cada nivel.
* Al hacer clic en una sección se puede acceder a su detalle.

::: info
El mapa interactivo es una representación visual de la estructura del juego. La posición de los elementos en el mapa se configura desde el editor de mapa y el editor de posiciones.
:::

### Información de la aventura

La vista de detalle muestra:

* **Nombre** y **descripción** de la aventura.
* **Estado** actual (activa/inactiva).
* **Número de niveles**, secciones y actividades.
* **Número de tesoro**, secciones y actividades.
* **Número de trampas**, secciones y actividades.
* **Fecha de creación** y última modificación.

## 4.5 Resetear una aventura

La función de reseteo permite restablecer las estadísticas y el progreso de los jugadores en una aventura.

::: danger
**Esta acción es irreversible.** Al resetear una aventura se eliminarán permanentemente todas las estadísticas, el progreso de los jugadores, los sellos obtenidos y las posiciones del ranking asociadas a esa aventura. Esta acción no se puede deshacer.
:::

![](/images/reseteoboton.png)

![](/images/modalreseteo.png)

### Estadísticas que se resetean

| Estadística                | Descripción                                                           |
| -------------------------- | --------------------------------------------------------------------- |
| **Progreso de jugadores**  | El avance de todos los jugadores en la aventura se restablece a cero. |
| **Sellos obtenidos**       | Los sellos ganados por los jugadores en esta aventura se eliminan.    |
| **Posiciones del ranking** | Las posiciones en el ranking de esta aventura se eliminan.            |
| **Respuestas registradas** | Las respuestas de los jugadores a las preguntas se eliminan.          |

### Opciones de reseteo

* **Resetear todo**: Restablece todas las estadísticas de la aventura.
* **Resetear progreso**: Restablece únicamente el progreso de los jugadores sin afectar el ranking.

### Pasos para resetear

1. Accede a la aventura que deseas resetear.
2. Haz clic en el botón **Resetear aventura**.
3. Se mostrará un diálogo de confirmación con el detalle de lo que se eliminará.
4. Escribe la palabra **RESETEAR** en el campo de confirmación.
5. Haz clic en **Confirmar reseteo**.

<ImagePlaceholder label="Diálogo de confirmación de reseteo con campo de texto RESETEAR" />

::: danger
Asegúrate de que realmente deseas resetear la aventura. Una vez confirmada la acción, no es posible recuperar los datos eliminados.
:::

## 4.6 Editor de mapa

El editor de mapa permite configurar la imagen de fondo y la disposición visual de los elementos en el mapa de la aventura.

<ImagePlaceholder label="Editor de mapa de la aventura" />

### Pasos para usar el editor de mapa

1. Accede a la vista de detalle de la aventura.
2. Haz clic en el botón **Editor de mapa**.
3. Se abrirá el editor con la imagen de mapa actual.
4. Utiliza las herramientas disponibles para ajustar la visualización.
5. Haz clic en **Guardar** para confirmar los cambios.

### Controles de zoom

| Control              | Descripción                                   |
| -------------------- | --------------------------------------------- |
| **Zoom +**           | Acerca la vista del mapa.                     |
| **Zoom -**           | Aleja la vista del mapa.                      |
| **Restablecer zoom** | Devuelve el mapa a su nivel de zoom original. |
| **Rueda del ratón**  | Permite hacer zoom con la rueda del ratón.    |

<ImagePlaceholder label="Controles de zoom del editor de mapa" />

::: tip
Utiliza la combinación de zoom y desplazamiento para navegar por mapas grandes y posicionar los elementos con precisión.
:::

## 4.7 Eliminar una aventura

La eliminación de una aventura es una acción permanente que solo puede ser realizada por un <RoleTag role="super-admin" />.

::: danger
**Esta acción es irreversible.** Al eliminar una aventura se eliminan permanentemente todos sus niveles, secciones, actividades, preguntas y cualquier contenido asociado. Esta acción no se puede deshacer.
:::

<ImagePlaceholder label="Diálogo de confirmación de eliminación de aventura" />

### Pasos para eliminar una aventura

1. Accede al listado de aventuras.
2. Haz clic en el botón **Eliminar** de la aventura que deseas eliminar.
3. Se mostrará un diálogo de confirmación.
4. Confirma la eliminación.

::: warning
Antes de eliminar una aventura, considera resetearla en lugar de eliminarla si solo necesitas restablecer el progreso de los jugadores. La eliminación borra todo el contenido de forma permanente.
:::
