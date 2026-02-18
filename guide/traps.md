---
title: Trampas
---
# 10. Trampas

Las trampas son elementos que **penalizan** a los jugadores durante la aventura. Cada trampa tiene un efecto negativo que se activa cuando el jugador la encuentra (generalmente al escanear un código QR). Se accede desde el listado de aventuras, haciendo clic en el botón de **trampas** de la aventura correspondiente.

**Roles con acceso:**
<RoleTag role="super-admin" /> <RoleTag role="editor" />

## 10.1 Listado de trampas

![](/images/listadotrampa.png)

**Encabezado:** Muestra el nombre de la aventura, un botón de **volver** y el botón **"Nueva Trampa"**.

**Campo de busqueda:** Permite filtrar trampas por nombre.

La tabla muestra la siguiente información por cada trampa:

| Columna          | Descripción                                                                                                                         |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Nombre**       | Nombre de la trampa, acompañado de un icono de calavera.                                                                            |
| **Descripción**  | Texto descriptivo de la trampa (truncado si es largo).                                                                              |
| **Efecto**       | Etiqueta de color indicando el tipo de efecto negativo que causa la trampa.                                                         |
| **Penalización** | Valor numérico de la penalización mostrado en rojo (ej: **"-10"**). Para trampas de tipo "Pierde Sello" muestra el efecto en texto. |
| **Estado**       | Etiqueta indicando si la trampa está **"Activa"** o **"Inactiva"**.                                                                 |
| **Acciones**     | Botones de **editar** y **eliminar**.                                                                                               |

::: tip
La tabla incluye controles de **paginación** en la parte inferior para navegar entre páginas.
:::

## 10.2 Tipos de efecto

Las trampas pueden tener uno de los siguientes efectos negativos:

| Efecto            | Descripción                                                                                                                                                                                        | Color de etiqueta  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ |
| **Pierde Puntos** | El jugador pierde una cantidad determinada de puntos de su puntuación acumulada. La cantidad se define en el campo "Penalización" al crear la trampa.                                              | Por defecto        |
| **Pierde Sello**  | El jugador pierde un **sello de patrocinador aleatorio** de su colección. No se requiere especificar una cantidad numérica; el sistema selecciona aleatoriamente un sello obtenido por el jugador. | Rojo / destructivo |

::: warning
El efecto **"Pierde Sello"** es especialmente impactante para el jugador, ya que puede perder un sello valioso que haya obtenido al completar una actividad o encontrar un tesoro. Úselo con moderación.
:::

## 10.3 Crear una trampa

Haga clic en **"Nueva Trampa"** para acceder al formulario de creación.

![](/images/formulariocreartrampa.png)

### Campos del formulario

| Campo               | Descripción                                      | Requisitos                                                                                 |
| ------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| **Nombre**          | Nombre de la trampa.                             | Obligatorio. Mínimo 3 caracteres.                                                          |
| **Descripción**     | Texto descriptivo de la trampa.                  | Opcional.                                                                                  |
| **Efecto Negativo** | Tipo de penalización que se aplicará al jugador. | Obligatorio. Opciones: **"Pierde Puntos"** o **"Pierde Sello"**.                           |
| **Penalización**    | Cantidad de puntos que se restarán al jugador.   | Obligatorio solo cuando el efecto es **"Pierde Puntos"**. Mínimo 1. Valor por defecto: 10. |
| **Trampa activa**   | Casilla para activar o desactivar la trampa.     | Por defecto: **activa**.                                                                   |

### Comportamiento dinámico según efecto

El formulario adapta sus campos en función del tipo de efecto seleccionado:

**Cuando se selecciona "Pierde Puntos":**

* Aparece el campo numérico **Penalización**.
* Se muestra un recuadro rojo con el mensaje: *"El jugador perderá X puntos al activar esta trampa."*
* El valor de X se actualiza dinámicamente conforme se modifica el campo de penalización.

**Cuando se selecciona "Pierde Sello":**

* El campo de penalización numérica **desaparece** (no es necesario).
* Se muestra un recuadro rojo con el mensaje: *"El jugador perderá un sello de patrocinador aleatorio."*

![](/images/penalizacionporsello.png)

::: info
La casilla **"Trampa activa"** permite desactivar temporalmente una trampa sin eliminarla. Las trampas inactivas permanecen en el sistema pero no afectan a los jugadores durante el juego.
:::

## 10.4 Eliminar una trampa

1. Haga clic en el botón de **eliminar** (icono de papelera) en la fila de la trampa.
2. Se abrirá un diálogo de confirmación solicitando verificar la acción.
3. Confirme la eliminación para proceder.

::: warning
La eliminación de una trampa es permanente. Si la trampa estaba activa, dejará de afectar a los jugadores inmediatamente tras su eliminación.
:::



![](/images/modaleliminartrampa.png)
