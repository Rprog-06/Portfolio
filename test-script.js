// MCQ Test Application - DSA & OOP Assessment
class MCQTest {
    constructor() {
        this.questions = [
            // DSA Questions (10 questions)
            {
                id: 1,
                category: "Data Structures",
                difficulty: "Medium",
                question: "What is the time complexity of inserting an element at the beginning of a dynamic array (like ArrayList in Java)?",
                code: null,
                options: [
                    "O(1) - Constant time",
                    "O(n) - Linear time", 
                    "O(log n) - Logarithmic time",
                    "O(n²) - Quadratic time"
                ],
                correct: 1,
                explanation: "Inserting at the beginning requires shifting all existing elements one position to the right, making it O(n)."
            },
            {
                id: 2,
                category: "Algorithms",
                difficulty: "Hard",
                question: "In a Red-Black tree, what is the maximum possible height in terms of the number of nodes n?",
                code: null,
                options: [
                    "log₂(n)",
                    "2 × log₂(n + 1)",
                    "2 × log₂(n)",
                    "n"
                ],
                correct: 1,
                explanation: "A Red-Black tree maintains balance such that the height is at most 2×log₂(n+1), ensuring O(log n) operations."
            },
            {
                id: 3,
                category: "Data Structures", 
                difficulty: "Medium",
                question: "Which data structure would be most efficient for implementing an LRU (Least Recently Used) cache?",
                code: null,
                options: [
                    "Array + HashMap",
                    "Doubly Linked List + HashMap",
                    "Binary Search Tree",
                    "Stack + Queue"
                ],
                correct: 1,
                explanation: "Doubly Linked List allows O(1) insertion/deletion, while HashMap provides O(1) lookup for cache operations."
            },
            {
                id: 4,
                category: "Algorithms",
                difficulty: "Hard",
                question: "What is the time complexity of the following recursive function?",
                code: `int mystery(int n) {
    if (n <= 1) return 1;
    return mystery(n-1) + mystery(n-2) + mystery(n-3);
}`,
                options: [
                    "O(n)",
                    "O(n²)",
                    "O(3ⁿ)",
                    "O(2ⁿ)"
                ],
                correct: 2,
                explanation: "Each call branches into 3 recursive calls, creating a tree of depth n with branching factor 3, resulting in O(3ⁿ)."
            },
            {
                id: 5,
                category: "Data Structures",
                difficulty: "Medium",
                question: "In a min-heap with n elements, what is the time complexity to find the second smallest element?",
                code: null,
                options: [
                    "O(1)",
                    "O(log n)",
                    "O(n)",
                    "O(n log n)"
                ],
                correct: 1,
                explanation: "The second smallest element must be one of the root's children. We need to check at most O(log n) nodes."
            },
            {
                id: 6,
                category: "Algorithms",
                difficulty: "Hard",
                question: "Which algorithm has the best average-case time complexity for sorting?",
                code: null,
                options: [
                    "Quick Sort - O(n log n)",
                    "Merge Sort - O(n log n)", 
                    "Heap Sort - O(n log n)",
                    "All have the same average complexity"
                ],
                correct: 3,
                explanation: "Quick Sort, Merge Sort, and Heap Sort all have O(n log n) average time complexity, but differ in worst-case and space complexity."
            },
            {
                id: 7,
                category: "Data Structures",
                difficulty: "Medium",
                question: "What happens when you try to insert a duplicate key in a standard Hash Table with chaining?",
                code: null,
                options: [
                    "The old value is replaced",
                    "The new value is added to the chain",
                    "An exception is thrown",
                    "The operation is ignored"
                ],
                correct: 0,
                explanation: "In most hash table implementations, inserting a duplicate key replaces the existing value associated with that key."
            },
            {
                id: 8,
                category: "Algorithms",
                difficulty: "Hard",
                question: "In dynamic programming, what is the space complexity of the optimal solution for the 0/1 Knapsack problem?",
                code: null,
                options: [
                    "O(n × W) where n is items and W is capacity",
                    "O(W) where W is the knapsack capacity",
                    "O(n) where n is the number of items",
                    "O(1) constant space"
                ],
                correct: 1,
                explanation: "Using space optimization, we only need to store the previous row of the DP table, reducing space from O(n×W) to O(W)."
            },
            {
                id: 9,
                category: "Data Structures",
                difficulty: "Medium",
                question: "Which of the following is true about B+ trees compared to B trees?",
                code: null,
                options: [
                    "B+ trees store data in both internal and leaf nodes",
                    "B+ trees have better range query performance",
                    "B+ trees use more memory than B trees",
                    "B+ trees have worse insertion performance"
                ],
                correct: 1,
                explanation: "B+ trees store all data in leaf nodes and link them, making range queries much more efficient than B trees."
            },
            {
                id: 10,
                category: "Algorithms",
                difficulty: "Hard",
                question: "What is the minimum number of comparisons needed to find both maximum and minimum elements in an unsorted array of n elements?",
                code: null,
                options: [
                    "2n - 2",
                    "3n/2 - 2",
                    "n - 1", 
                    "2n"
                ],
                correct: 1,
                explanation: "By comparing elements in pairs and then comparing winners for max and losers for min, we need 3n/2 - 2 comparisons."
            },
            
            // OOP Questions (10 questions)
            {
                id: 11,
                category: "Object-Oriented Programming",
                difficulty: "Medium",
                question: "What will be the output of the following Java code?",
                code: `class Parent {
    void display() { System.out.print("Parent "); }
}
class Child extends Parent {
    void display() { System.out.print("Child "); }
}
public class Test {
    public static void main(String[] args) {
        Parent p = new Child();
        p.display();
    }
}`,
                options: [
                    "Parent",
                    "Child", 
                    "Compilation Error",
                    "Runtime Error"
                ],
                correct: 1,
                explanation: "This demonstrates dynamic method dispatch. The overridden method in Child class is called at runtime."
            },
            {
                id: 12,
                category: "Object-Oriented Programming",
                difficulty: "Hard",
                question: "Which design pattern is most appropriate for creating a family of related objects without specifying their concrete classes?",
                code: null,
                options: [
                    "Factory Method Pattern",
                    "Abstract Factory Pattern",
                    "Builder Pattern",
                    "Prototype Pattern"
                ],
                correct: 1,
                explanation: "Abstract Factory Pattern provides an interface for creating families of related objects without specifying their concrete classes."
            },
            {
                id: 13,
                category: "Object-Oriented Programming",
                difficulty: "Medium",
                question: "What is the main difference between Composition and Aggregation in OOP?",
                code: null,
                options: [
                    "Composition is stronger than Aggregation",
                    "Aggregation implies ownership, Composition doesn't",
                    "Composition implies 'part-of' relationship with lifecycle dependency",
                    "There is no difference"
                ],
                correct: 2,
                explanation: "Composition implies a strong 'part-of' relationship where the child cannot exist without the parent, while Aggregation is a weaker 'has-a' relationship."
            },
            {
                id: 14,
                category: "Object-Oriented Programming", 
                difficulty: "Hard",
                question: "What will happen when this C++ code is executed?",
                code: `class Base {
public:
    virtual ~Base() { cout << "Base destructor" << endl; }
};
class Derived : public Base {
public:
    ~Derived() { cout << "Derived destructor" << endl; }
};
int main() {
    Base* ptr = new Derived();
    delete ptr;
    return 0;
}`,
                options: [
                    "Only Base destructor is called",
                    "Only Derived destructor is called", 
                    "Both destructors are called: Derived first, then Base",
                    "Compilation error"
                ],
                correct: 2,
                explanation: "Virtual destructor ensures proper cleanup. Derived destructor is called first, then Base destructor automatically."
            },
            {
                id: 15,
                category: "Object-Oriented Programming",
                difficulty: "Medium",
                question: "Which SOLID principle is violated by a class that has methods for both database operations and email sending?",
                code: null,
                options: [
                    "Single Responsibility Principle",
                    "Open/Closed Principle",
                    "Liskov Substitution Principle", 
                    "Interface Segregation Principle"
                ],
                correct: 0,
                explanation: "Single Responsibility Principle states that a class should have only one reason to change. Database and email operations are different responsibilities."
            },
            {
                id: 16,
                category: "Object-Oriented Programming",
                difficulty: "Hard",
                question: "In Java, what is the difference between method overloading and method overriding in terms of binding?",
                code: null,
                options: [
                    "Both use static binding",
                    "Both use dynamic binding",
                    "Overloading uses static binding, Overriding uses dynamic binding",
                    "Overloading uses dynamic binding, Overriding uses static binding"
                ],
                correct: 2,
                explanation: "Method overloading is resolved at compile time (static binding), while method overriding is resolved at runtime (dynamic binding)."
            },
            {
                id: 17,
                category: "Object-Oriented Programming",
                difficulty: "Medium",
                question: "What is the purpose of the 'protected' access modifier in inheritance?",
                code: null,
                options: [
                    "Accessible only within the same class",
                    "Accessible within the same package and subclasses",
                    "Accessible everywhere",
                    "Accessible only in subclasses"
                ],
                correct: 1,
                explanation: "Protected members are accessible within the same package and by subclasses, even if they're in different packages."
            },
            {
                id: 18,
                category: "Object-Oriented Programming",
                difficulty: "Hard", 
                question: "Which design pattern ensures that a class has only one instance and provides global access to it?",
                code: `class DatabaseConnection {
    private static DatabaseConnection instance;
    private DatabaseConnection() {}
    
    public static DatabaseConnection getInstance() {
        if (instance == null) {
            instance = new DatabaseConnection();
        }
        return instance;
    }
}`,
                options: [
                    "Factory Pattern",
                    "Singleton Pattern",
                    "Observer Pattern",
                    "Strategy Pattern"
                ],
                correct: 1,
                explanation: "Singleton Pattern ensures only one instance exists and provides global access through a static method."
            },
            {
                id: 19,
                category: "Object-Oriented Programming",
                difficulty: "Medium",
                question: "What is the main advantage of using interfaces over abstract classes in Java?",
                code: null,
                options: [
                    "Interfaces can have concrete methods",
                    "Multiple inheritance is possible with interfaces",
                    "Interfaces are faster to execute",
                    "Interfaces can have instance variables"
                ],
                correct: 1,
                explanation: "Java supports multiple inheritance through interfaces, allowing a class to implement multiple interfaces but extend only one class."
            },
            {
                id: 20,
                category: "Object-Oriented Programming",
                difficulty: "Hard",
                question: "What will be the output of this polymorphism example?",
                code: `class Animal {
    void makeSound() { System.out.print("Animal sound "); }
}
class Dog extends Animal {
    void makeSound() { System.out.print("Woof "); }
    void wagTail() { System.out.print("Wagging "); }
}
public class Test {
    public static void main(String[] args) {
        Animal a = new Dog();
        a.makeSound();
        // a.wagTail(); // This line is commented
    }
}`,
                options: [
                    "Animal sound",
                    "Woof",
                    "Woof Wagging", 
                    "Compilation Error"
                ],
                correct: 1,
                explanation: "Runtime polymorphism calls the overridden method in Dog class. wagTail() is not accessible through Animal reference."
            }
        ];
        
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.timeRemaining = 45 * 60; // 45 minutes in seconds
        this.timerInterval = null;
        this.testStartTime = null;
        
        this.init();
    }
    
