---
title: Sponsors
---
# 11. Sponsors (Patrocinadores)

Los sponsors son las empresas u organizaciones que patrocinan la aventura. Cada sponsor puede tener **sellos asociados** que se distribuyen como recompensas durante el juego, y puede estar vinculado a un nivel específico de la aventura. Se accede desde el menú lateral: **Sponsors**.

**Roles con acceso:**
<RoleTag role="super-admin" /> <RoleTag role="editor" />

## 11.1 Listado de sponsors



![](/images/listadodesponsor.png)

**Selector de aventura:** En la parte superior se encuentra un desplegable para elegir la aventura cuyos sponsors desea consultar. Al ingresar se selecciona automáticamente la primera aventura disponible.

**Campo de búsqueda:** Permite filtrar sponsors por nombre o descripción.

La tabla muestra la siguiente información por cada sponsor:

| Columna         | Descripción                                                                                                                                               |
| --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Logo**        | Imagen circular del sponsor. Si no tiene logo asignado, muestra un icono genérico de edificio.                                                            |
| **Nombre**      | Nombre del patrocinador.                                                                                                                                  |
| **Descripción** | Texto descriptivo del sponsor (truncado si es largo).                                                                                                     |
| **Sellos**      | Cantidad de sellos del sponsor. Haga clic en el número para navegar directamente al **listado de sellos** del sponsor.                                    |
| **Preguntas**   | Número de preguntas asociadas al sponsor. Al pasar el cursor se muestra un **tooltip** con el detalle de cada pregunta y la actividad a la que pertenece. |
| **Nivel**       | Etiqueta morada con el nombre del nivel asociado, o **"Sin nivel"** en gris si el sponsor no está vinculado a ningún nivel.                               |
| **Acciones**    | Botones de **editar** y **eliminar**.                                                                                                                     |

::: tip
Haga clic en el número de la columna **Sellos** para acceder rápidamente a la gestión de sellos de ese sponsor.
:::

## 11.2 Crear un sponsor

Haga clic en **"Nuevo Sponsor"** para acceder al formulario de creación.

<ImagePlaceholder label="Formulario de creación de sponsor" />

### Campos del formulario

| Campo           | Descripción                               | Requisitos                                |
| --------------- | ----------------------------------------- | ----------------------------------------- |
| **Aventura**    | Aventura a la que pertenecerá el sponsor. | Obligatorio. Seleccionar del desplegable. |
| **Nombre**      | Nombre del patrocinador.                  | Obligatorio. Mínimo 2 caracteres.         |
| **Descripción** | Texto descriptivo del sponsor.            | Opcional.                                 |

::: info Aventura solo en creación
El campo **Aventura** únicamente está disponible en el modo de creación. Una vez creado el sponsor, **no es posible cambiar la aventura** a la que pertenece, ya que puede tener sellos vinculados a actividades, tesoros o premios de esa aventura. En modo edición, este campo aparecerá deshabilitado con una nota explicativa.
:::

## 11.3 Editar un sponsor

El formulario de edición muestra los mismos campos que el de creación, con las siguientes diferencias:

* El campo **Aventura** aparece **deshabilitado** con una nota explicativa indicando que no se puede modificar.
* Aparece la sección de **Subida de logo**.

### Subida de logo

<ImagePlaceholder label="Sección de subida de logo del sponsor" />

En modo edición se muestra un área dedicada para gestionar el logo del sponsor. Siga estos pasos para asignar o cambiar el logo:

1. **Vista previa:** Se muestra un área de 20x20 con el logo actual del sponsor o un icono genérico si no tiene uno.
2. Haga clic en el botón **"Seleccionar imagen"** para abrir el selector de archivos del sistema.
3. Elija un archivo de imagen válido.
4. Se mostrará una **previsualización** con el nombre y tamaño del archivo seleccionado.
5. Haga clic en **"Subir Logo"** para enviar la imagen al servidor. Se mostrará un indicador de carga durante el proceso.
6. Si desea descartar la selección, haga clic en **"Cancelar"**.

**Formatos aceptados:**

| Formato | Extensión       |
| ------- | --------------- |
| JPEG    | `.jpg`, `.jpeg` |
| PNG     | `.png`          |
| SVG     | `.svg`          |
| WebP    | `.webp`         |

**Tamaño máximo:** 2 MB.

::: tip Subida independiente del formulario
La subida del logo es **independiente** del formulario principal. El logo se sube inmediatamente al hacer clic en "Subir Logo", sin necesidad de guardar el formulario con el botón "Guardar cambios". Esto permite actualizar el logo sin modificar otros campos del sponsor.
:::

## 11.4 Eliminar un sponsor

La eliminación de un sponsor tiene **reglas especiales** que dependen de si tiene sellos vinculados a otras entidades del sistema.

**Pasos:**

1. Haga clic en el botón de **eliminar** (icono de papelera) en la fila del sponsor.
2. El sistema verifica automáticamente si el sponsor tiene **sellos vinculados** a actividades, tesoros o premios del ranking.

### Si tiene sellos vinculados

Se muestra un **diálogo de advertencia** que lista todos los sellos del sponsor y sus asignaciones actuales (actividades, tesoros o premios a los que están vinculados). En este caso, **no se permite la eliminación** hasta que se desasocien todos los sellos.

El diálogo solo presenta el botón **"Entendido"** para cerrar la advertencia.

<ImagePlaceholder label="Diálogo de advertencia: sponsor con sellos vinculados no puede eliminarse" />

::: danger Eliminación bloqueada
No es posible eliminar un sponsor que tiene sellos vinculados a actividades, tesoros o premios. Primero debe **desasociar o eliminar** todos los sellos vinculados desde las entidades correspondientes.
:::

### Si no tiene sellos vinculados

Se muestra el **diálogo de confirmación estándar**. Confirme la acción para eliminar el sponsor de forma permanente.
