
/**
 * Esta funcion devuelve el valor de la carta
 * @param {String} carta valor de la carta
 * @returns {Number} retorna un numero
 */
export const valorCarta = ( carta ) => {

    if (!carta) throw Error('carta es obligatorio como un string');

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}