    init() {
        this.generateQuestionNavigation();
        this.updateQuestionNavigation();
    }
    
    generateQuestionNavigation() {
        const navGrid = document.getElementById('questionNavGrid');
        navGrid.innerHTML = '';
        
        for (let i = 0; i < this.questions.length; i++) {
            const navButton = document.createElement('button');
            navButton.className = 'nav-question';
            navButton.textContent = i + 1;
            navButton.onclick = () => this.goToQuestion(i);
            navGrid.appendChild(navButton);
        }
    }
    
    startTest() {
        document.getElementById('instructions').style.display = 'none';
        document.getElementById('testContent').style.display = 'flex';
        
        this.testStartTime = new Date();
        this.startTimer();
        this.loadQuestion(0);
    }
    
    startTimer() {
        this.timerInterval = setInterval(() => {
            this.timeRemaining--;
            this.updateTimerDisplay();
            
            if (this.timeRemaining <= 0) {
                this.submitTest();
            }
        }, 1000);
    }
    
    updateTimerDisplay() {
        const minutes = Math.floor(this.timeRemaining / 60);
        const seconds = this.timeRemaining % 60;
        document.getElementById('timer').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
        // Update progress bar
        const totalTime = 45 * 60;
        const elapsed = totalTime - this.timeRemaining;
        const progress = (elapsed / totalTime) * 100;
        document.getElementById('progressBar').style.width = `${progress}%`;
    }
    
