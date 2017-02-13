			   var rootRef = firebase.database().ref();
			   
					function create(){
					firebase.database().ref('tb_frequencia/').push({
						frequencia_rfidaluno : document.querySelector('#frequencia_rfid').value,
						frequencia_horario : document.querySelector('#frequencia_horario').value,
						frequencia_data : document.querySelector('#frequencia_data').value
					});
					document.querySelector("#frequencia_rfid").value = null;
				}	

//function create(){
//	var data = {
//		usuario_rfid : document.querySelector('#c_rfid').value,
//		usuario_nome : document.querySelector('#c_nome').value,
//		usuario_rg : document.querySelector('#c_rg').value,
//		usuario_cpf : document.querySelector('#c_cpf').value,
//		usuario_endereco : document.querySelector('#c_endereco').value,
//		usuario_telefone : document.querySelector('#c_telefone').value,
//		usuario_email : document.querySelector('#c_mail').value,
//		usuario_funcao : document.querySelector('#c_funcao').value,
//		usuario_registro : document.querySelector('#c_registro').value
//	
//	};
//	return firebase.database().ref().child('tb_usuario').push(data);
//	alert("Cadastrado com sucesso!");
//}

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

				function read(){
						firebase.database().ref('tb_frequencia/').on('value', function (snapshot){
								listar_frequencia.innerHTML = '';
								snapshot.forEach(function(item){
									var li = document.createElement("LI");
									li.appendChild(document.createTextNode(item.val().frequencia_rfidaluno + ': ' 
										+ item.val().frequencia_data + ': ' 
										+ item.val().frequencia_horario));
									listar_frequencia.appendChild(li);
								});
							});
					}