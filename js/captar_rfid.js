			function test(){
				var rfid = document.querySelector('#txt_rfid').value.length;

				if(rfid === 9 ){
					window.location.href = 'authentication.html';
				}
			}

			function carregar(){
				document.registrar_presenca.txt_rfid.focus();
			}