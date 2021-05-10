var slt = document.getElementById('lang');
var lng = slt.selectedIndex;
var lgp = slt.options[lng].value;
var lg = slt.options[lng].innerHTML;

function Langues() {
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			document.body.innerHTML = this.responseText;
		}
	};

     if(lgp == 'en'){
		xhttp.open("GET", "donnees_en.txt", true);
		xhttp.send();
		}
	if(lgp == 'fr'){
		xhttp.open("GET", "donnees_fr.txt", true);
		xhttp.send();
		}
	if(lgp == 'wo'){
		xhttp.open("GET", "donnees_wo.txt", true);
		xhttp.send();
		}
}

var cpt, sld;

var flag = -1;

var tabNumeros = ["771234567", "761234567", "701234567", "781234567", "777654321"];

var tabComptes = [12000, 18000, 15000, 33000, 55000];

var tabCodes = [1111, 0000, 1110, 1234, 5555];

    function getValue() {
    	var select = document.getElementById('num');
            var idx = select.selectedIndex;
            var val = select.options[idx].value;
            var content = select.options[idx].innerHTML;


var key_m = document.getElementById('codeIncorrect');
var id = tabNumeros.indexOf(val);
var key_vrf = /^[0-9]{4}$/;
    
                var code = document.getElementById('code').value;

	if(code == tabCodes[id]){
		key_m.textContent = 'ok';
		key_m.style.color = 'green';
		mef.style.display = 'block';
	}
	else{
		key_m.textContent = 'Ce code ne correspond pas à votre numéro de téléphone!';
		key_m.style.color = 'brown';
		mef.style.display = 'none';
	}
                }

var mef = document.getElementById('bton');


function afficherSolde(){
	var select = document.getElementById('num');
    var idx = select.selectedIndex;
	alert('Le solde de votre compte est de '+tabComptes[idx]);
}

function mobilMoney(){
			var select = document.getElementById('num');
            var idx = select.selectedIndex;
            var val = select.options[idx].value;
            var content = select.options[idx].innerHTML;

var id = tabNumeros.indexOf(val);

            var code = document.getElementById('code').value;

	if(code == tabCodes[id]){
	
 	var chx = prompt("----Menu SENMONEY---\nTaper le numéro du service choisi\n1. Solde de mon compte\n2. Transfert dargent\n3. Paiement de facture\n4. Options");

 	if(chx == 1){
 		afficherSolde();
 	}
 	if(chx == 2){
 		var env = prompt("Saisissez le numéro du destinataire\n");
 		if(!isNaN(env)){
 			var senv = prompt("Le montant à envoyé");
 		}

	    		var idx = select.selectedIndex;

 		function transfert(env, senv){

	    		 for(var i=0; i<tabNumeros.length; i++){
	    		 	if(env === tabNumeros[i]){
	    		 		cpt = tabComptes[idx] - senv;
	    		 		var senV = tabComptes[idx] - cpt;
	    		 		tabComptes[idx] = cpt;
	    		 		flag = i;
	    		 	}	
	    		 }
	    		 if(flag != -1){
	    		 		sld = tabComptes[flag] + senV;
 						tabComptes[flag] = sld;

	    		alert('Votre transfert a bien été envoyé.\nA Bientôt, cher(e) client!');
    		
	    		 	}
	    		 	else{
	    		 		alert('Votre numéro n\'est pas pris en compte!\nA Bientôt...');
	    		 	}
	    		 
    		}

 		if(senv < tabComptes[idx]){
 			if(!isNaN(senv)){
 			var numE = document.getElementById('num').value;
    		transfert(env, senv);
 			}
 }
 else{
 	alert('Votre compte est insuffisant pour cette opération!\nA Bientôt ... ');
 }
 	}
 	if(chx == 3){
 		var pf = prompt("---Paiement de facture---\nChoix du service\n1.Senelec\n2.Sen'Eau\n3.Sonatel");

 		if(pf == 1){
 			var cpt = prompt("Renseigner votre numéro de compteur");
 			if(!isNaN(cpt)){	
 				var pay = prompt("Votre montant à payer");
 			}
	 		if(!isNaN(pay)){
	 			alert('Votre paiement a bien été enrégistré.\nAu revoir, cher(e) client!');
	 		}
 		}
 		if(pf == 2){
 			var cpt = prompt("Renseigner votre numéro de compteur");
 			if(!isNaN(cpt)){	
 				var pay = prompt("Votre montant à payer");
 			}
	 		if(!isNaN(pay)){
	 			alert('Votre paiement a bien été enrégistré.\nAu revoir, cher(e) client!');
	 		}
 		}
 		if(pf == 3){
 			var cpt = prompt("Renseigner votre numéro de téléphone");
 			if(!isNaN(cpt)){	
 				var pay = prompt("Votre montant à payer");
 			}
	 		if(!isNaN(pay)){
	 			alert('Votre paiement a bien été enrégistré.\nAu revoir, cher(e) client!');
	 		}
 		}
 	}
 	if(chx == 4){
 		var opt = prompt("---Options---\n1.Paramètre\n2.Revenir à l'acceuil");

 		if(opt == 1){
 			alert('Paramètrage de votre compte\nA Bientôt...');
 		}
 		if(opt == 2){
 			alert('Au revoir!');
 		}
 	}
 }
 else{
 	alert('Vous devez au préalable entré votre code!');
 }
}
