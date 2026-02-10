---
title: "Tutorial: Finalizar ranking y premios"
---

# Tutorial: Finalizar ranking y premios

En este tutorial aprendera a consultar el ranking de jugadores en tiempo real, exportar la clasificacion a PDF y finalizar la aventura distribuyendo los premios a los ganadores. Este es el ultimo paso del ciclo de vida de una aventura.

<VideoPlayer src="#" title="Finalizar ranking y distribuir premios" />

::: info Requisitos previos
- Tener una **aventura activa** con jugadores registrados que hayan participado.
- Tener los **premios del ranking configurados** (vea el [Tutorial: Configurar sponsors y sellos](/tutorials/configure-sponsors) si aun no lo ha hecho).
- Tener rol de **Super Administrador** <RoleTag role="super-admin" /> (la finalizacion del ranking no esta disponible para Editores).
:::

---

## Paso 1: Acceder al ranking

1. Navegue a **Rankings** en el menu lateral.
2. En el **selector de aventura** de la parte superior, elija la aventura cuyo ranking desea consultar.
3. El sistema cargara automaticamente la clasificacion de jugadores.

<ImagePlaceholder label="Vista de Rankings con selector de aventura y tabla de clasificacion" />

---

## Paso 2: Consultar las estadisticas

En la parte superior de la pantalla se muestran cuatro **tarjetas de estadisticas** que resumen el estado actual de la aventura:

| Tarjeta | Que muestra |
|---|---|
| **Total Jugadores** | Cantidad total de jugadores registrados en la aventura. |
| **En Linea** | Cantidad de jugadores conectados en tiempo real (se actualiza automaticamente via WebSocket). Se muestra con un punto verde pulsante. |
| **Puntuacion Maxima** | El puntaje mas alto alcanzado por un jugador (visible en la pestana "Puntuacion"). |
| **Max. Sellos Confirmados** | La mayor cantidad de sellos confirmados (visible en la pestana "Sellos"). |

<ImagePlaceholder label="Tarjetas de estadisticas del ranking con datos en tiempo real" />

---

## Paso 3: Revisar el ranking por puntuacion

1. Asegurese de estar en la pestana **"Puntuacion"** (es la pestana por defecto).
2. Revise la tabla de clasificacion:

| Columna | Descripcion |
|---|---|
| **Posicion** | Medallas de oro, plata y bronce para los 3 primeros. Numero para el resto. |
| **Jugador** | Avatar con indicador de estado en linea (punto verde) u offline (punto rojo), nombre del jugador. El primer lugar muestra una etiqueta "Lider". |
| **Puntuacion** | Puntos acumulados en etiqueta con gradiente. |
| **Actividades** | Numero de actividades completadas. |
| **Sellos** | Numero de sellos obtenidos. |

3. Use el **campo de busqueda** para localizar un jugador especifico por nombre.
4. Haga clic en la **fila de un jugador** para abrir el panel lateral con su informacion detallada (progreso, sellos obtenidos, actividades realizadas).

<ImagePlaceholder label="Tabla de ranking por puntuacion con jugadores clasificados" />

::: tip
El ranking se actualiza automaticamente en tiempo real gracias a la conexion WebSocket. Si necesita forzar una actualizacion manual, haga clic en el boton **"Actualizar"**.
:::

---

## Paso 4: Revisar el ranking por sellos (opcional)

Si desea finalizar la aventura basandose en los sellos en lugar de la puntuacion:

1. Haga clic en la pestana **"Sellos"**.
2. La tabla mostrara la clasificacion por cantidad de sellos confirmados:

| Columna | Descripcion |
|---|---|
| **Posicion** | Medallas para los 3 primeros. |
| **Jugador** | Avatar con estado en linea, nombre. El primero muestra "Lider en Sellos". |
| **Sellos Confirmados** | Cantidad de sellos confirmados en etiqueta verde. |
| **Total Sellos** | Cantidad total de sellos con nota de los no alcanzados. |
| **Puntuacion** | Puntos como dato secundario. |

<ImagePlaceholder label="Tabla de ranking por sellos confirmados" />

---

## Paso 5: Exportar el ranking a PDF

Antes de finalizar, es altamente recomendable exportar el ranking como respaldo.

1. Haga clic en el boton **"Exportar PDF"** en la cabecera de la seccion.
2. El sistema generara un documento PDF con la clasificacion completa.
3. Se abrira un **visor previo** donde podra revisar el contenido del documento.
4. Haga clic en **"Descargar"** para guardar el archivo en su equipo.

