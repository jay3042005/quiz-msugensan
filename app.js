// FIL101 Study Guide Application

// Application Data
const appData = {
  topics: [
    {
      id: 1,
      title: "Depinisyon at Pananaw ng Wika",
      description: "Basic definitions and different perspectives on language",
      keyPoints: [
        "Wika - sistematikong kaayusan ng mga tunog, salita, at tuntunin",
        "Pananaw na Kognitibo - wika bilang produkto ng isip",
        "Pananaw na Sosyolinggwistiko - wika bilang instrumento ng pakikipag-ugnayan",
        "Pananaw na Structuralist - wika bilang sistema ng mga palatandaan",
        "Pananaw na Functionalist - wika bilang kasangkapan para sa komunikasyon",
        "Pananaw na Interaksyonal - wika bilang paraan ng pakikipag-ugnayan",
        "Pananaw na Kultural - wika bilang tagapag-ingat ng kultura"
      ],
      examples: [
        "Ferdinand de Saussure - arbitraryong tanda na nag-uugnay sa anyo at kahulugan",
        "Leonard Bloomfield - kabuuan ng mga pahayag sa speech community",
        "Edward Sapir at Benjamin Whorf - salamin at tagahubog ng kultura",
        "Noam Chomsky - likas sa tao ang kakayahang magwika"
      ]
    },
    {
      id: 2,
      title: "Kahalagahan at Katangian ng Wika",
      description: "Importance and characteristics of language",
      keyPoints: [
        "Kasangkapan ng Komunikasyon",
        "Nagbubuklod ng Lipunan",
        "Pag-iingat at Pagpapalaganap ng Kaalaman at Kultura",
        "Instrumento ng Pagkatuto at Pag-unlad",
        "Pagpapahayag ng Damdamin at Sining",
        "Mayroong sistemang balangkas",
        "Sinasalitang tunog",
        "Arbitraryo",
        "Buhay at dinamiko",
        "Nanghihiram",
        "Kaakibat at salamin ng kultura",
        "Patuloy na ginagamit",
        "Pantao",
        "Komunikasyon",
        "Malikhain at natatangi"
      ],
      examples: [
        "Filipino bilang pambansang wika na nag-uugnay sa Pilipinas",
        "Mga epiko tulad ng Biag ni Lam-ang at Darangen",
        "Hiram na salita: computer - kompyuter, jeep - dayip",
        "Pagbabago sa kahulugan: Tablet (gamot → gadget)"
      ]
    },
    {
      id: 3,
      title: "Varayti at Varyasyon ng Wika",
      description: "Different varieties and variations of language use",
      keyPoints: [
        "Dayalek - ginagamit sa tiyak na lugar o pook",
        "Idyolek - natatanging paraan ng pagsasalita ng bawat tao",
        "Sosyolek - ginagamit ng partikular na grupo",
        "Etnolek - ginagamit ng mga pangkat etniko",
        "Ekolek - ginagamit sa loob ng bahay o tahanan",
        "Register - ginagamit depende sa sitwasyon, lugar, at kausap",
        "Varyasyong Leksikal - pagkakaiba sa salita o kahulugan",
        "Varyasyong Ponolohikal - pagkakaiba ng tunog o pagbigkas",
        "Varyasyong Gramatikal - paraan ng pagbubuo ng mga salita"
      ],
      examples: [
        "Tagalog: 'Kumain ka na ba?' vs Cebuano: 'Ni kaon naka?'",
        "Willie Revillame: 'Bigyan ng jacket yan'",
        "Kuya Kim Atienza: 'Ang buhay ay weather-weather lang'",
        "Kabataan: 'Erp' (Pre), Doktor: 'Diagnosis, Prescription'",
        "Sa paaralan: 'Magandang umaga po, Teacher' vs Sa kaibigan: 'Uy, musta na?'"
      ]
    },
    {
      id: 4,
      title: "Idyolek, Dayalek, Sosyolek",
      description: "Individual, dialectal, and social language varieties",
      keyPoints: [
        "Idyolek - natatanging istilo ng pamamahayag ng bawat indibidwal",
        "Dayalek - wikang ginagamit sa tiyak na pook o rehiyon",
        "Sosyolek - barayti ng wika batay sa katayuang panlipunan",
        "Uri ng Dayalek: Sosyal, Diskretong, Dayalektikal na Baryasyon",
        "Uri ng Sosyolek: Jargon, Slang, Gay Lingo, Conyo Speak, Jejemon",
        "Mga salik: karanasan, pinagmulan, edukasyon, paniniwala, personalidad"
      ],
      examples: [
        "Mike Enriquez: 'Excuse me po!' at 'Hindi namin kayo tatantanan!'",
        "Jessica Soho: 'i-KMJS na yan!'",
        "Cebuano: 'Kumusta man ka?', Hiligaynon: 'Diin ka makadto?'",
        "Gay Lingo: 'Charot!', 'Shumalamush', 'Thunder cats'",
        "Conyo: 'Let's make kain na', Jejemon: 'Eowh pFuh! MuZtaH nA aQuh?'"
      ]
    },
    {
      id: 5,
      title: "Lingua Franca, Pidgin, Creole",
      description: "Contact languages and their development",
      keyPoints: [
        "Lingua Franca - ginagamit ng dalawa o higit pang indibidwal na may magkaibang wika",
        "Pidgin - pinasimpleng anyo ng pananalita para sa basic communication",
        "Creole - natural na wika na nabuo mula sa pidgin",
        "Lingua Franca: tulay ng komunikasyon, trade languages",
        "Pidgin: walang native speakers, limitadong gramatika",
        "Creole: may matatag na grammar, natutuhan bilang unang wika"
      ],
      examples: [
        "Ingles - lingua franca sa internasyonal na antas",
        "Filipino - lingua franca sa Pilipinas",
        "Nigerian Pidgin English: 'Pain you well well'",
        "Chavacano: 'Donde tu hay anda?' (anong ginagawa mo?)",
        "Tok Pisin sa Papua New Guinea"
      ]
    },
    {
      id: 6,
      title: "Sosyolinggwistika at Speech Community",
      description: "Study of language in social context and speech communities",
      keyPoints: [
        "Sosyolinggwistika - pag-aaral ng ugnayan ng wika at lipunan",
        "Speech Community - grupo na may iisang hanay ng kaugalian sa wika",
        "Mikro-sosyolinggwistika vs Makro-sosyolinggwistika",
        "Katangian: Shared Linguistic Norms, Common Language Variety, Regular Interaction, Shared Identity",
        "5 Elemento: Population, Area, Facility, Identification, Interaction"
      ],
      examples: [
        "Tagalog Speech Community - karatig-probinsya ng Maynila",
        "Cebuano Speech Community - Gitnang at Katimugang Visayas",
        "Professional Communities - doktor, abogado, guro",
        "Digital Speech Communities - Filipino TikTok, Online Gaming",
        "Code-switching: 'Okay class, open your notebooks'"
      ]
    },
    {
      id: 7,
      title: "Gamit ng Wika (Halliday)",
      description: "Seven functions of language according to Halliday",
      keyPoints: [
        "Instrumental - ipahayag ang pangangailangan",
        "Regulatori - kontrolin at gabayan ang kilos ng iba",
        "Interaksyonal - mapanatili ang ugnayan sa kapwa",
        "Personal - ipahayag ang sariling saloobin at damdamin",
        "Heuristiko - magtanong at mag-imbestiga",
        "Imahinatibo - malikhaing paggamit ng wika",
        "Representatibo - magpahayag ng impormasyon at datos"
      ],
      examples: [
        "Instrumental: 'Pabili po ng dalawang order ng adobo'",
        "Regulatori: 'Bawal Tumawid, Nakamamatay'",
        "Interaksyonal: 'Kumusta ka na?'",
        "Personal: 'Masaya ako dahil mataas ang grado ko'",
        "Heuristiko: 'Bakit umiitim ang ulap bago umulan?'",
        "Imahinatibo: pagsulat ng tula, kwento",
        "Representatibo: 'Ang 2+2 ay katumbas ng 4'"
      ]
    },
    {
      id: 8,
      title: "Mga Teorya ng Pinagmulan ng Wika",
      description: "Theories about the origin and acquisition of language",
      keyPoints: [
        "Teoryang Ding-Dong - mula sa tunog ng mga bagay",
        "Teoryang Bow-Wow - panggagaya sa tunog ng kalikasan",
        "Teoryang Pooh-Pooh - mula sa emosyon at damdamin",
        "Teoryang Ta-ra-ra-boom de ay - mula sa ritwal at sayaw",
        "Teoryang Eureka - sadyang inimbento ang wika",
        "Teorya ng Tore ng Babel - biblical explanation",
        "Teorya ni Darwin - bahagi ng evolution",
        "Teorya ni Chomsky (LAD) - likas na kakayahan sa wika",
        "Teoryang Behaviorist - panggagaya at reinforcement"
      ],
      examples: [
        "Ding-dong: kampana → 'kampana'",
        "Bow-wow: tahol ng aso → 'aso'",
        "Pooh-pooh: 'Aray!' dahil sa sakit",
        "Mama/Papa - ginagamit sa buong mundo",
        "LAD - Language Acquisition Device",
        "Behaviorist - paulit-ulit na pagsasanay"
      ]
    },
    {
      id: 9,
      title: "Wikang Pambansa, Opisyal, Panturo",
      description: "National, official, and instructional languages",
      keyPoints: [
        "Wikang Pambansa - pambansang pagkakakilanlan at sagisag ng pagkakaisa",
        "Wikang Opisyal - pormal na gamit ng pamahalaan",
        "Wikang Panturo - midyum ng pagtuturo at pagkatuto",
        "Filipino - Wikang Pambansa",
        "Filipino at Ingles - Wikang Opisyal",
        "MTB-MLE - Mother Tongue-Based Multilingual Education"
      ],
      examples: [
        "Pambansa: Lupang Hinirang, SONA, panitikan",
        "Opisyal: mga batas, pasaporte, korte",
        "Panturo: K-3 (mother tongue), 4-12 (Filipino/English)",
        "1987 Konstitusyon - Filipino at Ingles",
        "DepEd K-12 Curriculum"
      ]
    }
  ],
  quizQuestions: [
    {
      topicId: 1,
      question: "Sino ang nagsabing ang wika ay binubuo ng mga arbitraryong tanda?",
      options: ["Ferdinand de Saussure", "Leonard Bloomfield", "Noam Chomsky", "Edward Sapir"],
      answer: 0,
      explanation: "Si Ferdinand de Saussure ang nagsabing ang wika ay binubuo ng mga arbitraryong tanda na nag-uugnay sa anyo at kahulugan."
    },
    {
      topicId: 2,
      question: "Alin sa mga sumusunod ang hindi katangian ng wika?",
      options: ["Arbitraryo", "Buhay at dinamiko", "Nanghihiram", "Hindi nagbabago"],
      answer: 3,
      explanation: "Ang wika ay buhay at dinamiko, ibig sabihin patuloy itong nagbabago at umuunlad."
    },
    {
      topicId: 3,
      question: "Ano ang tawag sa natatanging paraan ng pagsasalita ng bawat tao?",
      options: ["Dayalek", "Sosyolek", "Idyolek", "Etnolek"],
      answer: 2,
      explanation: "Ang idyolek ay tumutukoy sa natatanging istilo ng pamamahayag at pananalita ng bawat indibidwal."
    },
    {
      topicId: 4,
      question: "Ano ang tawag sa wikang ginagamit ng mga pangkat etniko?",
      options: ["Idyolek", "Dayalek", "Sosyolek", "Etnolek"],
      answer: 3,
      explanation: "Ang etnolek ay uri ng wika na ginagamit ng mga pangkat etniko o katutubo."
    },
    {
      topicId: 5,
      question: "Ano ang Chavacano?",
      options: ["Pidgin", "Creole", "Lingua Franca", "Dayalek"],
      answer: 1,
      explanation: "Ang Chavacano ay isang creole na halong Kastila at wikang Bisaya."
    },
    {
      topicId: 6,
      question: "Ano ang pag-aaral ng ugnayan ng wika at lipunan?",
      options: ["Linggwistika", "Sosyolinggwistika", "Sikolohiya", "Antropolohiya"],
      answer: 1,
      explanation: "Ang sosyolinggwistika ay pag-aaral ng ugnayan sa pagitan ng wika at lipunan."
    },
    {
      topicId: 7,
      question: "Alin sa mga sumusunod ang halimbawa ng Instrumental na gamit ng wika?",
      options: ["Kumusta ka na?", "Pabili po ng adobo", "Bawal tumawid", "Ang 2+2 ay 4"],
      answer: 1,
      explanation: "Ang instrumental na gamit ay para ipahayag ang pangangailangan, tulad ng pag-order ng pagkain."
    },
    {
      topicId: 8,
      question: "Ano ang teoryang nagmula sa panggagaya sa tunog ng kalikasan?",
      options: ["Ding-Dong", "Bow-Wow", "Pooh-Pooh", "Eureka"],
      answer: 1,
      explanation: "Ang Teoryang Bow-Wow ay nagsasabing nagmula ang wika sa panggagaya sa mga tunog ng kalikasan."
    },
    {
      topicId: 9,
      question: "Ano ang wikang opisyal ng Pilipinas?",
      options: ["Filipino lamang", "Ingles lamang", "Filipino at Ingles", "Tagalog at Ingles"],
      answer: 2,
      explanation: "Ayon sa 1987 Konstitusyon, ang Filipino at Ingles ang mga wikang opisyal ng Pilipinas."
    }
  ]
};

