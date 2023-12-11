const quizData = [
  {
      question: ' W gọi là gì ta? ',
      options: ['Momen kháng uống', 'MoMen', 'W', 'Giá trị áp lực gió'],
      correctAnswer: 'Momen kháng uống'
  },
  {
      question: 'Từ " Vật Liệu" trong tiếng Anh là gì',
      options: ['structure', 'construction', 'material', 'architecture'],
      correctAnswer: 'material'
  },
  
  {
    question: ' Momen 2 đầu dầm có giá trị âm thì đặt thép chủ như nào?',
    options: [ 'Lớp Trên', 'Lớp Dưới', 'Ở Giữa', 'Gia Cường'],
    correctAnswer: 'Lớp Trên'
},
{
  question: ' Hệ số vượt tải thường dùng',
  options: ['1,2', '1,3', '1,4', '0,8'],
  correctAnswer: '1,2'
},
{
  question: ' Trong các công trình thường người ta chống thấm bằng vật liệu gì',
  options: ['Hồ Dầu', 'Nhựa epoxy', 'Sika', 'Bittum'],
  correctAnswer: 'Sika'
},

{
  question: 'Có Những loại Móng chủ yếu nào',
  options: ['Móng Băng, Móng Cọc', 'Móng Đơn, Móng Băng', 'Móng Đơn, Móng Băng, Móng Cọc', 'Móng Tay, Móng Chân'],
  correctAnswer: 'Móng Đơn, Móng Băng, Móng Cọc'
},
];

const questionContainer = document.getElementById('question-container');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');

let currentQuestion = 0;
let score = 0;
let wrongAnswers = 0;
let shuffledQuestions = [];
let countdownTimer;

const maxWrongAnswers = 1; // Số lượng tối đa của các câu hỏi sai được phép
const cookieName = 'quizAttempts';
const infoContainer = document.createElement('div');

// Function to set cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

// Function to get cookie value
function getCookie(name) {
  const cookieArray = document.cookie.split(';');
  for (let i = 0; i < cookieArray.length; i++) {
    const cookie = cookieArray[i].trim();
    if (cookie.startsWith(name + '=')) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return null;
}

// Function to shuffle questions
function shuffleQuestions() {
  shuffledQuestions = [...quizData].sort(() => Math.random() - 0.5);
}

// Function to get the next question
function getNextQuestion() {
  const nextQuestion = shuffledQuestions[currentQuestion];
  questionContainer.innerText = `Câu hỏi ${currentQuestion + 1}: ${nextQuestion.question}`;

  optionsContainer.innerHTML = '';
  nextQuestion.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.innerText = option;
    button.addEventListener('click', () => checkAnswer(option));
    optionsContainer.appendChild(button);
  });
}

// Function to load the question
function loadQuestion() {
  if (currentQuestion === 0) {
    shuffleQuestions();
  }

  getNextQuestion();
}

// Function to check the answer
function checkAnswer(answer) {
  const currentQuizData = shuffledQuestions[currentQuestion];
  if (answer === currentQuizData.correctAnswer) {
    score++;
  } else {
    wrongAnswers++;
  }

  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    getNextQuestion();
  } else {
    if (score === shuffledQuestions.length || wrongAnswers <= maxWrongAnswers) {
      startCountdown();
    } else {
      showResults();
    }
  }
}

// Function to record the quiz attempt using a cookie
function recordAttempt() {
  const attempts = parseInt(getCookie(cookieName)) || 0;
  setCookie(cookieName, attempts + 1, 365); // Record the quiz attempt in a cookie, you can adjust the number of days
}

// Function to start the countdown
function startCountdown() {
  recordAttempt(); // Record the attempt even if the user does not answer all questions

  questionContainer.innerText = `Bạn đã hoàn thành trắc nghiệm! Điểm của bạn là ${score}/${shuffledQuestions.length}. Chuyển hướng sau 5 giây...`;
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';

  let countdown = 5;
  countdownTimer = setInterval(() => {
    questionContainer.innerText = `Bạn đã hoàn thành trắc nghiệm! Điểm của bạn là ${score}/${shuffledQuestions.length}. Chuyển hướng sau ${countdown} giây...`;
    countdown--;
    if (countdown < 0) {
      clearInterval(countdownTimer);
      window.location.href = 'https://www.ketcaumkpr.id.vn/dutoan.html';
    }
  }, 1000);
}

// Function to show the results
function showResults() {
  questionContainer.innerText = `Bạn đã hoàn thành trắc nghiệm! Điểm của bạn là ${score}/${shuffledQuestions.length}`;
  optionsContainer.innerHTML = '';
  nextButton.style.display = 'none';
}

// Function to update the information container
function updateInfoContainer() {
  const attempts = parseInt(getCookie(cookieName)) || 0;
  infoContainer.innerText = `Số lần làm bài: ${attempts}`;
}

// Append and style the information container
infoContainer.style.position = 'fixed';
infoContainer.style.bottom = '0';
infoContainer.style.right = '0';
infoContainer.style.backgroundColor = 'blue';
infoContainer.style.color = 'white';
infoContainer.style.padding = '10px';
infoContainer.style.borderTopLeftRadius = '5px';
document.body.appendChild(infoContainer);

// Update the information container
updateInfoContainer();

// Add an event listener to update the information container when the window is resized
window.addEventListener('resize', updateInfoContainer);

// Event listener for the next button
nextButton.addEventListener('click', () => {
  if (currentQuestion < shuffledQuestions.length - 1) {
    currentQuestion++;
    getNextQuestion();
  } else {
    showResults();
  }
  updateInfoContainer();
});

// Start the quiz
loadQuestion();