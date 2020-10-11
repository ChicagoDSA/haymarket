---
lang-ref: homepage
title: Sitio web de ejemplo
subhead: Agrega un subtítulo personalizado.
---

El texto puede estar **en negrita**, _italico_ o ~~tachado~~.

[Enlace a otra página](otra-pagina).

Debe haber espacios en blanco entre los párrafos.

Debe haber espacios en blanco entre los párrafos. Recomendamos incluir un archivo README o un archivo con información sobre su proyecto.

# Título 1

Este es un párrafo normal que sigue a un encabezado. GitHub es una plataforma de alojamiento de código para el control de versiones y la colaboración. Le permite a usted y a otros trabajar juntos en proyectos desde cualquier lugar.

## Título 2

> Esta es una cita en bloque que sigue a un encabezado.
>
> Cuando algo es lo suficientemente importante, lo haces incluso si las probabilidades no están a tu favor.

### Título 3

Utilice azulejos de pared para darle estilo a sus colecciones. Agrega un límite opcional.

{% include list-tiles.html collection="tiles" limit=4 %}

#### Título 4

* Esta es una lista desordenada que sigue a un encabezado.
* Esta es una lista desordenada que sigue a un encabezado.
* Esta es una lista desordenada que sigue a un encabezado.

##### Título 5

1. Esta es una lista ordenada siguiendo un encabezado.
2. Esta es una lista ordenada siguiendo un encabezado.
3. Esta es una lista ordenada siguiendo un encabezado.

###### Título 6

| título1      | título dos            | tres   |
|:-------------|:----------------------|:-------|
| ok           | buena justicia social | bonita |
| agotado      | buena y abundante     | bonita |
| ok           | buenas `oreos`        | hmm    |
| ok           | buena gota de `zoute` | yumm   |

### Hay una regla horizontal debajo de esto.

* * *

### Aquí hay una lista desordenada:

* Item foo
* Item bar
* Item baz
* Item zip

### Y una lista ordenada:

1. Artículo uno
2. Artículo dos
3. Artículo tres
4. Artículo cuatro

### Y una lista anidada:

- elemento de nivel 1
	- elemento de nivel 2
	- elemento de nivel 2
		- elemento de nivel 3
		- elemento de nivel 3
- elemento de nivel 1
	- elemento de nivel 2
	- elemento de nivel 2
	- elemento de nivel 2
- elemento de nivel 1
	- elemento de nivel 2
	- elemento de nivel 2
- elemento de nivel 1

### Foto pequeña

![Perfil lateral de W.E.B. DuBois](../assets/images/theme-WEB-DuBois.png)

### Foto grande con pie de foto

{% include comp-full-width-image.html image="assets/images/theme-Haymarket-flyer.png" description="Un anuncio para el rally de Haymarket." credit="[¡Dale crédito a tu fuente y conéctate a su sitio web!](otra-pagina)" %}

### Las listas de definiciones se pueden utilizar con sintaxis HTML.

<dl>
<dt>Nombre</dt>
<dd>William</dd>
<dt>Año de nacimiento</dt>
<dd>1868</dd>
<dt>Lugar de nacimiento</dt>
<dd>Massachusetts</dd>
<dt>Color</dt>
<dd>Rojo</dd>
</dl>

### Cargar eventos desde un calendario público de Teamup.

{% include list-events.html calendar="ksc3uaa38o41o2vz8o" limit=2 %}

### Los botones son más prominentes que los enlaces.

{% include comp-button.html text="Quiero contactar con la CE" link="otra-pagina" %}

{% capture note %}
#### Use una nota para resaltar información secundaria.

Inserte el contenido de Markdown aquí.

[¡Se admiten todos los tipos, incluidos los enlaces!](otra-pagina)
{% endcapture %}
{% include comp-note.html content=note %}