// Application State
let currentState = {
  currentTopic: null,
  currentMode: 'dashboard', // dashboard, study, quiz, results
  studyCardIndex: 0,
  quizQuestionIndex: 0,
  quizAnswers: [],
  topicProgress: {},
  isRandomQuiz: false
};

// Initialize progress for all topics
appData.topics.forEach(topic => {
  currentState.topicProgress[topic.id] = {
    studyCompleted: false,
    quizCompleted: false,
    quizScore: 0,
    status: 'not-started'
  };
});

// DOM Elements
const dashboard = document.getElementById('dashboard');
const studyMode = document.getElementById('studyMode');
const quizMode = document.getElementById('quizMode');
const quizResults = document.getElementById('quizResults');
const topicsGrid = document.getElementById('topicsGrid');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  renderTopics();
  updateOverallProgress();
  attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
  // Dashboard buttons
  document.getElementById('studyAllBtn').addEventListener('click', startStudyAll);
  document.getElementById('randomQuizBtn').addEventListener('click', startRandomQuiz);
  
  // Study mode navigation
  document.getElementById('backToTopics').addEventListener('click', showDashboard);
  document.getElementById('prevCard').addEventListener('click', previousStudyCard);
  document.getElementById('nextCard').addEventListener('click', nextStudyCard);
  document.getElementById('startQuizFromStudy').addEventListener('click', startQuizFromStudy);
  
  // Quiz mode navigation
  document.getElementById('backFromQuiz').addEventListener('click', () => {
    if (currentState.isRandomQuiz) {
      showDashboard();
    } else {
      showStudyMode();
    }
  });
  document.getElementById('nextQuestion').addEventListener('click', nextQuizQuestion);
  
  // Results navigation
  document.getElementById('retakeQuiz').addEventListener('click', retakeQuiz);
  document.getElementById('backToDashboard').addEventListener('click', showDashboard);
}

