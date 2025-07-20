// ===== UNITY LOOPS - SIMPLIFIED OZZYRABBIT STRUCTURE =====
// Direct adaptation of proven OZZYRABBIT framework

// --- Loop Progression System ---
const loopOrder = [
    { 
        titleIncludes: "Immigration", 
        file: "immigration.html", 
        unlockScore: 40, 
        isFinal: false 
    },
    { 
        titleIncludes: "Healthcare", 
        file: "healthcare.html", 
        unlockScore: 60,
        isFinal: false 
    },
    { 
        titleIncludes: "Climate Action", 
        file: "climate.html", 
        unlockScore: 80, 
        isFinal: false 
    },
    { 
        titleIncludes: "Criminal Justice", 
        file: "justice.html", 
        unlockScore: 100, 
        isFinal: false 
    },
    { 
        titleIncludes: "Economic Policy", 
        file: "economics.html", 
        unlockScore: 120, 
        isFinal: false 
    },
    { 
        titleIncludes: "Democratic Values", 
        file: "democracy.html", 
        unlockScore: Infinity, 
        isFinal: true 
    }
];

// --- Global Game Variables (Direct from OZZYRABBIT) ---
let currentContentPool = [];
let userScore = 0;
let leftBeliefScore = 0;  // Was loneGunmanBeliefScore in OZZYRABBIT
let rightBeliefScore = 0; // Was conspiracyBeliefScore in OZZYRABBIT
let currentImplicitPreference = 'neutral';
let currentIndex = -1;
let contentShown = 0;
let maxContentToShow = 8;
let chosenPerspective = null;

// --- DOM Elements ---
let scoreDisplay = null;
let preferenceSelection = null;
let chooseLeftButton = null;
let chooseRightButton = null;
let contentDisplayArea = null;
let nextButton = null;
let bridgeCommentary = null; // Was houseCommentary in OZZYRABBIT
let progressIndicator = null;
let currentLoopDisplay = null;
let unlockStatus = null;

// --- Utility Functions ---
function logDebug(message) {
    console.log(`[UNITY LOOPS] ${message}`);
}

function getCurrentLoopData() {
    return loopOrder.find(loop => document.title.includes(loop.titleIncludes));
}

// --- Content Pool Assignment (Direct from OZZYRABBIT) ---
function assignContentPool() {
    // This function expects each HTML page to define getLoopContent()
    if (typeof getLoopContent === 'function') {
        currentContentPool = getLoopContent();
    } else {
        logDebug("Warning: No loop content found. Make sure each page defines getLoopContent()");
        currentContentPool = [];
    }

    // Simple shuffle (from OZZYRABBIT)
    currentContentPool = shuffleArray(currentContentPool);
    
    maxContentToShow = Math.min(8, currentContentPool.length);
    logDebug(`Content pool assigned: ${currentContentPool.length} items. Max to show: ${maxContentToShow}`);
}

function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// --- Scoring Logic (Direct from OZZYRABBIT) ---
function determineImplicitPreference() {
    if (leftBeliefScore > rightBeliefScore + 50) {
        return 'left_leaning';
    } else if (rightBeliefScore > leftBeliefScore + 50) {
        return 'right_leaning';
    } else {
        return 'balanced';
    }
}

function updateScores(itemValue, itemStance, isCorrect = null) {
    const baseScore = itemValue;
    userScore += baseScore;

    // Update belief scores based on stance
    // Each loop will define its own left/right stance labels
    const currentLoop = getCurrentLoopData();
    
    // For Immigration: humanitarian (left) vs security_first (right)
    // Other loops will have their own stance mappings
    if (itemStance === getLeftStance()) {
        leftBeliefScore += itemValue;
    } else if (itemStance === getRightStance()) {
        rightBeliefScore += itemValue;
    }

    currentImplicitPreference = determineImplicitPreference();
    updateDisplays();
    logDebug(`Score: ${userScore} (+${baseScore}), Preference: ${currentImplicitPreference}`);
}

function getLeftStance() {
    const currentLoop = getCurrentLoopData();
    if (!currentLoop) return 'left';
    
    // Define stance mappings for each loop
    const stanceMappings = {
        'Immigration': 'humanitarian',
        'Healthcare': 'universal_care',
        'Climate Action': 'environmental_protection', 
        'Criminal Justice': 'reform_rehabilitation',
        'Economic Policy': 'government_intervention',
        'Democratic Values': 'collective_responsibility'
    };
    
    return stanceMappings[currentLoop.titleIncludes] || 'left';
}

