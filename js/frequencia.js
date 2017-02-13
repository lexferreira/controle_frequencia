
			function test(){
				var rfid = document.querySelector('#frequencia_rfid').value.length;
				if(rfid === 10 ){
					create();
				}
				frequencia_rfid.val("");
			}

			function displayDate(){
				document.frequencia_form.frequencia_rfid.focus();
				var today = new Date();
				var dia = today.getDate();
				var mes = today.getMonth() + 1;
				var ano = today.getFullYear();
				var data = dia + "/" + mes + "/" + ano;
				var hora = today.getHours();
				var minuto = today.getMinutes();
				var segundo = today.getSeconds();
				var horaImprimivel = hora + ":" + minuto + ":" + segundo;
				document.getElementById("frequencia_data").value = data;
				document.getElementById("frequencia_horario").value = horaImprimivel;
				setTimeout("displayDate()",1000);
			}