// Render Functions
function renderTopics() {
  topicsGrid.innerHTML = '';
  
  appData.topics.forEach(topic => {
    const progress = currentState.topicProgress[topic.id];
    const topicCard = createTopicCard(topic, progress);
    topicsGrid.appendChild(topicCard);
  });
}

function createTopicCard(topic, progress) {
  const card = document.createElement('div');
  card.className = `topic-card topic-card--${progress.status}`;
  
  card.innerHTML = `
    <div class="topic-header">
      <h3 class="topic-title">${topic.title}</h3>
      <span class="topic-status topic-status--${progress.status}">
        ${getStatusText(progress.status)}
      </span>
    </div>
    <p class="topic-description">${topic.description}</p>
    <div class="topic-actions">
      <button class="btn btn--primary study-btn" data-topic-id="${topic.id}">
        📚 Mag-aral
      </button>
      <button class="btn btn--secondary quiz-btn" data-topic-id="${topic.id}">
        📝 Quiz
      </button>
    </div>
  `;
  
  // Add event listeners
  card.querySelector('.study-btn').addEventListener('click', () => startStudy(topic.id));
  card.querySelector('.quiz-btn').addEventListener('click', () => startQuiz(topic.id));
  
  return card;
}

function getStatusText(status) {
  const statusTexts = {
    'not-started': 'Hindi pa Nasimulan',
    'in-progress': 'Ginagawa',
    'completed': 'Tapos na'
  };
  return statusTexts[status];
}

