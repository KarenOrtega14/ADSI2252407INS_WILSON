function Determinar() {
    var salario = parseInt(document.getElementById("salario").value);
    var Aumento5 = (5 * salario) / 100;
    var Aumento10 = (10 * salario) / 100;

    var t5 = Aumento5 + salario;
    var t10 = Aumento10 + salario;


     if (salario >= 1000000) {
        document.getElementById("Sueldo").innerHTML = '<h1> Su saldo  es: ' + t5 + ' Con un aumento del 5%</h1>';
    }
     if (salario > 800000 && salario <1000000){
         document.getElementById('Sueldo').innerHTML = '<h1> Su saldo es: $' + salario + ' No tiene ningun aumento</h1>';
     }
    if (salario <= 800000) {
        document.getElementById('Sueldo').innerHTML = '<h1> Su saldo es: $' + t10 + ' Con un aumento de 10%</h1>';
    } 
}
