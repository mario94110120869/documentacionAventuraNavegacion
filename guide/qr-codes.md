---
title: Códigos QR
---

# 15. Códigos QR

Los códigos QR permiten vincular elementos fisicos del juego (senalizacion, objetos, estaciones) con las entidades digitales del sistema. Se accede desde el menu lateral: **Codigos QR**, que ofrece dos subsecciones: **Listado** y **Generador**.

::: info
Los codigos QR son la pieza clave para conectar la experiencia fisica con el mundo digital del juego. Cada aventura, tesoro y trampa puede tener su propio codigo QR que los jugadores escanean durante la partida.
:::

---

## 15.1 Listado de codigos QR

El listado muestra todos los codigos QR disponibles en el sistema, organizados por tipo de entidad.

<ImagePlaceholder label="Listado de codigos QR con filtros y tabla de resultados" />

### Filtros disponibles

| Filtro | Descripcion |
|---|---|
| **Tipo de entidad** | Desplegable para seleccionar: "Aventuras", "Tesoros" o "Trampas". |
| **Filtrar por aventura** | Solo visible para tesoros y trampas. Permite filtrar por una aventura especifica o ver todas. |
| **Buscar** | Campo de texto para buscar por nombre de la entidad. |

::: tip
Al cambiar el tipo de entidad, los filtros adicionales se ajustan automaticamente. Para tesoros y trampas aparece el filtro de aventura, que permite acotar los resultados a una aventura especifica.
:::

### Columnas de la tabla

| Columna | Descripcion |
|---|---|
| **Nombre** | Icono segun el tipo (mapa para aventuras, gema para tesoros, calavera para trampas) junto al nombre de la entidad. |
| **Aventura** | Solo visible para tesoros y trampas. Muestra el nombre de la aventura a la que pertenece la entidad. |
| **Acciones** | Botones **"Ver QR"** y **"Descargar"**. |

### Acciones disponibles

| Accion | Descripcion |
|---|---|
| **Ver QR** | Genera la imagen del codigo QR y la muestra en un visor modal a pantalla completa. Desde el visor puede descargar la imagen directamente. |
| **Descargar PNG** | Descarga directamente la imagen del codigo QR en formato PNG. El nombre del archivo sigue el patron: `qr-[tipo]-[nombre].png`. |

<ImagePlaceholder label="Vista previa modal del codigo QR con boton de descarga" />

::: tip
Puede usar el visor modal para verificar visualmente el codigo QR antes de descargarlo. Esto es util para asegurarse de que esta descargando el codigo correcto.
:::

---

## 15.2 Generador masivo de codigos QR

El generador masivo permite crear multiples codigos QR de forma simultanea, facilitando la preparacion de materiales fisicos para las aventuras.

<ImagePlaceholder label="Generador masivo de codigos QR con selector de tipo y lista de entidades" />

El generador se presenta en un **diseno de dos columnas**:

### Columna izquierda — Tipo de entidad

Seleccione el tipo de entidad mediante botones de radio:

| Opcion | Icono | Descripcion |
|---|---|---|
| **Aventuras** | Mapa | Genera codigos QR para aventuras registradas en el sistema. |
| **Tesoros** | Gema | Genera codigos QR para tesoros de las aventuras. |
| **Trampas** | Calavera | Genera codigos QR para trampas de las aventuras. |

Al seleccionar un tipo, la columna derecha se actualiza mostrando las entidades correspondientes.

### Columna derecha — Seleccion de entidades

1. Use el boton **"Seleccionar todos"** / **"Deseleccionar todos"** para marcar o desmarcar todas las entidades de la lista.
2. La lista muestra cada entidad con:
   - Una **casilla de verificacion** para seleccionarla o deseleccionarla individualmente.
   - El **nombre** de la entidad.
   - La **aventura** a la que pertenece (para tesoros y trampas).
3. En la parte inferior se muestra un resumen: **"X de Y seleccionados"**.
4. Haga clic en el boton **"Generar X QR(s)"** para iniciar la generacion.

::: warning
La generacion puede tardar unos segundos dependiendo de la cantidad de entidades seleccionadas. No cierre ni recargue la pagina durante el proceso.
:::

### Resultado de la generacion

Despues de generar los codigos, se muestra una **cuadricula** con todos los codigos QR creados:

<ImagePlaceholder label="Cuadricula de codigos QR generados con boton de descargar todos" />

- **Boton "Descargar todos"**: Descarga todas las imagenes de codigos QR generados de forma individual.
- **Tarjetas individuales**: Cada tarjeta muestra:
  - La imagen del codigo QR.
  - El nombre de la entidad asociada.
  - Un boton individual de **descarga** en formato PNG.

::: tip
Utilice el generador masivo cuando necesite preparar todos los codigos QR para un evento o aventura. Es mucho mas rapido que descargarlos uno por uno desde el listado.
:::
