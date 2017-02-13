			   var rootRef = firebase.database().ref();
			   function create(){
					firebase.database().ref('tb_turma/').push({
					turma_grau : document.querySelector('#c_grau').value,
					turma_lotacao : document.querySelector('#c_lotacao').value,
					turma_matricula : document.querySelector('#c_matriculas').value,
					turma_periodo : document.querySelector('#c_periodo').value,
					turma_sala : document.querySelector('#c_sala').value,
					turma_serie : document.querySelector('#c_serie').value,
					turma_turma: document.querySelector('#c_turma').value
				});
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

				function read(){
						firebase.database().ref('tb_turma/').on('value', function (snapshot){
								listar_turmas.innerHTML = '';
								snapshot.forEach(function(item){
									var tr = document.createElement("TR");
									tr.appendChild(document.createTextNode(item.val().turma_grau + ': ' 
										+ item.val().turma_serie + ': ' 
										+ item.val().turma_turma + ': ' 
										+ item.val().turma_lotacao + ': ' 
										+ item.val().turma_matricula + ': ' 
										+ item.val().turma_sala + ': ' 
										+ item.val().turma_periodo));
									listar_turmas.appendChild(tr);
								});
							});
					}