function getRightStance() {
    const currentLoop = getCurrentLoopData();
    if (!currentLoop) return 'right';
    
    // Define stance mappings for each loop
    const stanceMappings = {
        'Immigration': 'security_first',
        'Healthcare': 'market_solutions',
        'Climate Action': 'economic_priorities',
        'Criminal Justice': 'law_order', 
        'Economic Policy': 'free_market',
        'Democratic Values': 'individual_liberty'
    };
    
    return stanceMappings[currentLoop.titleIncludes] || 'right';
}

function updateDisplays() {
    if (scoreDisplay) {
        scoreDisplay.textContent = Math.floor(userScore);
    }
    
    if (progressIndicator) {
        const progress = Math.floor((contentShown / maxContentToShow) * 100);
        progressIndicator.textContent = `${contentShown}/${maxContentToShow} (${progress}%)`;
    }
}

// --- Content Display Logic (Direct from OZZYRABBIT) ---
function displayRandomContent() {
    if (contentShown >= maxContentToShow) {
        handleEndOfLoop();
        return;
    }

    if (!currentContentPool || currentContentPool.length === 0) {
        bridgeCommentary.innerHTML = "<span class='bridge-text'>The Bridge: No content found...</span>";
        return;
    }

    const randomIndex = Math.floor(Math.random() * currentContentPool.length);
    const selectedItem = currentContentPool[randomIndex];
    currentIndex = randomIndex;
    contentShown++;

    displayContent(selectedItem);
    updateDisplays();
}

function displayContent(item) {
    contentDisplayArea.innerHTML = '';
    
    // Show Bridge commentary
    if (item.bridge_commentary) {
        bridgeCommentary.innerHTML = `<span class='bridge-text'>The Bridge: ${item.bridge_commentary}</span>`;
    }

    logDebug(`Displaying: ${item.type} (${item.stance}) - ${contentShown}/${maxContentToShow}`);

    switch (item.type) {
        case "tf_question":
            displayTrueFalseQuestion(item);
            break;
        case "mc_question":
            displayMultipleChoiceQuestion(item);
            break;
        case "video":
            displayVideo(item);
            break;
        case "factoid":
        default:
            displayFactoid(item);
            break;
    }
}

function displayTrueFalseQuestion(item) {
    contentDisplayArea.innerHTML = `
        <div class="question-container">
            <h3>${item.question}</h3>
            <div class="tf-options">
                <button class="answer-btn true-btn" onclick="handleAnswer(true, ${item.correct_answer}, ${item.value}, '${item.stance}', '${item.correct_feedback}', '${item.incorrect_feedback}')">
                    TRUE
                </button>
                <button class="answer-btn false-btn" onclick="handleAnswer(false, ${item.correct_answer}, ${item.value}, '${item.stance}', '${item.correct_feedback}', '${item.incorrect_feedback}')">
                    FALSE
                </button>
            </div>
        </div>
    `;
    
    nextButton.style.display = 'none';
}

function displayMultipleChoiceQuestion(item) {
    let optionsHtml = '';
    for (const key in item.options) {
        optionsHtml += `
            <button class="answer-btn mc-btn" onclick="handleAnswer('${key}', '${item.correct_answer_key}', ${item.value}, '${item.stance}', '${item.correct_feedback}', '${item.incorrect_feedback}')">
                ${key}: ${item.options[key]}
            </button>
        `;
    }
    
    contentDisplayArea.innerHTML = `
        <div class="question-container">
            <h3>${item.question}</h3>
            <div class="mc-options">
                ${optionsHtml}
            </div>
        </div>
    `;
    
    nextButton.style.display = 'none';
}

function displayVideo(item) {
    let embedUrl = item.url;
    if (item.url.includes('youtube.com/watch')) {
        embedUrl = item.url.replace('watch?v=', 'embed/').split('&')[0];
    }
    
    contentDisplayArea.innerHTML = `
        <div class="video-container">
            <h3>${item.title}</h3>
            <iframe src="${embedUrl}" frameborder="0" allowfullscreen></iframe>
        </div>
    `;
    
    updateScores(item.value, item.stance);
    nextButton.style.display = 'block';
}

function displayFactoid(item) {
    contentDisplayArea.innerHTML = `
        <div class="factoid-container">
            <div class='factoid-text'>${item.text}</div>
        </div>
    `;
    
    updateScores(item.value, item.stance);
    nextButton.style.display = 'block';
}

