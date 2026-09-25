/**
 * LIBRERÍA DE UTILIERIA - FUNCIONES DE VALIDACIÓN Y CÁLCULO
 * Autor: Xana Amalinalli Pérez Jiménez
 * Descripción: Librería en JavaScript puro (sin frameworks) para validaciones de formularios, 
 * control de contraseñas, fechas y procesamiento de datos.
 */

/**
 * 1. validarCorreo(correo)
 * Valida si el formato de un correo electrónico es correcto mediante una expresión regular.
 * @param {string} correo - El correo electrónico a evaluar.
 * @returns {boolean} - Retorna true si es válido, false en caso contrario.
 */
function validarCorreo(correo) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(correo);
}

/**
 * 2. soloLetras(texto)
 * Verifica que el texto contenga únicamente letras (mayúsculas y minúsculas), incluyendo vocales acentuadas y la letra ñ.
 * @param {string} texto - El texto o nombre a evaluar.
 * @returns {boolean} - Retorna true si solo contiene letras y espacios válidos, false si tiene números o símbolos.
 */
function soloLetras(texto) {
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return regex.test(texto);
}

/**
 * 3. validarLongitud(numero, maxLongitud)
 * Comprueba que la longitud de un número (convertido a texto) no rebase un límite máximo de dígitos.
 * @param {number|string} numero - El número a evaluar.
 * @param {number} maxLongitud - El número máximo de dígitos permitidos.
 * @returns {boolean} - Retorna true si la longitud es menor o igual al máximo, false si lo excede.
 */
function validarLongitud(numero, maxLongitud) {
    const texto = numero.toString();
    return texto.length <= maxLongitud;
}

/**
 * 4. calcularEdad(fechaNacimiento)
 * Calcula la edad exacta de una persona en años enteros a partir de su fecha de nacimiento.
 * @param {string|Date} fechaNacimiento - La fecha de nacimiento (formato 'YYYY-MM-DD' o similar).
 * @returns {number} - Retorna la cantidad de años cumplidos.
 */
function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    
    // Ajusta si aún no cumple años en el mes/día actual de este año
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

/**
 * 5. esMayorDeEdad(fechaNacimiento)
 * Valida de forma directa si una persona es mayor de edad (18 años o más).
 * @param {string|Date} fechaNacimiento - La fecha de nacimiento.
 * @returns {boolean} - Retorna true si tiene 18 años o más, false si es menor.
 */
function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

/**
 * 6. validarPassword(password)
 * Exige una contraseña segura con reglas estrictas.
 * Requisitos: Mínimo 8 caracteres, al menos una letra minúscula, una mayúscula, un número y un carácter especial.
 * @param {string} password - La contraseña a evaluar.
 * @returns {boolean} - Retorna true si cumple con todas las reglas de seguridad, false si no.
 */
function validarPassword(password) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return regex.test(password);
}


/**
 * FUNCIÓN LIBRE 1: Eliminar espacios sobrantes al inicio, al final y espacios dobles internos en un texto.
 * @param {string} texto - El texto a depurar.
 * @returns {string} - Retornar el texto limpio con espacios normalizados.
 */
function limpiarEspacios(texto) {
    return texto.trim().replace(/\s+/g, ' ');
}

/**
 * FUNCIÓN LIBRE 2: Comprobar si un número entero ingresado es par.
 * @param {number} numero - El número entero a evaluar.
 * @returns {boolean} - Retornar true si el número es par, false en caso contrario.
 */
function esEsPar(numero) {
    return Number.isInteger(numero) && numero % 2 === 0;
}