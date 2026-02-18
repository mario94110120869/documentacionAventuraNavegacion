---
title: Sellos de Sponsor
---
# 12. Sellos de Sponsor

Los sellos son las **recompensas virtuales** que los patrocinadores otorgan a los jugadores al completar actividades, encontrar tesoros o alcanzar posiciones en el ranking. Cada sello pertenece a un sponsor. Se accede desde el listado de sponsors, haciendo clic en el **número de sellos** del sponsor correspondiente.

**Roles con acceso:**
<RoleTag role="super-admin" /> <RoleTag role="editor" />

## 12.1 Listado de sellos



![](/images/listadodesellos.png)

**Encabezado:** Muestra el nombre del sponsor, un botón de **volver** y el botón **"Nuevo Sello"**.

**Campo de búsqueda:** Permite filtrar sellos por nombre.

La tabla muestra la siguiente información por cada sello:

| Columna         | Descripción                                                                                                                    |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| **Nombre**      | Nombre del sello, acompañado de un icono de estampa.                                                                           |
| **Descripción** | Texto descriptivo del sello (truncado si es largo).                                                                            |
| **Cantidad**    | Etiqueta con el número de unidades disponibles (ej: **"50 unidades"**), o **"Ilimitado"** si no tiene restricción de cantidad. |
| **Asignado a**  | Indicador de color que muestra la entidad a la que está vinculado el sello (ver sección 12.2).                                 |
| **Acciones**    | Botones de **editar** y **eliminar**.                                                                                          |



## 12.2 Estados de asignación

Cada sello puede estar asignado a una entidad del sistema. El estado de asignación se indica mediante un **indicador de color** en la columna "Asignado a":

| Color     | Estado                                   | Significado                                                                                                                                     |
| --------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **Azul**  | Actividad: *"\[nombre de la actividad]"* | El sello está asignado como recompensa de una **actividad** específica. El jugador lo obtiene al completar correctamente la actividad.          |
| **Verde** | Tesoro: *"\[nombre del tesoro]"*         | El sello está asignado a un **tesoro**. El jugador lo obtiene al encontrar el tesoro durante el juego.                                          |
| **Ambar** | Premio (ranking)                         | El sello está configurado como **premio del ranking**. Se otorgará al jugador que alcance la posición correspondiente al finalizar la aventura. |
| **Gris**  | Sin asignar                              | El sello **no está vinculado** a ninguna entidad. Está disponible para ser asignado a una actividad, tesoro o premio.                           |





![](/images/selloentesoro.png)

![](/images/selloenpremio.png)

![](/images/sellotesorospon.png)

::: info
Un mismo sello solo puede estar asignado a **una entidad a la vez**. Para reasignarlo, primero debe desvincularlo de su entidad actual.
:::

## 12.3 Crear un sello

Haga clic en **"Nuevo Sello"** para acceder al formulario de creación.



![](/images/crearsellolimitado.png)

![](/images/crearselloilimitado.png)

### Campos del formulario

| Campo                 | Descripción                                                                                      | Requisitos                                      |
| --------------------- | ------------------------------------------------------------------------------------------------ | ----------------------------------------------- |
| **Nombre**            | Nombre del sello.                                                                                | Obligatorio. Mínimo 2 caracteres.               |
| **Descripción**       | Texto descriptivo del sello.                                                                     | Opcional.                                       |
| **Cantidad limitada** | Casilla para indicar si el sello tiene un número limitado de unidades disponibles.               | Por defecto: **desactivada** (sello ilimitado). |
| **Cantidad total**    | Número de unidades disponibles del sello. Solo visible cuando "Cantidad limitada" está activada. | Mínimo 1 unidad.                                |

### Comportamiento de cantidad limitada

El formulario adapta sus campos en función del estado de la casilla "Cantidad limitada":

**Cuando "Cantidad limitada" está desactivada:**

* El sello será **ilimitado**: puede asignarse a cualquier número de jugadores sin restricción.
* El campo "Cantidad total" **no aparece** en el formulario.

**Cuando "Cantidad limitada" está activada:**

* Aparece el campo **"Cantidad total"** con un valor mínimo de 1 unidad.
* Se muestra un texto explicativo: *"El sello tendrá una cantidad limitada de unidades disponibles."*
* El sistema controlará que no se otorguen más sellos de los disponibles.

::: tip
Los sellos ilimitados son ideales para recompensas generales. Los sellos con cantidad limitada son útiles para crear recompensas exclusivas o de coleccionista.
:::

## 12.4 Eliminar un sello

La eliminación de un sello tiene **reglas especiales** que dependen de su estado de asignación. A continuación se detalla el comportamiento para cada caso:

| Estado del sello                   | Comportamiento al eliminar                                                                                                                                                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Asignado a una actividad**       | Se muestra un diálogo de **advertencia**: *"La actividad perderá este sello como recompensa."* Se permite eliminar con el botón **"Eliminar de todas formas"**. La actividad quedará sin el sello pero seguirá funcionando. |
| **Asignado a un tesoro**           | Se muestra un diálogo **bloqueante**: *"No se puede eliminar este sello."* Debe desasociarlo del tesoro primero. Solo se presenta el botón **"Entendido"**.                                                                 |
| **Asignado como premio (ranking)** | Se muestra un diálogo **bloqueante**: *"No se puede eliminar este sello."* Debe eliminarlo de la configuración de premios primero. Solo se presenta el botón **"Entendido"**.                                               |
| **Sin asignar**                    | Se muestra el diálogo de **confirmación estándar**. Confirme para eliminar el sello de forma permanente.                                                                                                                    |

<ImagePlaceholder label="Diálogos de eliminación de sello según estado de asignación" />

::: danger Eliminación bloqueada para tesoros y premios
Los sellos asignados a **tesoros** o configurados como **premios del ranking** no pueden eliminarse directamente. Esto protege la integridad del juego, ya que los tesoros requieren al menos un sello y los premios dependen de sus sellos asignados. Primero debe desvincular el sello de la entidad correspondiente.
:::

::: warning Eliminación con advertencia para actividades
Los sellos asignados a **actividades** pueden eliminarse, pero la actividad perderá su recompensa de sello. El sistema le advertirá de esta consecuencia antes de proceder.
:::