<ImagePlaceholder label="Visor previo del PDF del ranking con opcion de descarga" />

::: tip
Exporte siempre el ranking a PDF **antes** de finalizar la aventura. Una vez finalizada, los datos quedan bloqueados y el PDF sera su registro principal de la clasificacion.
:::

---

## Paso 6: Verificar la configuracion de premios

Antes de finalizar, asegurese de que los premios estan correctamente configurados.

1. Desde el listado de aventuras, haga clic en el boton de **premios** (icono de trofeo) de la aventura.
2. Verifique que las posiciones del ranking tengan sellos asignados:
   - **1er lugar**: Sello de oro o premio principal.
   - **2do lugar**: Sello de plata o premio secundario.
   - **3er lugar**: Sello de bronce o premio terciario.
   - Posiciones adicionales si las ha configurado.
3. Si necesita hacer cambios, puede agregar, cambiar o eliminar posiciones en este momento.
4. Regrese a la seccion de **Rankings**.

::: warning
Asegurese de que los **sellos limitados** asignados como premios tengan suficientes unidades disponibles. Si un sello se queda sin unidades, el premio correspondiente no podra otorgarse.
:::

---

## Paso 7: Finalizar la aventura

::: danger Accion irreversible
La finalizacion de una aventura es un proceso **permanente e irreversible**. Una vez ejecutado:
- Se determinan los ganadores segun la clasificacion actual.
- Se distribuyen los premios (sellos) a los jugadores en las posiciones ganadoras.
- Se notifica a todos los jugadores conectados en tiempo real.
- La aventura se marca como **FINALIZADA** de forma permanente.
- No se aceptan mas sincronizaciones de datos del juego.
- El boton cambia a "Aventura Finalizada" con un icono de candado y queda deshabilitado permanentemente.

**No existe forma de revertir esta accion.**
:::

### Finalizar por puntuacion

1. Asegurese de estar en la pestana **"Puntuacion"**.
2. Haga clic en el boton rojo **"Finalizar por Puntos"**.
3. Se mostrara un dialogo de confirmacion explicando las consecuencias:
   - Se determinan los ganadores segun el ranking de puntuacion.
   - Se otorgan los premios configurados a los ganadores.
   - Se notifica a los jugadores conectados.
   - La aventura se marca como FINALIZADA.
4. Lea cuidadosamente el mensaje de confirmacion.
5. Haga clic en **"Confirmar"** para ejecutar el proceso.
6. Al completarse, se mostrara un mensaje con la cantidad de **usuarios notificados** y **premios otorgados**.

<ImagePlaceholder label="Dialogo de confirmacion de finalizacion del ranking por puntos" />

### Finalizar por sellos (alternativa)

1. Cambie a la pestana **"Sellos"**.
2. Haga clic en el boton rojo **"Finalizar Ranking"**.
3. Se mostrara un dialogo de confirmacion similar.
4. El sistema procesara los sellos, determinara ganadores, notificara a los jugadores y decrementara las cantidades de sellos limitados.
5. Confirme para ejecutar.

---

## Resultado final

Al completar este tutorial, habra:

- **Consultado** el ranking de jugadores en tiempo real.
- **Exportado** la clasificacion a PDF como respaldo.
- **Verificado** la configuracion de premios.
- **Finalizado** la aventura distribuyendo los premios a los ganadores.

La aventura ahora aparecera con el estado **"Finalizada"** en el listado de aventuras, y los jugadores habran recibido sus premios (sellos) correspondientes.

### Despues de la finalizacion

Una vez finalizada la aventura, puede:

- **Consultar** el ranking final en cualquier momento (los datos permanecen visibles).
- **Descargar** el PDF del ranking si no lo hizo antes.
- **Crear una nueva aventura** para el proximo evento reutilizando la experiencia adquirida.

::: tip
Si desea reutilizar la estructura de una aventura finalizada para un nuevo evento, puede **resetear** la aventura (seccion Restricciones > Reinicio de aventura) para eliminar los datos de los jugadores y volver a empezar sin tener que recrear toda la estructura.
:::

::: info
Para una referencia completa sobre la finalizacion y sus implicaciones, consulte la seccion [Rankings y Finalizacion](/guide/rankings) del manual y la seccion [Restricciones y Validaciones](/guide/restrictions).
:::