// --- Answer Handling (Direct from OZZYRABBIT) ---
function handleAnswer(userAnswer, correctAnswer, baseValue, stance, correctFeedback, incorrectFeedback) {
    const isCorrect = (userAnswer === correctAnswer);
    logDebug(`Answer: ${userAnswer} vs ${correctAnswer} = ${isCorrect ? 'Correct' : 'Incorrect'}`);

    updateScores(baseValue, stance, isCorrect);
    provideBridgeCommentary(stance, isCorrect, correctFeedback, incorrectFeedback);

    // Disable buttons and show feedback
    const buttons = contentDisplayArea.querySelectorAll('.answer-btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.onclick.toString().includes(`'${userAnswer}'`) || 
            button.onclick.toString().includes(`${userAnswer},`)) {
            button.classList.add(isCorrect ? 'correct-answer' : 'incorrect-answer');
        }
    });

    nextButton.style.display = 'block';
}

// --- Bridge Commentary (Was House Commentary in OZZYRABBIT) ---
function provideBridgeCommentary(itemStance, isCorrect, correctFeedback = "", incorrectFeedback = "") {
    let commentary = "";

    if (isCorrect === true) {
        commentary = correctFeedback || "The Bridge: Understanding deepens.";
    } else if (isCorrect === false) {
        commentary = incorrectFeedback || "The Bridge: Consider alternative perspectives.";
    } else {
        commentary = generatePersonalizedCommentary(itemStance);
    }

    bridgeCommentary.innerHTML = `<span class='bridge-text'>The Bridge: ${commentary}</span>`;
}

function generatePersonalizedCommentary(itemStance) {
    const preference = currentImplicitPreference;
    
    if (preference === 'balanced') {
        return "You seek balance between perspectives.";
    } else if ((preference === 'left_leaning' && itemStance === getLeftStance()) || 
               (preference === 'right_leaning' && itemStance === getRightStance())) {
        return "This reinforces your current perspective.";
    } else {
        return "This challenges your current viewpoint.";
    }
}

// --- End of Loop Logic (Direct from OZZYRABBIT) ---
function handleEndOfLoop() {
    const currentLoopData = getCurrentLoopData();
    if (!currentLoopData) {
        displayError("Could not identify current loop.");
        return;
    }

    
     contentDisplayArea.innerHTML = `
        <div class="loop-complete">
            <h2>Loop Complete: ${currentLoopData.titleIncludes}</h2>
            <p>Final Score: ${Math.floor(userScore)}</p>
            <p>Your Perspective: ${currentImplicitPreference}</p>
            
            
    `;   

    nextButton.style.display = 'none';

    if (currentLoopData.isFinal) {
        handleStrangeLoop();
    } else {
        handleRegularLoopEnd(currentLoopData);
    }
}

function handleStrangeLoop() {
    bridgeCommentary.innerHTML = `
        <span class='bridge-text'>
            The Bridge: You have reached the heart of democratic dialogue. 
            Here, the conversation becomes eternal...
        </span>
    `;
    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="strange-loop">
                <h3>🗽 DEMOCRATIC STRANGE LOOP 🗽</h3>
                <p>Democracy requires the ability to disagree while maintaining respect.</p>
                
                <div class="completion-actions">
                    <button onclick="returnToBeginning()" class="begin-again-btn">🔄 Begin Again</button>
                    <a href="https://unity-loops.com/hub" class="explore-all-loops">
                        🏛️ Explore All 6 Consciousness Loops
                    </a>
                </div>
                
                <div class="frontier-motto">
                    <p>"It's Loops All the Way Down"</p>
                </div>
            </div>
        `;
    }
}

function handleRegularLoopEnd(currentLoopData) {
    const nextLoopIndex = loopOrder.indexOf(currentLoopData) + 1;
    const nextLoopData = loopOrder[nextLoopIndex];
    const unlockThreshold = currentLoopData.unlockScore;

    if (userScore >= unlockThreshold) {
        handleSuccessfulUnlock(nextLoopData);
    } else {
        handleFailedUnlock(nextLoopData, unlockThreshold);
    }
}

function handleSuccessfulUnlock(nextLoopData) {
    bridgeCommentary.innerHTML = `
        <span class='bridge-text'>
            The Bridge: Excellent! Your understanding has unlocked "${nextLoopData.titleIncludes}".
        </span>
    `;

    nextButton.textContent = `Continue to ${nextLoopData.titleIncludes}`;
    nextButton.style.display = 'block';
    nextButton.onclick = () => {
        window.location.href = nextLoopData.file;
    };

    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="unlock-success">
                <h3>🔓 BRIDGE UNLOCKED</h3>
                <p>Next: ${nextLoopData.titleIncludes}</p>
            </div>
        `;
    }
}

