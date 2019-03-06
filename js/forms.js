$(document).ready(function(){
	$("#frmRegistroP2").hide();


});

$("#nextStep").click(function(){

	$("#frmRegistroP1").hide();
	$("#frmRegistroP2").show();

});

$("#BackForm").click(function(){

	$("#frmRegistroP1").show();
	$("#frmRegistroP2").hide();

});