function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado com: '+ nota);
    }
}

soBoaNoticia(8.1);
soBoaNoticia(6.1);

function seForVerdadeEuFalor(valor){
    if(valor){
        console.log('É verdade...' + valor);
    }
}

seForVerdadeEuFalor();
seForVerdadeEuFalor(null);
seForVerdadeEuFalor(undefined);
seForVerdadeEuFalor(NaN);
seForVerdadeEuFalor('');
seForVerdadeEuFalor(0);
seForVerdadeEuFalor(-1);
seForVerdadeEuFalor(' ');
seForVerdadeEuFalor('?');
seForVerdadeEuFalor([]);
seForVerdadeEuFalor([1, 2]);
seForVerdadeEuFalor({});