function handleFailedUnlock(nextLoopData, unlockThreshold) {
    const pointsNeeded = unlockThreshold - userScore;

    bridgeCommentary.innerHTML = `
        <span class='bridge-text'>
            The Bridge: You need ${pointsNeeded} more points to explore "${nextLoopData.titleIncludes}".
        </span>
    `;

    if (unlockStatus) {
        unlockStatus.classList.remove('hidden');
        unlockStatus.innerHTML = `
            <div class="unlock-failed">
                <h3>🔒 MORE EXPLORATION NEEDED</h3>
                <p>Score: ${Math.floor(userScore)} / ${unlockThreshold}</p>
                <p>Points needed: ${pointsNeeded}</p>
                <button onclick="location.reload()">Try Again</button>
            </div>
        `;
    }
}

// --- Navigation Functions ---
function returnToBeginning() {
    if (confirm("Return to the beginning?")) {
        window.location.href = 'immigration.html';
    }
}

function displayError(message) {
    contentDisplayArea.innerHTML = `<div class="error"><h3>Error</h3><p>${message}</p></div>`;
    bridgeCommentary.innerHTML = "<span class='bridge-text'>The Bridge: An error occurred...</span>";
}

// --- Game Initialization (Direct from OZZYRABBIT) ---
function initializeUnityLoops() {
    logDebug("Initializing Unity Loops...");

    // Get DOM elements
    scoreDisplay = document.getElementById('current-score');
    preferenceSelection = document.getElementById('perspective-selection');
    chooseLeftButton = document.getElementById('choose-left');
    chooseRightButton = document.getElementById('choose-right');
    contentDisplayArea = document.getElementById('content-display');
    nextButton = document.getElementById('next-button');
    bridgeCommentary = document.getElementById('bridge-commentary');
    progressIndicator = document.getElementById('progress-indicator');
    currentLoopDisplay = document.getElementById('current-loop');
    unlockStatus = document.getElementById('unlock-status');

    assignContentPool();
    updateDisplays();

    // Initial UI state
    if (preferenceSelection) preferenceSelection.classList.remove('hidden');
    if (nextButton) nextButton.style.display = 'none';
    if (unlockStatus) unlockStatus.classList.add('hidden');
    
    bridgeCommentary.innerHTML = "<span class='bridge-text'>The Bridge: Choose your perspective to begin...</span>";

    logDebug(`Unity Loops initialized for: ${getCurrentLoopData()?.titleIncludes || 'Unknown Loop'}`);
}

function startGameLoop() {
    logDebug(`Starting with perspective: ${chosenPerspective}`);

    if (preferenceSelection) preferenceSelection.classList.add('hidden');
    if (nextButton) nextButton.style.display = 'block';

    bridgeCommentary.innerHTML = `<span class='bridge-text'>The Bridge: Your journey begins...</span>`;
    
    setTimeout(displayRandomContent, 1000);
}

// --- Event Listeners Setup ---
function setupEventListeners() {
    if (chooseLeftButton) {
        chooseLeftButton.addEventListener('click', () => {
            chosenPerspective = getLeftStance();
            chooseLeftButton.classList.add('selected');
            chooseRightButton.classList.add('dimmed');
            setTimeout(startGameLoop, 1000);
        });
    }

    if (chooseRightButton) {
        chooseRightButton.addEventListener('click', () => {
            chosenPerspective = getRightStance();
            chooseRightButton.classList.add('selected');
            chooseLeftButton.classList.add('dimmed');
            setTimeout(startGameLoop, 1000);
        });
    }

    if (nextButton) {
        nextButton.addEventListener('click', displayRandomContent);
    }
}

// --- Auto-initialize ---
document.addEventListener('DOMContentLoaded', () => {
    logDebug("DOM loaded - Initializing Unity Loops");
    initializeUnityLoops();
    setupEventListeners();
});

// --- Debug Interface ---
if (typeof window !== 'undefined') {
    window.unityLoopsDebug = {
        userScore: () => userScore,
        beliefs: () => ({ left: leftBeliefScore, right: rightBeliefScore }),
        preference: () => currentImplicitPreference,
        addScore: (points) => { userScore += points; updateDisplays(); },
        skipToEnd: () => { contentShown = maxContentToShow; handleEndOfLoop(); }
    };
}
