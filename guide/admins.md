---
title: Gestion de Administradores
---

# 18. Gestion de Administradores

La seccion de administradores permite gestionar las cuentas de usuario que tienen acceso al panel de administracion. Se accede desde el menu lateral: **Administradores**.

::: info
Esta seccion solo esta disponible para usuarios con rol **Super Administrador** <RoleTag role="super-admin" />. Los usuarios con rol Editor no pueden ver ni acceder a la gestion de administradores.
:::

---

## 18.1 Listado de administradores

Al acceder a la seccion, se muestra una tabla con todos los administradores registrados en el sistema.

<ImagePlaceholder label="Listado de administradores con tabla, busqueda y paginacion" />

**Campo de busqueda:** Permite filtrar administradores por nombre o email.

### Columnas de la tabla

| Columna | Descripcion |
|---|---|
| **Usuario** | Nombre del administrador con icono de persona. |
| **Email** | Direccion de correo electronico utilizada para iniciar sesion. |
| **Rol** | Etiqueta de color indicando el rol: Super Administrador o Editor (ver seccion 18.2). |
| **Creado** | Fecha de creacion de la cuenta (formato: "10 feb. 2026"). |
| **Acciones** | Botones de **editar** y **eliminar**. |

**Paginacion:** Se muestran 10 administradores por pagina con controles de paginacion en la parte inferior.

---

## 18.2 Roles de administrador

El sistema cuenta con dos roles claramente diferenciados:

| Caracteristica | Super Administrador <RoleTag role="super-admin" /> | Editor <RoleTag role="editor" /> |
|---|---|---|
| **Etiqueta visual** | Escudo con marca de verificacion | Escudo simple |
| **Gestionar aventuras** | Si (crear, editar, eliminar) | Si (crear, editar) — No puede eliminar |
| **Gestionar niveles, secciones, actividades** | Si (completo) | Si (crear y editar) |
| **Gestionar sponsors y sellos** | Si | Si |
| **Configurar premios** | Si | Si |
| **Consultar y exportar rankings** | Si | Si |
| **Finalizar rankings** | Si | No |
| **Resetear aventuras** | Si | No |
| **Gestionar administradores** | Si | No |
| **Eliminar aventuras** | Si | No |
| **Generar codigos QR** | Si | Si |
| **Gestionar plantillas** | Si | Si |
| **Usar funciones de IA** | Si | Si |

::: warning
El rol de Editor **no** permite eliminar aventuras, resetear estadisticas ni gestionar cuentas de administradores. Estas acciones estan reservadas exclusivamente para el Super Administrador.
:::

---

## 18.3 Crear un administrador

Haga clic en **"Nuevo Admin"** para acceder al formulario de creacion.

<ImagePlaceholder label="Formulario de creacion de administrador con selector de rol en formato de tarjetas" />

### Campos del formulario

| Campo | Descripcion | Requisitos |
|---|---|---|
| **Nombre** | Nombre completo del administrador. | Obligatorio. Minimo 2 caracteres. |
| **Email** | Correo electronico para iniciar sesion. | Obligatorio. Debe ser un email valido y unico en el sistema. |
| **Contrasena** | Contrasena de acceso al panel. | Obligatorio en creacion. Minimo 6 caracteres. |
| **Rol** | Rol que tendra el administrador en el sistema. | Obligatorio. Seleccionar entre "Super Administrador" o "Editor". |

### Selector de rol

El selector de rol se presenta como **tarjetas seleccionables**, cada una con:

- **Icono** del rol (escudo con verificacion o escudo simple).
- **Nombre** del rol.
- **Descripcion** de los permisos asociados.

Al hacer clic en una tarjeta, esta se resalta visualmente para indicar la seleccion.

<ImagePlaceholder label="Selector de rol con tarjetas de Super Administrador y Editor" />

**Pasos para crear un administrador:**

1. Complete el campo **Nombre** (obligatorio).
2. Ingrese el **Email** del nuevo administrador.
3. Establezca una **Contrasena** (minimo 6 caracteres).
4. Seleccione el **Rol** haciendo clic en la tarjeta correspondiente.
5. Haga clic en **"Crear Administrador"**.
6. El nuevo administrador aparecera en el listado y podra iniciar sesion inmediatamente.

---

## 18.4 Editar un administrador

Haga clic en el boton de **editar** (icono de lapiz) en la fila del administrador que desea modificar.

<ImagePlaceholder label="Formulario de edicion de administrador con campo de contrasena opcional" />

El formulario de edicion muestra los mismos campos que el de creacion con la siguiente diferencia importante:

- El campo **Contrasena** es **opcional**. Si se deja vacio, se mantiene la contrasena actual del administrador.

::: tip
Debajo del campo de contrasena se muestra la nota: **"Solo completa este campo si deseas cambiar la contrasena."** Esto permite editar otros datos del administrador (nombre, email, rol) sin necesidad de conocer ni modificar su contrasena actual.
:::

Los campos **nombre**, **email** y **rol** se pueden modificar libremente. Los cambios se aplican inmediatamente al guardar.

---

## 18.5 Eliminar un administrador

1. Haga clic en el boton de **eliminar** (icono de papelera) en la fila del administrador.
2. Se mostrara un dialogo de confirmacion.
3. Confirme la eliminacion.

::: warning
**No es posible eliminar la cuenta con la que esta actualmente autenticado.** Si intenta eliminar su propia cuenta, el sistema mostrara un mensaje de error indicando que no puede realizar esta accion. Para eliminar su cuenta, otro Super Administrador debe hacerlo.
:::

::: danger
La eliminacion de un administrador es **permanente**. El usuario eliminado perdera inmediatamente el acceso al panel y no podra recuperar su cuenta. Asegurese de que la eliminacion es intencional antes de confirmar.
:::
