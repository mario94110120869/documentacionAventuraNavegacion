---
title: "Tutorial: Crear tu primera aventura"
---

# Tutorial: Crear tu primera aventura

En este tutorial aprendera a crear una aventura completa desde cero, incluyendo niveles, secciones y actividades con preguntas. Al finalizar, tendra una aventura lista para que los jugadores comiencen a explorar.

<VideoPlayer src="#" title="Crear tu primera aventura" />

::: info Requisitos previos
- Credenciales de acceso al panel (correo electronico y contrasena).
- Navegador web moderno (Chrome, Firefox o Edge recomendados).
- Al menos una idea para la tematica de su aventura.
:::

---

## Paso 1: Iniciar sesion en el panel

1. Abra su navegador web y acceda a la direccion del Panel de Administracion.
2. En la pantalla de inicio de sesion, ingrese su **correo electronico** en el campo correspondiente.
3. Ingrese su **contrasena**. Puede pulsar el icono del ojo para mostrar u ocultar la contrasena.
4. Haga clic en el boton **"Iniciar Sesion"**.
5. Si las credenciales son correctas, sera redirigido al **Dashboard** del panel.

<ImagePlaceholder label="Pantalla de inicio de sesion del panel de administracion" />

::: tip
Si no posee credenciales de acceso, solicitelas al Super Administrador del sistema. El podra crear una cuenta desde la seccion de Administradores.
:::

---

## Paso 2: Crear la aventura

1. Desde el Dashboard, haga clic en la accion rapida **"Nueva Aventura"**, o navegue a **Aventuras** en el menu lateral y pulse **"Nueva Aventura"**.
2. Complete el formulario de creacion:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Titulo** | Un nombre descriptivo para la aventura. | "Viaje por el Puerto de Valencia" |
| **Descripcion** | Un resumen de la experiencia. | "Explora los rincones del puerto mientras aprendes sobre navegacion y seguridad maritima." |
| **Fecha de inicio** | Cuando comienza la aventura. | 01/05/2026 |
| **Fecha de fin** | Cuando termina la aventura. | 15/05/2026 |
| **Activa** | Deje activada para que los jugadores puedan acceder. | Activada |
| **Plantilla** | Seleccione una plantilla visual (opcional). | Plantilla por defecto |

3. Haga clic en **"Crear Aventura"**.
4. Sera redirigido al listado de aventuras donde aparecera la nueva aventura.

<ImagePlaceholder label="Formulario de creacion de aventura con campos completados" />

::: tip Opcion alternativa con IA
Si prefiere generar la aventura automaticamente, haga clic en **"Generar con IA"** para que el sistema cree el titulo y la descripcion por usted, o en **"Generar Aventura Completa"** para crear toda la estructura (aventura, niveles y secciones) de una vez.
:::

---

## Paso 3: Agregar un nivel

Los niveles son las divisiones principales de la aventura (por ejemplo, "Dia 1", "Zona Norte").

1. En el listado de aventuras, haga clic en el boton de **ver detalle** (icono de ojo) de su aventura recien creada.
2. En la vista de detalle, localice la seccion de **niveles** y haga clic en **"Ver Niveles"**, o haga clic directamente en el contador de niveles desde el listado de aventuras.
3. Haga clic en **"Nuevo Nivel"**.
4. Complete el formulario:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Titulo** | Nombre del nivel. | "Puerto Comercial" |
| **Descripcion** | Que encontrara el jugador en este nivel. | "Recorre las instalaciones del puerto comercial y descubre como funcionan las operaciones maritimas." |
| **Posicion X / Y** | Coordenadas en el mapa (opcional, se puede ajustar despues). | 50 / 30 |
| **Sponsor** | Patrocinador asociado (opcional). | Dejar vacio por ahora |

5. Haga clic en **"Crear Nivel"**.

<ImagePlaceholder label="Formulario de creacion de nivel con campos de ejemplo" />

::: info
No se preocupe por las posiciones en el mapa ahora. Puede ajustarlas visualmente despues usando el **Editor de Mapa** desde el detalle de la aventura (boton "Editar Posiciones").
:::

---

## Paso 4: Agregar una seccion

Las secciones son las paradas o estaciones dentro de cada nivel (por ejemplo, "Muelle de Carga", "Torre de Control").

1. Desde el listado de niveles, haga clic en el contador de **secciones** del nivel que acaba de crear, o en el boton de ver secciones.
2. Haga clic en **"Nueva Seccion"**.
3. Complete el formulario:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Titulo** | Nombre de la seccion. | "Muelle de Carga" |
| **Descripcion** | Que encontrara el jugador aqui. | "Observa las operaciones de carga y descarga de mercancias en el muelle principal." |
| **Posicion X / Y** | Coordenadas en el mapa del nivel (opcional). | 25 / 40 |

