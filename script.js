let currentMode = 'practica';

function setMode(mode) {
    currentMode = mode;
    document.getElementById('btn-practice').classList.toggle('active', mode === 'practica');
    document.getElementById('btn-exam').classList.toggle('active', mode === 'exam');
    
    // Resetear contenedores
    document.getElementById('result-box').style.display = 'none';
    document.getElementById('exam-submit').style.display = mode === 'exam' ? 'block' : 'none';
    
    renderQuiz();
}

function renderQuiz() {
    const container = document.getElementById('quiz-container');
    container.innerHTML = '';

    preguntasHardware.forEach((q, qIndex) => {
        const qBlock = document.createElement('div');
        qBlock.className = 'question-block';

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.innerText = `${qIndex + 1}. ${q.pregunta}`;
        qBlock.appendChild(qText);

        q.opciones.forEach((opcion, opIndex) => {
            const label = document.createElement('label');
            label.className = 'option';
            
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = `question-${qIndex}`;
            input.value = opIndex;
            input.style.marginRight = '10px';
            
            if (currentMode === 'practica') {
                input.onclick = () => checkPracticeAnswer(qIndex, opIndex, qBlock);
            }

            label.appendChild(input);
            label.appendChild(document.createTextNode(opcion));
            qBlock.appendChild(label);
        });

        const feedback = document.createElement('div');
        feedback.id = `feedback-${qIndex}`;
        feedback.className = 'feedback';
        qBlock.appendChild(feedback);

        container.appendChild(qBlock);
    });
}

function checkPracticeAnswer(qIndex, selectedIndex, qBlock) {
    const q = preguntasHardware[qIndex];
    const feedback = document.getElementById(`feedback-${qIndex}`);
    
    // Deshabilitar opciones de esta pregunta para evitar re-clicks
    const inputs = qBlock.querySelectorAll('input');
    inputs.forEach(i => i.disabled = true);

    feedback.style.display = 'block';
    if (selectedIndex === q.correcta) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `¡Correcto! <div class="explanation">${q.explicacion}</div>`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Incorrecto. La respuesta correcta era: ${q.opciones[q.correcta]} <div class="explanation">${q.explicacion}</div>`;
    }
}

function evaluateExam() {
    let score = 0;
    const totalQuestions = preguntasHardware.length;

    preguntasHardware.forEach((q, qIndex) => {
        const selected = document.querySelector(`input[name="question-${qIndex}"]:checked`);
        const feedback = document.getElementById(`feedback-${qIndex}`);
        feedback.style.display = 'block';

        if (selected) {
            const answerIndex = parseInt(selected.value);
            if (answerIndex === q.correcta) {
                score++;
                feedback.className = 'feedback correct';
                feedback.innerHTML = `¡Correcto!`;
            } else {
                feedback.className = 'feedback incorrect';
                feedback.innerHTML = `Incorrecto. Era: ${q.opciones[q.correcta]}`;
            }
        } else {
            feedback.className = 'feedback incorrect';
            feedback.innerHTML = `En blanco. La respuesta correcta era: ${q.opciones[q.correcta]}`;
        }
    });

    // Mostrar panel de resultados general
    const resultBox = document.getElementById('result-box');
    resultBox.style.display = 'block';
    const finalGrade = ((score / totalQuestions) * 10).toFixed(2);
    
    if (finalGrade >= 5) {
        resultBox.className = 'correct';
        resultBox.innerHTML = `🎉 ¡Examen Finalizado! Nota: <b>${finalGrade}/10</b> (${score} aciertos de ${totalQuestions})`;
    } else {
        resultBox.className = 'incorrect';
        resultBox.innerHTML = `⚠️ Examen Finalizado. Hay que repasar más. Nota: <b>${finalGrade}/10</b> (${score} aciertos de ${totalQuestions})`;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Inicializar al cargar la página
window.onload = () => renderQuiz();
