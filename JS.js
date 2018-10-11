

function escreveData(){

	var hoje = new Date();
	var mes = hoje.getMonth();
	var ano = hoje.getFullYear();
	var diaDoMes = hoje.getDate();
	var diaDaSemana = hoje.getDay();
	var hora = hoje.getHours();

	var diaDaSemanaNome = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];

	var mesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

	var diaDaSemanaTexto = diaDaSemanaNome[diaDaSemana];
	var DataPorExtenso = "" + diaDaSemanaTexto + ", " + diaDaSemana + " De " + mesDoAno[mes] + ", " + ano;
	console.log(DataPorExtenso);



	document.getElementById("Data").innerHTML = DataPorExtenso;

		document.getElementById("body").style.backgroundColor = "black";
		document.getElementById("body").style.color = "white";
	if(hora < 18){
		document.getElementById("body").style.backgroundColor = "white";
		document.getElementById("body").style.color = "red";
	}else{
		document.getElementById("body").style.backgroundColor = "black";
		document.getElementById("body").style.color = "white";
	}


}



function VerificarAniversario(){

	alert("Alerta");

}
