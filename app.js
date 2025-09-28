// FIL101 Study Guide Application - Module Version

// Application Data with 11 Modules
const appData = {
  modules: [
    {
      moduleNumber: 1,
      title: "Depinisyon ng Wika at iba't ibang Pananaw ng Wika",
      description: "Basic definitions and different perspectives on language",
      category: "Foundation",
      color: "foundation",
      keyPoints: [
        "Wika - sistematikong kaayusan ng mga tunog, salita, at tuntunin",
        "Pananaw na Linggwistiko - Ferdinand de Saussure (arbitraryong tanda)",
        "Pananaw na Sosyolohikal - Leonard Bloomfield (kabuuan ng pahayag)",
        "Pananaw na Sikolohikal - Noam Chomsky (likas na kakayahan)",
        "Pananaw na Kultural - Sapir-Whorf (salamin ng kultura)",
        "Pananaw na Pampolitika - wika bilang instrumento ng kapangyarihan"
      ],
      examples: [
        "Saussure: signifier + signified = sign",
        "Bloomfield: totality of utterances in speech community",
        "Chomsky: Language Acquisition Device (LAD)",
        "Sapir-Whorf: linguistic relativity hypothesis"
      ]
    },
    {
      moduleNumber: 2,
      title: "Kahalagahan, Kaligiran at Katangian ng Wika",
      description: "Importance, background, and characteristics of language",
      category: "Foundation",
      color: "foundation",
      keyPoints: [
        "Kahalagahan: Komunikasyon, pagbubuklod, pag-iingat ng kultura",
        "Kaligiran: Makasaysayan, panlipunan, kultural na konteksto",
        "Katangian: Masistema, sinasalitang tunog, arbitraryo",
        "Buhay at dinamiko - patuloy na nagbabago",
        "Nanghihiram - tumatanggap ng mga salita mula sa ibang wika",
        "Salamin ng kultura - nagpapakita ng mga kaugalian"
      ],
      examples: [
        "Filipino - pambansang wika na nag-uugnay",
        "Mga hiram: computer → kompyuter",
        "Pagbabago: tablet (gamot → gadget)",
        "Kulturang Pilipino: 'po' at 'opo' (respeto)"
      ]
    },
    {
      moduleNumber: 3,
      title: "Mga teorya sa pinagmulan at pagkatuto ng Wika",
      description: "Theories about language origin and acquisition",
      category: "Foundation",
      color: "foundation",
      keyPoints: [
        "Teoryang Bow-wow - panggagaya sa tunog ng kalikasan",
        "Teoryang Ding-dong - mula sa tunog ng mga bagay",
        "Teoryang Pooh-pooh - mula sa emosyon at damdamin",
        "Teoryang Ta-ra-ra-boom-de-ay - mula sa ritwal",
        "Teoryang Divine Origin - binigay ng Diyos",
        "Teorya ni Chomsky - Language Acquisition Device"
      ],
      examples: [
        "Bow-wow: aso (aw-aw), pusa (meow)",
        "Ding-dong: kampana (ding-dong)",
        "Pooh-pooh: 'Aray!' (sakit)",
        "LAD: likas na grammar sa utak"
      ]
    },
    {
      moduleNumber: 4,
      title: "Ugnayan ng Wika sa Kultura at lipunan",
      description: "Relationship between language, culture, and society",
      category: "Social",
      color: "social",
      keyPoints: [
        "Wika bilang salamin ng kultura",
        "Linguistic Relativity - wika nakakaaapekto sa pag-iisip",
        "Bokabularyo - nagpapakita ng mga priorities ng kultura",
        "Code-switching - paggamit ng dalawa o higit pang wika",
        "Diglossia - high variety vs low variety ng wika",
        "Language maintenance vs language shift"
      ],
      examples: [
        "Inuit - maraming salita para sa 'snow'",
        "Filipino - maraming salita para sa 'bigas'",
        "Taglish: 'Let's make kain na'",
        "Formal Filipino (mataas) vs Kolokyal (mababa)"
      ]
    },
    {
      moduleNumber: 5,
      title: "Ang Sosyolinggwistika at Ang Speech Community",
      description: "Sociolinguistics and speech community concepts",
      category: "Social",
      color: "social",
      keyPoints: [
        "Sosyolinggwistika - pag-aaral ng ugnayan ng wika at lipunan",
        "Speech Community - grupong may iisang wika at kaugalian",
        "Mikro-sosyolinggwistika vs Makro-sosyolinggwistika",
        "5 elemento: Population, Area, Facility, Identification, Interaction",
        "Linguistic norms - mga pamantayan sa paggamit ng wika"
      ],
      examples: [
        "Tagalog Speech Community - karatig probinsya ng Maynila",
        "Cebuano Speech Community - Visayas region",
        "Professional communities - mga doktor, abogado",
        "Online communities - Filipino netizens"
      ]
    },
    {
      moduleNumber: 6,
      title: "Ang Sosyolinggwistika at Speech Community (Part 2)",
      description: "Extended study of sociolinguistics applications",
      category: "Social",
      color: "social",
      keyPoints: [
        "Ethnography of Communication - pag-aaral ng komunikasyon sa kultura",
        "SPEAKING model - Setting, Participants, Ends, Act, Key, Instrumentalities, Norms, Genre",
        "Language attitudes - saloobin tungkol sa wika",
        "Prestige varieties vs stigmatized varieties",
        "Accommodation theory - pag-adjust ng wika"
      ],
      examples: [
        "Code-switching sa classroom",
        "Formal register sa opisina",
        "Informal register sa kaibigan",
        "Regional pride sa sariling wika"
      ]
    },
    {
      moduleNumber: 7,
      title: "Varayti ng Wika at Varyasyon ng Wika",
      description: "Language varieties and variations",
      category: "Varieties",
      color: "varieties",
      keyPoints: [
        "Varayti - iba't ibang anyo ng wika",
        "Varyasyong Leksikal - pagkakaiba sa salita",
        "Varyasyong Ponolohikal - pagkakaiba sa tunog",
        "Varyasyong Gramatikal - paraan ng pagbubuo",
        "Register - depende sa sitwasyon at kausap",
        "Style - formal, informal, neutral"
      ],
      examples: [
        "Tagalog: 'Kumain ka na ba?' vs Cebuano: 'Ni kaon ka na?'",
        "Regional accents sa Filipino",
        "Formal: 'Magandang umaga po' vs Informal: 'Uy, musta'",
        "Professional jargon vs everyday language"
      ]
    },
    {
      moduleNumber: 8,
      title: "Idyolek, Dayalek, Sosyolek",
      description: "Individual, dialectal, and social language varieties",
      category: "Varieties",
      color: "varieties",
      keyPoints: [
        "Idyolek - natatanging istilo ng bawat tao",
        "Dayalek - wikang ginagamit sa tiyak na lugar",
        "Sosyolek - wika ng partikular na grupo",
        "Etnolek - wika ng mga ethnic group",
        "Ekolek - wika sa loob ng tahanan",
        "Mga salik: edad, kasarian, trabaho, edukasyon"
      ],
      examples: [
        "Mike Enriquez: 'Excuse me po!'",
        "Boy Abunda: 'Nakakalurky!'",
        "Cebuano dayalek sa Mindanao",
        "Gay lingo: 'Charot!', 'Shumalamush'"
      ]
    },
    {
      moduleNumber: 9,
      title: "Lingua Franca, Pidgin at Creole",
      description: "Contact languages and their development",
      category: "Varieties",
      color: "varieties",
      keyPoints: [
        "Lingua Franca - tulay sa pagitan ng iba't ibang wika",
        "Pidgin - simplified na wika para sa trade",
        "Creole - pidgin na naging natural na wika",
        "Characteristics ng pidgin: walang native speakers",
        "Creole development: may stable grammar na",
        "Functions: trade, communication, identity"
      ],
      examples: [
        "English - global lingua franca",
        "Filipino - lingua franca sa Pilipinas",
        "Chavacano - Spanish-based creole",
        "Nigerian Pidgin English"
      ]
    },
    {
      moduleNumber: 10,
      title: "Gamit at Kahalagahan ng Wika sa Lipunan",
      description: "Functions and importance of language in society",
      category: "Applications",
      color: "applications",
      keyPoints: [
        "Halliday's 7 Functions:",
        "1. Instrumental - ipahayag ang pangangailangan",
        "2. Regulatory - kontrolin ang kilos",
        "3. Interactional - mapanatili ang ugnayan",
        "4. Personal - ipahayag ang damdamin",
        "5. Heuristic - magtanong at mag-imbestiga",
        "6. Imaginative - malikhain na paggamit",
        "7. Representational - magbahagi ng impormasyon"
      ],
      examples: [
        "Instrumental: 'Pabili po ng tinapay'",
        "Regulatory: 'Bawal tumawid'",
        "Interactional: 'Kumusta ka na?'",
        "Personal: 'Masaya ako ngayon'",
        "Heuristic: 'Bakit umuulan?'",
        "Imaginative: pagsulat ng tula",
        "Representational: 'Ang 2+2 = 4'"
      ]
    },
    {
      moduleNumber: 11,
      title: "Wikang Pambansa, Wikang Opisyal at Wikang Panturo sa Pilipinas",
      description: "National, official, and instructional languages",
      category: "Applications",
      color: "applications",
      keyPoints: [
        "Wikang Pambansa - Filipino (nakabatay sa Tagalog)",
        "Wikang Opisyal - Filipino at English (1987 Constitution)",
        "Wikang Panturo - MTB-MLE sa K-3, Filipino/English sa 4-12",
        "Language planning - deliberate efforts to influence language",
        "Corpus planning vs Status planning",
        "Implementation challenges at successes"
      ],
      examples: [
        "Pambatang Makabayan sa Filipino",
        "Court proceedings sa English/Filipino",
        "Mother tongue sa kindergarten",
        "Official documents sa dalawang wika",
        "SONA - State of the Nation Address"
      ]
    }
  ],
  quizQuestions: [
    {
      moduleNumber: 1,
      question: "Sino ang nagsabing ang wika ay binubuo ng mga arbitraryong tanda?",
      options: ["Ferdinand de Saussure", "Leonard Bloomfield", "Noam Chomsky", "Edward Sapir"],
      answer: 0,
      explanation: "Si Ferdinand de Saussure ang nagsabing ang wika ay binubuo ng mga arbitraryong tanda na nag-uugnay sa anyo at kahulugan."
    },
    {
      moduleNumber: 2,
      question: "Alin sa mga sumusunod ang hindi katangian ng wika?",
      options: ["Arbitraryo", "Buhay at dinamiko", "Nanghihiram", "Hindi nagbabago"],
      answer: 3,
      explanation: "Ang wika ay buhay at dinamiko, ibig sabihin patuloy itong nagbabago at umuunlad."
    },
    {
      moduleNumber: 3,
      question: "Ano ang teoryang nagmula sa panggagaya sa tunog ng kalikasan?",
      options: ["Ding-Dong", "Bow-Wow", "Pooh-Pooh", "Eureka"],
      answer: 1,
      explanation: "Ang Teoryang Bow-Wow ay nagsasabing nagmula ang wika sa panggagaya sa mga tunog ng kalikasan."
    },
    {
      moduleNumber: 4,
      question: "Ano ang tawag sa paggamit ng dalawa o higit pang wika sa isang talakayan?",
      options: ["Diglossia", "Code-switching", "Language shift", "Pidgin"],
      answer: 1,
      explanation: "Ang code-switching ay ang paggamit ng dalawa o higit pang wika sa loob ng isang conversation."
    },
    {
      moduleNumber: 5,
      question: "Ano ang pag-aaral ng ugnayan ng wika at lipunan?",
      options: ["Linggwistika", "Sosyolinggwistika", "Sikolohiya", "Antropolohiya"],
      answer: 1,
      explanation: "Ang sosyolinggwistika ay pag-aaral ng ugnayan sa pagitan ng wika at lipunan."
    },
    {
      moduleNumber: 6,
      question: "Ano ang SPEAKING model sa ethnography of communication?",
      options: ["Modelo ng pagkakaiba-iba", "Framework para sa pag-aaral ng komunikasyon", "Uri ng speech community", "Paraan ng pagtuturo"],
      answer: 1,
      explanation: "Ang SPEAKING model ay framework para sa pag-aaral ng komunikasyon sa loob ng kultura."
    },
    {
      moduleNumber: 7,
      question: "Ano ang tawag sa pagkakaiba sa mga salita ng magkaibang lugar?",
      options: ["Varyasyong Ponolohikal", "Varyasyong Leksikal", "Varyasyong Gramatikal", "Register"],
      answer: 1,
      explanation: "Ang varyasyong leksikal ay tumutukoy sa pagkakaiba sa mga salita o bokabularyo."
    },
    {
      moduleNumber: 8,
      question: "Ano ang tawag sa natatanging paraan ng pagsasalita ng bawat tao?",
      options: ["Dayalek", "Sosyolek", "Idyolek", "Etnolek"],
      answer: 2,
      explanation: "Ang idyolek ay tumutukoy sa natatanging istilo ng pamamahayag ng bawat indibidwal."
    },
    {
      moduleNumber: 9,
      question: "Ano ang Chavacano?",
      options: ["Pidgin", "Creole", "Lingua Franca", "Dayalek"],
      answer: 1,
      explanation: "Ang Chavacano ay isang creole na nagmula sa Spanish at mga local na wika."
    },
    {
      moduleNumber: 10,
      question: "Alin sa mga sumusunod ang halimbawa ng Instrumental na gamit ng wika?",
      options: ["Kumusta ka na?", "Pabili po ng adobo", "Bawal tumawid", "Ang 2+2 ay 4"],
      answer: 1,
      explanation: "Ang instrumental na gamit ay para ipahayag ang pangangailangan, tulad ng pag-order ng pagkain."
    },
    {
      moduleNumber: 11,
      question: "Ano ang mga wikang opisyal ng Pilipinas ayon sa 1987 Constitution?",
      options: ["Filipino lamang", "Ingles lamang", "Filipino at Ingles", "Tagalog at Ingles"],
      answer: 2,
      explanation: "Ayon sa 1987 Konstitusyon, ang Filipino at Ingles ang mga wikang opisyal ng Pilipinas."
    }
  ]
};

