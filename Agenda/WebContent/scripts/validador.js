/**
 * Validação de furmulário
 * @author André Veríssimo
 */
function validar(){
	let nome = frmContato.nome.value
	let Telefone = frmContato.Telefone.value
	if (nome === ""){
		alert('Tem de preencher o campo Nome')
		frmContato.nome.focus()
		return false
	}
	else if (Telefone === ""){
		alert('Tem de preencher o campo Telefone')
		frmContato.Telefone.focus()
		return false
	} else {
		document.forms["frmContato"].submit()
	}
}