# MANUAL DE USUARIO

## Panel de Administración

---

**Aplicación:** "Aventura en Navegación" — Viaje Mayo 2026

| Campo | Detalle |
|---|---|
| **Documento** | Manual de Usuario — Panel de Administración |
| **Versión** | 1.0 |
| **Fecha** | Febrero 2026 |
| **Elaborado por** | LYN Soluciones |
| **Dirigido a** | Personal interno de administración |
| **Confidencialidad** | Uso interno |

### Historial de versiones

| Versión | Fecha | Descripción | Autor |
|---|---|---|---|
| 1.0 | Febrero 2026 | Versión inicial del manual | LYN Soluciones |

---

## Tabla de contenidos

1. [Introducción](#1-introducción)
2. [Inicio de sesión y perfil](#2-inicio-de-sesión-y-perfil)
3. [Dashboard](#3-dashboard)
4. [Gestión de aventuras](#4-gestión-de-aventuras)
5. [Niveles](#5-niveles)
6. [Secciones](#6-secciones)
7. [Actividades y preguntas](#7-actividades-y-preguntas)
8. [Banco de actividades](#8-banco-de-actividades)
9. [Tesoros](#9-tesoros)
10. [Trampas](#10-trampas)
11. [Sponsors (Patrocinadores)](#11-sponsors-patrocinadores)
12. [Sellos de sponsor](#12-sellos-de-sponsor)
13. [Premios (Awards)](#13-premios-awards)
14. [Rankings y finalización](#14-rankings-y-finalización)
15. [Códigos QR](#15-códigos-qr)
16. [Plantillas visuales](#16-plantillas-visuales)
17. [Generación con inteligencia artificial](#17-generación-con-inteligencia-artificial)
18. [Gestión de administradores](#18-gestión-de-administradores)
19. [Restricciones y validaciones del sistema](#19-restricciones-y-validaciones-del-sistema)
20. [Glosario](#glosario)

---

## 1. Introducción

### 1.1 Acerca de este manual

El presente documento es la guía oficial de uso del **Panel de Administración** de la aplicación **"Aventura en Navegación"**. Está dirigido al personal interno encargado de crear, configurar y gestionar las aventuras del juego.

En este manual encontrará instrucciones detalladas para cada sección del panel, acompañadas de capturas de pantalla que ilustran los pasos a seguir.

### 1.2 ¿Qué es "Aventura en Navegación"?

"Aventura en Navegación" es una plataforma de gamificación basada en aventuras interactivas. Los participantes (jugadores) exploran aventuras organizadas en niveles, secciones y actividades, donde deben responder preguntas, buscar tesoros escondidos y evitar trampas. A lo largo del recorrido, los jugadores acumulan puntos y coleccionan sellos de patrocinadores (sponsors). Al finalizar la aventura, se genera un ranking de puntuación y se otorgan premios a los mejores clasificados.

El **Panel de Administración** es la herramienta desde la cual se diseña y controla toda esta experiencia.

### 1.3 Estructura general del juego

Para comprender el panel, es importante conocer cómo se organiza una aventura:

| Concepto | Descripción |
|---|---|
| **Aventura** | El contenedor principal. Representa un evento o viaje completo. |
| **Nivel** | División dentro de una aventura (ej: "Día 1", "Zona Norte"). Cada nivel puede tener un sponsor asociado. |
| **Sección** | Agrupación dentro de un nivel (ej: "Parada del Puerto", "Museo"). |
| **Actividad (Step)** | Un desafío individual con una pregunta que el jugador debe responder. Puede otorgar puntos y sellos como recompensa. |
| **Pregunta** | Cada actividad contiene una pregunta con respuestas. Tipos: selección única, selección múltiple o arrastrar y soltar. |
| **Tesoro** | Objeto especial que el jugador encuentra escaneando un código QR. Otorga puntos y sellos adicionales. |
| **Trampa** | Penalización oculta que el jugador activa al escanear su código QR. Puede restar puntos o quitar sellos. |
| **Sponsor** | Patrocinador asociado a la aventura. Cada sponsor tiene sellos propios. |
| **Sello** | Insignia coleccionable creada por un sponsor. Se otorga al completar actividades, encontrar tesoros o como premio del ranking. |
| **Premio (Award)** | Configuración que asigna un sello a una posición del ranking (1.er lugar, 2.do lugar, etc.). |
| **Ranking** | Clasificación final de jugadores por puntuación. Al finalizarlo se distribuyen los premios. |

> *[Insertar imagen: Diagrama de jerarquía Aventura → Nivel → Sección → Actividad]*

### 1.4 Requisitos de acceso

- **Navegador web** compatible: Google Chrome, Mozilla Firefox, Microsoft Edge (versiones recientes).
- **Credenciales** de administrador proporcionadas por el Super Administrador del sistema.
- **Conexión a internet** estable.

### 1.5 Roles de usuario

El panel contempla dos roles de administrador:

| Rol | Permisos |
|---|---|
| **Super Administrador** | Acceso completo. Puede crear y eliminar aventuras, gestionar otros administradores, finalizar rankings y realizar todas las operaciones del sistema. |
| **Editor** | Puede crear y editar contenido (aventuras, niveles, actividades, sponsors, etc.) pero no puede eliminar aventuras ni gestionar cuentas de administradores. |

### 1.6 Navegación del panel

Al iniciar sesión, el panel presenta un menú lateral (sidebar) con las siguientes secciones:

1. **Dashboard** — Vista general con estadísticas y accesos rápidos
2. **Aventuras** — Gestión de aventuras y toda su estructura interna
3. **Banco de Actividades** — Vista global de todas las preguntas/actividades
4. **Plantillas** — Gestión de plantillas visuales
5. **Rankings** — Tabla de clasificación y finalización de aventuras
6. **Sponsors** — Gestión de patrocinadores y sus sellos
7. **Códigos QR** — Generación y descarga de códigos QR
8. **Administradores** — Gestión de cuentas de administradores

> *[Insertar imagen: Captura del menú lateral del panel]*

---

## 2. Inicio de sesión y perfil

### 2.1 Pantalla de inicio de sesión

Al acceder a la dirección del panel de administración, se mostrará la pantalla de inicio de sesión.

> *[Insertar imagen: Pantalla de login]*

**Campos del formulario:**

| Campo | Descripción | Requisitos |
|---|---|---|
| **Correo electrónico** | Dirección de email del administrador | Obligatorio. Debe tener formato de email válido. |
| **Contraseña** | Contraseña de acceso | Obligatorio. Mínimo 6 caracteres. |

**Pasos para iniciar sesión:**

1. Ingrese su **correo electrónico** en el campo correspondiente.
2. Ingrese su **contraseña**. Puede pulsar el icono del ojo para mostrar u ocultar la contraseña.
3. Haga clic en el botón **"Iniciar Sesión"**.
4. Si las credenciales son correctas, será redirigido al Dashboard del panel.
5. Si las credenciales son incorrectas, se mostrará un mensaje de error en rojo indicando el motivo.

> **Nota:** Si no posee credenciales de acceso, solicítelas al Super Administrador del sistema.

### 2.2 Barra superior del panel

Una vez dentro del panel, la barra superior (header) muestra los siguientes elementos:

> *[Insertar imagen: Barra superior del panel]*

**Elementos de la barra:**

| Elemento | Ubicación | Descripción |
|---|---|---|
| **Título** | Izquierda | Muestra "Panel de Administración" y el subtítulo "Gestión de Gamificación". |
| **Campana de notificaciones** | Derecha | Muestra las notificaciones del sistema en tiempo real. Un indicador numérico señala la cantidad de notificaciones sin leer. |
| **Menú de usuario** | Derecha | Muestra el nombre y correo del usuario conectado. Al hacer clic se despliega el menú con la opción de cerrar sesión. |

### 2.3 Notificaciones

Al hacer clic en el icono de la campana se despliega el panel de notificaciones.

> *[Insertar imagen: Panel de notificaciones abierto]*

El sistema genera notificaciones automáticas cuando:

- Un **jugador sincroniza su progreso** — Muestra la cantidad de actividades y sellos sincronizados.
- El **contenido de una aventura es actualizado** — Indica que otro administrador realizó cambios.

**Acciones disponibles:**

- **Limpiar**: Elimina todas las notificaciones del panel.
- Las notificaciones se marcan como leídas automáticamente al abrir el panel.

### 2.4 Cerrar sesión

Para cerrar sesión:

1. Haga clic en su **nombre de usuario** en la esquina superior derecha de la barra.
2. Se desplegará un menú mostrando su nombre y correo electrónico.
3. Haga clic en **"Cerrar Sesión"**.
4. Será redirigido a la pantalla de inicio de sesión.

> *[Insertar imagen: Menú de usuario con opción de cerrar sesión]*

---

## 3. Dashboard

El Dashboard es la pantalla principal que se muestra al iniciar sesión. Proporciona un resumen general de la plataforma y accesos rápidos a las funciones más utilizadas.

> *[Insertar imagen: Vista completa del Dashboard]*

### 3.1 Tarjetas de estadísticas

En la parte superior se muestran cuatro tarjetas con indicadores clave:

| Tarjeta | Descripción | Tendencia |
|---|---|---|
| **Aventuras Activas** | Cantidad de aventuras actualmente activas en el sistema. | Muestra cuántas se agregaron esta semana. |
| **Jugadores Registrados** | Total de jugadores registrados en todas las aventuras. | Muestra cuántos se registraron hoy. |
| **QR Escaneados** | Total de códigos QR escaneados por los jugadores. | Muestra cuántos se escanearon hoy. |
| **Puntuación Promedio** | Puntuación media de todos los jugadores (en puntos). | Muestra el porcentaje promedio de completitud. |

Cada tarjeta incluye un indicador de tendencia en verde cuando el valor es positivo, lo que permite observar de un vistazo la actividad reciente.

> *[Insertar imagen: Tarjetas de estadísticas del Dashboard]*

### 3.2 Acciones rápidas

En la sección central izquierda se presentan cuatro accesos directos a las operaciones más frecuentes:

| Acción | Descripción | Destino |
|---|---|---|
| **Nueva Aventura** | Crear una nueva experiencia gamificada. | Formulario de creación de aventura. |
| **Nueva Pregunta** | Añadir preguntas al banco de actividades. | Sección del banco de actividades. |
| **Nuevo Sponsor** | Registrar un nuevo patrocinador. | Formulario de creación de sponsor. |
| **Generar QR** | Crear códigos QR para el juego. | Generador de códigos QR. |

Haga clic sobre cualquiera de estas acciones para ser redirigido directamente a la sección correspondiente.

### 3.3 Actividad reciente

En la columna derecha se muestra un listado de las acciones más recientes realizadas en la plataforma, tales como:

- Creación de aventuras, niveles o actividades.
- Sincronización de progreso de jugadores.
- Modificaciones en el contenido del juego.

Cada entrada muestra la acción realizada, el elemento afectado y el tiempo transcurrido desde que ocurrió.

### 3.4 Banner de bienvenida

En la parte inferior del Dashboard se muestra un banner de bienvenida con dos accesos directos:

- **Crear Aventura** — Inicia el proceso de creación de una nueva aventura.
- **Ver Aventuras** — Navega al listado de aventuras existentes.

---

## 4. Gestión de aventuras

Las aventuras son el contenedor principal del juego. Desde esta sección se crean, editan, visualizan y eliminan aventuras, además de gestionar su imagen de mapa y resetear el progreso de los jugadores.

### 4.1 Listado de aventuras

Acceda a **Aventuras** desde el menú lateral para ver el listado de todas las aventuras.

> *[Insertar imagen: Listado de aventuras]*

**Información mostrada por cada aventura:**

| Columna | Descripción |
|---|---|
| **Imagen de mapa** | Miniatura del mapa de la aventura (o icono por defecto si no tiene). |
| **Título y descripción** | Nombre de la aventura con su descripción resumida. |
| **Estado** | Etiqueta "Activa" o "Inactiva". Si tiene usuarios registrados muestra la cantidad. Si el ranking fue finalizado muestra "Finalizada". |
| **Fechas** | Fecha de inicio y fin de la aventura (formato dd.mm.yyyy). |
| **Niveles / Tesoros / Trampas** | Botones con el conteo de cada entidad. Al hacer clic navega directamente a la sección correspondiente. |
| **Acciones** | Botones de premios, ver detalle, editar, resetear y eliminar. |

**Funciones disponibles:**

- **Buscar**: Escriba en el campo de búsqueda para filtrar aventuras por título o descripción.
- **Paginación**: Navegue entre páginas si hay más de 10 aventuras.
- **Nueva Aventura**: Haga clic en el botón "Nueva Aventura" para crear una.

**Acciones por aventura:**

| Botón | Acción |
|---|---|
| Trofeo | Ir a la configuración de premios (Awards) de la aventura. |
| Ojo | Ver el detalle de la aventura. |
| Lápiz | Editar la aventura. |
| Flechas circulares | Resetear la aventura (ver sección 4.5). |
| Papelera | Eliminar la aventura (requiere confirmación). |

### 4.2 Crear una aventura

Haga clic en **"Nueva Aventura"** desde el listado para acceder al formulario de creación.

> *[Insertar imagen: Formulario de creación de aventura]*

**Campos del formulario:**

| Campo | Descripción | Requisitos |
|---|---|---|
| **Título** | Nombre de la aventura. | Obligatorio. Mínimo 3 caracteres. |
| **Descripción** | Texto descriptivo de la aventura. | Opcional. |
| **Fecha de inicio** | Fecha en que comienza la aventura. | Opcional. Debe ser menor o igual a la fecha de fin. |
| **Fecha de fin** | Fecha en que finaliza la aventura. | Opcional. Debe ser mayor o igual a la fecha de inicio. |
| **Activa** | Indica si la aventura está disponible para los jugadores. | Por defecto: activada. |
| **Plantilla** | Plantilla visual para la apariencia del juego. | Opcional. Muestra una vista previa de colores al seleccionar. |

**Pasos para crear una aventura:**

1. Complete el campo **Título** (obligatorio).
2. Opcionalmente complete la descripción, fechas y seleccione una plantilla.
3. Haga clic en **"Crear Aventura"**.
4. Será redirigido al listado de aventuras.

#### Generación con IA (modo creación)

En el modo de creación se dispone de dos opciones de generación asistida por inteligencia artificial:

**Generar con IA (básico):**
1. Haga clic en el botón **"Generar con IA"** en la cabecera.
2. Se abrirá un diálogo donde debe escribir una descripción de la aventura deseada.
3. El sistema generará automáticamente un título y una descripción.
4. Revise el resultado y ajuste si es necesario antes de guardar.

**Generar Aventura Completa:**
1. Haga clic en el botón **"Generar Aventura Completa"** en la cabecera.
2. Se abrirá un diálogo con los siguientes campos:
   - Descripción de la aventura deseada.
   - Cantidad de niveles a generar.
   - Cantidad de secciones por nivel.
   - Opción para generar imagen de mapa automáticamente.
3. Haga clic en **"Generar"**.
4. Se mostrará una vista previa con la aventura generada.
5. Si incluye imagen de mapa, podrá regenerarla desde la vista previa.
6. Confirme para crear la aventura completa con todos sus niveles y secciones.

> *[Insertar imagen: Diálogo de generación completa con IA]*

### 4.3 Editar una aventura

Haga clic en el botón de **editar** (icono de lápiz) en cualquier aventura del listado.

> *[Insertar imagen: Formulario de edición de aventura]*

El formulario de edición presenta los mismos campos que el de creación, con las siguientes diferencias:

- Los campos se rellenan automáticamente con los datos actuales de la aventura.
- La **imagen de mapa** se muestra a la izquierda con opciones para cambiarla o eliminarla.
- No se muestran los botones de generación con IA del título/descripción.

#### Gestión de la imagen de mapa

La imagen de mapa es la representación visual donde se posicionarán los niveles de la aventura.

> *[Insertar imagen: Sección de imagen de mapa en edición]*

**Opciones disponibles al pasar el cursor sobre la imagen:**

| Acción | Descripción |
|---|---|
| **Cambiar** | Seleccionar una nueva imagen desde el equipo (formatos: PNG, JPG, GIF; máximo 5 MB). |
| **Generar con IA** | Generar una imagen de mapa mediante inteligencia artificial a partir de una descripción textual. |
| **Eliminar** | Quitar la imagen de mapa actual. |

**Para subir una imagen manualmente:**
1. Pase el cursor sobre la imagen actual (o el área de imagen vacía).
2. Haga clic en **"Cambiar"**.
3. Seleccione un archivo de imagen (PNG, JPG o GIF, máximo 5 MB).
4. Se mostrará una vista previa.
5. Haga clic en **"Guardar cambios"** para confirmar.

**Para generar una imagen con IA:**
1. Pase el cursor sobre el área de imagen.
2. Haga clic en el botón con icono de **destellos** (IA).
3. Se abrirá un diálogo donde puede escribir una descripción del mapa deseado.
4. El sistema generará la imagen automáticamente.
5. Guarde los cambios para confirmar.

### 4.4 Detalle de una aventura

Haga clic en el botón de **ver** (icono de ojo) para acceder a la vista de detalle.

> *[Insertar imagen: Vista de detalle de aventura]*

**Sección izquierda — Mapa interactivo:**
- Muestra la imagen de mapa con marcadores posicionados para cada nivel.
- Cada marcador muestra el número de orden del nivel y, si tiene sponsor, el logo del sponsor.
- Al pasar el cursor sobre un marcador se muestra el nombre del nivel.
- Botón **"Editar Posiciones"** para acceder al editor de mapa (ver sección 4.6).

**Sección derecha — Información:**
- Título, estado (activa/inactiva) y descripción.
- Fechas de inicio y fin.
- Botón de edición rápida.
- Tarjeta de estadísticas con accesos directos a:
  - **Niveles** — cantidad y enlace directo.
  - **Tesoros** — cantidad y enlace directo.
  - **Trampas** — cantidad y enlace directo.
- Vista previa de los primeros 4 niveles creados.

**Banner de advertencia:**

Si la aventura tiene jugadores registrados, se muestra un banner amarillo indicando:

> "Esta aventura tiene X usuario(s) registrado(s). Algunas operaciones de edición están restringidas para proteger la estructura del juego."

### 4.5 Resetear una aventura

El reseteo permite eliminar todo el progreso de los jugadores y restaurar la aventura a su estado inicial.

> **Advertencia:** Esta acción es irreversible. Toda la información de progreso, rankings y sellos obtenidos será eliminada permanentemente.

**Pasos para resetear:**

1. En el listado de aventuras, haga clic en el botón de **resetear** (flechas circulares).
2. Se abrirá un diálogo mostrando las estadísticas actuales de la aventura:

| Estadística | Descripción |
|---|---|
| Participantes | Cantidad de jugadores registrados. |
| Rankings | Cantidad de entradas en el ranking. |
| Pasos completados | Total de actividades completadas por todos los jugadores. |
| Penalizaciones | Total de penalizaciones aplicadas. |
| Sellos | Total de sellos obtenidos. |
| Tesoros | Total de tesoros encontrados. |
| Trampas activadas | Total de trampas activadas. |

3. Configure las opciones de reseteo:

| Opción | Descripción |
|---|---|
| **Conservar usuarios registrados** | Los usuarios podrán volver a participar en la aventura reseteada. |
| **Eliminar todos los usuarios** | Elimina permanentemente todas las cuentas de usuario asociadas. |

4. Para confirmar, escriba la palabra **"RESETEAR"** en el campo de confirmación.
5. Haga clic en **"Resetear Aventura"**.

> *[Insertar imagen: Diálogo de reseteo de aventura]*

### 4.6 Editor de mapa

El editor de mapa permite posicionar visualmente los niveles sobre la imagen de mapa de la aventura.

> *[Insertar imagen: Editor de mapa de aventura]*

**Cómo usar el editor:**

1. Desde el detalle de la aventura, haga clic en **"Editar Posiciones"**.
2. Se mostrará el mapa con marcadores arrastrables para cada nivel.
3. **Arrastre** un marcador para reposicionar el nivel en el mapa.
4. Use los controles de **zoom** (50% a 200%) para mayor precisión.
5. En el panel derecho se muestra la lista de niveles con sus coordenadas actuales.
6. Una vez satisfecho con las posiciones, haga clic en **"Guardar"**.
7. Si desea descartar los cambios, haga clic en **"Restablecer"**.

**Controles de zoom:**

| Control | Función |
|---|---|
| **−** | Reducir zoom (mínimo 50%). |
| **+** | Aumentar zoom (máximo 200%). |
| **Reiniciar** | Volver al zoom por defecto. |

> **Nota:** El indicador "Cambios sin guardar" aparece cuando ha movido marcadores sin guardar.

### 4.7 Eliminar una aventura

1. En el listado, haga clic en el botón de **eliminar** (icono de papelera).
2. Se mostrará un diálogo de confirmación.
3. Confirme la eliminación.

> **Importante:** Solo los usuarios con rol **Super Administrador** pueden eliminar aventuras. La eliminación es permanente y borra toda la estructura interna (niveles, secciones, actividades, etc.).

---

## 5. Niveles

Los niveles son las divisiones principales dentro de una aventura (por ejemplo: "Día 1", "Zona Norte"). Se accede desde el detalle de una aventura o desde los botones de acceso rápido en el listado.

### 5.1 Listado de niveles

> *[Insertar imagen: Listado de niveles]*

**Información mostrada por cada nivel:**

| Columna | Descripción |
|---|---|
| **Arrastrar** | Icono de agarre para reordenar niveles mediante arrastrar y soltar. |
| **Mapa** | Miniatura de la imagen de mapa del nivel. |
| **Orden** | Número de orden del nivel dentro de la aventura. |
| **Título** | Nombre del nivel. |
| **Descripción** | Texto descriptivo resumido. |
| **Posición** | Coordenadas X e Y del nivel en el mapa de la aventura. |
| **Secciones** | Cantidad de secciones. Al hacer clic navega a las secciones del nivel. |
| **Acciones** | Botones de editar y eliminar. |

**Funciones disponibles:**

- **Buscar**: Filtrar niveles por título o descripción.
- **Paginación**: 10 niveles por página.
- **Nuevo Nivel**: Botón para crear un nuevo nivel.
- **Reordenar**: Arrastre los niveles para cambiar su orden. Esta función se desactiva si la aventura tiene jugadores registrados.

### 5.2 Crear un nivel

Haga clic en **"Nuevo Nivel"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de nivel]*

**Campos del formulario:**

| Campo | Descripción | Requisitos |
|---|---|---|
| **Título** | Nombre del nivel. | Obligatorio. Mínimo 2 caracteres. |
| **Descripción** | Texto descriptivo del nivel. | Opcional. |
| **Posición X** | Coordenada horizontal en el mapa de la aventura. | Opcional. |
| **Posición Y** | Coordenada vertical en el mapa de la aventura. | Opcional. |
| **Ancho** | Ancho del marcador en el mapa. | Opcional. |
| **Alto** | Alto del marcador en el mapa. | Opcional. |
| **Sponsor** | Patrocinador asociado al nivel. | Opcional. Solo muestra sponsors no asignados a otros niveles. |

**Generación con IA (modo creación):**
1. Haga clic en **"Generar con IA"**.
2. Escriba una descripción del nivel deseado.
3. El sistema generará título y descripción automáticamente.

### 5.3 Editar un nivel

El formulario de edición muestra los mismos campos que el de creación, con las siguientes diferencias:

- La **imagen de mapa del nivel** se muestra a la izquierda con opciones para cambiarla, generarla con IA o eliminarla (misma mecánica que en aventuras, máximo 5 MB).
- Los campos se rellenan con los datos actuales del nivel.

> *[Insertar imagen: Formulario de edición de nivel con imagen de mapa]*

#### Asignación de sponsor

Al seleccionar un sponsor en el desplegable, su logo aparecerá como marcador del nivel en el mapa de la aventura. Solo se muestran los sponsors que no están asignados a otros niveles de la misma aventura.

### 5.4 Editor de posiciones de secciones

Desde el listado de secciones o el detalle de la aventura, puede acceder al **Editor de Mapa del Nivel** para posicionar visualmente las secciones sobre la imagen de mapa del nivel.

> *[Insertar imagen: Editor de mapa de nivel]*

El funcionamiento es idéntico al editor de mapa de aventuras (ver sección 4.6):

1. Arrastre los marcadores de cada sección para posicionarlos.
2. Use los controles de zoom para mayor precisión.
3. Consulte el panel lateral con la lista de secciones y sus coordenadas.
4. Haga clic en **"Guardar"** para confirmar las posiciones.

### 5.5 Eliminar un nivel

1. Haga clic en el botón de **eliminar** (icono de papelera).
2. Confirme en el diálogo de confirmación.

> **Nota:** La eliminación de un nivel borra también todas sus secciones y actividades. No es posible eliminar niveles si la aventura tiene jugadores registrados.

---

## 6. Secciones

Las secciones son agrupaciones dentro de un nivel (por ejemplo: "Parada del Puerto", "Museo"). Se accede desde el listado de niveles.

### 6.1 Listado de secciones

> *[Insertar imagen: Listado de secciones]*

En la parte superior se muestra una **vista previa del mapa del nivel** con marcadores de posición para cada sección. Al pasar el cursor sobre un marcador se muestra el nombre de la sección.

**Información mostrada por cada sección:**

| Columna | Descripción |
|---|---|
| **Arrastrar** | Icono de agarre para reordenar. |
| **Imagen** | Miniatura de la imagen de la sección. |
| **Orden** | Número de orden dentro del nivel. |
| **Título** | Nombre de la sección. |
| **Descripción** | Texto descriptivo resumido. |
| **Posición** | Coordenadas X e Y en el mapa del nivel. |
| **Actividades** | Cantidad de actividades (steps). Al hacer clic navega a las actividades. |
| **Acciones** | Botones de editar y eliminar. |

**Funciones disponibles:**

- **Buscar**: Filtrar secciones por título o descripción.
- **Nueva Sección**: Botón para crear una nueva sección.
- **Reordenar**: Arrastrar y soltar para cambiar el orden.
- **Editar Posiciones**: Acceder al editor de mapa del nivel para posicionar secciones visualmente.

### 6.2 Crear una sección

> *[Insertar imagen: Formulario de creación de sección]*

**Campos del formulario:**

| Campo | Descripción | Requisitos |
|---|---|---|
| **Título** | Nombre de la sección. | Obligatorio. Mínimo 2 caracteres. |
| **Descripción** | Texto descriptivo. | Opcional. |
| **Posición X** | Coordenada horizontal en el mapa del nivel. | Opcional. |
| **Posición Y** | Coordenada vertical en el mapa del nivel. | Opcional. |

**Generación con IA (modo creación):**
1. Haga clic en **"Generar con IA"**.
2. El sistema genera título y descripción basándose en el contexto de la aventura y el nivel.

### 6.3 Editar una sección

El formulario de edición incluye los mismos campos, más la posibilidad de gestionar la **imagen de la sección** (subir, generar con IA o eliminar).

### 6.4 Eliminar una sección

1. Haga clic en el botón de **eliminar**.
2. Confirme la eliminación.

> **Nota:** La eliminación de una sección borra también todas sus actividades. No es posible eliminar secciones si la aventura tiene jugadores registrados.

---

## 7. Actividades y preguntas

Las actividades (steps) son los desafíos individuales que los jugadores deben completar. Cada actividad contiene una pregunta con respuestas. Se accede desde el listado de secciones.

### 7.1 Listado de actividades

> *[Insertar imagen: Listado de actividades]*

**Información mostrada por cada actividad:**

| Columna | Descripción |
|---|---|
| **Arrastrar** | Icono de agarre para reordenar. |
| **Orden** | Número de orden dentro de la sección. |
| **Puntos** | Cantidad de puntos que otorga la actividad. |
| **Título** | Nombre de la actividad con su descripción. |
| **Pregunta** | Texto de la pregunta asociada (resumido). |
| **Tipo** | Tipo de pregunta: "Única", "Múltiple" o "Arrastrar". |
| **Respuestas** | Cantidad de respuestas configuradas. |
| **Acciones** | Botones de ver detalle, editar y eliminar. |

**Funciones disponibles:**

- **Buscar**: Filtrar actividades por título o descripción.
- **Generar con IA**: Generar múltiples actividades automáticamente (ver sección 7.4).
- **Nueva Actividad**: Crear una actividad manualmente.
- **Reordenar**: Arrastrar y soltar para cambiar el orden.

**Acciones por actividad:**

| Botón | Acción |
|---|---|
| Ojo | Ver detalle completo de la actividad en un diálogo modal. |
| Lápiz | Editar la actividad. |
| Papelera | Eliminar la actividad (muestra advertencia si tiene sellos asignados). |

### 7.2 Crear una actividad

Haga clic en **"Nueva Actividad"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de actividad]*

El formulario se divide en tres secciones:

#### Sección 1 — Información de la actividad

| Campo | Descripción | Requisitos |
|---|---|---|
| **Título** | Nombre de la actividad. | Obligatorio. Mínimo 3 caracteres. |
| **Puntos** | Puntos otorgados al completar correctamente. | Obligatorio. Mínimo 10. |
| **Penalización** | Puntos restados al responder incorrectamente. | Obligatorio. Mínimo 0. Por defecto: 0. |
| **Descripción** | Texto descriptivo de la actividad. | Opcional. |

#### Sección 2 — Pregunta

| Campo | Descripción | Requisitos |
|---|---|---|
| **Tipo de pregunta** | Tipo de interacción del jugador. | Obligatorio. |
| **Sponsor** | Sponsor asociado a la pregunta. | Opcional. |
| **Texto de la pregunta** | El enunciado que verá el jugador. | Obligatorio. Mínimo 5 caracteres. |

**Tipos de pregunta disponibles:**

| Tipo | Descripción |
|---|---|
| **Selección única** | El jugador debe seleccionar una sola respuesta correcta. |
| **Selección múltiple** | El jugador puede seleccionar varias respuestas correctas. |
| **Arrastrar y soltar** | El jugador debe ordenar las respuestas en la secuencia correcta. |

#### Sección 3 — Respuestas

Se requiere un mínimo de **2 respuestas**. Use el botón **"Agregar respuesta"** para añadir más.

| Campo | Descripción |
|---|---|
| **Texto de la respuesta** | El contenido de cada opción de respuesta. |
| **Correcta** | Marcar si la respuesta es correcta (varía según el tipo). |

**Comportamiento según el tipo de pregunta:**

- **Selección única**: Solo una respuesta puede marcarse como correcta. Al marcar una, las demás se desmarcan automáticamente.
- **Selección múltiple**: Varias respuestas pueden ser correctas simultáneamente.
- **Arrastrar y soltar**: El orden de las respuestas en la lista define la secuencia correcta. Arrastre las respuestas para reorganizarlas.

> **Importante:** Debe haber al menos una respuesta marcada como correcta (excepto en arrastrar y soltar, donde el orden define la respuesta).

### 7.3 Editar una actividad

El formulario de edición muestra los mismos campos que el de creación. Adicionalmente, en modo edición aparecen dos secciones extra:

- **Gestor de Traks**: Permite adjuntar fotografías o evidencias a la actividad.
- **Gestor de Sellos de Sponsor**: Permite asignar sellos de sponsor como recompensa al completar la actividad.

> *[Insertar imagen: Formulario de edición con gestor de sellos]*

### 7.4 Generación de actividades con IA

Desde el listado de actividades, haga clic en **"Generar con IA"** para crear múltiples actividades automáticamente.

> *[Insertar imagen: Diálogo de generación de actividades con IA]*

**Pasos:**

1. Haga clic en el botón **"Generar con IA"** (icono de destellos).
2. Se abrirá un diálogo donde debe indicar:
   - **Descripción**: Contexto o temática de las actividades a generar.
   - **Cantidad**: Número de actividades a crear.
3. Haga clic en **"Generar"**.
4. El sistema creará las actividades secuencialmente, cada una con su pregunta y respuestas.
5. Al finalizar se mostrará un mensaje indicando cuántas actividades se crearon.

### 7.5 Ver detalle de una actividad

Haga clic en el botón de **ver** (icono de ojo) para abrir el diálogo de detalle.

> *[Insertar imagen: Diálogo de detalle de actividad]*

El diálogo muestra toda la información de la actividad:

- **Orden, puntos y penalización** en la cabecera.
- **Descripción** de la actividad.
- **Pregunta**: Tipo, texto y respuestas con indicadores de correcta/incorrecta.
- **Sellos de sponsor**: Sellos asignados como recompensa con su imagen, nombre y cantidad disponible.
- **Traks**: Fotografías o evidencias adjuntas.

### 7.6 Eliminar una actividad

1. Haga clic en el botón de **eliminar** (icono de papelera).
2. Si la actividad tiene **sellos de sponsor asignados**, se mostrará una advertencia listando los sellos que quedarán sin asignar.
3. Confirme la eliminación.

---

## 8. Banco de Actividades

El Banco de Actividades es una vista centralizada que permite consultar todas las actividades (preguntas) registradas en el sistema, agrupadas por aventura. A diferencia del listado de actividades dentro de una sección (capítulo 7), esta vista ofrece una perspectiva global.

Se accede desde el menú lateral: **Banco de Actividades**.

### 8.1 Vista general

> *[Insertar imagen: Banco de Actividades con selector de aventura]*

**Selector de aventura:** En la parte superior se encuentra un desplegable que permite elegir la aventura cuyos datos desea consultar. Al ingresar, se selecciona automáticamente la primera aventura disponible.

**Banner de advertencia:** Si la aventura seleccionada tiene jugadores registrados, aparecerá un banner ámbar indicando que la edición está restringida para proteger la estructura del juego.

### 8.2 Filtros

| Filtro | Descripción |
|---|---|
| **Buscar** | Campo de texto para filtrar por título de actividad o texto de pregunta. |
| **Tipo de pregunta** | Desplegable para filtrar por tipo: "Todos los tipos", "Respuesta única", "Respuesta múltiple" o "Arrastrar y soltar". |

Los filtros se reinician al cambiar de aventura.

### 8.3 Tabla de actividades

| Columna | Descripción |
|---|---|
| **Actividad** | Título del paso/actividad. Si la pregunta no está asignada a ninguna actividad, se muestra "Sin asignar" en color ámbar. |
| **Tipo** | Etiqueta de color indicando el tipo: "Única", "Múltiple" o "Arrastrar". |
| **Pregunta** | Texto de la pregunta (truncado, con tooltip al pasar el cursor). |
| **Sponsor** | Nombre del sponsor asociado a la pregunta, o "–" si no tiene. |
| **Respuestas** | Número de respuestas configuradas. |
| **Acciones** | Botones de navegar y eliminar. |

### 8.4 Acciones disponibles

| Botón | Acción |
|---|---|
| **Navegar** (icono enlace externo) | Abre el editor de la actividad correspondiente. Deshabilitado si la aventura tiene jugadores registrados. |
| **Eliminar** (icono papelera) | Solo disponible para preguntas **huérfanas** (sin actividad asignada). Solicita confirmación antes de eliminar. |

### 8.5 Añadir actividad

El botón **"Añadir Actividad"** abre un diálogo de selección de ubicación donde debe elegir:

1. **Aventura** a la que pertenecerá.
2. **Nivel** dentro de esa aventura.
3. **Sección** dentro de ese nivel.

Al confirmar, el sistema navega al formulario de creación de actividad dentro de la sección seleccionada.

> **Nota:** El pie de la tabla muestra el total de actividades que coinciden con los filtros aplicados.

---

## 9. Tesoros

Los tesoros son objetos coleccionables que los jugadores pueden encontrar durante la aventura. Cada tesoro otorga puntos y debe tener al menos un sello de sponsor asignado. Se accede desde el listado de aventuras, haciendo clic en el botón de **tesoros** de la aventura correspondiente.

### 9.1 Listado de tesoros

> *[Insertar imagen: Listado de tesoros]*

**Encabezado:** Muestra el nombre de la aventura seleccionada, un botón de volver y el botón **"Nuevo Tesoro"**.

**Campo de búsqueda:** Permite filtrar tesoros por nombre.

**Información mostrada por cada tesoro:**

| Columna | Descripción |
|---|---|
| **Nombre** | Nombre del tesoro con icono de regalo. Texto clicable. |
| **Descripción** | Texto descriptivo del tesoro. |
| **Pista** | Pista en formato cursiva para guiar al jugador. |
| **Acciones** | Botones de ver, editar y eliminar. |

**Paginación:** Incluye controles de paginación en la parte inferior.

### 9.2 Crear un tesoro

Haga clic en **"Nuevo Tesoro"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de tesoro]*

#### Campos del formulario

| Campo | Descripción | Requisitos |
|---|---|---|
| **Nombre** | Nombre del tesoro. | Obligatorio. Mínimo 2 caracteres. |
| **Descripción** | Texto descriptivo. | Opcional. |
| **Pista** | Pista que verán los jugadores para encontrarlo. | Opcional. |
| **Puntos** | Puntos otorgados al encontrar el tesoro. | Obligatorio. Mínimo 0. Valor por defecto: 20. |

#### Gestor de sellos de sponsor

Debajo del formulario aparece el **Gestor de Sellos de Sponsor**. Este componente permite asignar sellos de patrocinadores al tesoro.

> **Importante:** Todo tesoro debe tener **al menos 1 sello de sponsor asignado**. Si intenta guardar sin sellos, el sistema mostrará un mensaje de error.

### 9.3 Editar un tesoro

El formulario de edición presenta los mismos campos que el de creación, con dos secciones adicionales:

- **Gestor de Sellos de Sponsor**: Muestra los sellos actualmente asignados y permite agregar o quitar sellos.
- **Gestor de Traks**: Permite adjuntar fotografías o evidencias visuales al tesoro.

> *[Insertar imagen: Formulario de edición de tesoro con sellos y traks]*

### 9.4 Eliminar un tesoro

1. Haga clic en el botón de **eliminar** (icono de papelera).
2. Si el tesoro tiene **sellos de sponsor asignados**, se mostrará una advertencia listando los sellos que quedarán sin asignar.
3. Confirme la eliminación.

---

## 10. Trampas

Las trampas son elementos que penalizan a los jugadores durante la aventura. Cada trampa tiene un efecto negativo que se activa cuando el jugador la encuentra. Se accede desde el listado de aventuras, haciendo clic en el botón de **trampas** de la aventura correspondiente.

### 10.1 Listado de trampas

> *[Insertar imagen: Listado de trampas]*

**Encabezado:** Muestra el nombre de la aventura, un botón de volver y el botón **"Nueva Trampa"**.

**Campo de búsqueda:** Permite filtrar trampas por nombre.

**Información mostrada por cada trampa:**

| Columna | Descripción |
|---|---|
| **Nombre** | Nombre de la trampa con icono de calavera. |
| **Descripción** | Texto descriptivo (truncado). |
| **Efecto** | Etiqueta de color indicando el tipo de efecto negativo. |
| **Penalización** | Valor numérico de la penalización en rojo (ej: "-10"). |
| **Estado** | Etiqueta indicando si la trampa está "Activa" o "Inactiva". |
| **Acciones** | Botones de editar y eliminar. |

**Tipos de efecto disponibles:**

| Efecto | Descripción | Color de etiqueta |
|---|---|---|
| **Pierde Puntos** | El jugador pierde una cantidad determinada de puntos. | Por defecto |
| **Pierde Sello** | El jugador pierde un sello de patrocinador aleatorio. | Rojo/destructivo |

**Paginación:** Incluye controles de paginación en la parte inferior.

### 10.2 Crear una trampa

Haga clic en **"Nueva Trampa"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de trampa]*

| Campo | Descripción | Requisitos |
|---|---|---|
| **Nombre** | Nombre de la trampa. | Obligatorio. Mínimo 3 caracteres. |
| **Descripción** | Texto descriptivo. | Opcional. |
| **Efecto Negativo** | Tipo de penalización al jugador. | Obligatorio. Opciones: "Pierde Puntos" o "Pierde Sello". |
| **Penalización** | Cantidad de puntos a restar. | Obligatorio solo cuando el efecto es "Pierde Puntos". Mínimo 1. Por defecto: 10. |
| **Trampa activa** | Casilla para activar o desactivar la trampa. | Por defecto: activa. |

**Comportamiento dinámico:**

- Si selecciona **"Pierde Puntos"**: Aparece el campo de penalización numérica y un recuadro rojo indica "El jugador perderá X puntos al activar esta trampa."
- Si selecciona **"Pierde Sello"**: El campo de penalización desaparece y el recuadro indica "El jugador perderá un sello de patrocinador aleatorio."

### 10.3 Editar una trampa

El formulario de edición muestra los mismos campos que el de creación, prellenados con los valores actuales.

### 10.4 Eliminar una trampa

1. Haga clic en el botón de **eliminar** (icono de papelera).
2. Confirme la eliminación en el diálogo de confirmación.

---

## 11. Sponsors (Patrocinadores)

Los sponsors son las empresas u organizaciones que patrocinan la aventura. Cada sponsor puede tener sellos asociados que se distribuyen como recompensas durante el juego. Se accede desde el menú lateral: **Sponsors**.

### 11.1 Listado de sponsors

> *[Insertar imagen: Listado de sponsors]*

**Selector de aventura:** En la parte superior se encuentra un desplegable para elegir la aventura. Al ingresar se selecciona automáticamente la primera aventura disponible.

**Campo de búsqueda:** Permite filtrar sponsors por nombre o descripción.

**Información mostrada por cada sponsor:**

| Columna | Descripción |
|---|---|
| **Logo** | Imagen circular del sponsor. Si no tiene logo, muestra un icono genérico de edificio. |
| **Nombre** | Nombre del patrocinador. |
| **Descripción** | Texto descriptivo (truncado). |
| **Sellos** | Cantidad de sellos del sponsor. Haga clic para navegar al listado de sellos. |
| **Preguntas** | Número de preguntas asociadas al sponsor. Al pasar el cursor se muestra un tooltip con el detalle de cada pregunta y su actividad. |
| **Nivel** | Etiqueta morada con el nombre del nivel asociado, o "Sin nivel" si no tiene. |
| **Acciones** | Botones de editar y eliminar. |

### 11.2 Crear un sponsor

Haga clic en **"Nuevo Sponsor"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de sponsor]*

| Campo | Descripción | Requisitos |
|---|---|---|
| **Aventura** | Aventura a la que pertenecerá el sponsor. | Obligatorio. Seleccionar del desplegable. |
| **Nombre** | Nombre del patrocinador. | Obligatorio. Mínimo 2 caracteres. |
| **Descripción** | Texto descriptivo del sponsor. | Opcional. |

> **Nota:** El campo de aventura solo está disponible en el modo creación. Una vez creado, no se puede cambiar la aventura del sponsor porque puede tener sellos vinculados a entidades de esa aventura.

### 11.3 Editar un sponsor

El formulario de edición muestra los mismos campos que el de creación, con las siguientes diferencias:

- El campo **Aventura** aparece deshabilitado con una nota explicativa.
- Aparece la sección de **Subida de logo**.

#### Subida de logo

> *[Insertar imagen: Sección de subida de logo]*

En modo edición se muestra un área para gestionar el logo del sponsor:

1. **Vista previa:** Área de 20×20 que muestra el logo actual o un icono genérico.
2. **Seleccionar imagen:** Haga clic en el botón para abrir el selector de archivos.
3. **Formatos aceptados:** JPG, PNG, SVG, WebP. **Tamaño máximo: 2 MB.**
4. **Previsualización:** Al seleccionar un archivo, se muestra la vista previa con el nombre y tamaño del archivo.
5. **Subir Logo:** Haga clic para enviar el logo al servidor. Se muestra un indicador de carga.
6. **Cancelar:** Descarta la selección sin subir.

> **Importante:** La subida del logo es independiente del formulario principal. El logo se sube inmediatamente al hacer clic en "Subir Logo", sin necesidad de guardar el formulario.

### 11.4 Eliminar un sponsor

La eliminación de un sponsor tiene reglas especiales:

1. Haga clic en el botón de **eliminar** (icono de papelera).
2. El sistema verifica si el sponsor tiene **sellos vinculados** a actividades, tesoros o premios del ranking.
3. **Si tiene sellos vinculados:** Se muestra un diálogo de advertencia listando todos los sellos y sus asignaciones. No se permite la eliminación hasta desasociar los sellos. Solo puede hacer clic en "Entendido".
4. **Si no tiene sellos vinculados:** Se muestra el diálogo de confirmación estándar. Confirme para eliminar.

> *[Insertar imagen: Diálogo de advertencia de sponsor con sellos vinculados]*

---

## 12. Sellos de Sponsor

Los sellos son las recompensas virtuales que los patrocinadores otorgan a los jugadores al completar actividades, encontrar tesoros o alcanzar posiciones en el ranking. Cada sello pertenece a un sponsor. Se accede desde el listado de sponsors, haciendo clic en el **número de sellos** del sponsor correspondiente.

### 12.1 Listado de sellos

> *[Insertar imagen: Listado de sellos de sponsor]*

**Encabezado:** Muestra el nombre del sponsor, un botón de volver y el botón **"Nuevo Sello"**.

**Campo de búsqueda:** Permite filtrar sellos por nombre.

**Información mostrada por cada sello:**

| Columna | Descripción |
|---|---|
| **Nombre** | Nombre del sello con icono de estampa. |
| **Descripción** | Texto descriptivo (truncado). |
| **Cantidad** | Etiqueta con el número de unidades disponibles, o "Ilimitado" si no tiene restricción de cantidad. |
| **Asignado a** | Indicador de color que muestra dónde está asignado el sello. |
| **Acciones** | Botones de editar y eliminar. |

**Estados de asignación:**

| Color | Estado | Significado |
|---|---|---|
| **Azul** | Actividad: "[nombre]" | El sello está asignado a una actividad específica. |
| **Verde** | Tesoro: "[nombre]" | El sello está asignado a un tesoro. |
| **Ámbar** | Premio (ranking) | El sello está configurado como premio del ranking. |
| **Gris** | Sin asignar | El sello no está vinculado a ninguna entidad. |

**Paginación:** Incluye controles de paginación en la parte inferior.

### 12.2 Crear un sello

Haga clic en **"Nuevo Sello"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de sello]*

| Campo | Descripción | Requisitos |
|---|---|---|
| **Nombre** | Nombre del sello. | Obligatorio. Mínimo 2 caracteres. |
| **Descripción** | Texto descriptivo del sello. | Opcional. |
| **Cantidad limitada** | Casilla para indicar si el sello tiene unidades limitadas. | Por defecto: desactivada (ilimitado). |
| **Cantidad total** | Número de unidades disponibles. Solo visible cuando "Cantidad limitada" está activada. | Mínimo 1 unidad. |

**Comportamiento dinámico:**

- **Cantidad limitada desactivada:** El sello será ilimitado. No aparece el campo de cantidad.
- **Cantidad limitada activada:** Aparece el campo "Cantidad total" con un mínimo de 1 unidad. Se muestra un texto explicativo: "El sello tendrá una cantidad limitada de unidades disponibles."

### 12.3 Editar un sello

El formulario de edición muestra los mismos campos que el de creación, prellenados con los valores actuales.

### 12.4 Eliminar un sello

La eliminación de un sello tiene reglas especiales según su estado de asignación:

| Estado del sello | Comportamiento |
|---|---|
| **Asignado a una actividad** | Diálogo de advertencia: "la actividad perderá este sello". Permite eliminar con botón "Eliminar de todas formas". |
| **Asignado a un tesoro** | Diálogo bloqueante: "No se puede eliminar este sello". Debe desasociarlo del tesoro primero. Solo botón "Entendido". |
| **Asignado como premio (ranking)** | Diálogo bloqueante: "No se puede eliminar este sello". Debe eliminarlo de la configuración de premios primero. Solo botón "Entendido". |
| **Sin asignar** | Confirmación estándar de eliminación. |

---

## 13. Premios (Awards)

Los premios son la configuración de recompensas que se otorgan a los jugadores según su posición en el ranking al finalizar la aventura. Cada posición del ranking puede tener un sello de sponsor asignado como premio. Se accede desde el listado de aventuras, haciendo clic en el botón de **premios** de la aventura correspondiente.

> **Nota:** Los premios pueden configurarse y modificarse libremente durante el juego, ya que no se distribuyen hasta que se finaliza el ranking.

### 13.1 Vista general

> *[Insertar imagen: Configuración de premios]*

**Encabezado:** Muestra el título de la aventura, la descripción "Asigna sellos como premios por posición en el ranking", un botón de volver y el botón **"Agregar posición"** (dorado).

### 13.2 Lista de posiciones

Cada posición del ranking se muestra como una tarjeta con la siguiente información:

| Elemento | Descripción |
|---|---|
| **Número de posición** | Insignia con el número (1.°, 2.°, 3.°, etc.). Las tres primeras posiciones tienen estilo especial: oro, plata y bronce. |
| **Imagen del sello** | Logo del sello asignado o un icono genérico de premio. |
| **Nombre del sello** | Nombre del sello asignado como premio. |
| **Cantidad** | Etiqueta indicando la disponibilidad: "X/Y" para sellos limitados, o "Ilimitado" para sellos sin restricción. |
| **Sponsor** | Nombre del patrocinador que otorga el sello. |
| **Etiqueta de posición** | Texto descriptivo (ej: "1er lugar", "2do lugar", "3er lugar"). |

### 13.3 Agregar una posición

1. Haga clic en **"Agregar posición"**. Se abrirá el panel de selección de sellos.
2. Utilice el campo de búsqueda para filtrar los sellos disponibles.
3. La lista muestra todos los sellos de la aventura con su imagen, nombre, cantidad disponible y sponsor.
4. Haga clic en el botón **"+"** del sello deseado para asignarlo a la posición.
5. El sistema creará el premio y actualizará la lista.

> *[Insertar imagen: Panel de selección de sellos]*

### 13.4 Cambiar el sello de una posición

1. Haga clic en el botón **"Cambiar sello"** (icono de flechas) de la posición deseada.
2. Se abrirá el panel de selección de sellos.
3. Seleccione el nuevo sello. El sistema eliminará el premio anterior y creará uno nuevo.

### 13.5 Eliminar una posición

Solo es posible eliminar la **última posición** de la lista (no se pueden eliminar posiciones intermedias para mantener la secuencia).

1. Haga clic en el botón **"Eliminar posición"** (icono de papelera) de la última posición.
2. Confirme la eliminación en el diálogo de confirmación.

---

## 14. Rankings y Finalización

La sección de Rankings muestra la clasificación de los jugadores en tiempo real y permite finalizar la aventura distribuyendo los premios. Se accede desde el menú lateral: **Rankings**.

### 14.1 Vista general

> *[Insertar imagen: Vista de Rankings]*

**Encabezado:** Incluye los siguientes botones:

| Botón | Descripción |
|---|---|
| **Actualizar** | Refresca los datos del ranking manualmente. |
| **Exportar PDF** | Genera un documento PDF con la clasificación y lo muestra en un visor previo. |
| **Finalizar por Puntos** / **Finalizar Ranking** | Botón rojo que inicia el proceso de finalización (ver sección 14.5). |

### 14.2 Filtros y estadísticas

**Selector de aventura:** Desplegable para elegir la aventura. Se selecciona automáticamente la primera disponible.

**Campo de búsqueda:** Permite filtrar jugadores por nombre.

**Tarjetas de estadísticas (4 tarjetas):**

| Tarjeta | Descripción |
|---|---|
| **Total Jugadores** | Cantidad total de jugadores registrados en la aventura. |
| **En Línea** | Cantidad de jugadores conectados en tiempo real (actualización por WebSocket). Se muestra con un punto verde pulsante. |
| **Puntuación Máxima** / **Máx. Sellos Confirmados** | Valor máximo según la pestaña activa (puntuación o sellos). |
| **Aventura** | Nombre de la aventura seleccionada. |

### 14.3 Pestañas del ranking

El ranking tiene dos modos de visualización, accesibles mediante pestañas:

#### Pestaña "Puntuación"

Clasifica a los jugadores por la cantidad de puntos acumulados.

| Columna | Descripción |
|---|---|
| **Posición** | Medallas de oro, plata y bronce para los 3 primeros. Número para el resto. |
| **Jugador** | Avatar con indicador de estado en línea (punto verde) u offline (punto rojo), nombre del jugador. El primer lugar muestra una etiqueta "Líder". |
| **Puntuación** | Puntos acumulados en etiqueta con gradiente. |
| **Actividades** | Número de actividades completadas. |
| **Sellos** | Número de sellos obtenidos. |

#### Pestaña "Sellos"

Clasifica a los jugadores por la cantidad de sellos confirmados.

| Columna | Descripción |
|---|---|
| **Posición** | Medallas para los 3 primeros. |
| **Jugador** | Avatar con estado en línea, nombre. El primero muestra "Líder en Sellos". |
| **Sellos Confirmados** | Cantidad de sellos confirmados en etiqueta verde. |
| **Total Sellos** | Cantidad total de sellos con nota de "X no alcanzados" si aplica. |
| **Puntuación** | Puntos como dato secundario. |

### 14.4 Detalle de jugador

Al hacer clic en la fila de un jugador, se abre un panel lateral con información detallada del jugador, incluyendo su progreso completo, sellos obtenidos y actividades realizadas.

> *[Insertar imagen: Panel de detalle de jugador]*

### 14.5 Actualización en tiempo real

El sistema de rankings se actualiza automáticamente mediante conexión WebSocket:

- **Indicador de jugadores en línea:** Muestra en tiempo real cuántos jugadores están conectados.
- **Estado por jugador:** Cada fila muestra un punto verde (en línea) o rojo (desconectado).
- **Refresco automático:** Cuando el sistema detecta cambios en los datos del juego, el ranking se actualiza sin necesidad de recargar la página.

### 14.6 Exportar PDF

1. Haga clic en **"Exportar PDF"**.
2. El sistema genera un documento PDF con la clasificación completa.
3. Se abre un visor previo donde puede revisar el contenido.
4. Descargue el archivo si desea conservarlo.

### 14.7 Finalizar la aventura

La finalización es un proceso **irreversible** que distribuye los premios configurados a los ganadores.

#### Finalizar por Puntos (pestaña Puntuación)

1. Haga clic en el botón rojo **"Finalizar por Puntos"**.
2. Se muestra un diálogo de confirmación explicando las consecuencias:
   - Se determinan los ganadores según su posición en el ranking de puntuación.
   - Se otorgan los premios (sellos) configurados en la sección de Premios a los ganadores.
   - Se notifica a los jugadores conectados.
   - La aventura se marca como **FINALIZADA** (no se sincronizará más).
3. Confirme para ejecutar el proceso.
4. Al completarse, se muestra un mensaje con la cantidad de usuarios notificados y premios otorgados.

> **Importante:** Una vez finalizada la aventura, el botón cambia a "Aventura Finalizada" con un icono de candado y queda deshabilitado permanentemente.

#### Finalizar Ranking de Sellos (pestaña Sellos)

1. Haga clic en el botón rojo **"Finalizar Ranking"**.
2. Se muestra un diálogo de confirmación similar.
3. El sistema procesa todos los sellos, determina ganadores y perdedores, notifica a los jugadores y decrementa las cantidades de sellos limitados.

> *[Insertar imagen: Diálogo de confirmación de finalización]*

---

## 15. Códigos QR

Los códigos QR permiten vincular elementos físicos del juego (señalización, objetos, estaciones) con las entidades digitales del sistema. Se accede desde el menú lateral: **Códigos QR**, que ofrece dos subsecciones: **Listado** y **Generador**.

### 15.1 Listado de códigos QR

> *[Insertar imagen: Listado de códigos QR]*

**Filtros disponibles:**

| Filtro | Descripción |
|---|---|
| **Tipo de entidad** | Desplegable para seleccionar: "Aventuras", "Tesoros" o "Trampas". |
| **Filtrar por aventura** | Solo visible para tesoros y trampas. Permite filtrar por una aventura específica o ver todas. |
| **Buscar** | Campo de texto para buscar por nombre de la entidad. |

**Información mostrada por cada entidad:**

| Columna | Descripción |
|---|---|
| **Nombre** | Icono según el tipo (mapa, gema o calavera) + nombre de la entidad. |
| **Aventura** | Solo visible para tesoros y trampas. Nombre de la aventura a la que pertenece. |
| **Acciones** | Botones "Ver QR" y "Descargar". |

**Acciones:**

- **Ver QR:** Genera la imagen del código QR y la muestra en un visor modal a pantalla completa. Desde el visor puede descargar la imagen.
- **Descargar:** Descarga directamente la imagen del código QR en formato PNG. El nombre del archivo sigue el patrón: `qr-[tipo]-[nombre].png`.

> *[Insertar imagen: Vista previa del código QR]*

### 15.2 Generador masivo de códigos QR

El generador permite crear múltiples códigos QR de forma simultánea.

> *[Insertar imagen: Generador masivo de QR]*

**Diseño en dos columnas:**

#### Columna izquierda — Tipo de entidad

Seleccione el tipo de entidad mediante botones de radio:

| Opción | Icono | Descripción |
|---|---|---|
| **Aventuras** | Mapa | Genera QR para aventuras. |
| **Tesoros** | Gema | Genera QR para tesoros. |
| **Trampas** | Calavera | Genera QR para trampas. |

#### Columna derecha — Selección de entidades

1. Use el botón **"Seleccionar todos"** / **"Deseleccionar todos"** para marcar o desmarcar todas las entidades.
2. La lista muestra cada entidad con una casilla de verificación, su nombre y la aventura a la que pertenece (para tesoros y trampas).
3. En la parte inferior se muestra un resumen: **"X de Y seleccionados"**.
4. Haga clic en el botón **"Generar X QR(s)"** para iniciar la generación.

#### Resultado de la generación

Después de generar, se muestra una cuadrícula con los códigos QR creados:

- Botón **"Descargar todos"** para descargar todas las imágenes individualmente.
- Cada tarjeta muestra la imagen del QR, el nombre de la entidad y un botón individual de descarga.

> **Nota:** La generación puede tardar unos segundos dependiendo de la cantidad de entidades seleccionadas.

---

## 16. Plantillas Visuales

Las plantillas visuales definen el esquema de colores que se aplica a la experiencia de juego del jugador. Cada aventura puede tener una plantilla asignada. Se accede desde el menú lateral: **Plantillas**.

### 16.1 Listado de plantillas

> *[Insertar imagen: Listado de plantillas]*

Las plantillas se muestran como tarjetas en cuadrícula (hasta 3 columnas en pantallas grandes).

**Cada tarjeta muestra:**

| Elemento | Descripción |
|---|---|
| **Vista previa de colores** | Área superior que muestra el fondo de la app, una franja con el fondo del header, y un círculo con gradiente de colores primario y secundario. |
| **Círculos de colores** | Cinco círculos con los colores: primario, secundario, acento, éxito y error. |
| **Nombre** | Nombre de la plantilla. |
| **Aventuras** | Etiqueta con el número de aventuras que usan esta plantilla. |
| **Acciones** | Botones de editar y eliminar. |

**Eliminación de plantillas:**

- Si la plantilla está en uso por una o más aventuras, **no se puede eliminar**. Se muestra un mensaje de error indicando cuántas aventuras la usan.
- Si no está en uso, se muestra el diálogo de confirmación estándar.

### 16.2 Crear una plantilla

Haga clic en **"Nueva Plantilla"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de plantilla]*

El formulario se presenta en dos columnas: el formulario a la izquierda y una **vista previa en vivo** a la derecha que se actualiza en tiempo real a medida que modifica los valores.

#### Sección 1 — Información General

| Campo | Requisitos |
|---|---|
| **Nombre** | Obligatorio. Mínimo 2 caracteres. |

#### Sección 2 — Colores Principales

| Campo | Descripción | Valor por defecto |
|---|---|---|
| **Color Primario** | Botones, marcadores activos. | #64ddff |
| **Color Secundario** | Información, nivel actual. | #5bc4ff |
| **Color de Acento** | Oro, recompensas, elemento activo. | #ffd700 |
| **Color Bloqueado** | Elementos bloqueados. | #636e72 |

Cada campo incluye un selector de color visual y un campo de texto para ingresar el valor hexadecimal directamente.

#### Sección 3 — Colores de Estado

| Campo | Descripción | Valor por defecto |
|---|---|---|
| **Color de Éxito** | Completado, logros. | #4ade80 |
| **Color de Error** | Trampas, errores. | #ef4444 |
| **Ubicación del Jugador** | Marcador del jugador en el mapa. | #00ff00 |

#### Sección 4 — Colores de Fondo

| Campo | Descripción | Valor por defecto |
|---|---|---|
| **Fondo de la App** | Color de fondo principal. Soporta gradientes CSS. | Gradiente oscuro (135deg) |
| **Fondo del Header** | Barra de navegación superior. Soporta gradientes CSS. | Gradiente oscuro (180deg) |
| **Fondo de Modales** | Fondo de diálogos y modales. Soporta valores RGBA. | Gradiente oscuro con transparencia |

#### Sección 5 — Configuración de Transparencias

| Campo | Rango | Paso | Valor por defecto |
|---|---|---|---|
| **Navbar / Header** | 0 – 1 | 0.01 | 0.98 |
| **Menú** | 0 – 1 | 0.01 | 0.95 |
| **Contenedor de Preguntas** | 0 – 1 | 0.01 | 0.98 |

Donde 0 = completamente transparente y 1 = completamente opaco.

#### Botón "Restaurar valores"

Restablece todos los campos del formulario a sus valores predeterminados.

### 16.3 Editar una plantilla

El formulario de edición muestra los mismos campos que el de creación, prellenados con los valores actuales de la plantilla.

### 16.4 Vista previa en vivo

> *[Insertar imagen: Vista previa de plantilla]*

La vista previa se ubica en la columna derecha del formulario y permanece fija al hacer scroll. Muestra una representación visual de cómo se verían los colores seleccionados aplicados a la interfaz del juego, actualizándose instantáneamente con cada cambio.

---

## 17. Generación con Inteligencia Artificial

El sistema integra capacidades de inteligencia artificial para generar contenido de forma automática, agilizando la creación de aventuras y sus componentes. Estas funciones están disponibles en diferentes puntos de la aplicación.

### 17.1 Funciones de IA disponibles

| Función | Ubicación | Descripción |
|---|---|---|
| **Generar Aventura** | Formulario de nueva aventura | Genera título, descripción, descripción larga y nivel de dificultad a partir de una descripción libre. |
| **Generar Aventura Completa** | Formulario de nueva aventura | Genera una aventura completa con todos sus niveles y secciones. Permite especificar la cantidad de niveles y secciones por nivel. Opcionalmente genera la imagen del mapa. |
| **Generar Nivel** | Formulario de nuevo nivel | Genera título, descripción y descripción larga para un nivel, tomando como contexto el nombre de la aventura. |
| **Generar Sección** | Formulario de nueva sección | Genera título y descripción para una sección, tomando como contexto la aventura y el nivel. |
| **Generar Actividades** | Listado de actividades de una sección | Genera múltiples actividades (con preguntas y respuestas) de forma masiva. Permite especificar cantidad y temática. |
| **Generar Imagen de Mapa** | Formularios de aventura y nivel | Genera una imagen de mapa usando IA a partir de la descripción de la aventura. |

### 17.2 Cómo usar la generación con IA

#### Generación de datos del formulario (aventura, nivel, sección)

1. En el formulario correspondiente, haga clic en el botón con icono de **destellos** (✨).
2. Se abrirá un diálogo solicitando una **descripción** o contexto para la generación.
3. Escriba una descripción clara de lo que desea generar.
4. Haga clic en **"Generar"**.
5. Los campos del formulario se rellenarán automáticamente con el contenido generado.
6. Revise y ajuste los valores antes de guardar.

> *[Insertar imagen: Diálogo de generación con IA]*

#### Generación de aventura completa

1. En el formulario de nueva aventura, haga clic en **"Generar Aventura Completa"**.
2. Se abrirá un diálogo donde debe configurar:
   - **Descripción**: Contexto o temática de la aventura.
   - **Cantidad de niveles**: Número de niveles a generar.
   - **Secciones por nivel**: Número de secciones en cada nivel.
   - **Generar imagen de mapa**: Opción para generar automáticamente la imagen del mapa.
3. Haga clic en **"Generar"**.
4. El sistema creará la estructura completa: aventura → niveles → secciones.
5. Al finalizar, será redirigido al detalle de la aventura creada.

#### Generación masiva de actividades

1. Desde el listado de actividades de una sección, haga clic en **"Generar con IA"**.
2. En el diálogo configure:
   - **Descripción**: Temática de las actividades.
   - **Cantidad**: Número de actividades a crear.
3. Haga clic en **"Generar"**.
4. Las actividades se crean secuencialmente, cada una con su pregunta y respuestas.
5. Un indicador de progreso muestra el avance de la generación.

#### Generación de imagen de mapa

1. En el formulario de aventura o nivel, haga clic en el botón **"Generar con IA"** en la sección de imagen del mapa.
2. El sistema genera una imagen basada en la descripción de la aventura.
3. La imagen se muestra como vista previa.
4. Puede reemplazarla subiendo una imagen manualmente si lo prefiere.

### 17.3 Recomendaciones

- Proporcione descripciones claras y específicas para obtener mejores resultados.
- Siempre **revise y ajuste** el contenido generado antes de guardarlo.
- La generación de aventuras completas puede tardar varios segundos dependiendo de la cantidad de elementos.
- Las imágenes generadas son ilustrativas; puede reemplazarlas con imágenes propias en cualquier momento.

---

## 18. Gestión de Administradores

La sección de administradores permite gestionar las cuentas de usuario que tienen acceso al panel de administración. Se accede desde el menú lateral: **Administradores**.

> **Nota:** Esta sección solo está disponible para usuarios con rol **Super Administrador**.

### 18.1 Listado de administradores

> *[Insertar imagen: Listado de administradores]*

**Campo de búsqueda:** Permite filtrar administradores por nombre o email.

**Información mostrada por cada administrador:**

| Columna | Descripción |
|---|---|
| **Usuario** | Nombre del administrador con icono de persona. |
| **Email** | Dirección de correo electrónico. |
| **Rol** | Etiqueta de color indicando el rol (ver sección 18.2). |
| **Creado** | Fecha de creación de la cuenta (formato: "10 feb. 2026"). |
| **Acciones** | Botones de editar y eliminar. |

**Paginación:** 10 administradores por página con controles de paginación.

### 18.2 Roles de administrador

El sistema cuenta con dos roles:

| Rol | Etiqueta | Descripción |
|---|---|---|
| **Super Administrador** | Escudo con marca de verificación | Acceso completo a todas las funciones del sistema, incluyendo la gestión de otros administradores. |
| **Editor** | Escudo simple | Puede gestionar contenido (aventuras, niveles, secciones, actividades, etc.) pero **no** puede gestionar administradores. |

### 18.3 Crear un administrador

Haga clic en **"Nuevo Admin"** para acceder al formulario.

> *[Insertar imagen: Formulario de creación de administrador]*

| Campo | Descripción | Requisitos |
|---|---|---|
| **Nombre** | Nombre completo del administrador. | Obligatorio. Mínimo 2 caracteres. |
| **Email** | Correo electrónico para iniciar sesión. | Obligatorio. Debe ser un email válido. |
| **Contraseña** | Contraseña de acceso. | Obligatorio en creación. Mínimo 6 caracteres. |
| **Rol** | Rol del administrador. | Obligatorio. Seleccionar entre "Super Administrador" o "Editor". |

El selector de rol se presenta como tarjetas seleccionables, cada una con el nombre del rol y su descripción de permisos.

### 18.4 Editar un administrador

El formulario de edición muestra los mismos campos que el de creación con las siguientes diferencias:

- El campo **Contraseña** es **opcional**. Si se deja vacío, se mantiene la contraseña actual. Debajo del campo se muestra la nota: "Solo completa este campo si deseas cambiar la contraseña."
- Los campos nombre, email y rol se pueden modificar libremente.

### 18.5 Eliminar un administrador

1. Haga clic en el botón de **eliminar** (icono de papelera).
2. Confirme la eliminación en el diálogo de confirmación.

> **Precaución:** No es posible eliminar la cuenta con la que está actualmente autenticado.

---

## 19. Restricciones y Validaciones del Sistema

El sistema implementa un conjunto de restricciones automáticas para proteger la integridad de los datos del juego, especialmente cuando hay jugadores activos. Esta sección resume las validaciones más importantes.

### 19.1 Protección por jugadores registrados

Cuando una aventura tiene **jugadores registrados**, el sistema aplica restricciones para evitar que los cambios rompan la experiencia de juego en curso.

**Banner de advertencia:** En las secciones afectadas se muestra un banner ámbar con el siguiente mensaje:

> "Esta aventura tiene usuarios registrados. Algunas acciones están restringidas."

**Acciones bloqueadas cuando hay jugadores:**

| Entidad | Acciones bloqueadas |
|---|---|
| **Aventura** | Editar campos estructurales (solo se permite modificar título, descripción y posición en el mapa). |
| **Niveles** | Crear, editar campos estructurales, eliminar y reordenar. |
| **Secciones** | Crear, editar campos estructurales, eliminar y reordenar. |
| **Actividades** | Crear, editar campos estructurales, eliminar y reordenar. |

**Acciones permitidas cuando hay jugadores:**

| Entidad | Acciones permitidas |
|---|---|
| **Aventura** | Modificar título, descripción, posición de elementos en el mapa. |
| **Premios (Awards)** | Configurar, cambiar y eliminar premios libremente (se distribuyen al finalizar). |
| **Rankings** | Consultar, exportar PDF, finalizar. |
| **Sponsors y Sellos** | Crear y editar (no afectan estructura del juego). |

### 19.2 Validaciones de eliminación en cascada

La eliminación de entidades tiene efectos en cascada y el sistema muestra advertencias específicas:

| Entidad eliminada | Consecuencia |
|---|---|
| **Aventura** | Elimina todos los niveles, secciones, actividades, tesoros, trampas, sponsors y datos de jugadores asociados. |
| **Nivel** | Elimina todas sus secciones y actividades. |
| **Sección** | Elimina todas sus actividades. |
| **Actividad** | Si tiene sellos asignados, se muestran los sellos que quedarán desasignados. |
| **Tesoro** | Si tiene sellos asignados, se listan los sellos afectados. |
| **Sponsor** | Bloqueado si tiene sellos vinculados a actividades, tesoros o premios. |
| **Sello de sponsor** | Reglas específicas según asignación (ver capítulo 12.4). |
| **Plantilla** | Bloqueada si está en uso por alguna aventura. |

### 19.3 Validaciones de formularios

Todas las pantallas de creación y edición implementan validación de campos:

- Los campos obligatorios están marcados con un **asterisco rojo (*)**.
- Al intentar guardar un formulario con campos inválidos, se resaltan en rojo los campos con error y se muestra un mensaje descriptivo debajo de cada uno.
- Las validaciones incluyen: campo requerido, longitud mínima, formato de email, valores numéricos mínimos y máximos, y validaciones personalizadas según el contexto.

### 19.4 Reinicio de aventura

El sistema permite reiniciar una aventura eliminando los datos de progreso de los jugadores sin alterar la estructura del juego (ver capítulo 4.5). Esto incluye:

- Eliminar todos los usuarios registrados.
- Resetear puntuaciones y progreso.
- Eliminar asignaciones de sellos a jugadores.
- (Opcional) Restaurar las cantidades de sellos limitados a su valor original.

Tras el reinicio, la aventura vuelve a estar disponible para nuevos jugadores y las restricciones por jugadores registrados se desactivan.

### 19.5 Finalización de aventura

La finalización del ranking (ver capítulo 14.7) es un proceso **irreversible** que:

- Distribuye los premios configurados según la posición en el ranking.
- Notifica a los jugadores conectados en tiempo real.
- Marca la aventura como **FINALIZADA**.
- Impide nuevas sincronizaciones de datos del juego.

---

## Glosario

| Término | Definición |
|---|---|
| **Aventura** | Experiencia de gamificación completa que contiene niveles, secciones y actividades. |
| **Nivel** | Agrupación principal dentro de una aventura. Contiene secciones. |
| **Sección** | Subdivisión de un nivel. Contiene actividades. |
| **Actividad (Step)** | Desafío individual que el jugador debe completar. Contiene una pregunta con respuestas. |
| **Pregunta** | Enunciado asociado a una actividad. Puede ser de selección única, múltiple o arrastrar y soltar. |
| **Sponsor** | Empresa u organización patrocinadora vinculada a una aventura. |
| **Sello** | Recompensa virtual emitida por un sponsor. Puede ser limitada o ilimitada. |
| **Tesoro** | Objeto coleccionable que otorga puntos y sellos al ser encontrado. |
| **Trampa** | Elemento que penaliza al jugador (pérdida de puntos o sellos). |
| **Premio (Award)** | Sello configurado como recompensa por posición en el ranking. |
| **Plantilla** | Esquema de colores aplicable a la interfaz del juego. |
| **Código QR** | Código visual que vincula elementos físicos con entidades digitales del sistema. |
| **Trak** | Fotografía o evidencia adjunta a una actividad o tesoro. |
| **Ranking** | Clasificación de jugadores por puntuación o sellos obtenidos. |
| **Dashboard** | Panel de inicio con resumen estadístico de la plataforma. |

---

*Fin del Manual de Usuario — Panel de Administración*
*Aventura en Navegación — Viaje Mayo 2026*
*Versión 1.0*