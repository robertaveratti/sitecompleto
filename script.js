function disableOptions(quizform){
    let options = document.getElementsByName(quizform);
    options.forEach(option => {
        if(!option.checked){
            option.disabled = true;
        }
    });
}
function playSound(){
    let clicksound = document.getElementById('selecionasom');
    clicksound.play();
}
function submitQuiz(){

    let correctAnswers ={
        q1: "B",
        q2: "C",
        q3: "B",
        q4: "B",
        q5: "A",
        q6: "B",
        q7: "A",
        q8: "B",
        q9: "A",
        q10:"C",
    };

    let form = document.getElementById('quizform');
    let score = 0;

    for( let key in correctAnswers) {
        let userAnswer = form.elements[key].value;
        if (userAnswer === correctAnswers[key]){
            score++;
        }
    }

    let result = document.getElementById('result');
    result.innerHTML = `Você acertou ${score} de 10 perguntas.`;

    // tocar som se todas as respostas estiverem certas
    document.getElementById('reiniciar').removeAttribute('disabled');
    document.getElementById('enviar').setAttribute('disabled', true);

    if (score===10) {
        let sucessSound = document.getElementById('venceusom');
        sucessSound.play();
        
    }
    else{
        let erroSound = document.getElementById('perdeusom');
        erroSound.play();
        
    }
}


function botao() {
    score = 0;
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('enviar').removeAttribute('disabled');
    result.innerHTML = " ";
    document.getElementById('quizform').reset();

    let options=document.querySelectorAll('input[type="radio"]');
    options.forEach(option => option.disabled=false);
 
}