// Navigation Functions
function showDashboard() {
  hideAllSections();
  dashboard.classList.remove('hidden');
  currentState.currentMode = 'dashboard';
  updateOverallProgress();
}

function showStudyMode() {
  hideAllSections();
  studyMode.classList.remove('hidden');
  currentState.currentMode = 'study';
}

function showQuizMode() {
  hideAllSections();
  quizMode.classList.remove('hidden');
  currentState.currentMode = 'quiz';
}

function showResults() {
  hideAllSections();
  quizResults.classList.remove('hidden');
  currentState.currentMode = 'results';
}

function hideAllSections() {
  dashboard.classList.add('hidden');
  studyMode.classList.add('hidden');
  quizMode.classList.add('hidden');
  quizResults.classList.add('hidden');
}

// Study Mode Functions
function startStudy(topicId) {
  currentState.currentTopic = appData.topics.find(t => t.id === topicId);
  currentState.studyCardIndex = 0;
  currentState.isRandomQuiz = false;
  
  setupStudyMode();
  showStudyMode();
}

function startStudyAll() {
  currentState.currentTopic = appData.topics[0];
  currentState.studyCardIndex = 0;
  currentState.isRandomQuiz = false;
  
  setupStudyMode();
  showStudyMode();
}

function setupStudyMode() {
  const topic = currentState.currentTopic;
  document.getElementById('studyTopicTitle').textContent = topic.title;
  
  renderStudyCard();
  updateStudyProgress();
}