// Application State
let currentState = {
  currentModule: null,
  currentMode: 'dashboard', // dashboard, study, quiz, results
  studyCardIndex: 0,
  quizQuestionIndex: 0,
  quizAnswers: [],
  moduleProgress: {},
  isRandomQuiz: false
};

// Initialize progress for all modules
appData.modules.forEach(module => {
  currentState.moduleProgress[module.moduleNumber] = {
    studyCompleted: false,
    quizCompleted: false,
    quizScore: 0,
    status: 'not-started',
    progress: 0
  };
});

// DOM Elements
const dashboard = document.getElementById('dashboard');
const studyMode = document.getElementById('studyMode');
const quizMode = document.getElementById('quizMode');
const quizResults = document.getElementById('quizResults');
const modulesGrid = document.getElementById('modulesGrid');

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  renderModules();
  updateOverallProgress();
  attachEventListeners();
});

// Event Listeners
function attachEventListeners() {
  // Dashboard buttons
  document.getElementById('studyAllBtn').addEventListener('click', startStudyAll);
  document.getElementById('randomQuizBtn').addEventListener('click', startRandomQuiz);
  
  // Study mode navigation
  document.getElementById('backToModules').addEventListener('click', showDashboard);
  document.getElementById('prevCard').addEventListener('click', previousStudyCard);
  document.getElementById('nextCard').addEventListener('click', nextStudyCard);
  document.getElementById('startQuizFromStudy').addEventListener('click', startQuizFromStudy);
  document.getElementById('prevModuleBtn').addEventListener('click', goToPreviousModule);
  document.getElementById('nextModuleBtn').addEventListener('click', goToNextModule);
  
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
  document.getElementById('prevModuleFromResults').addEventListener('click', goToPreviousModuleFromResults);
  document.getElementById('nextModuleFromResults').addEventListener('click', goToNextModuleFromResults);
}

