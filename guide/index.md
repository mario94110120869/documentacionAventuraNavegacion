---
title: Introducción
---
# Introducción

## 1.1 Acerca de este manual

Este manual de usuario describe el funcionamiento completo del **Panel de Administración de Aventura en Navegación**. Está dirigido a los administradores y editores que gestionan el contenido del juego educativo desde la plataforma web.

::: info
El manual cubre todas las funcionalidades disponibles en el panel, organizadas por secciones tal como aparecen en el menú lateral de la aplicación.
:::

## 1.2 ¿Qué es Aventura en Navegación?

**Aventura en Navegación** es un juego educativo interactivo diseñado para enseñar conceptos de navegación y seguridad marítima a través de aventuras temáticas. Los jugadores avanzan por niveles y secciones, respondiendo preguntas y completando actividades para ganar sellos, premios y posiciones en el ranking.

El **Panel de Administración** es la herramienta web que permite a los administradores crear, editar y gestionar todo el contenido del juego: aventuras, niveles, secciones, actividades, preguntas, sponsors, premios y más.

## 1.3 Estructura general del juego

El juego se organiza en una jerarquía de elementos. A continuación se describe cada uno:

| Elemento      | Descripción                                                                                                                             |
| ------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Aventura**  | Unidad principal del juego. Contiene niveles y define el contexto temático general. Cada aventura tiene su propio mapa interactivo.     |
| **Nivel**     | Subdivisión de una aventura. Agrupa secciones y puede tener un sponsor asociado.                                                        |
| **Sección**   | Subdivisión de un nivel. Agrupa actividades y se posiciona en el mapa del nivel.                                                        |
| **Actividad** | Unidad de contenido jugable dentro de una sección. Contiene una pregunta con sus respuestas.                                            |
| **Pregunta**  | Enunciado que el jugador debe responder dentro de una actividad. Puede ser de selección única, selección múltiple o arrastrar y soltar. |
| **Tesoro**    | Recompensa especial oculta que el jugador puede encontrar durante el juego.                                                             |
| **Trampa**    | Elemento de penalización que el jugador puede encontrar durante el juego.                                                               |
| **Sponsor**   | Marca o patrocinador asociado a un nivel. Su logo e información se muestran al jugador.                                                 |
| **Sello**     | Insignia que el jugador obtiene al completar actividades o logros específicos.                                                          |
| **Premio**    | Recompensa que el jugador puede ganar al completar aventuras o alcanzar ciertos logros.                                                 |
| **Ranking**   | Tabla de posiciones que clasifica a los jugadores según su desempeño en las aventuras.                                                  |

<ImagePlaceholder label="Diagrama de jerarquía: Aventura > Nivel > Sección > Actividad > Pregunta" />

## 



## 1.4 Requisitos de acceso

Para acceder al Panel de Administración se requiere:

* Un **navegador web moderno** (Google Chrome, Mozilla Firefox, Microsoft Edge o Safari en sus versiones más recientes).
* **Conexión a Internet** estable.
* **Credenciales de acceso** (correo electrónico y contraseña) proporcionadas por un Super Administrador.

::: tip
Se recomienda utilizar Google Chrome o Microsoft Edge para una mejor experiencia de uso del panel.
:::

## 1.5 Roles de usuario

El panel cuenta con dos roles de usuario, cada uno con diferentes niveles de permisos:

### Super Administrador <RoleTag role="super-admin" />

El **Super Administrador** tiene acceso completo a todas las funcionalidades del panel. Puede:

* Crear, editar y eliminar cualquier contenido (aventuras, niveles, secciones, actividades, etc.).
* Gestionar usuarios y asignar roles.
* Acceder a la configuración general del sistema.
* Resetear aventuras y estadísticas.
* Eliminar aventuras de forma permanente.

### Editor <RoleTag role="editor" />

El **Editor** tiene acceso limitado a las funcionalidades de gestión de contenido. Puede:

* Crear y editar aventuras, niveles, secciones y actividades.
* Visualizar el contenido existente.
* Utilizar las herramientas de generación con IA.

::: warning
El rol de Editor **no** permite eliminar aventuras ni resetear estadísticas. Estas acciones están reservadas exclusivamente para el Super Administrador.
:::

## 1.6 Navegación del panel

El panel se organiza mediante un menú lateral (sidebar) con las siguientes secciones:

| Sección         | Descripción                                                                         |
| --------------- | ----------------------------------------------------------------------------------- |
| **Dashboard**   | Página principal con estadísticas generales, accesos directos y actividad reciente. |
| **Aventuras**   | Gestión completa de aventuras: listado, creación, edición, detalle, mapa y reseteo. |
| **Niveles**     | Gestión de niveles dentro de cada aventura.                                         |
| **Secciones**   | Gestión de secciones dentro de cada nivel.                                          |
| **Actividades** | Gestión de actividades y preguntas dentro de cada sección.                          |
| **Sponsors**    | Gestión de patrocinadores asociados a los niveles.                                  |
| **Premios**     | Gestión de premios y recompensas del juego.                                         |
| **Usuarios**    | Gestión de usuarios del panel (solo Super Administrador).                           |





![](/images/sidebar.png)

::: tip
El menú lateral se puede colapsar para disponer de más espacio en pantalla. Haz clic en el icono de menú en la parte superior para expandirlo o contraerlo.
:::
