---
title: Rankings y Finalización
---
# 14. Rankings y Finalización

La sección de Rankings muestra la **clasificación de los jugadores en tiempo real** y permite finalizar la aventura distribuyendo los premios configurados. Se accede desde el menú lateral: **Rankings**.

**Roles con acceso:**
<RoleTag role="super-admin" /> <RoleTag role="editor" />

::: info
Solo el <RoleTag role="super-admin" /> puede ejecutar la acción de **finalizar** una aventura. Los editores pueden consultar el ranking pero no finalizarlo.
:::

## 14.1 Vista general

<

![](/images/ranking.png)

### Botones del encabezado

El encabezado de la sección presenta los siguientes botones de acción:

| Botón                                            | Descripción                                                                                                                              |
| ------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------- |
| **Actualizar**                                   | Refresca manualmente los datos del ranking, sincronizando la información más reciente del servidor.                                      |
| **Exportar PDF**                                 | Genera un documento PDF con la clasificación completa y lo muestra en un visor previo antes de descargarlo (ver sección 14.6).           |
| **Finalizar por Puntos** / **Finalizar Ranking** | Botón rojo que inicia el proceso irreversible de finalización de la aventura (ver sección 14.7). El texto varía según la pestaña activa. |

## 14.2 Filtros y estadísticas

### Selector de aventura

En la parte superior se encuentra un **desplegable** para elegir la aventura cuyo ranking desea consultar. Al ingresar se selecciona automáticamente la primera aventura disponible.

### Campo de búsqueda

Permite filtrar jugadores por **nombre** dentro del ranking seleccionado.

### Tarjetas de estadísticas

Se muestran **4 tarjetas** resumen con los indicadores clave de la aventura:

| Tarjeta                                             | Descripción                                                                                                                                        |
| --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Total Jugadores**                                 | Cantidad total de jugadores registrados en la aventura seleccionada.                                                                               |
| **En Línea**                                        | Cantidad de jugadores conectados en **tiempo real** mediante WebSocket. Se muestra con un punto verde pulsante que indica conexión activa.         |
| **Puntuación Máxima** / **Máx. Sellos Confirmados** | Muestra el valor máximo alcanzado según la pestaña activa: puntuación máxima (pestaña Puntuación) o máximo de sellos confirmados (pestaña Sellos). |
| **Aventura**                                        | Nombre de la aventura seleccionada actualmente.                                                                                                    |





![](/images/rankingestadistica.png)

## 14.3 Pestañas del ranking

El ranking dispone de **dos modos de visualización**, accesibles mediante pestañas en la parte superior de la tabla:

### Pestaña "Puntuación"

Clasifica a los jugadores por la **cantidad de puntos acumulados** de mayor a menor.

| Columna         | Descripción                                                                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Posición**    | Medallas de oro, plata y bronce para los 3 primeros jugadores. Número ordinal para el resto.                                                                                       |
| **Jugador**     | Avatar del jugador con indicador de estado: punto **verde** (en línea) o punto **rojo** (offline). Nombre del jugador. El primer lugar muestra una etiqueta destacada **"Líder"**. |
| **Puntuación**  | Puntos acumulados mostrados en una etiqueta con gradiente de color.                                                                                                                |
| **Actividades** | Número de actividades completadas por el jugador.                                                                                                                                  |
| **Sellos**      | Número total de sellos obtenidos por el jugador.                                                                                                                                   |





![](/images/rankingpuntuacionmedalla.png)

### Pestaña "Sellos"

Clasifica a los jugadores por la **cantidad de sellos confirmados** de mayor a menor.

| Columna                | Descripción                                                                                                             |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| **Posición**           | Medallas de oro, plata y bronce para los 3 primeros jugadores.                                                          |
| **Jugador**            | Avatar con indicador de estado en línea/offline y nombre. El primer lugar muestra la etiqueta **"Líder en Sellos"**.    |
| **Sellos Confirmados** | Cantidad de sellos confirmados mostrados en una etiqueta verde.                                                         |
| **Total Sellos**       | Cantidad total de sellos con nota adicional de *"X no alcanzados"* si el jugador tiene sellos pendientes por confirmar. |
| **Puntuación**         | Puntos acumulados como dato secundario de referencia.                                                                   |





![](/images/rankingsellos.png)

## 14.4 Detalle de jugador

Al hacer clic en la **fila de un jugador** en cualquiera de las pestañas, se abre un **panel lateral** con información detallada que incluye:

* Datos del perfil del jugador (avatar, nombre, estado de conexión).
* **Progreso completo**: actividades realizadas, porcentaje de completitud.
* **Sellos obtenidos**: listado de todos los sellos del jugador con el sponsor correspondiente.
* **Actividades realizadas**: detalle de cada actividad completada con su puntuación.



![](/images/panellateralranking.png)

## 14.5 Actualización en tiempo real

El sistema de rankings se actualiza **automáticamente** mediante conexión **WebSocket**, sin necesidad de recargar la página:

