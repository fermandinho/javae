/**
 * Confirmação de exclusão de um contato
 * @author André Veríssimo
 * @param idcon
 */

function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contato ? ")
	if (resposta === true){
		window.location.href = "delete?idcon=" + idcon
	}
}