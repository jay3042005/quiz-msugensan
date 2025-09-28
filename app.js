// FIL101 Study Guide Application - Complete 11 Modules

// Application Data with all 11 Modules
const appData = {
  modules: [
    {
      moduleNumber: 1,
      title: "Depinisyon ng Wika at iba't ibang Pananaw ng Wika",
      description: "Comprehensive study of language definitions and various theoretical perspectives",
      category: "Foundation",
      color: "foundation",
      studyCards: [
        {
          title: "Ano ang Wika?",
          content: "Detalyadong depinisyon ng wika ayon sa iba't ibang eksperto at pananaw. Ang wika ay sistematikong kaayusan ng mga tunog, salita, at tuntunin na ginagamit ng mga tao upang makipag-usap at magbahagi ng kaisipan."
        },
        {
          title: "Pananaw na Linggwistiko",
          content: "Si Ferdinand de Saussure - 'Ama ng Modernong Linggwistika'. Ang wika ay binubuo ng mga arbitraryong tanda (signs) na nag-uugnay sa signifier (tunog/anyo) at signified (kahulugan)."
        },
        {
          title: "Pananaw na Sosyolohikal",
          content: "Si Leonard Bloomfield - Ang wika ay kabuuan ng mga pahayag na maaaring gawin ng isang speech community. Nakatuon sa pag-aaral ng wika bilang social phenomenon."
        },
        {
          title: "Pananaw na Sikolohikal",
          content: "Si Noam Chomsky - Ang wika ay likas na kakayahan ng tao. May Language Acquisition Device (LAD) sa utak na tumutulong sa pagkatuto ng wika."
        }
      ],
      quizQuestions: [
        {
          question: "Sino ang kilala bilang 'Ama ng Modernong Linggwistika'?",
          options: ["Ferdinand de Saussure", "Leonard Bloomfield", "Noam Chomsky", "Edward Sapir"],
          answer: 0,
          explanation: "Si Ferdinand de Saussure ang kilala bilang 'Ama ng Modernong Linggwistika' dahil sa kanyang kontribusyon sa structural linguistics."
        },
        {
          question: "Ano ang tawag sa likas na kakayahan ng tao na matuto ng wika ayon kay Chomsky?",
          options: ["Speech Community", "Language Acquisition Device", "Arbitraryong Tanda", "Signifier"],
          answer: 1,
          explanation: "Ang Language Acquisition Device (LAD) ay ang teorya ni Chomsky na nagpapaliwanag kung paano natututo ng wika ang mga bata."
        },
        {
          question: "Ano ang dalawang bahagi ng 'tanda' ayon kay Saussure?",
          options: ["Subject at Predicate", "Signifier at Signified", "Tunog at Kahulugan", "Grammar at Syntax"],
          answer: 1,
          explanation: "Ang tanda (sign) ay binubuo ng signifier (anyo/tunog) at signified (kahulugan/konsepto)."
        }
      ]
    },
    {
      moduleNumber: 2,
      title: "Kahalagahan, Kaligiran at Katangian ng Wika",
      description: "Detailed importance and characteristics of language",
      category: "Foundation",
      color: "foundation",
      studyCards: [
        {
          title: "Kahalagahan ng Wika",
          content: "Detalyadong paliwanag ng kahalagahan: 1) Komunikasyon - pangunahing paraan ng pakikipag-ugnayan, 2) Pagbubuklod - nagkakaisa ang mga tao, 3) Pag-iingat ng Kultura - nagiging instrumento ng pagpapanatili ng tradisyon."
        },
        {
          title: "Kaligiran ng Wika",
          content: "Makasaysayan, panlipunan, at kultural na konteksto ng wika. Ang wika ay hindi natatanging entidad - ito ay nabubuo at umuunlad sa loob ng lipunan at kultura."
        },
        {
          title: "Mga Katangian ng Wika",
          content: "1) Masistema - may malinaw na tuntunin, 2) Sinasalitang tunog - natural na oral, 3) Arbitraryo - walang natural na koneksyon sa referent, 4) Buhay at dinamiko - patuloy na nagbabago, 5) Nanghihiram - tumatanggap ng mga salita mula sa ibang wika."
        },
        {
          title: "Wika bilang Salamin ng Kultura",
          content: "Ang wika ay nagpapakita ng mga kaugalian, paniniwala, at pag-iisip ng isang grupo. Halimbawa: mga salitang nauugnay sa respeto tulad ng 'po' at 'opo' sa Filipino."
        }
      ],
      quizQuestions: [
        {
          question: "Ano ang pangunahing kahalagahan ng wika?",
          options: ["Komunikasyon", "Libangan", "Laruan", "Pagkain"],
          answer: 0,
          explanation: "Ang komunikasyon ay pangunahing layunin at kahalagahan ng wika sa lipunan."
        },
        {
          question: "Alin sa mga sumusunod ang HINDI katangian ng wika?",
          options: ["Masistema", "Arbitraryo", "Hindi nagbabago", "Nanghihiram"],
          answer: 2,
          explanation: "Ang wika ay buhay at dinamiko, ibig sabihin patuloy itong nagbabago at umuunlad."
        },
        {
          question: "Ano ang ibig sabihin ng 'arbitraryo' bilang katangian ng wika?",
          options: ["May natural na koneksyon", "Walang natural na koneksyon sa referent", "Palaging nagbabago", "Hindi sistemado"],
          answer: 1,
          explanation: "Arbitraryo ang ibig sabihin ay walang natural na koneksyon ang tunog ng salita sa bagay na tinutukoy nito."
        }
      ]
    },
    {
      moduleNumber: 3,
      title: "Mga Teorya sa Pinagmulan at Pagkatuto ng Wika",
      description: "Overview of origin theories",
      category: "Foundation",
      color: "foundation",
      studyCards: [
        {
          title: "Pangkalahatang-ideya",
          content: "Mga teoryang Bow-wow, Ding-dong, Pooh-pooh at iba pang mga teorya sa pinagmulan ng wika."
        },
        {
          title: "Key Theories",
          content: "Chomsky LAD, behaviorism, interactionist approach sa pagkatuto ng wika."
        }
      ],
      quizQuestions: [
        {
          question: "Aling teorya ang tungkol sa tunog ng kalikasan?",
          options: ["Bow-wow", "Ding-dong", "Pooh-pooh", "LAD"],
          answer: 0,
          explanation: "Ang Bow-wow theory ay nagsasabing nagmula ang wika sa panggagaya sa mga tunog ng kalikasan."
        },
        {
          question: "Sino ang may LAD?",
          options: ["Chomsky", "Bloomfield", "Saussure", "Whorf"],
          answer: 0,
          explanation: "Si Noam Chomsky ang nag-propose ng Language Acquisition Device (LAD)."
        },
        {
          question: "Ano ang teoryang Ding-dong?",
          options: ["Tunog ng bagay", "Relativity", "Behavior", "Lahat"],
          answer: 0,
          explanation: "Ang Ding-dong theory ay tungkol sa tunog na ginagawa ng mga bagay."
        }
      ]
    },
    {
      moduleNumber: 4,
      title: "Ugnayan ng Wika sa Kultura at Lipunan",
      description: "Language, culture, society",
      category: "Social",
      color: "social",
      studyCards: [
        {
          title: "Overview",
          content: "Language mirrors culture - ang wika ay salamin ng kultura."
        },
        {
          title: "Examples",
          content: "Code-switching, diglossia na makikita sa pamumuhay."
        }
      ],
      quizQuestions: [
        {
          question: "Ano ang diglossia?",
          options: ["Dalawang baryasyong wika", "Isang teorya", "Hayop", "Pagkain"],
          answer: 0,
          explanation: "Diglossia ay ang paggamit ng dalawang baryasyon ng wika sa iba't ibang sitwasyon."
        },
        {
          question: "Code-switching example?",
          options: ["Taglish", "Math", "Music", "Dance"],
          answer: 0,
          explanation: "Taglish ay halimbawa ng code-switching sa Pilipinas."
        },
        {
          question: "Language reflects?",
          options: ["Culture", "Weather", "Games", "Food"],
          answer: 0,
          explanation: "Ang wika ay sumasalamin sa kultura ng mga gumagamit nito."
        }
      ]
    },
    {
      moduleNumber: 5,
      title: "Ang Sosyolinggwistika at Ang Speech Community",
      description: "Sociolinguistics basics",
      category: "Social",
      color: "social",
      studyCards: [
        {
          title: "Speech Community",
          content: "Shared norms - pagkakaparehong pamantayan sa wika."
        },
        {
          title: "Sociolinguistics Scope",
          content: "Language and society - pag-aaral ng wika at lipunan."
        }
      ],
      quizQuestions: [
        {
          question: "Speech community shares?",
          options: ["Linguistic norms", "Shoes", "Food", "Cars"],
          answer: 0,
          explanation: "Ang speech community ay nagkakaparehong linguistic norms."
        },
        {
          question: "Field studying language and society?",
          options: ["Sosyolinggwistika", "Botany", "Chemistry", "Physics"],
          answer: 0,
          explanation: "Sosyolinggwistika ang pag-aaral ng ugnayan ng wika at lipunan."
        },
        {
          question: "Example of speech community?",
          options: ["Cebuano speakers", "Random", "Dogs", "Cats"],
          answer: 0,
          explanation: "Ang mga nagsasalita ng Cebuano ay isang speech community."
        }
      ]
    },
    {
      moduleNumber: 6,
      title: "Ang Sosyolinggwistika at Speech Community (Part 2)",
      description: "Applications",
      category: "Social",
      color: "social",
      studyCards: [
        {
          title: "Ethnography",
          content: "SPEAKING model para sa pag-aaral ng komunikasyon."
        },
        {
          title: "Language Attitudes",
          content: "Prestige and stigma sa mga wika at dayalekto."
        }
      ],
      quizQuestions: [
        {
          question: "S sa SPEAKING?",
          options: ["Setting", "Sound", "Salt", "Soup"],
          answer: 0,
          explanation: "S sa SPEAKING model ay Setting - ang lugar at panahon."
        },
        {
          question: "Prestige variety?",
          options: ["High status", "Low", "None", "Zero"],
          answer: 0,
          explanation: "Prestige variety ay ang high status na baryasyon ng wika."
        },
        {
          question: "Language attitude studies?",
          options: ["Opinion on accents", "Trees", "Cars", "Flowers"],
          answer: 0,
          explanation: "Language attitudes ay tungkol sa opinion sa mga accent at wika."
        }
      ]
    },
    {
      moduleNumber: 7,
      title: "Varayti ng Wika at Varyasyon ng Wika",
      description: "Language varieties",
      category: "Varieties",
      color: "varieties",
      studyCards: [
        {
          title: "Varayti",
          content: "Dayalek, sosyolek - mga uri ng pagkakaiba ng wika."
        },
        {
          title: "Variation",
          content: "Phonological, lexical na pagkakaiba sa wika."
        }
      ],
      quizQuestions: [
        {
          question: "Dayalek base sa?",
          options: ["Lugar", "Edad", "Trabaho", "Panahon"],
          answer: 0,
          explanation: "Dayalek ay batay sa heograpikong lugar."
        },
        {
          question: "Sosyolek base sa?",
          options: ["Grupo", "Lugar", "Klima", "Buwan"],
          answer: 0,
          explanation: "Sosyolek ay batay sa social group."
        },
        {
          question: "Lexical variation?",
          options: ["Different words", "Same", "Cats", "Dogs"],
          answer: 0,
          explanation: "Lexical variation ay pagkakaiba sa mga salita."
        }
      ]
    },
    {
      moduleNumber: 8,
      title: "Idyolek, Dayalek, Sosyolek",
      description: "Specific varieties",
      category: "Varieties",
      color: "varieties",
      studyCards: [
        {
          title: "Idyolek",
          content: "Personal style - natatanging istilo ng bawat tao."
        },
        {
          title: "Examples",
          content: "Signature phrases - mga kilalang salita ng mga personalidad."
        }
      ],
      quizQuestions: [
        {
          question: "Idyolek example?",
          options: ["Unique phrases", "Common", "None", "Zero"],
          answer: 0,
          explanation: "Idyolek ay mga unique phrases ng bawat tao."
        },
        {
          question: "Dayalek relates to?",
          options: ["Region", "Animal", "Plant", "Rock"],
          answer: 0,
          explanation: "Dayalek ay kaugnay ng rehiyon o lugar."
        },
        {
          question: "Sosyolek relates to?",
          options: ["Social group", "Weather", "Fish", "Bird"],
          answer: 0,
          explanation: "Sosyolek ay kaugnay ng social group."
        }
      ]
    },
    {
      moduleNumber: 9,
      title: "Lingua Franca, Pidgin at Creole",
      description: "Contact languages",
      category: "Varieties",
      color: "varieties",
      studyCards: [
        {
          title: "Lingua Franca",
          content: "Common language - pangkaraniwang wika sa komunikasyon."
        },
        {
          title: "Pidgin vs Creole",
          content: "Pidgin simplified, Creole nativized - may pagkakaiba."
        }
      ],
      quizQuestions: [
        {
          question: "Chavacano is?",
          options: ["Creole", "Pidgin", "Lingua Franca", "Dialek"],
          answer: 0,
          explanation: "Chavacano ay isang creole na nagmula sa Spanish."
        },
        {
          question: "Pidgin has?",
          options: ["No native speakers", "Many", "All", "None"],
          answer: 0,
          explanation: "Pidgin ay walang native speakers."
        },
        {
          question: "Lingua franca purpose?",
          options: ["Bridge communication", "Food", "Sport", "Dance"],
          answer: 0,
          explanation: "Lingua franca ay para sa bridge communication."
        }
      ]
    },
    {
      moduleNumber: 10,
      title: "Gamit at Kahalagahan ng Wika sa Lipunan",
      description: "Halliday functions",
      category: "Applications",
      color: "applications",
      studyCards: [
        {
          title: "Halliday 7 functions",
          content: "Instrumental, regulatory, interactional - mga gamit ng wika."
        },
        {
          title: "Examples",
          content: "Signs, requests - mga halimbawa ng paggamit."
        }
      ],
      quizQuestions: [
        {
          question: "Regulatory function?",
          options: ["Bawal Tumawid", "Good morning", "Tree", "Sky"],
          answer: 0,
          explanation: "Regulatory function ay tulad ng 'Bawal Tumawid'."
        },
        {
          question: "Instrumental?",
          options: ["Pabili", "Hello", "Why", "Cat"],
          answer: 0,
          explanation: "Instrumental function ay tulad ng 'Pabili'."
        },
        {
          question: "Personal function?",
          options: ["Express feelings", "Rules", "Trade", "Math"],
          answer: 0,
          explanation: "Personal function ay para sa pagpapahayag ng damdamin."
        }
      ]
    },
    {
      moduleNumber: 11,
      title: "Wikang Pambansa, Wikang Opisyal at Wikang Panturo",
      description: "Language policies",
      category: "Applications",
      color: "applications",
      studyCards: [
        {
          title: "Definitions",
          content: "National, official, instructional - mga uri ng wika sa gobyerno."
        },
        {
          title: "Philippine context",
          content: "Filipino, English - mga opisyal na wika ng Pilipinas."
        }
      ],
      quizQuestions: [
        {
          question: "Wikang Pambansa ng Pilipinas?",
          options: ["Filipino", "English", "Spanish", "Cebuano"],
          answer: 0,
          explanation: "Filipino ang wikang pambansa ng Pilipinas."
        },
        {
          question: "Official languages?",
          options: ["Filipino and English", "French", "German", "Latin"],
          answer: 0,
          explanation: "Filipino at English ang mga wikang opisyal."
        },
        {
          question: "Wikang Panturo K-3?",
          options: ["Mother Tongue", "Latin", "Greek", "German"],
          answer: 0,
          explanation: "Mother Tongue ang wikang panturo sa K-3."
        }
      ]
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
  const studyCards = module.studyCards || [];
  const totalCards = studyCards.length;
  
  if (totalCards === 0) {
    document.getElementById('studyCardTitle').textContent = 'No Content';
    document.getElementById('studyCardContent').innerHTML = '<p>No study cards available for this module.</p>';
    document.getElementById('cardCounter').textContent = `0 / 0`;
    return;
  }
  
  const currentCard = studyCards[cardIndex];
  document.getElementById('studyCardTitle').textContent = currentCard.title;
  document.getElementById('studyCardContent').innerHTML = `<p>${currentCard.content}</p>`;
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
  const totalCards = module.studyCards ? module.studyCards.length : 0;
  
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
  const totalCards = module.studyCards ? module.studyCards.length : 0;
  
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
    // Get all questions from all modules and shuffle
    const allQuestions = [];
    appData.modules.forEach(module => {
      if (module.quizQuestions) {
        module.quizQuestions.forEach(question => {
          allQuestions.push({...question, moduleNumber: module.moduleNumber});
        });
      }
    });
    return allQuestions.sort(() => Math.random() - 0.5);
  } else {
    // Return questions for current module
    return currentState.currentModule.quizQuestions || [];
  }
}

function renderQuizQuestion() {
  const questions = getQuizQuestions();
  const questionIndex = currentState.quizQuestionIndex;
  
  if (questionIndex >= questions.length || questions.length === 0) {
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
  showQuizFeedback(isCorrect, question.explanation || 'No explanation available.');
  
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
  const progress = questions.length > 0 ? ((currentState.quizQuestionIndex + 1) / questions.length) * 100 : 0;
  
  document.getElementById('quizProgressFill').style.width = `${progress}%`;
  document.getElementById('questionCounter').textContent = `${currentState.quizQuestionIndex + 1} / ${questions.length}`;
}

function showQuizResults() {
  const correctAnswers = currentState.quizAnswers.filter(a => a.isCorrect).length;
  const totalQuestions = currentState.quizAnswers.length;
  const percentage = totalQuestions > 0 ? Math.round((correctAnswers / totalQuestions) * 100) : 0;
  
  // Update progress if not random quiz
  if (!currentState.isRandomQuiz && currentState.currentModule) {
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
  if (currentState.currentModule) {
    const currentModuleNumber = currentState.currentModule.moduleNumber;
    document.getElementById('prevModuleFromResults').disabled = currentModuleNumber === 1;
    document.getElementById('nextModuleFromResults').disabled = currentModuleNumber === 11;
  }
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