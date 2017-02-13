//var rfidInput = document.getElementById('c_rfid');
//var nomeInput = document.getElementById('c_nome');
//var rgInput = document.getElementById('c_rg');
//var cpfInput = document.getElementById('c_cpf');
//var enderecoInput = document.getElementById('c_endereco');
//var telefoneInput = document.getElementById('c_telefone');
//var emailInput = document.getElementById('c_mail');
//var funcaoInput = document.getElementById('c_funcao');
//var registroInput = document.getElementById('c_registro');
var btnCadastrar = document.getElementById('btn_cadastrar_usuario');
// var lista_Usuarios = document.getElementbyId('lista_Usuarios');
const  formulario = document.querySelector("#usuario_form");
// Ao clicar no botão


//btnCadastrar.addEventListener('click', function () {
//	create(
//		rfidInput.value, 
//		nomeInput.value, 
//		rgInput.value,
//		cpfInput.value,
//		enderecoInput.value,
//		telefoneInput.value,
//		emailInput.value,
//		funcaoInput.value,
//		registroInput.value
//		);
//});

function create(){
	
	var data = {
		usuario_rfid : formulario.querySelector("#c_rfid"),
		usuario_nome : formulario.querySelector("#c_nome"),
		usuario_rg : formulario.querySelector("#c_rg"),
		usuario_cpf : formulario.querySelector("#c_cpf"),
		usuario_endereco : formulario.querySelector("#c_endereco"),
		usuario_telefone : formulario.querySelector("#c_telefone"),
		usuario_email : formulario.querySelector("#c_email"),
		usuario_funcao : formulario.querySelector("#c_funcao"),
		usuario_registro : formulario.querySelector("#c_registro")
	
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