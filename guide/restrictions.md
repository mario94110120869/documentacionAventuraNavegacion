---
title: Restricciones y Validaciones
---
# 19. Restricciones y Validaciones del Sistema

El sistema implementa un conjunto de restricciones automaticas para proteger la integridad de los datos del juego, especialmente cuando hay jugadores activos. Esta seccion resume las validaciones mas importantes que el administrador debe conocer.

- - -

## 19.1 Proteccion por jugadores registrados

Cuando una aventura tiene **jugadores registrados**, el sistema aplica restricciones para evitar que los cambios rompan la experiencia de juego en curso.

::: warning Banner de advertencia
En las secciones afectadas se muestra un banner ambar con el mensaje: **"Esta aventura tiene X usuario(s) registrado(s). Algunas operaciones de edicion estan restringidas para proteger la estructura del juego."**
:::



![](/images/actividadesrestrinccion.png)

![](/images/nivelesrestrinccion.png)

![](/images/seccionesrestrincion.png)

![](/images/actividadesrestrinccionn.png)

### Acciones bloqueadas cuando hay jugadores

| Entidad         | Acciones bloqueadas                                                                                |
| --------------- | -------------------------------------------------------------------------------------------------- |
| **Aventura**    | Editar campos estructurales (solo se permite modificar titulo, descripcion y posicion en el mapa). |
| **Niveles**     | Crear nuevos niveles, editar campos estructurales, eliminar niveles y reordenar.                   |
| **Secciones**   | Crear nuevas secciones, editar campos estructurales, eliminar secciones y reordenar.               |
| **Actividades** | Crear nuevas actividades, editar campos estructurales, eliminar actividades y reordenar.           |

### Acciones permitidas cuando hay jugadores

| Entidad               | Acciones permitidas                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Aventura**          | Modificar titulo, descripcion, fechas y posicion de elementos en el mapa.                                            |
| **Premios (Awards)**  | Configurar, cambiar y eliminar premios libremente (se distribuyen al finalizar, no afectan la experiencia en curso). |
| **Rankings**          | Consultar clasificacion, exportar PDF y finalizar la aventura.                                                       |
| **Sponsors y Sellos** | Crear y editar sponsors y sellos (no afectan la estructura del juego activo).                                        |
| **Codigos QR**        | Generar y descargar codigos QR sin restricciones.                                                                    |
| **Plantillas**        | Crear y editar plantillas visuales.                                                                                  |

::: info
Las restricciones se desactivan automaticamente si se resetea la aventura (eliminando los datos de progreso de los jugadores). Consulte la seccion 4.5 para mas informacion sobre el proceso de reseteo.
:::

- - -

## 19.2 Eliminacion en cascada

La eliminacion de entidades tiene **efectos en cascada**. Al eliminar un elemento, se eliminan automaticamente todos los elementos que dependen de el. El sistema muestra advertencias especificas antes de cada eliminacion.

| Entidad eliminada    | Consecuencia en cascada                                                                                                                          |
| -------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Aventura**         | Elimina **todo**: niveles, secciones, actividades, tesoros, trampas, sponsors y todos los datos de jugadores asociados.                          |
| **Nivel**            | Elimina todas sus **secciones** y las **actividades** dentro de cada seccion.                                                                    |
| **Seccion**          | Elimina todas sus **actividades** (steps) con sus preguntas y respuestas.                                                                        |
| **Actividad**        | Si tiene sellos asignados, los sellos quedan desasignados (se muestra advertencia previa).                                                       |
| **Tesoro**           | Si tiene sellos asignados, se listan los sellos afectados en la advertencia.                                                                     |
| **Sponsor**          | **Bloqueado** si tiene sellos vinculados a actividades, tesoros o premios. Debe desasociar los sellos primero.                                   |
| **Sello de sponsor** | Reglas especificas segun su asignacion (ver seccion 12.4): bloqueado si esta en tesoro o premio; permitido con advertencia si esta en actividad. |
| **Plantilla**        | **Bloqueada** si esta en uso por alguna aventura. Debe desasignarla de todas las aventuras primero.                                              |

::: danger
La eliminacion de una **aventura** es la accion mas destructiva del sistema. Elimina permanentemente toda la estructura interna y los datos de jugadores. Solo los usuarios con rol **Super Administrador** pueden ejecutar esta accion.
:::

- - -

## 19.3 Validaciones de formularios

Todas las pantallas de creacion y edicion implementan **validacion de campos** en tiempo real para garantizar la integridad de los datos.

### Comportamiento general

* Los campos obligatorios estan marcados con un **asterisco rojo (*)**.
* Al intentar guardar un formulario con campos invalidos, se resaltan en **rojo** los campos con error.
* Se muestra un **mensaje descriptivo** debajo de cada campo invalido explicando el problema.
* El boton de guardar permanece deshabilitado hasta que todos los campos obligatorios sean validos.

### Tipos de validaciones

