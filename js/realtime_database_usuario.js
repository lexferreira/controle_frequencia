			   	var rootRef = firebase.database().ref();
				var user = firebase.auth().currentUser;
								   	
			   	function create(){
					firebase.database().ref('tb_usuario/').push({
						usuario_rfid : document.querySelector('#c_rfid_usuario').value,
						usuario_nome : document.querySelector('#c_nome_usuario').value,
						usuario_rg : document.querySelector('#c_rg_usuario').value,
						usuario_cpf : document.querySelector('#c_cpf_usuario').value,
						usuario_endereco : document.querySelector('#c_endereco_usuario').value,
						usuario_telefone : document.querySelector('#c_telefone_usuario').value,
						usuario_email : document.querySelector('#c_mail_usuario').value,
						usuario_funcao : document.querySelector('#c_funcao_usuario').value,
						usuario_registro : document.querySelector('#c_registro_usuario').value
					});
					alert("Cadastrado com sucesso!");
				}

				//function consult(){
				//	var userId = firebase.auth().currentUser.uid;
				//	return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
				//	  var username = snapshot.val().username;
				//	  
				//	});
				//}
				//const lista_usuarios = document.querySelector('#lista_usuarios');

				function read(){
						firebase.database().ref('tb_usuario/').on('value', function (snapshot){
								listar_usuarios.innerHTML = '';
								snapshot.forEach(function(item){
									var tr = document.createElement("TR");
									tr.appendChild(document.createTextNode(item.val().usuario_rfid + ': ' 
										+ item.val().usuario_nome + ': ' 
										+ item.val().usuario_rg + ': ' 
										+ item.val().usuario_cpf + ': ' 
										+ item.val().usuario_endereco + ': ' 
										+ item.val().usuario_telefone + ': ' 
										+ item.val().usuario_email + ': ' 
										+ item.val().usuario_funcao + ': ' 
										+ item.val().usuario_registro));
									listar_usuarios.appendChild(tr);
								});
							});
					}

			function createUser(){
				firebase
				.auth()
				.createUserWithEmailAndPassword(document.querySelector('#c_mail_usuario').value, document.querySelector('#c_rg_usuario').value)
				.then(function () {
					alert('Usuário, ' + document.querySelector('#c_mail_usuario').value + ', cadastrado no sistema!');
				})
				.catch(function (error){
					console.error(error.code);
					console.error(error.message);
					alert('Falha ao cadastrar, verifique os possíveis erros')
				});

			};