function renderStudyCard() {
  const topic = currentState.currentTopic;
  const cardIndex = currentState.studyCardIndex;
  const totalCards = topic.keyPoints.length + topic.examples.length;
  
  let cardContent;
  let cardTitle;
  
  if (cardIndex < topic.keyPoints.length) {
    // Show key points
    cardTitle = 'Mga Pangunahing Punto';
    cardContent = `<ul><li>${topic.keyPoints[cardIndex]}</li></ul>`;
  } else {
    // Show examples
    const exampleIndex = cardIndex - topic.keyPoints.length;
    cardTitle = 'Mga Halimbawa';
    cardContent = `<ul><li>${topic.examples[exampleIndex]}</li></ul>`;
  }
  
  document.getElementById('studyCardTitle').textContent = cardTitle;
  document.getElementById('studyCardContent').innerHTML = cardContent;
  document.getElementById('cardCounter').textContent = `${cardIndex + 1} / ${totalCards}`;
  
  // Update navigation buttons
  document.getElementById('prevCard').disabled = cardIndex === 0;
  document.getElementById('nextCard').disabled = cardIndex === totalCards - 1;
}

function previousStudyCard() {
  if (currentState.studyCardIndex > 0) {
    currentState.studyCardIndex--;
    renderStudyCard();
  }
}

