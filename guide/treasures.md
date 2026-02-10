---
title: Tesoros
---

# 9. Tesoros

Los tesoros son objetos coleccionables que los jugadores pueden encontrar durante la aventura. Cada tesoro otorga puntos y debe tener **al menos un sello de sponsor** asignado. Se accede desde el listado de aventuras, haciendo clic en el botón de **tesoros** de la aventura correspondiente.

**Roles con acceso:**
<RoleTag role="super-admin" /> <RoleTag role="editor" />

## 9.1 Listado de tesoros

<ImagePlaceholder label="Listado de tesoros de una aventura" />

**Encabezado:** Muestra el nombre de la aventura seleccionada, un botón de **volver** y el botón **"Nuevo Tesoro"**.

**Campo de busqueda:** Permite filtrar tesoros por nombre.

La tabla muestra la siguiente información por cada tesoro:

| Columna | Descripcion |
|---|---|
| **Nombre** | Nombre del tesoro, acompañado de un icono de regalo. El texto es clicable y permite acceder al detalle. |
| **Descripcion** | Texto descriptivo del tesoro. |
| **Pista** | Pista en formato cursiva que guiará al jugador para encontrar el tesoro. |
| **Acciones** | Botones de **ver**, **editar** y **eliminar**. |

::: tip
La tabla incluye controles de **paginación** en la parte inferior para navegar entre páginas cuando hay muchos tesoros registrados.
:::

## 9.2 Crear un tesoro

Haga clic en **"Nuevo Tesoro"** para acceder al formulario de creación.

<ImagePlaceholder label="Formulario de creación de tesoro con gestor de sellos" />

### Campos del formulario

| Campo | Descripción | Requisitos |
|---|---|---|
| **Nombre** | Nombre del tesoro. | Obligatorio. Mínimo 2 caracteres. |
| **Descripción** | Texto descriptivo del tesoro. | Opcional. |
| **Pista** | Pista que verán los jugadores para encontrar el tesoro. | Opcional. |
| **Puntos** | Puntos otorgados al jugador cuando encuentra el tesoro. | Obligatorio. Mínimo 0. Valor por defecto: 20. |

### Gestor de sellos de sponsor

Debajo del formulario principal aparece el **Gestor de Sellos de Sponsor**. Este componente permite asignar sellos de patrocinadores al tesoro como recompensa adicional.

::: danger Mínimo 1 sello obligatorio
Todo tesoro **debe** tener al menos **1 sello de sponsor asignado**. Si intenta guardar el tesoro sin ningún sello vinculado, el sistema mostrará un mensaje de error y no permitirá completar la operación. Asegúrese de asignar al menos un sello antes de guardar.
:::

**Pasos para asignar sellos:**

1. En el Gestor de Sellos, haga clic en el botón **"Agregar sello"**.
2. Se mostrará la lista de sellos disponibles del sponsor asociado a la aventura.
3. Seleccione el sello deseado haciendo clic en el botón **"+"**.
4. El sello aparecerá en la lista de sellos asignados al tesoro.
5. Repita el proceso para asignar sellos adicionales si lo desea.

## 9.3 Editar un tesoro

El formulario de edición presenta los mismos campos que el de creación, con **dos secciones adicionales**:

<ImagePlaceholder label="Formulario de edición de tesoro con sellos y traks" />

### Gestor de sellos de sponsor

Muestra los sellos actualmente asignados al tesoro y permite:

- **Agregar** nuevos sellos de sponsor al tesoro.
- **Quitar** sellos previamente asignados.

::: danger Recuerde: mínimo 1 sello
Al editar, el sistema seguirá validando que el tesoro tenga al menos 1 sello asignado. No podrá quitar el último sello sin asignar otro primero.
:::

### Gestor de traks

Permite adjuntar **fotografías o evidencias visuales** al tesoro. Los traks son imágenes que enriquecen la experiencia del jugador:

- Haga clic en **"Agregar trak"** para subir una nueva imagen.
- Cada trak muestra una vista previa con opciones para **ver** o **eliminar**.

## 9.4 Eliminar un tesoro

1. Haga clic en el botón de **eliminar** (icono de papelera) en la fila del tesoro.
2. Se abrirá un diálogo de confirmación.

::: warning Sellos afectados
Si el tesoro tiene **sellos de sponsor asignados**, el diálogo de confirmación mostrará una advertencia listando todos los sellos que **quedarán sin asignar** tras la eliminación. Revise esta lista cuidadosamente antes de confirmar.
:::

3. Confirme la eliminación para proceder.

<ImagePlaceholder label="Diálogo de confirmación de eliminación de tesoro con advertencia de sellos" />