// Render Functions
function renderModules() {
  modulesGrid.innerHTML = '';
  
  appData.modules.forEach(module => {
    const progress = currentState.moduleProgress[module.moduleNumber];
    const moduleCard = createModuleCard(module, progress);
    modulesGrid.appendChild(moduleCard);
  });
}

function createModuleCard(module, progress) {
  const card = document.createElement('div');
  card.className = `module-card module-card--${module.color}`;
  
  if (progress.status === 'completed') {
    card.classList.add('module-card--completed');
  }
  
  card.innerHTML = `
    <div class="module-header">
      <div>
        <div class="module-number">Module ${module.moduleNumber}</div>
        <h3 class="module-title">${module.title}</h3>
      </div>
      <span class="module-category module-category--${module.color}">
        ${module.category}
      </span>
    </div>
    <p class="module-description">${module.description}</p>
    <div class="module-progress">
      <div class="progress-indicator">
        <div class="progress-indicator-fill" style="width: ${progress.progress}%"></div>
      </div>
      <span>${progress.progress}% Complete</span>
    </div>
    <div class="module-actions">
      <button class="btn btn--primary study-btn" data-module-number="${module.moduleNumber}">
        📚 Study
      </button>
      <button class="btn btn--secondary quiz-btn" data-module-number="${module.moduleNumber}">
        📝 Quiz
      </button>
    </div>
  `;
  
  // Add event listeners
  card.querySelector('.study-btn').addEventListener('click', () => startStudy(module.moduleNumber));
  card.querySelector('.quiz-btn').addEventListener('click', () => startQuiz(module.moduleNumber));
  
  return card;
}