function nextStudyCard() {
  const topic = currentState.currentTopic;
  const totalCards = topic.keyPoints.length + topic.examples.length;
  
  if (currentState.studyCardIndex < totalCards - 1) {
    currentState.studyCardIndex++;
    renderStudyCard();
  } else {
    // Mark study as completed
    const progress = currentState.topicProgress[topic.id];
    progress.studyCompleted = true;
    updateTopicStatus(topic.id);
    renderTopics();
  }
}

function updateStudyProgress() {
  const topic = currentState.currentTopic;
  const totalCards = topic.keyPoints.length + topic.examples.length;
  const progress = ((currentState.studyCardIndex + 1) / totalCards) * 100;
  
  document.getElementById('cardCounter').textContent = `${currentState.studyCardIndex + 1} / ${totalCards}`;
}

function startQuizFromStudy() {
  startQuiz(currentState.currentTopic.id);
}

// Quiz Mode Functions
function startQuiz(topicId) {
  currentState.currentTopic = appData.topics.find(t => t.id === topicId);
  currentState.quizQuestionIndex = 0;
  currentState.quizAnswers = [];
  currentState.isRandomQuiz = false;
  
  setupQuizMode();
  showQuizMode();
}

function startRandomQuiz() {
  currentState.currentTopic = null;
  currentState.quizQuestionIndex = 0;
  currentState.quizAnswers = [];
  currentState.isRandomQuiz = true;
  
  setupRandomQuizMode();
  showQuizMode();
}

function setupQuizMode() {
  const topic = currentState.currentTopic;
  document.getElementById('quizTopicTitle').textContent = topic.title;
  
  renderQuizQuestion();
  updateQuizProgress();
}

function setupRandomQuizMode() {
  document.getElementById('quizTopicTitle').textContent = 'Random Quiz - Lahat ng Topics';
  
  renderQuizQuestion();
  updateQuizProgress();
}

function getQuizQuestions() {
  if (currentState.isRandomQuiz) {
    // Return all questions shuffled
    return [...appData.quizQuestions].sort(() => Math.random() - 0.5);
  } else {
    // Return questions for current topic
    return appData.quizQuestions.filter(q => q.topicId === currentState.currentTopic.id);
  }
}

function renderQuizQuestion() {
  const questions = getQuizQuestions();
  const questionIndex = currentState.quizQuestionIndex;
  
  if (questionIndex >= questions.length) {
    showQuizResults();
    return;
  }
  
  const question = questions[questionIndex];
  
  document.getElementById('questionText').textContent = question.question;
  document.getElementById('questionCounter').textContent = `${questionIndex + 1} / ${questions.length}`;
  
  // Render options
  const optionsContainer = document.getElementById('optionsContainer');
  optionsContainer.innerHTML = '';
  
  question.options.forEach((option, index) => {
    const optionBtn = document.createElement('button');
    optionBtn.className = 'option-btn';
    optionBtn.textContent = `${String.fromCharCode(65 + index)}. ${option}`;
    optionBtn.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(optionBtn);
  });
  
  // Hide feedback
  document.getElementById('quizFeedback').classList.add('hidden');
  document.getElementById('questionCard').classList.remove('hidden');
}

function selectAnswer(selectedIndex) {
  const questions = getQuizQuestions();
  const question = questions[currentState.quizQuestionIndex];
  const isCorrect = selectedIndex === question.answer;
  
  // Store answer
  currentState.quizAnswers.push({
    questionIndex: currentState.quizQuestionIndex,
    selectedAnswer: selectedIndex,
    correctAnswer: question.answer,
    isCorrect: isCorrect
  });
  
  // Show feedback
  showQuizFeedback(isCorrect, question.explanation);
  
  // Update option styles
  const options = document.querySelectorAll('.option-btn');
  options.forEach((btn, index) => {
    if (index === selectedIndex) {
      btn.classList.add('selected');
    }
    if (index === question.answer) {
      btn.classList.add('correct');
    } else if (index === selectedIndex && !isCorrect) {
      btn.classList.add('incorrect');
    }
    btn.disabled = true;
  });
}