* **Indicador de jugadores en línea:** La tarjeta "En Línea" muestra en tiempo real cuántos jugadores están conectados al juego, con un punto verde pulsante.
* **Estado por jugador:** Cada fila de la tabla muestra un indicador de punto **verde** (jugador en línea) o **rojo** (jugador desconectado).
* **Refresco automático:** Cuando el sistema detecta cambios en los datos del juego (nuevo progreso, sellos obtenidos, etc.), el ranking se actualiza automáticamente con los datos más recientes.

::: tip
Aunque el ranking se actualiza automáticamente, siempre puede usar el botón **"Actualizar"** del encabezado para forzar una sincronización manual si lo necesita.
:::

## 14.6 Exportar PDF

Para exportar el ranking como documento PDF:

1. Haga clic en el botón **"Exportar PDF"** en el encabezado de la sección.
2. El sistema genera un documento PDF con la **clasificación completa** de la aventura seleccionada según la opción de ranking por puntuación o ranking por sellos.
3. Se abre un **visor previo** en pantalla donde puede revisar el contenido del documento.
4. Si el resultado es satisfactorio, haga clic en **"Descargar"** para guardar el archivo PDF en su equipo.



![](/images/exportarrankingpuntuacion.png)

![](/images/exportrankingsello.png)

::: info
El PDF incluye la información de todos los jugadores clasificados, sus puntuaciones, actividades completadas y sellos obtenidos, según la pestaña activa al momento de la exportación.
:::

## 14.7 Finalizar la aventura

::: danger ACCION IRREVERSIBLE
La finalización de una aventura es un proceso **permanente e irreversible**. Una vez finalizada, la aventura no podrá reactivarse ni se sincronizará más progreso de los jugadores. **Asegúrese de que todos los jugadores han completado su participación antes de proceder.**
:::

La finalización distribuye los premios configurados (ver [sección 13 - Premios](/guide/awards)) a los jugadores según su posición en el ranking. Existen **dos modos de finalización**, uno por cada pestaña del ranking:

### Finalizar por Puntos (pestaña Puntuación)

Este modo determina a los ganadores según su **posición en el ranking de puntuación**.

**Pasos:**

1. Asegúrese de estar en la pestaña **"Puntuación"**.
2. Haga clic en el botón rojo **"Finalizar por Puntos"**.
3. Se muestra un **diálogo de confirmación** explicando las consecuencias:

   * Se determinan los ganadores según su posición en el ranking de puntuación.
   * Se otorgan los **premios (sellos)** configurados en la sección de Premios a los ganadores correspondientes.
   * Se **notifica** a todos los jugadores conectados sobre la finalización.
   * La aventura se marca como **FINALIZADA** y no se sincronizará más progreso.
4. Confirme para ejecutar el proceso.
5. Al completarse, se muestra un mensaje con la **cantidad de usuarios notificados** y **premios otorgados**.



![](/images/modalfinalizarrankingporpunto.png)

### Finalizar Ranking de Sellos (pestaña Sellos)

Este modo determina a los ganadores según la **cantidad de sellos confirmados**.

**Pasos:**

1. Asegúrese de estar en la pestaña **"Sellos"**.
2. Haga clic en el botón rojo **"Finalizar Ranking"**.
3. Se muestra un **diálogo de confirmación** similar al de puntos, detallando las consecuencias.
4. El sistema procesa la finalización:

   * Determina **ganadores y perdedores** según la clasificación de sellos.
   * **Otorga los premios** a los jugadores en las posiciones configuradas.
   * **Notifica** a todos los jugadores conectados.
   * **Decrementa** las cantidades de sellos limitados que se otorguen como premio.
5. Confirme para ejecutar el proceso.



![](/images/finalizarrankingporsello.png)

### Estado post-finalización Ranking Puntos

Una vez finalizada la aventura:

* El botón de finalización cambia a **"Aventura Finalizada"** con un icono de candado.
* El botón queda **deshabilitado permanentemente**.
* El ranking sigue siendo consultable pero no se actualiza más.
* Los premios se distribuyen de forma inmediata a los jugadores ganadores.

::: warning
Antes de finalizar, verifique que la **configuración de premios** (sección 13) esté completa y correcta. Una vez distribuidos los premios, no se pueden modificar ni revocar.
:::



### Estado post-finalización Ranking Sellos

Una vez finalizada la aventura de ranking de sellos:

* El botón de finalización no cambia.
* El botón queda **habilitado**.
* El ranking sigue siendo consultable y se puede seguir compitiendo en la aventura.
* Los premios se distribuyen de forma inmediata a los jugadores que ganaron sellos limitados por lo que se le notifica.


  Al finalizar el ranking por sellos, solo se notifica a los jugadores que obtuvieron \*\*sellos limitados\*\*, ya sea a través de \*\*tesoros\*\* o \*\*actividades\*\*.



  La competencia puede continuar con normalidad y, cada vez que se cierre el ranking, se volverán a otorgar los \*\*sellos ilimitados\*\*, descontando nuevamente su disponibilidad correspondiente.
