function verificar() {
	var data = new Date();
	var ano = data.getFullYear();
	var fAno = document.getElementById('txtano');
	var res = document.getElementById('res');

	if (fAno.value.length == 0 || fAno.value > ano) {
		alert('Verifique os dados e tente novamente!');
	}
	else{
		fsex = document.getElementsByName('radsex');
		var idade = ano - Number(fAno.value);
		var genero = '';
		var img = document.createElement('img');
		img.setAttribute('id','foto');

		if (fsex[0].checked) {
			genero = 'Homem';
			if (idade >= 0 && idade <= 10) {
				img.src = 'imagens/foto-bebe-m.png';
			}
			else if (idade<21) 
			{
				img.src = 'imagens/foto-jovem-m.png';
			}
			else if(idade < 50){
				//Adulto
				img.src = 'imagens/foto-adulto-m.png';
			}
			else{
				//IDOSO
				img.src = 'imagens/foto-idoso-m.png';
			}
		}
		else if (fsex[1].checked){
			genero = 'Mulher';

			if (idade >= 0 && idade <= 10) {
				img.src = 'imagens/foto-bebe-f.png';
			}
			else if (idade<21) 
			{
				img.src = 'imagens/foto-jovem-f.png';
			}
			else if(idade < 50){
				//Adulto
				img.src = 'imagens/foto-adulto-f.png';
			}
			else{
				//IDOSO
				img.src = 'imagens/foto-idoso-f.png';
			}
		}
		res.style.textAlign = "center";

		res.innerText = "Detectamos " + genero + " com " + idade + " anos de idade";
		res.appendChild(img);
	}
}