// Navigation Functions
function showDashboard() {
  hideAllSections();
  dashboard.classList.remove('hidden');
  currentState.currentMode = 'dashboard';
  updateOverallProgress();
  updateDashboardStats();
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
function startStudy(moduleNumber) {
  currentState.currentModule = appData.modules.find(m => m.moduleNumber === moduleNumber);
  currentState.studyCardIndex = 0;
  currentState.isRandomQuiz = false;
  
  setupStudyMode();
  showStudyMode();
}

function startStudyAll() {
  currentState.currentModule = appData.modules[0];
  currentState.studyCardIndex = 0;
  currentState.isRandomQuiz = false;
  
  setupStudyMode();
  showStudyMode();
}

function setupStudyMode() {
  const module = currentState.currentModule;
  document.getElementById('currentModuleBreadcrumb').textContent = `Module ${module.moduleNumber} of 11`;
  document.getElementById('studyModuleTitle').textContent = `Module ${module.moduleNumber}: ${module.title}`;
  
  renderStudyCard();
  updateStudyProgress();
  updateModuleNavigationButtons();
}

function renderStudyCard() {
  const module = currentState.currentModule;
  const cardIndex = currentState.studyCardIndex;
  const totalCards = module.keyPoints.length + module.examples.length;
  
  let cardContent;
  let cardTitle;
  
  if (cardIndex < module.keyPoints.length) {
    // Show key points
    cardTitle = 'Key Points';
    cardContent = `<ul><li>${module.keyPoints[cardIndex]}</li></ul>`;
  } else {
    // Show examples
    const exampleIndex = cardIndex - module.keyPoints.length;
    cardTitle = 'Examples';
    cardContent = `<ul><li>${module.examples[exampleIndex]}</li></ul>`;
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
  const module = currentState.currentModule;
  const totalCards = module.keyPoints.length + module.examples.length;
  
  if (currentState.studyCardIndex < totalCards - 1) {
    currentState.studyCardIndex++;
    renderStudyCard();
  } else {
    // Mark study as completed
    const progress = currentState.moduleProgress[module.moduleNumber];
    progress.studyCompleted = true;
    updateModuleStatus(module.moduleNumber);
    renderModules();
  }
}

function goToPreviousModule() {
  const currentModuleNumber = currentState.currentModule.moduleNumber;
  if (currentModuleNumber > 1) {
    startStudy(currentModuleNumber - 1);
  }
}

function goToNextModule() {
  const currentModuleNumber = currentState.currentModule.moduleNumber;
  if (currentModuleNumber < 11) {
    startStudy(currentModuleNumber + 1);
  }
}

function updateModuleNavigationButtons() {
  const currentModuleNumber = currentState.currentModule.moduleNumber;
  document.getElementById('prevModuleBtn').disabled = currentModuleNumber === 1;
  document.getElementById('nextModuleBtn').disabled = currentModuleNumber === 11;
}

function updateStudyProgress() {
  const module = currentState.currentModule;
  const totalCards = module.keyPoints.length + module.examples.length;
  
  document.getElementById('cardCounter').textContent = `${currentState.studyCardIndex + 1} / ${totalCards}`;
}

function startQuizFromStudy() {
  startQuiz(currentState.currentModule.moduleNumber);
}

// Quiz Mode Functions
function startQuiz(moduleNumber) {
  currentState.currentModule = appData.modules.find(m => m.moduleNumber === moduleNumber);
  currentState.quizQuestionIndex = 0;
  currentState.quizAnswers = [];
  currentState.isRandomQuiz = false;
  
  setupQuizMode();
  showQuizMode();
}

function startRandomQuiz() {
  currentState.currentModule = null;
  currentState.quizQuestionIndex = 0;
  currentState.quizAnswers = [];
  currentState.isRandomQuiz = true;
  
  setupRandomQuizMode();
  showQuizMode();
}

function setupQuizMode() {
  const module = currentState.currentModule;
  document.getElementById('quizModuleBreadcrumb').textContent = `Module ${module.moduleNumber} of 11`;
  document.getElementById('quizModuleTitle').textContent = `Module ${module.moduleNumber}: ${module.title}`;
  
  renderQuizQuestion();
  updateQuizProgress();
}

function setupRandomQuizMode() {
  document.getElementById('quizModuleBreadcrumb').textContent = 'Random Quiz';
  document.getElementById('quizModuleTitle').textContent = 'All Modules Quiz';
  
  renderQuizQuestion();
  updateQuizProgress();
}

function getQuizQuestions() {
  if (currentState.isRandomQuiz) {
    // Return all questions shuffled
    return [...appData.quizQuestions].sort(() => Math.random() - 0.5);
  } else {
    // Return questions for current module
    return appData.quizQuestions.filter(q => q.moduleNumber === currentState.currentModule.moduleNumber);
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
  feedbackText.textContent = isCorrect ? 'Correct!' : 'Incorrect!';
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
    const progress = currentState.moduleProgress[currentState.currentModule.moduleNumber];
    progress.quizCompleted = true;
    progress.quizScore = percentage;
    updateModuleStatus(currentState.currentModule.moduleNumber);
    
    // Show module complete badge if both study and quiz are completed
    if (progress.studyCompleted && progress.quizCompleted) {
      document.getElementById('moduleCompleteBadge').classList.remove('hidden');
    }
    
    updateResultsModuleNavigation();
  }
  
  // Display results
  document.getElementById('finalScore').textContent = `${percentage}%`;
  document.getElementById('correctAnswers').textContent = correctAnswers;
  document.getElementById('incorrectAnswers').textContent = totalQuestions - correctAnswers;
  document.getElementById('totalQuestions').textContent = totalQuestions;
  
  let summaryText = `You got ${correctAnswers} out of ${totalQuestions} questions correct.`;
  if (percentage >= 80) {
    summaryText += ' Excellent work!';
  } else if (percentage >= 60) {
    summaryText += ' Good job!';
  } else {
    summaryText += ' Keep studying!';
  }
  
  document.getElementById('resultsSummary').textContent = summaryText;
  
  renderModules();
  showResults();
}

function updateResultsModuleNavigation() {
  const currentModuleNumber = currentState.currentModule.moduleNumber;
  document.getElementById('prevModuleFromResults').disabled = currentModuleNumber === 1;
  document.getElementById('nextModuleFromResults').disabled = currentModuleNumber === 11;
}

function goToPreviousModuleFromResults() {
  const currentModuleNumber = currentState.currentModule.moduleNumber;
  if (currentModuleNumber > 1) {
    startQuiz(currentModuleNumber - 1);
  }
}

function goToNextModuleFromResults() {
  const currentModuleNumber = currentState.currentModule.moduleNumber;
  if (currentModuleNumber < 11) {
    startQuiz(currentModuleNumber + 1);
  }
}

function retakeQuiz() {
  if (currentState.isRandomQuiz) {
    startRandomQuiz();
  } else {
    startQuiz(currentState.currentModule.moduleNumber);
  }
}

// Progress Functions
function updateModuleStatus(moduleNumber) {
  const progress = currentState.moduleProgress[moduleNumber];
  
  if (progress.studyCompleted && progress.quizCompleted) {
    progress.status = 'completed';
    progress.progress = 100;
  } else if (progress.studyCompleted || progress.quizCompleted) {
    progress.status = 'in-progress';
    progress.progress = 50;
  } else {
    progress.status = 'not-started';
    progress.progress = 0;
  }
}

function updateOverallProgress() {
  const totalModules = appData.modules.length;
  const completedModules = Object.values(currentState.moduleProgress)
    .filter(p => p.status === 'completed').length;
  
  document.querySelector('.progress-text').textContent = `${completedModules}/11`;
  
  // Update progress circle
  const circle = document.querySelector('.progress-circle');
  const degrees = (completedModules / totalModules) * 360;
  circle.style.background = `conic-gradient(var(--color-filipino-blue) ${degrees}deg, var(--color-border) ${degrees}deg)`;
}

function updateDashboardStats() {
  const totalModules = appData.modules.length;
  const completedModules = Object.values(currentState.moduleProgress)
    .filter(p => p.status === 'completed').length;
  const inProgressModules = Object.values(currentState.moduleProgress)
    .filter(p => p.status === 'in-progress').length;
  
  document.getElementById('completedModules').textContent = completedModules;
  document.getElementById('inProgressModules').textContent = inProgressModules;
}