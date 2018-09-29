var DATAInventor = DATAInventor || {};

DATAInventor.Main = {

	generate: function() {
		var onlyEvenCPF = $("#onlyEvenCPF").prop("checked");
		var separator = $("#separator").prop("checked");

		$("#cpf").val(DATAInventor.Generators.CPFNPJ.cpf(separator, onlyEvenCPF));
		$("#cnpj").val(DATAInventor.Generators.CPFNPJ.cnpj(separator, onlyEvenCPF));

		$("#visa").val(DATAInventor.Generators.CC.generate('VISA', separator));
		$("#master").val(DATAInventor.Generators.CC.generate('MASTER', separator));
		$("#amex").val(DATAInventor.Generators.CC.generate('AMEX', separator));
		$("#diners").val(DATAInventor.Generators.CC.generate('DINERS', separator));

		$("#cepComum").val(DATAInventor.Generators.CEP.common(separator));
		$("#cepMaisDeUmBairro").val(DATAInventor.Generators.CEP.multipleDistrict(separator));
		$("#cepCidade").val(DATAInventor.Generators.CEP.cityCEP(separator));

		$("#renavam").val(DATAInventor.Generators.RENAVAM.renavam(separator));
	}
};

document.addEventListener('DOMContentLoaded', function () {
	$("#separator").prop("checked", localStorage.separator=='true' ? true : false);
	$("#onlyEvenCPF").prop("checked", localStorage.onlyEvenCPF=='true' ? true : false);

	$("#generateBtn").click(function(){
			DATAInventor.Main.generate();
		}
	);

	$("input[type=text]").click(function() {
	   $(this).select();
	});

	$("#separator").change(function() {
	   localStorage.separator = $(this).prop("checked") ? 'true' : 'false';
	});

	$("#onlyEvenCPF").change(function() {
	   localStorage.onlyEvenCPF = $(this).prop("checked") ? 'true' : 'false';
	});

	DATAInventor.Main.generate();
});