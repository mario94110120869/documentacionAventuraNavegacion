---
title: "Tutorial: Configurar sponsors y sellos"
---

# Tutorial: Configurar sponsors y sellos

En este tutorial aprendera a crear patrocinadores (sponsors), disenar sus sellos, asignarlos a actividades y tesoros, y configurar los premios del ranking. Al finalizar, su aventura tendra un sistema completo de recompensas para los jugadores.

<VideoPlayer src="#" title="Configurar sponsors y sellos en Aventura en Navegacion" />

::: info Requisitos previos
- Tener al menos una **aventura creada** con niveles, secciones y actividades (vea el [Tutorial: Crear tu primera aventura](/tutorials/first-adventure) si aun no lo ha hecho).
- Tener acceso al panel con rol de **Super Administrador** o **Editor**.
- Opcionalmente, contar con los logos de los sponsors en formato JPG, PNG, SVG o WebP (maximo 2 MB por imagen).
:::

---

## Paso 1: Crear un sponsor

Los sponsors son las empresas u organizaciones que patrocinan su aventura. Cada sponsor puede tener sellos propios.

1. Navegue a **Sponsors** en el menu lateral.
2. Haga clic en **"Nuevo Sponsor"**.
3. Complete el formulario:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Aventura** | Seleccione la aventura a la que pertenecera el sponsor. | "Viaje por el Puerto de Valencia" |
| **Nombre** | Nombre del patrocinador. | "Puerto de Valencia S.A." |
| **Descripcion** | Texto descriptivo del sponsor (opcional). | "Autoridad portuaria que gestiona las operaciones del puerto comercial." |

4. Haga clic en **"Crear Sponsor"**.

<ImagePlaceholder label="Formulario de creacion de sponsor con campos completados" />

::: info
El campo de aventura solo esta disponible en el modo creacion. Una vez creado, no se puede cambiar la aventura del sponsor porque puede tener sellos vinculados a entidades de esa aventura.
:::

---

## Paso 2: Subir el logo del sponsor

El logo del sponsor aparecera como marcador en el mapa y se mostrara a los jugadores durante la aventura.

1. Desde el listado de sponsors, haga clic en el boton de **editar** (icono de lapiz) del sponsor recien creado.
2. En la seccion de **Subida de logo**, haga clic en **"Seleccionar imagen"**.
3. Elija un archivo de imagen desde su equipo (formatos: JPG, PNG, SVG, WebP; maximo 2 MB).
4. Se mostrara una vista previa con el nombre y tamano del archivo.
5. Haga clic en **"Subir Logo"**.
6. El logo se subira inmediatamente y se mostrara en la vista previa.

<ImagePlaceholder label="Seccion de subida de logo con vista previa de la imagen seleccionada" />

::: tip
La subida del logo es independiente del formulario principal. El logo se sube inmediatamente al hacer clic en "Subir Logo", sin necesidad de guardar el formulario completo.
:::

---

## Paso 3: Crear sellos para el sponsor

Los sellos son las recompensas que los jugadores obtienen. Cada sello pertenece a un sponsor.

1. Desde el listado de sponsors, haga clic en el **numero de sellos** del sponsor (mostrara "0" si es nuevo).
2. Haga clic en **"Nuevo Sello"**.
3. Complete el formulario:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Nombre** | Nombre del sello. | "Experto en Carga Maritima" |
| **Descripcion** | Texto descriptivo del sello (opcional). | "Sello que certifica conocimientos sobre operaciones de carga en el puerto." |
| **Cantidad limitada** | Active si desea limitar las unidades disponibles. | Activada |
| **Cantidad total** | Numero de unidades (solo si limitada esta activada). | 50 |

4. Haga clic en **"Crear Sello"**.

<ImagePlaceholder label="Formulario de creacion de sello con cantidad limitada activada" />

::: warning
Si activa la **cantidad limitada**, asegurese de que el numero de unidades sea suficiente para cubrir todas las asignaciones previstas (actividades, tesoros y premios del ranking).
:::

Repita este paso para crear todos los sellos que necesite para el sponsor. Se recomienda crear al menos:
- Un sello para **actividades** (que los jugadores obtienen al completar preguntas).
- Un sello para **tesoros** (que los jugadores obtienen al encontrar tesoros).
- Un sello para **premios del ranking** (que se otorga a los ganadores al finalizar).

---

## Paso 4: Asignar sellos a actividades

