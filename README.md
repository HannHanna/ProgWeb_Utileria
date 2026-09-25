# Librería de Utilería en JavaScript

> **Autora:** Xana Amalinalli Pérez Jiménez  
> **Institución:** Instituto Tecnológico de Oaxaca  
> **Propósito:** Presentar un conjunto de funciones en JavaScript puro para validar formularios, contraseñas, textos, fechas y realizar operaciones básicas en aplicaciones web.

---

## 1. Instalación

Para utilizar esta librería en el proyecto, descargar el archivo `utileria.js`, guardarlo en la carpeta `/js` y agregar la siguiente etiqueta en el documento HTML:

```html
<script src="js/utileria.js"></script>
```

---

## 2. Código de la Librería y Funciones

### Funciones Obligatorias

```javascript
/**
 * Validar el formato de un correo electrónico.
 * @param {string} correo - Correo a evaluar.
 * @returns {boolean} - Retornar verdadero si es correcto, falso en caso contrario.
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/**
 * Verificar que el texto contenga únicamente letras y acentos.
 * @param {string} texto - Texto a evaluar.
 * @returns {boolean} - Retornar verdadero si solo contiene letras.
 */
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * Comprobar que la longitud de un número no rebase el límite máximo.
 * @param {number|string} numero - Número a evaluar.
 * @param {number} maxLongitud - Longitud máxima permitida.
 * @returns {boolean} - Retornar verdadero si cumple con el límite.
 */
function validarLongitud(numero, maxLongitud) {
    const texto = numero.toString();
    return texto.length <= maxLongitud;
}

/**
 * Calcular la edad exacta en años a partir de la fecha de nacimiento.
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento (YYYY-MM-DD).
 * @returns {number} - Retornar la cantidad de años.
 */
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

/**
 * Validar si una persona es mayor de edad (18 años o más).
 * @param {string|Date} fechaNacimiento - Fecha de nacimiento.
 * @returns {boolean} - Retornar verdadero si es mayor de edad.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * Exigir una contraseña segura (mínimo 8 caracteres, mayúscula, minúscula, número y símbolo).
 * @param {string} password - Contraseña a evaluar.
 * @returns {boolean} - Retornar verdadero si cumple las reglas de seguridad.
 */
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}
```

### Funciones Libres

```javascript
/**
 * Limpiar los espacios sobrantes al inicio, al final y entre palabras.
 * @param {string} texto - Texto a depurar.
 * @returns {string} - Retornar el texto limpio.
 */
function limpiarEspacios(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

/**
 * Comprobar si un número entero es par.
 * @param {number} numero - Número a evaluar.
 * @returns {boolean} - Retornar verdadero si es par.
 */
function esEsPar(numero) {
    return Number.isInteger(numero) && numero % 2 === 0;
}
```

---

## 3. Capturas de Pantalla

* **Formulario de Registro:** Vista del formulario principal con validaciones dinámicas y avisos de error.
* (img/index.png)
* (img/indexError.png)
* **Ventana Modal:** Visualización del resultado del cálculo de edad mediante un contenedor flotante.
* (img/modal.png)
* **Inicio de Sesión:** Interfaz de acceso con control de credenciales.
* (img/login.png)
* (img/loginError.png)

---


