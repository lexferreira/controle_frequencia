			   var rootRef = firebase.database().ref();
			   function create(){
					firebase.database().ref('tb_responsavel/').push({
					responsavel_cpf : document.querySelector('#c_cpf_responsavel').value,
					responsavel_email : document.querySelector('#c_mail_responsavel').value,
					responsavel_nome : document.querySelector('#c_nome_responsavel').value,
					responsavel_parentesco : document.querySelector('#c_parentesco_responsavel').value,
					responsavel_rg : document.querySelector('#c_rg_responsavel').value,
					responsavel_telefone : document.querySelector('#c_telefone_responsavel').value
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
						firebase.database().ref('tb_responsavel/').on('value', function (snapshot){
								listar_responsaveis.innerHTML = '';
								snapshot.forEach(function(item){
									var li = document.createElement("LI");
									li.appendChild(document.createTextNode(item.val().responsavel_rg + ': ' 
										+ item.val().responsavel_cpf + ': ' 
										+ item.val().responsavel_nome + ': ' 
										+ item.val().responsavel_parentesco + ': ' 
										+ item.val().responsavel_telefone + ': ' 
										+ item.val().responsavel_email));
									listar_responsaveis.appendChild(li);
								});
							});
					}

			function createUser(){
				firebase
				.auth()
				.createUserWithEmailAndPassword(document.querySelector('#c_mail_responsavel').value, document.querySelector('#c_rg_responsavel').value)
				.then(function () {
					alert('Responsável, ' + document.querySelector('#c_mail_responsavel').value + ', cadastrado no sistema!');
				})
				.catch(function (error){
					console.error(error.code);
					console.error(error.message);
					alert('Falha ao cadastrar, verifique os possíveis erros')
				});

			};