    loadQuestion(index) {
        this.currentQuestion = index;
        const question = this.questions[index];
        
        document.getElementById('questionNumber').textContent = `Question ${index + 1} of ${this.questions.length}`;
        document.getElementById('questionCategory').textContent = question.category;
        document.getElementById('questionText').textContent = question.question;
        
        // Handle code block
        const codeBlock = document.getElementById('codeBlock');
        if (question.code) {
            codeBlock.style.display = 'block';
            codeBlock.innerHTML = `<pre><code>${question.code}</code></pre>`;
        } else {
            codeBlock.style.display = 'none';
        }
        
        // Load options
        const optionsContainer = document.getElementById('optionsContainer');
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, i) => {
            const optionDiv = document.createElement('div');
            optionDiv.className = 'option';
            
            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.value = i;
            radio.id = `option${i}`;
            radio.checked = this.userAnswers[index] === i;
            radio.onchange = () => this.selectAnswer(i);
            
            const label = document.createElement('label');
            label.htmlFor = `option${i}`;
            label.textContent = option;
            
            optionDiv.appendChild(radio);
            optionDiv.appendChild(label);
            optionsContainer.appendChild(optionDiv);
        });
        
        // Update navigation buttons
        document.getElementById('prevBtn').disabled = index === 0;
        document.getElementById('nextBtn').style.display = index === this.questions.length - 1 ? 'none' : 'inline-block';
        document.getElementById('submitBtn').style.display = index === this.questions.length - 1 ? 'inline-block' : 'none';
        
        this.updateQuestionNavigation();
    }
    
    selectAnswer(answerIndex) {
        this.userAnswers[this.currentQuestion] = answerIndex;
        this.updateQuestionNavigation();
        this.updateStats();
    }
    
    updateQuestionNavigation() {
        const navButtons = document.querySelectorAll('.nav-question');
        navButtons.forEach((button, index) => {
            button.classList.remove('answered', 'current');
            
            if (index === this.currentQuestion) {
                button.classList.add('current');
            }
            
            if (this.userAnswers[index] !== null) {
                button.classList.add('answered');
            }
        });
    }
    
    updateStats() {
        const answered = this.userAnswers.filter(answer => answer !== null).length;
        document.getElementById('answeredCount').textContent = answered;
        document.getElementById('remainingCount').textContent = this.questions.length - answered;
    }
    
    goToQuestion(index) {
        this.loadQuestion(index);
    }
    
    previousQuestion() {
        if (this.currentQuestion > 0) {
            this.loadQuestion(this.currentQuestion - 1);
        }
    }
    
    nextQuestion() {
        if (this.currentQuestion < this.questions.length - 1) {
            this.loadQuestion(this.currentQuestion + 1);
        }
    }
    
    submitTest() {
        clearInterval(this.timerInterval);
        
        const testEndTime = new Date();
        const timeTaken = Math.floor((testEndTime - this.testStartTime) / 1000);
        
        this.calculateResults(timeTaken);
        this.showResults();
    }
    
    calculateResults(timeTaken) {
        let correctAnswers = 0;
        let dsaCorrect = 0;
        let oopCorrect = 0;
        let dsaTotal = 0;
        let oopTotal = 0;
        
        this.questions.forEach((question, index) => {
            if (question.category.includes('Data Structures') || question.category.includes('Algorithms')) {
                dsaTotal++;
                if (this.userAnswers[index] === question.correct) {
                    dsaCorrect++;
                    correctAnswers++;
                }
            } else {
                oopTotal++;
                if (this.userAnswers[index] === question.correct) {
                    oopCorrect++;
                    correctAnswers++;
                }
            }
        });
        
        const percentage = Math.round((correctAnswers / this.questions.length) * 100);
        
        this.results = {
            correctAnswers,
            totalQuestions: this.questions.length,
            percentage,
            timeTaken,
            dsaScore: { correct: dsaCorrect, total: dsaTotal },
            oopScore: { correct: oopCorrect, total: oopTotal }
        };
    }
    
    showResults() {
        document.getElementById('testContent').style.display = 'none';
        document.getElementById('resultsPanel').style.display = 'block';
        
        // Update score display
        document.getElementById('scoreValue').textContent = `${this.results.percentage}%`;
        document.getElementById('correctAnswers').textContent = `${this.results.correctAnswers}/${this.results.totalQuestions}`;
        
        const minutes = Math.floor(this.results.timeTaken / 60);
        const seconds = this.results.timeTaken % 60;
        document.getElementById('timeTaken').textContent = 
            `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            
        document.getElementById('dsaScore').textContent = 
            `${this.results.dsaScore.correct}/${this.results.dsaScore.total}`;
        document.getElementById('oopScore').textContent = 
            `${this.results.oopScore.correct}/${this.results.oopScore.total}`;
        
        this.generatePerformanceAnalysis();
        this.generateDetailedResults();
    }
    
    generatePerformanceAnalysis() {
        const analysis = document.getElementById('analysisContent');
        let feedback = '';
        
        if (this.results.percentage >= 90) {
            feedback = '<div class="excellent">🏆 Excellent! You have a strong understanding of both DSA and OOP concepts.</div>';
        } else if (this.results.percentage >= 80) {
            feedback = '<div class="good">🎯 Good performance! You have a solid grasp of the fundamentals with room for improvement.</div>';
        } else if (this.results.percentage >= 70) {
            feedback = '<div class="average">📚 Average performance. Consider reviewing key concepts and practicing more problems.</div>';
        } else {
            feedback = '<div class="needs-improvement">📖 Needs improvement. Focus on strengthening your foundation in both areas.</div>';
        }
        
        const dsaPercentage = Math.round((this.results.dsaScore.correct / this.results.dsaScore.total) * 100);
        const oopPercentage = Math.round((this.results.oopScore.correct / this.results.oopScore.total) * 100);
        
        feedback += `
            <div class="category-analysis">
                <div class="category-score">
                    <strong>Data Structures & Algorithms:</strong> ${dsaPercentage}%
                    ${dsaPercentage < 70 ? '<span class="recommendation">→ Focus on algorithm complexity and data structure operations</span>' : ''}
                </div>
                <div class="category-score">
                    <strong>Object-Oriented Programming:</strong> ${oopPercentage}%
                    ${oopPercentage < 70 ? '<span class="recommendation">→ Review OOP principles, inheritance, and design patterns</span>' : ''}
                </div>
            </div>
        `;
        
        analysis.innerHTML = feedback;
    }
    
    generateDetailedResults() {
        const detailedResults = document.getElementById('detailedResults');
        let resultsHTML = '';
        
        this.questions.forEach((question, index) => {
            const userAnswer = this.userAnswers[index];
            const isCorrect = userAnswer === question.correct;
            const status = userAnswer === null ? 'unanswered' : (isCorrect ? 'correct' : 'incorrect');
            
            resultsHTML += `
                <div class="result-item ${status}">
                    <div class="result-header">
                        <span class="question-num">Q${index + 1}</span>
                        <span class="category">${question.category}</span>
                        <span class="status-icon">${userAnswer === null ? '⚪' : (isCorrect ? '✅' : '❌')}</span>
                    </div>
                    <div class="result-details">
                        <div class="question-text">${question.question}</div>
                        ${userAnswer !== null ? `
                            <div class="answer-info">
                                <div class="user-answer">Your answer: ${question.options[userAnswer]}</div>
                                ${!isCorrect ? `<div class="correct-answer">Correct answer: ${question.options[question.correct]}</div>` : ''}
                                <div class="explanation">${question.explanation}</div>
                            </div>
                        ` : '<div class="not-answered">Not answered</div>'}
                    </div>
                </div>
            `;
        });
        
        detailedResults.innerHTML = resultsHTML;
    }
    
    retakeTest() {
        this.currentQuestion = 0;
        this.userAnswers = new Array(this.questions.length).fill(null);
        this.timeRemaining = 45 * 60;
        
        document.getElementById('resultsPanel').style.display = 'none';
        document.getElementById('instructions').style.display = 'block';
        
        this.updateStats();
        this.updateQuestionNavigation();
    }
    
    reviewAnswers() {
        document.getElementById('resultsPanel').style.display = 'none';
        document.getElementById('testContent').style.display = 'flex';
        
        // Disable all interactions for review mode
        const options = document.querySelectorAll('input[type="radio"]');
        options.forEach(option => option.disabled = true);
        
        document.getElementById('prevBtn').style.display = 'inline-block';
        document.getElementById('nextBtn').style.display = 'inline-block';
        document.getElementById('submitBtn').style.display = 'none';
        
        this.loadQuestion(0);
    }
}

// Global functions
function startTest() {
    window.mcqTest.startTest();
}

function previousQuestion() {
    window.mcqTest.previousQuestion();
}

function nextQuestion() {
    window.mcqTest.nextQuestion();
}

function submitTest() {
    if (confirm('Are you sure you want to submit the test? You cannot change your answers after submission.')) {
        window.mcqTest.submitTest();
    }
}

function retakeTest() {
    window.mcqTest.retakeTest();
}

function reviewAnswers() {
    window.mcqTest.reviewAnswers();
}

// Initialize the test when page loads
document.addEventListener('DOMContentLoaded', () => {
    window.mcqTest = new MCQTest();
});

// Prevent page refresh during test
window.addEventListener('beforeunload', (e) => {
    if (document.getElementById('testContent').style.display !== 'none') {
        e.preventDefault();
        e.returnValue = '';
    }
});