| Tipo de validacion                  | Descripcion                                                             | Ejemplo                                                        |
| ----------------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| **Campo requerido**                 | El campo no puede estar vacio.                                          | "El titulo es obligatorio."                                    |
| **Longitud minima**                 | El valor debe tener un numero minimo de caracteres.                     | "El titulo debe tener al menos 3 caracteres."                  |
| **Formato de email**                | El valor debe tener formato de correo electronico valido.               | "Ingrese un email valido."                                     |
| **Valor numerico minimo**           | El numero debe ser mayor o igual al minimo permitido.                   | "Los puntos deben ser al menos 10."                            |
| **Valor numerico maximo**           | El numero no debe exceder el maximo permitido.                          | "El valor no puede superar 1000."                              |
| **Coherencia de fechas**            | La fecha de inicio debe ser menor o igual a la fecha de fin.            | "La fecha de inicio no puede ser posterior a la fecha de fin." |
| **Unicidad**                        | Ciertos campos deben ser unicos en el sistema.                          | "Ya existe un administrador con este email."                   |
| **Al menos una respuesta correcta** | Las preguntas deben tener al menos una respuesta marcada como correcta. | "Debe marcar al menos una respuesta como correcta."            |
| **Minimo de respuestas**            | Las preguntas requieren al menos 2 opciones de respuesta.               | "Debe agregar al menos 2 respuestas."                          |

::: tip
Los mensajes de error desaparecen automaticamente cuando el usuario corrige el campo invalido. No es necesario cerrar ni descartar el mensaje manualmente.
:::

- - -

## 19.4 Reinicio de aventura

El sistema permite reiniciar una aventura eliminando los datos de progreso de los jugadores **sin alterar la estructura del juego** (niveles, secciones, actividades, etc.).

### Que se elimina al resetear

* Todos los **usuarios registrados** en la aventura (o se conservan, segun la opcion elegida).
* Todas las **puntuaciones** y datos de **progreso**.
* Las **asignaciones de sellos** a jugadores.
* Los registros de **tesoros encontrados** y **trampas activadas**.
* Las entradas del **ranking**.

### Que se conserva al resetear

* La **estructura completa** de la aventura (niveles, secciones, actividades, preguntas).
* La configuracion de **sponsors** y **sellos**.
* La configuracion de **premios** (Awards).
* Las **imagenes de mapa** y toda la configuracion visual.
* Los **tesoros** y **trampas** definidos.

### Opciones de reseteo

| Opcion                             | Descripcion                                                                                                   |
| ---------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Conservar usuarios registrados** | Los usuarios mantienen su cuenta pero se elimina todo su progreso. Podran volver a participar en la aventura. |
| **Eliminar todos los usuarios**    | Elimina permanentemente todas las cuentas de usuario asociadas a la aventura.                                 |

::: warning
El reseteo de una aventura es **irreversible**. Toda la informacion de progreso, rankings y sellos obtenidos por los jugadores sera eliminada permanentemente. Se requiere escribir la palabra **"RESETEAR"** para confirmar la accion.
:::

Tras el reinicio, la aventura vuelve a estar disponible para nuevos jugadores y las **restricciones por jugadores registrados se desactivan**.

- - -

## 19.5 Finalizacion de aventura

La finalizacion del ranking es un proceso **irreversible** que cierra definitivamente la aventura y distribuye los premios a los ganadores.

::: danger Accion irreversible
La finalizacion de una aventura **no se puede deshacer**. Una vez finalizada, la aventura se marca como **FINALIZADA** de forma permanente. Asegurese de que los premios estan correctamente configurados y de que el ranking refleja los resultados deseados antes de proceder.
:::

### Que sucede al finalizar

| Paso                           | Descripcion                                                                                                                                      |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| **1. Determinar ganadores**    | El sistema identifica a los jugadores segun su posicion en el ranking (por puntuacion o por sellos, segun la pestana activa).                    |
| **2. Distribuir premios**      | Se otorgan los sellos configurados en la seccion de Premios a los jugadores en las posiciones ganadoras.                                         |
| **3. Notificar jugadores**     | Se envia una notificacion en tiempo real a todos los jugadores conectados informando la finalizacion.                                            |
| **4. Marcar como finalizada**  | La aventura se marca como **FINALIZADA**. El boton cambia a "Aventura Finalizada" con un icono de candado y queda deshabilitado permanentemente. |
| **5. Bloquear sincronizacion** | No se aceptan mas sincronizaciones de datos del juego para esta aventura.                                                                        |

### Requisitos previos recomendados

* Verificar que la **configuracion de premios** este completa y correcta.
* Revisar el **ranking** para confirmar que los resultados son los esperados.
* Asegurarse de que todos los jugadores han tenido la oportunidad de completar la aventura.
* Considerar **exportar el ranking a PDF** antes de finalizar como respaldo.

::: tip
Exporte el ranking a PDF antes de finalizar. De esta forma tendra un registro completo de la clasificacion que podra consultar o imprimir en cualquier momento, independientemente del estado de la aventura.
:::
