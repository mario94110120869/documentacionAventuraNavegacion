---
title: Premios (Awards)
---
# 13. Premios (Awards)

Los premios son la configuración de recompensas que se otorgan a los jugadores según su **posición en el ranking** al finalizar la aventura. Cada posición del ranking puede tener un sello de sponsor asignado como premio. Se accede desde el listado de aventuras, haciendo clic en el botón de **premios** (icono de trofeo) de la aventura correspondiente.

**Roles con acceso:**
<RoleTag role="super-admin" /> <RoleTag role="editor" />

::: tip Modificables durante el juego
Los premios pueden configurarse y modificarse **libremente durante el juego**, ya que no se distribuyen hasta que se finaliza el ranking. Esto le permite ajustar las recompensas en cualquier momento antes de la finalización.
:::

## 13.1 Vista general



![](/images/premios.png)



**Encabezado:** Muestra el título de la aventura, la descripción *"Asigna sellos como premios por posición en el ranking"*, un botón de **volver** y el botón dorado **"Agregar posición"**.

La pantalla presenta una lista vertical de tarjetas, donde cada tarjeta representa una posición del ranking con su premio (sello) asignado.

## 13.2 Lista de posiciones

Cada posición del ranking se muestra como una **tarjeta** con la siguiente información:

| Elemento                 | Descripción                                                                                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| **Número de posición**   | Insignia con el número ordinal (1.°, 2.°, 3.°, etc.).                                                                             |
| **Imagen del sello**     | Logo o imagen del sello asignado como premio, o un icono genérico de premio si no tiene imagen.                                   |
| **Nombre del sello**     | Nombre del sello asignado a esa posición.                                                                                         |
| **Cantidad**             | Etiqueta indicando la disponibilidad: **"X/Y"** para sellos con cantidad limitada, o **"Ilimitado"** para sellos sin restricción. |
| **Sponsor**              | Nombre del patrocinador que otorga el sello.                                                                                      |
| **Etiqueta de posición** | Texto descriptivo de la posición (ej: *"1er lugar"*, *"2do lugar"*, *"3er lugar"*).                                               |

### Medallas especiales

Las **tres primeras posiciones** tienen un estilo visual diferenciado:

| Posición      | Estilo                                          |
| ------------- | ----------------------------------------------- |
| **1.° lugar** | Medalla de **oro** con estilo dorado destacado. |
| **2.° lugar** | Medalla de **plata** con estilo plateado.       |
| **3.° lugar** | Medalla de **bronce** con estilo cobrizo.       |

Las posiciones del 4.° lugar en adelante utilizan un estilo estándar sin medalla especial.



![](/images/listadepremios.png)

## 13.3 Agregar una posición

Para agregar una nueva posición al ranking de premios:

1. Haga clic en el botón dorado **"Agregar posición"** en la cabecera.
2. Se abrirá el **panel de selección de sellos** en la parte de abajo del listado de sellos.
3. Utilice el **campo de búsqueda** para filtrar los sellos disponibles por nombre.
4. La lista muestra todos los sellos de la aventura con la siguiente información:

   * Imagen del sello.
   * Nombre del sello.
   * Cantidad disponible (unidades restantes o "Ilimitado").
   * Nombre del sponsor.
5. Haga clic en el botón **"+"** del sello deseado para asignarlo a la nueva posición.
6. El sistema creará el premio automáticamente y lo añadirá al final de la lista de posiciones.



![](/images/asignaciondesellosenpremios.png)

::: info
La nueva posición siempre se agrega al final de la lista. Si ya hay 3 posiciones configuradas (1.°, 2.° y 3.°), la siguiente será la posición 4.°.
:::

## 13.4 Cambiar sello de una posición

Para cambiar el sello asignado a una posición existente:

1. Haga clic en el botón **"Cambiar sello"** (icono de flechas de intercambio) en la tarjeta de la posición deseada.
2. Se abrirá el **panel de selección de sellos** con la lista de sellos disponibles.
3. Seleccione el nuevo sello haciendo clic en el botón **"+"**.
4. El sistema **eliminará** el premio anterior y **creará** uno nuevo con el sello seleccionado, manteniendo la misma posición.

::: tip
Puede cambiar los sellos de cualquier posición en cualquier momento, incluso durante el juego. Los cambios solo tendrán efecto cuando se finalice el ranking.
:::

## 13.5 Eliminar una posición

::: warning Solo la última posición
Solo es posible eliminar la **última posición** de la lista. No se pueden eliminar posiciones intermedias para mantener la secuencia consecutiva del ranking (1.°, 2.°, 3.°...).
:::

Para eliminar la última posición:

1. Haga clic en el botón **"Eliminar posición"** (icono de papelera) que aparece únicamente en la **última tarjeta** de la lista.
2. Se abrirá un diálogo de confirmación.
3. Confirme la eliminación para proceder.



![](/images/eliminarposicion.png)

::: info
Si desea eliminar una posición intermedia, deberá eliminar primero todas las posiciones posteriores, de la última a la primera, hasta llegar a la posición que desea remover.
:::
