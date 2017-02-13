			var rootRef = firebase.database().ref();
			var database = firebase.database();

			   function create(){
					firebase.database().ref('tb_aluno/').push({
					aluno_rfid : document.querySelector('#c_rfid_aluno').value,
					aluno_nome : document.querySelector('#c_nome_aluno').value,
					aluno_ra : document.querySelector('#c_ra_aluno').value,
					aluno_mae : document.querySelector('#c_nome_mae_aluno').value,
					aluno_pai : document.querySelector('#c_nome_pai_aluno').value,
					aluno_nascimento : document.querySelector('#c_datanasc_aluno').value,
					aluno_endereco : document.querySelector('#c_endereco_aluno').value,
					aluno_telefone1 : document.querySelector('#c_telefone1_aluno').value,
					aluno_telefone2 : document.querySelector('#c_telefone2_aluno').value,
					aluno_armario : document.querySelector('#c_armario_aluno').value,
					aluno_email : document.querySelector('#c_mail_aluno').value,
					aluno_turma : document.querySelector('#c_serie_aluno').value	
				});
					alert("Cadastrado com sucesso!");
				}

				//function search(c_aluno_ra) {
				  //var chaveAluno = firebase.database().ref().child('tb_aluno/').push().key;
				  // A post entry.
				  //var postData = {
				    //aluno_rfid : document.querySelector('#c_rfid_aluno').value,
					//aluno_nome : document.querySelector('#c_nome_aluno').value,
					//aluno_ra : document.querySelector('#c_ra_aluno').value,
					//aluno_mae : document.querySelector('#c_nome_mae_aluno').value,
					//aluno_pai : document.querySelector('#c_nome_pai_aluno').value,
					//aluno_nascimento : document.querySelector('#c_datanasc_aluno').value,
					//aluno_endereco : document.querySelector('#c_endereco_aluno').value,
					//aluno_telefone1 : document.querySelector('#c_telefone1_aluno').value,
					//aluno_telefone2 : document.querySelector('#c_telefone2_aluno').value,
					//aluno_armario : document.querySelector('#c_armario_aluno').value,
					//aluno_email : document.querySelector('#c_mail_aluno').value,
					//aluno_turma : document.querySelector('#c_serie_aluno').value	
				  //};
				

				//function update(c_aluno_ra) {
				  //var chaveAluno = firebase.database().ref().child('tb_aluno/').push().key;
				  // A post entry.
				  //var postData = {
				    //aluno_rfid : document.querySelector('#c_rfid_aluno').value,
					//aluno_nome : document.querySelector('#c_nome_aluno').value,
					//aluno_ra : document.querySelector('#c_ra_aluno').value,
					//aluno_mae : document.querySelector('#c_nome_mae_aluno').value,
					//aluno_pai : document.querySelector('#c_nome_pai_aluno').value,
					//aluno_nascimento : document.querySelector('#c_datanasc_aluno').value,
					//aluno_endereco : document.querySelector('#c_endereco_aluno').value,
					//aluno_telefone1 : document.querySelector('#c_telefone1_aluno').value,
					//aluno_telefone2 : document.querySelector('#c_telefone2_aluno').value,
					//aluno_armario : document.querySelector('#c_armario_aluno').value,
					//aluno_email : document.querySelector('#c_mail_aluno').value,
					//aluno_turma : document.querySelector('#c_serie_aluno').value	
				  //};

				  // Write the new post's data simultaneously in the posts list and the user's post list.
				  //var updates = {};
				  //updates['/tb_aluno/' + chaveAluno] = postData;

				  //return firebase.database().ref().update(updates);
				//}

				function read(){
						firebase.database().ref('tb_aluno/').on('value', function (snapshot){
								listar_alunos.innerHTML = '';
								snapshot.forEach(function(item){
									var tr = document.createElement("TR");
									tr.appendChild(document.createTextNode(item.val().aluno_rfid + ': ' 
										+ item.val().aluno_nome + ': ' 
										+ item.val().aluno_ra + ': ' 
										+ item.val().aluno_mae + ': ' 
										+ item.val().aluno_pai + ': ' 
										+ item.val().aluno_nascimento + ': ' 
										+ item.val().aluno_endereco + ': ' 
										+ item.val().aluno_telefone1 + ': ' 
										+ item.val().aluno_telefone2 + ': '
										+ item.val().aluno_armario + ': '
										+ item.val().aluno_email + ': ' 
										+ item.val().aluno_turma));
									listar_alunos.appendChild(tr);
								});
							});
					}

					function listar_turmas(){
						firebase.database().ref('tb_turma/').on('value', function (snapshot){
								listar_turmas.innerHTML = '';
								snapshot.forEach(function(item){
									var op0 = document.createElement("option");
									op0.appendChild(document.createTextNode(item.val().turma_grau + ': ' 
										+ item.val().turma_serie + ': ' 
										+ item.val().turma_turma));
									c_serie_aluno.appendChild(op0);
								});
							});
					}