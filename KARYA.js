// This is a placeholder for your actual quiz data
const quizzes = [
    { id: 1, name: 'Quiz 1' },
    { id: 2, name: 'Quiz 2' },
    // Add more quizzes as needed
];

// Function to load quiz options
function loadQuizOptions() {
    const select = document.getElementById('quiz-select');
    quizzes.forEach(quiz => {
        const option = document.createElement('option');
        option.value = quiz.id;
        option.text = quiz.name;
        select.appendChild(option);
    });
}

// Function to start a quiz
function startQuiz() {
    const select = document.getElementById('quiz-select');
    const selectedQuizId = select.value;
    alert('Starting quiz: ' + selectedQuizId);
    // Add your quiz starting logic here
}

// Load quiz options when the page loads
window.onload = loadQuizOptions;

// Attach event listener to the start quiz button
document.getElementById('start-quiz').addEventListener('click', startQuiz);