function showQuizFeedback(isCorrect, explanation) {
  const feedback = document.getElementById('quizFeedback');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackText = document.getElementById('feedbackText');
  const feedbackExplanation = document.getElementById('feedbackExplanation');
  
  feedbackIcon.textContent = isCorrect ? '✅' : '❌';
  feedbackText.textContent = isCorrect ? 'Tama!' : 'Mali!';
  feedbackText.className = `feedback-text ${isCorrect ? 'correct' : 'incorrect'}`;
  feedbackExplanation.textContent = explanation;
  
  document.getElementById('questionCard').classList.add('hidden');
  feedback.classList.remove('hidden');
}

function nextQuizQuestion() {
  currentState.quizQuestionIndex++;
  
  const questions = getQuizQuestions();
  if (currentState.quizQuestionIndex >= questions.length) {
    showQuizResults();
  } else {
    renderQuizQuestion();
    updateQuizProgress();
  }
}

function updateQuizProgress() {
  const questions = getQuizQuestions();
  const progress = ((currentState.quizQuestionIndex + 1) / questions.length) * 100;
  
  document.getElementById('quizProgressFill').style.width = `${progress}%`;
  document.getElementById('questionCounter').textContent = `${currentState.quizQuestionIndex + 1} / ${questions.length}`;
}

function showQuizResults() {
  const correctAnswers = currentState.quizAnswers.filter(a => a.isCorrect).length;
  const totalQuestions = currentState.quizAnswers.length;
  const percentage = Math.round((correctAnswers / totalQuestions) * 100);
  
  // Update progress if not random quiz
  if (!currentState.isRandomQuiz) {
    const progress = currentState.topicProgress[currentState.currentTopic.id];
    progress.quizCompleted = true;
    progress.quizScore = percentage;
    updateTopicStatus(currentState.currentTopic.id);
  }
  
  // Display results
  document.getElementById('finalScore').textContent = `${percentage}%`;
  document.getElementById('correctAnswers').textContent = correctAnswers;
  document.getElementById('incorrectAnswers').textContent = totalQuestions - correctAnswers;
  document.getElementById('totalQuestions').textContent = totalQuestions;
  
  let summaryText = `Nakakuha ka ng ${correctAnswers} na tama sa ${totalQuestions} na tanong.`;
  if (percentage >= 80) {
    summaryText += ' Napakahusay!';
  } else if (percentage >= 60) {
    summaryText += ' Mabuti naman!';
  } else {
    summaryText += ' Kailangan mo pang mag-aral.';
  }
  
  document.getElementById('resultsSummary').textContent = summaryText;
  
  renderTopics();
  showResults();
}

function retakeQuiz() {
  if (currentState.isRandomQuiz) {
    startRandomQuiz();
  } else {
    startQuiz(currentState.currentTopic.id);
  }
}

// Progress Functions
function updateTopicStatus(topicId) {
  const progress = currentState.topicProgress[topicId];
  
  if (progress.studyCompleted && progress.quizCompleted) {
    progress.status = 'completed';
  } else if (progress.studyCompleted || progress.quizCompleted) {
    progress.status = 'in-progress';
  } else {
    progress.status = 'not-started';
  }
}

function updateOverallProgress() {
  const totalTopics = appData.topics.length;
  const completedTopics = Object.values(currentState.topicProgress)
    .filter(p => p.status === 'completed').length;
  
  const percentage = Math.round((completedTopics / totalTopics) * 100);
  
  document.querySelector('.progress-text').textContent = `${percentage}%`;
  
  // Update progress circle
  const circle = document.querySelector('.progress-circle');
  const degrees = (completedTopics / totalTopics) * 360;
  circle.style.background = `conic-gradient(var(--color-filipino-blue) ${degrees}deg, var(--color-border) ${degrees}deg)`;
}