---
title: Generacion con IA
---

# 17. Generacion con Inteligencia Artificial

El sistema integra capacidades de inteligencia artificial para generar contenido de forma automatica, agilizando la creacion de aventuras y sus componentes. Estas funciones estan disponibles en diferentes puntos de la aplicacion.

::: info
Las funciones de IA son herramientas de asistencia. Todo el contenido generado puede y debe ser revisado y ajustado por el administrador antes de guardarlo definitivamente.
:::

---

## 17.1 Funciones de IA disponibles

El sistema ofrece seis funciones de generacion con IA, cada una accesible desde una ubicacion especifica del panel:

| Funcion | Ubicacion | Que genera |
|---|---|---|
| **Generar Aventura** | Formulario de nueva aventura (boton "Generar con IA") | Titulo, descripcion, descripcion larga y nivel de dificultad a partir de una descripcion libre proporcionada por el administrador. |
| **Generar Aventura Completa** | Formulario de nueva aventura (boton "Generar Aventura Completa") | Una aventura completa con todos sus niveles y secciones. Permite especificar la cantidad de niveles y secciones por nivel. Opcionalmente genera la imagen del mapa. |
| **Generar Nivel** | Formulario de nuevo nivel (boton "Generar con IA") | Titulo, descripcion y descripcion larga para un nivel, tomando como contexto el nombre de la aventura padre. |
| **Generar Seccion** | Formulario de nueva seccion (boton "Generar con IA") | Titulo y descripcion para una seccion, tomando como contexto la aventura y el nivel al que pertenece. |
| **Generar Actividades** | Listado de actividades de una seccion (boton "Generar con IA") | Multiples actividades (con preguntas y respuestas) de forma masiva. Permite especificar la cantidad y la tematica deseada. |
| **Generar Imagen de Mapa** | Formularios de edicion de aventura y nivel (boton con icono de destellos sobre la imagen) | Una imagen de mapa generada por IA a partir de la descripcion de la aventura o nivel. |

<ImagePlaceholder label="Tabla visual mostrando las seis funciones de IA y sus ubicaciones en el panel" />

---

## 17.2 Como usar la generacion con IA

### Generacion de datos del formulario (aventura, nivel, seccion)

Esta funcion rellena automaticamente los campos del formulario a partir de una descripcion textual.

1. En el formulario correspondiente (aventura, nivel o seccion), haga clic en el boton con icono de **destellos** ("Generar con IA").
2. Se abrira un dialogo solicitando una **descripcion** o contexto para la generacion.
3. Escriba una descripcion clara y especifica de lo que desea generar.
4. Haga clic en **"Generar"**.
5. Los campos del formulario se rellenaran automaticamente con el contenido generado.
6. **Revise y ajuste** los valores antes de guardar.

<ImagePlaceholder label="Dialogo de generacion con IA para datos de formulario" />

::: tip
Cuanto mas detallada sea la descripcion que proporcione, mejores seran los resultados. Por ejemplo, en lugar de "una aventura de barcos", escriba "una aventura educativa sobre navegacion maritima en el Caribe, enfocada en seguridad y senalizacion portuaria".
:::

---

### Generacion de aventura completa

Esta funcion crea toda la estructura de una aventura de una sola vez: la aventura, sus niveles y las secciones dentro de cada nivel.

1. En el formulario de nueva aventura, haga clic en **"Generar Aventura Completa"**.
2. Se abrira un dialogo donde debe configurar:

| Campo | Descripcion |
|---|---|
| **Descripcion** | Contexto o tematica de la aventura que desea generar. |
| **Cantidad de niveles** | Numero de niveles que tendra la aventura. |
| **Secciones por nivel** | Numero de secciones que tendra cada nivel. |
| **Generar imagen de mapa** | Casilla para generar automaticamente la imagen del mapa de la aventura. |

3. Haga clic en **"Generar"**.
4. Se mostrara una vista previa con la aventura generada, incluyendo toda la estructura de niveles y secciones.
5. Si incluye imagen de mapa, podra **regenerarla** desde la vista previa si no le satisface el resultado.
6. Confirme para crear la aventura completa con todos sus niveles y secciones.

<ImagePlaceholder label="Dialogo de generacion de aventura completa con campos de configuracion y vista previa" />

<VideoPlayer src="#" title="Generacion de una aventura completa con IA" />

---

### Generacion masiva de actividades

Esta funcion permite crear multiples actividades con sus preguntas y respuestas de forma automatica dentro de una seccion.

1. Desde el **listado de actividades** de una seccion, haga clic en el boton **"Generar con IA"** (icono de destellos).
2. En el dialogo configure:

| Campo | Descripcion |
|---|---|
| **Descripcion** | Tematica o contexto de las actividades a generar. |
| **Cantidad** | Numero de actividades a crear. |

3. Haga clic en **"Generar"**.
4. Las actividades se crean **secuencialmente**, cada una con su pregunta y respuestas.
5. Un **indicador de progreso** muestra el avance de la generacion.
6. Al finalizar se muestra un mensaje indicando cuantas actividades se crearon exitosamente.

<ImagePlaceholder label="Dialogo de generacion masiva de actividades con indicador de progreso" />

::: warning
La generacion masiva de actividades puede tardar varios segundos dependiendo de la cantidad solicitada. No cierre ni recargue la pagina durante el proceso.
:::

---

### Generacion de imagen de mapa

Esta funcion genera una imagen de mapa ilustrativa usando inteligencia artificial.

1. En el formulario de **edicion de aventura** o **edicion de nivel**, pase el cursor sobre el area de imagen del mapa.
2. Haga clic en el boton con icono de **destellos** (IA).
3. Se abrira un dialogo donde puede escribir una **descripcion** del mapa deseado.
4. El sistema generara la imagen automaticamente.
5. La imagen se muestra como **vista previa**.
6. Puede **reemplazarla** subiendo una imagen manualmente si lo prefiere.
7. Haga clic en **"Guardar cambios"** para confirmar.

<ImagePlaceholder label="Generacion de imagen de mapa con IA desde el formulario de edicion" />

---

## 17.3 Recomendaciones para el uso de IA

::: tip Recomendaciones para obtener los mejores resultados
- **Proporcione descripciones claras y especificas** para obtener mejores resultados. Incluya detalles como la tematica, el publico objetivo y el tono deseado.
- **Siempre revise y ajuste** el contenido generado antes de guardarlo. La IA genera contenido de calidad, pero puede requerir ajustes para adaptarse perfectamente a sus necesidades.
- **La generacion de aventuras completas** puede tardar varios segundos dependiendo de la cantidad de niveles y secciones solicitados. Sea paciente durante el proceso.
- **Las imagenes generadas son ilustrativas**; puede reemplazarlas con imagenes propias en cualquier momento desde el formulario de edicion.
- **Utilice la generacion masiva de actividades** para crear rapidamente un banco de preguntas y luego refine cada una individualmente.
- **El contexto importa**: cuando genera niveles o secciones, el sistema toma en cuenta el nombre de la aventura padre para producir contenido coherente con la tematica general.
:::
