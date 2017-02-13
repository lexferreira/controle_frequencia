firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });


var btnCadastrar = document.getElementById('btn_cadastrar_usuario');

//const formulario = document.querySelector('#usuario_form');


function create(){
	
	var data = {
		usuario_rfid : document.querySelector('#c_rfid_usuario').value,
		usuario_nome : document.querySelector('#c_nome_usuario').value,
		usuario_rg : document.querySelector('#c_rg_usuario').value,
		usuario_cpf : document.querySelector('#c_cpf_usuario').value,
		usuario_endereco : document.querySelector('#c_endereco_usuario').value,
		usuario_telefone : document.querySelector('#c_telefone_usuario').value,
		usuario_email : document.querySelector('#c_mail_usuario').value,
		usuario_funcao : document.querySelector('#c_funcao_usuario').value,
		usuario_registro : document.querySelector('#c_registro_usuario').value
	};
	return firebase.database().ref().child('tb_usuario').push(data);
	alert("Cadastrado com sucesso!");
}

//firebase.database().ref('tb_usuario').on('value', function (snapshot){
//	lista_Usuarios.innerHTML = '';
//	snapshot.forEach(function(item){
//		var li = document.createElementby('li');
//		li.appendChild(document.createTextNode(item.val().rfid + ': ' 
//			+ item.val().nome + ': ' 
//			+ item.val().rg + ': ' 
//			+ item.val().cpf + ': ' 
//			+ item.val().endereco + ': ' 
//			+ item.val().telefone + ': ' 
//			+ item.val().email + ': ' 
//			+ item.val().funcao + ': ' 
//			+ item.val().registro));
//		lista_Usuarios.appendChild(li);
//	});
//});