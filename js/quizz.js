const form = document.getElementById('quizz-form');
const resultDiv = document.getElementById('result');

const correctAnswers = {
    q1: "CSS",
    q2: "a",
    q3: "script src",
    q4: "color",
    q5: "src",
    q6: "PHP",
    q7: "p",
    q8: "alert()",
    q9: "p",
    q10: "font-size"
};

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let score = 0;
    let answersText = '';

    for (let q in correctAnswers) {
        const userAnswer = form[q].value;
        if (userAnswer === correctAnswers[q]) {
            score++;
        }
        answersText += `<p>Question ${q.slice(1)} : Correct answer → <strong>${correctAnswers[q]}</strong></p>`;
    }

    resultDiv.innerHTML = `<h2>Votre score : ${score} / 10</h2>${answersText}`;
});
