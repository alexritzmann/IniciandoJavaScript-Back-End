exports.soma = function(a, b)
{
    return a + b;
}

exports.subtracao = function(a, b)
{
    return a - b;
}   

exports.multiplicacao = function(a, b)
{
    return a * b;
}   

exports.divisao = function(a, b)
{
    if (b != 0) 
        return a / b;
    else 
        return "Divisão por zero";
}