Ahora vincule los sellos a las actividades para que los jugadores los obtengan al completarlas.

1. Navegue a la **actividad** que desea vincular (Aventuras > Nivel > Seccion > Actividad).
2. Haga clic en el boton de **editar** (icono de lapiz) de la actividad.
3. En el formulario de edicion, localice la seccion **"Gestor de Sellos de Sponsor"**.
4. Haga clic en **"Agregar sello"**.
5. Seleccione el sello que desea asignar de la lista disponible.
6. Haga clic en **"Guardar cambios"**.

<ImagePlaceholder label="Gestor de sellos en el formulario de edicion de actividad" />

El sello ahora aparecera como recompensa cuando un jugador complete correctamente la actividad.

---

## Paso 5: Crear un tesoro y asignarle sellos

Los tesoros son objetos coleccionables que los jugadores encuentran escaneando codigos QR fisicos.

1. Desde el listado de aventuras, haga clic en el boton de **tesoros** de su aventura.
2. Haga clic en **"Nuevo Tesoro"**.
3. Complete el formulario:

| Campo | Que escribir | Ejemplo |
|---|---|---|
| **Nombre** | Nombre del tesoro. | "Brujula del Capitan" |
| **Descripcion** | Texto descriptivo. | "Una antigua brujula utilizada por los capitanes del puerto." |
| **Pista** | Pista para ayudar al jugador a encontrarlo. | "Busca cerca de la torre de control, donde los capitanes observan la entrada de los barcos." |
| **Puntos** | Puntos otorgados al encontrarlo. | 50 |

4. En el **Gestor de Sellos de Sponsor**, asigne al menos un sello al tesoro.
5. Haga clic en **"Crear Tesoro"**.

<ImagePlaceholder label="Formulario de creacion de tesoro con sello asignado" />

::: danger
Todo tesoro **debe tener al menos 1 sello de sponsor asignado**. Si intenta guardar sin sellos, el sistema mostrara un mensaje de error y no permitira la creacion.
:::

---

## Paso 6: Configurar premios del ranking

Los premios se otorgan a los jugadores segun su posicion en el ranking al finalizar la aventura.

1. Desde el listado de aventuras, haga clic en el boton de **premios** (icono de trofeo) de su aventura.
2. Haga clic en **"Agregar posicion"** para configurar el premio del **1er lugar**.
3. En el panel de seleccion de sellos, busque y seleccione el sello que desea otorgar como premio.
4. Haga clic en el boton **"+"** del sello deseado.
5. Repita para agregar premios para el **2do lugar**, **3er lugar** y las demas posiciones que desee.

<ImagePlaceholder label="Configuracion de premios del ranking con tres posiciones configuradas" />

::: tip
Los premios pueden configurarse y modificarse libremente durante todo el juego. No se distribuyen hasta que se finaliza el ranking, asi que puede ajustarlos en cualquier momento antes de la finalizacion.
:::

---

## Paso 7: Verificar la configuracion

Antes de dar por terminada la configuracion de sponsors y sellos, verifique lo siguiente:

### Lista de verificacion

- [ ] Todos los sponsors tienen **nombre** y **logo** configurados.
- [ ] Cada sponsor tiene al menos un **sello** creado.
- [ ] Los sellos tienen la **cantidad** correcta (limitada o ilimitada).
- [ ] Las **actividades** clave tienen sellos asignados como recompensa.
- [ ] Los **tesoros** tienen al menos un sello asignado cada uno.
- [ ] Los **premios del ranking** estan configurados para las posiciones deseadas.
- [ ] Los sellos limitados tienen suficientes **unidades disponibles** para cubrir todas las asignaciones.

---

## Resultado final

Al completar este tutorial, habra configurado:

- Al menos un **sponsor** con su logo.
- **Sellos** asociados al sponsor.
- Sellos **asignados a actividades** como recompensa por completarlas.
- Al menos un **tesoro** con sellos asignados.
- **Premios del ranking** configurados para las posiciones ganadoras.

Los jugadores ahora podran:
- Ganar sellos al **completar actividades**.
- Encontrar **tesoros** y obtener sellos adicionales.
- Competir por los **premios** del ranking.

::: info Siguientes pasos
- **Genere codigos QR** para los tesoros y trampas desde la seccion de [Codigos QR](/guide/qr-codes).
- Cuando la aventura este en curso y desee cerrarla, siga el [Tutorial: Finalizar ranking y premios](/tutorials/finalize-ranking).
:::