4. Haga clic en **"Crear Seccion"**.

<ImagePlaceholder label="Formulario de creacion de seccion" />

::: tip
Puede crear varias secciones dentro del mismo nivel. Cada seccion representara una parada distinta en el recorrido del jugador.
:::

---

## Paso 5: Crear actividades con preguntas

Las actividades son los desafios que los jugadores deben completar. Cada actividad contiene una pregunta con sus respuestas.

1. Desde el listado de secciones, haga clic en el contador de **actividades** de la seccion que acaba de crear.
2. Haga clic en **"Nueva Actividad"**.
3. Complete la **Seccion 1 - Informacion de la actividad**:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Titulo** | Nombre de la actividad. | "Identificacion de senales maritimas" |
| **Puntos** | Puntos que otorga al completarse correctamente. | 100 |
| **Penalizacion** | Puntos restados por respuesta incorrecta. | 10 |
| **Descripcion** | Contexto de la actividad (opcional). | "Identifica correctamente las senales de navegacion del puerto." |

4. Complete la **Seccion 2 - Pregunta**:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Tipo de pregunta** | Seleccione el tipo de interaccion. | "Seleccion unica" |
| **Texto de la pregunta** | El enunciado que vera el jugador. | "Que indica una boya roja en la entrada de un puerto?" |

5. Complete la **Seccion 3 - Respuestas** (minimo 2 respuestas):

| Respuesta | Texto | Correcta |
|---|---|---|
| Respuesta 1 | "Indica el lado de babor del canal de entrada." | Si |
| Respuesta 2 | "Indica peligro de naufragio." | No |
| Respuesta 3 | "Indica zona de fondeo permitido." | No |
| Respuesta 4 | "Indica la direccion del viento." | No |

6. Haga clic en **"Crear Actividad"**.

<ImagePlaceholder label="Formulario completo de creacion de actividad con pregunta y respuestas" />

::: warning
Asegurese de marcar al menos una respuesta como **correcta** antes de guardar. Para preguntas de seleccion unica, solo puede haber una respuesta correcta. Para seleccion multiple, puede haber varias.
:::

---

## Paso 6: Repetir para completar la estructura

Ahora que conoce el flujo completo, repita los pasos anteriores para crear:

- **Mas actividades** dentro de la seccion actual (se recomienda 3-5 actividades por seccion).
- **Mas secciones** dentro del nivel (se recomienda 2-4 secciones por nivel).
- **Mas niveles** dentro de la aventura (se recomienda 2-5 niveles por aventura).

::: tip Consejo: Use la generacion con IA
Para agilizar la creacion de contenido, puede usar las funciones de generacion con IA:
- **"Generar con IA"** en los formularios de nivel y seccion para generar titulo y descripcion automaticamente.
- **"Generar con IA"** en el listado de actividades para crear multiples actividades con preguntas y respuestas de forma masiva.

Consulte la [seccion de Generacion con IA](/guide/ai-generation) para mas informacion.
:::

---

## Paso 7: Configurar el mapa (opcional)

Una vez que tenga niveles creados, puede configurar visualmente sus posiciones en el mapa de la aventura.

1. Vaya al **detalle de la aventura** (icono de ojo en el listado).
2. Si aun no tiene imagen de mapa, acceda a **Editar** y suba una imagen o generela con IA.
3. Haga clic en **"Editar Posiciones"** para abrir el editor de mapa.
4. **Arrastre** los marcadores de cada nivel para posicionarlos sobre el mapa.
5. Use los controles de **zoom** para mayor precision.
6. Haga clic en **"Guardar"** cuando este satisfecho con las posiciones.

<ImagePlaceholder label="Editor de mapa con marcadores de niveles posicionados" />

---

## Resultado final

Al completar este tutorial, habra creado:

- Una **aventura** con titulo, descripcion y fechas.
- Al menos un **nivel** dentro de la aventura.
- Al menos una **seccion** dentro del nivel.
- Al menos una **actividad** con pregunta y respuestas dentro de la seccion.

Su aventura ya esta lista para recibir jugadores. Los siguientes pasos recomendados son:

1. **Configurar sponsors y sellos** para agregar recompensas (ver [Tutorial: Configurar sponsors y sellos](/tutorials/configure-sponsors)).
2. **Crear tesoros y trampas** para hacer la aventura mas emocionante.
3. **Generar codigos QR** para vincular elementos fisicos con la aventura digital.
4. **Configurar premios** del ranking para las posiciones ganadoras.

::: info
Recuerde que puede editar cualquier elemento de la aventura en cualquier momento, siempre que no haya jugadores registrados. Una vez que los jugadores comiencen a participar, algunas acciones de edicion estaran restringidas. Consulte la seccion de [Restricciones y Validaciones](/guide/restrictions) para mas detalles.
:::
