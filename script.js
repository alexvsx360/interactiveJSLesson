// Slideshow state
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Initialize slideshow
function initSlideshow() {
    showSlide(currentSlide);
    updateProgressBar();
    
    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboard);
    
    // Initialize DOM event demos
    initDOMEventDemos();
}

// Show specific slide
function showSlide(n) {
    // Bounds checking
    if (n >= totalSlides) {
        currentSlide = totalSlides - 1;
    } else if (n < 0) {
        currentSlide = 0;
    } else {
        currentSlide = n;
    }
    
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });
    
    // Show current slide
    slides[currentSlide].classList.add('active');
    
    // Update slide counter
    document.getElementById('slideCounter').innerText = `${currentSlide + 1} / ${totalSlides}`;
    
    // Update progress bar
    updateProgressBar();
    
    // Update navigation buttons
    updateNavButtons();
    
    // Scroll to top
    slides[currentSlide].scrollTop = 0;
    
    // Re-highlight syntax for current slide
    if (typeof Prism !== 'undefined') {
        setTimeout(() => {
            const currentSlideElement = slides[currentSlide];
            const codeBlocks = currentSlideElement.querySelectorAll('pre code');
            codeBlocks.forEach(block => {
                if (!block.classList.contains('language-javascript')) {
                    block.classList.add('language-javascript');
                }
            });
            Prism.highlightAllUnder(currentSlideElement);
        }, 50);
    }
}

// Change slide
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Update progress bar
function updateProgressBar() {
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
}

// Update navigation buttons state
function updateNavButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
}

// Keyboard navigation
function handleKeyboard(event) {
    switch(event.key) {
        case 'ArrowRight':
        case 'ArrowUp':
            changeSlide(-1); // RTL: right arrow = previous
            break;
        case 'ArrowLeft':
        case 'ArrowDown':
            changeSlide(1); // RTL: left arrow = next
            break;
        case 'Home':
            showSlide(0);
            break;
        case 'End':
            showSlide(totalSlides - 1);
            break;
    }
}

// Interactive code execution functions
function runCode1() {
    const output = document.getElementById('output1');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 1: משתנים ===');
        
        let counter = 1;
        console.log('let counter = 1;');
        console.log('counter:', counter);
        
        const PI = 3.14;
        console.log('const PI = 3.14;');
        console.log('PI:', PI);
        
        counter++;
        console.log('counter++;');
        console.log('counter עכשיו:', counter);
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר:\n`;
        output.innerHTML += `יצרנו שני משתנים:\n`;
        output.innerHTML += `• counter עם let - ניתן לשינוי, התחלנו עם 1 והגדלנו ל-${counter}\n`;
        output.innerHTML += `• PI עם const - לא ניתן לשינוי, נשאר ${PI}\n\n`;
        output.innerHTML += `💡 const שומר על ההפניה קבועה - אי אפשר לשנות את הערך!\n`;
        output.innerHTML += `💡 let מאפשר שינוי ערכים במהלך הקוד.\n\n`;
        output.innerHTML += `✅ בדוק את הקונסול (F12) לתוצאות המלאות!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runCode2() {
    const output = document.getElementById('output2');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 2: console.log בסיסי ===');
        console.log("Hello JavaScript!");
        
        let name = "Alex";
        console.log("Welcome,", name);
        console.log("מספר:", 42, "בוליאני:", true);
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר:\n`;
        output.innerHTML += `השתמשנו ב-console.log להדפסת הודעות:\n\n`;
        output.innerHTML += `1. console.log("Hello JavaScript!") - הדפסה פשוטה\n`;
        output.innerHTML += `2. console.log("Welcome,", name) - כמה ערכים\n`;
        output.innerHTML += `3. console.log("מספר:", 42, "בוליאני:", true)\n\n`;
        output.innerHTML += `💡 console.log מאפשר להדפיס כמה ערכים בפעם אחת!\n`;
        output.innerHTML += `💡 הערכים יופרדו ברווח אוטומטית.\n\n`;
        output.innerHTML += `✅ בדוק את הקונסול (F12) לתוצאות!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runConsoleStyled() {
    const output = document.getElementById('outputStyled');
    output.innerHTML = '';
    
    try {
        console.log('=== הרצת קוד: console.log מעוצב ===');
        
        // Styled console logs
        console.log('%cטקסט מעוצב!', 'color: blue; font-size: 20px; font-weight: bold;');
        console.log('%cשגיאה חמורה!', 'color: red; background: yellow; padding: 5px;');
        console.log('%c✨ הצלחה! ✨', 'color: green; font-size: 24px; text-shadow: 2px 2px 4px #000;');
        
        // Multiple colors in one line
        console.log('%cכחול %cאדום %cירוק', 
            'color: blue;', 
            'color: red;', 
            'color: green;');
        
        // More creative examples
        console.log('%c🎨 עיצוב מדליק! 🎨', 
            'background: linear-gradient(to right, #667eea, #764ba2); color: white; padding: 10px; border-radius: 5px; font-size: 18px; font-weight: bold;');
        
        // הסבר בפלט
        output.innerHTML = `🎨 הסבר על Console מעוצב:\n\n`;
        output.innerHTML += `שימוש ב-%c עם CSS:\n`;
        output.innerHTML += `console.log('%cטקסט', 'CSS כאן');\n\n`;
        output.innerHTML += `דוגמאות שרצו:\n`;
        output.innerHTML += `• טקסט כחול גדול ומודגש\n`;
        output.innerHTML += `• רקע צהוב עם טקסט אדום\n`;
        output.innerHTML += `• טקסט ירוק עם צל\n`;
        output.innerHTML += `• כמה צבעים בשורה אחת\n`;
        output.innerHTML += `• גרדיאנט מלא!\n\n`;
        output.innerHTML += `💡 אפשר להשתמש בכל CSS שרוצים!\n`;
        output.innerHTML += `💡 מעולה להדגשת הודעות חשובות.\n\n`;
        output.innerHTML += `✅ בדוק בקונסול (F12) את העיצובים!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runConsoleTable() {
    const output = document.getElementById('outputTable');
    output.innerHTML = '';
    
    try {
        console.log('=== הרצת קוד: console.table ===');
        
        // Simple array
        const fruits = ["תפוח", "בננה", "תפוז"];
        console.log('מערך פשוט:');
        console.table(fruits);
        
        // Array of objects
        const students = [
            { name: "אלכס", age: 20, grade: 95 },
            { name: "שרה", age: 22, grade: 88 },
            { name: "דני", age: 21, grade: 92 }
        ];
        console.log('מערך של אובייקטים:');
        console.table(students);
        
        // With specific columns
        console.log('רק שם וציון:');
        console.table(students, ["name", "grade"]);
        
        // Object
        const person = {
            firstName: "ג'ון",
            lastName: "דו",
            age: 30,
            city: "תל אביב"
        };
        console.log('אובייקט:');
        console.table(person);
        
        // הסבר בפלט
        output.innerHTML = `📊 הסבר על console.table:\n\n`;
        output.innerHTML += `console.table מציג נתונים בטבלה מסודרת:\n\n`;
        output.innerHTML += `1. מערך פשוט → טבלה עם אינדקסים\n`;
        output.innerHTML += `2. מערך של אובייקטים → טבלה עם עמודות\n`;
        output.innerHTML += `3. אפשר לבחור עמודות ספציפיות\n`;
        output.innerHTML += `4. גם אובייקטים בודדים!\n\n`;
        output.innerHTML += `💡 הרבה יותר קריא מ-console.log רגיל!\n`;
        output.innerHTML += `💡 מושלם לנתונים מובנים.\n\n`;
        output.innerHTML += `✅ בדוק בקונסול (F12) את הטבלאות היפות!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runConsoleWarn() {
    const output = document.getElementById('outputWarn');
    output.innerHTML = '';
    
    try {
        console.log('=== הרצת קוד: console.warn ===');
        
        console.warn("זוהי אזהרה!");
        console.warn("⚠️ המשתנה עלול להיות undefined");
        console.warn("גרסה ישנה - מומלץ לעדכן!");
        console.warn("פונקציה זו תוסר בגרסה הבאה (deprecated)");
        
        // הסבר בפלט
        output.innerHTML = `⚠️ הסבר על console.warn:\n\n`;
        output.innerHTML += `console.warn מציג הודעות אזהרה:\n\n`;
        output.innerHTML += `• מופיע בצבע צהוב/כתום בקונסול\n`;
        output.innerHTML += `• כולל אייקון אזהרה ⚠️\n`;
        output.innerHTML += `• כולל stack trace (מי קרא לפונקציה)\n\n`;
        output.innerHTML += `מתי להשתמש:\n`;
        output.innerHTML += `• דברים שעלולים לגרום לבעיות\n`;
        output.innerHTML += `• פונקציות deprecated\n`;
        output.innerHTML += `• ערכים לא תקינים אבל לא קריטיים\n\n`;
        output.innerHTML += `💡 שונה מ-error - זה לא שובר את הקוד!\n\n`;
        output.innerHTML += `✅ בדוק בקונסול (F12) את האזהרות בצהוב!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runConsoleError() {
    const output = document.getElementById('outputError');
    output.innerHTML = '';
    
    try {
        console.log('=== הרצת קוד: console.error ===');
        
        console.error("זוהי שגיאה!");
        console.error("❌ פעולה נכשלה!");
        console.error("שגיאת חיבור למסד נתונים");
        console.error("שגיאה:", { code: 404, message: "לא נמצא" });
        
        // הסבר בפלט
        output.innerHTML = `❌ הסבר על console.error:\n\n`;
        output.innerHTML += `console.error מציג הודעות שגיאה:\n\n`;
        output.innerHTML += `• מופיע בצבע אדום בקונסול\n`;
        output.innerHTML += `• כולל אייקון X אדום ❌\n`;
        output.innerHTML += `• כולל stack trace מלא\n`;
        output.innerHTML += `• מופיע בלשונית Errors בקונסול\n\n`;
        output.innerHTML += `מתי להשתמש:\n`;
        output.innerHTML += `• שגיאות קריטיות\n`;
        output.innerHTML += `• כשלון בפעולה חשובה\n`;
        output.innerHTML += `• בעיות שצריך לתקן מיד\n\n`;
        output.innerHTML += `💡 עדיף על throw Error למצבי debug!\n`;
        output.innerHTML += `💡 לא עוצר את ריצת הקוד.\n\n`;
        output.innerHTML += `✅ בדוק בקונסול (F12) את השגיאות באדום!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runConsoleBonus() {
    const output = document.getElementById('outputBonus');
    output.innerHTML = '';
    
    try {
        console.log('=== הרצת קוד: פקודות בונוס ===');
        
        // Time measurement
        console.time("חישוב");
        let sum = 0;
        for (let i = 0; i < 1000000; i++) {
            sum += i;
        }
        console.timeEnd("חישוב");
        console.log('סכום:', sum);
        
        // Counter
        console.log('\nקאונטר:');
        for (let i = 0; i < 5; i++) {
            console.count("לולאה");
        }
        
        // Group
        console.group('קבוצת מידע');
        console.log('מידע 1');
        console.log('מידע 2');
        console.log('מידע 3');
        console.groupEnd();
        
        // הסבר בפלט
        output.innerHTML = `🎯 הסבר על פקודות בונוס:\n\n`;
        output.innerHTML += `1. console.time() / timeEnd():\n`;
        output.innerHTML += `   • מודד כמה זמן לקח קוד לרוץ\n`;
        output.innerHTML += `   • מעולה לאופטימיזציה\n\n`;
        output.innerHTML += `2. console.count():\n`;
        output.innerHTML += `   • סופר כמה פעמים הגענו לשורה\n`;
        output.innerHTML += `   • מעולה ללולאות\n\n`;
        output.innerHTML += `3. console.group() / groupEnd():\n`;
        output.innerHTML += `   • מקבץ הודעות ביחד\n`;
        output.innerHTML += `   • ניתן לקיפול/פתיחה\n\n`;
        output.innerHTML += `4. console.clear():\n`;
        output.innerHTML += `   • מנקה את הקונסול לגמרי\n\n`;
        output.innerHTML += `💡 יש עוד הרבה פקודות שימושיות!\n\n`;
        output.innerHTML += `✅ בדוק בקונסול (F12) את כל התוצאות!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

// Quick Console Summary Functions
function showQuickFeedback(message) {
    const feedback = document.getElementById('quickConsoleFeedback');
    feedback.innerHTML = message;
    feedback.style.display = 'block';
    feedback.style.animation = 'pulse 0.5s ease-out';
    
    setTimeout(() => {
        feedback.style.animation = '';
    }, 500);
}

function runQuickConsoleLog() {
    console.log('🎯 דוגמה מהירה: console.log()');
    console.log('שלום מהקונסול!');
    console.log('מספר:', 42, 'טקסט:', 'JavaScript', 'בוליאני:', true);
    showQuickFeedback('✅ console.log() הורץ! בדוק בקונסול (F12)');
}

function runQuickConsoleStyled() {
    console.log('🎯 דוגמה מהירה: console.log עם עיצוב');
    console.log('%c🌟 טקסט מעוצב! 🌟', 'color: white; background: linear-gradient(to right, #667eea, #764ba2); padding: 10px; font-size: 20px; font-weight: bold; border-radius: 5px;');
    console.log('%cכחול', 'color: blue; font-size: 16px;', '%cאדום', 'color: red; font-size: 16px;', '%cירוק', 'color: green; font-size: 16px;');
    showQuickFeedback('🎨 console.log מעוצב! ראה את הצבעים בקונסול');
}

function runQuickConsoleTable() {
    console.log('🎯 דוגמה מהירה: console.table()');
    const data = [
        { name: 'אלכס', age: 25, city: 'תל אביב' },
        { name: 'שרה', age: 30, city: 'ירושלים' },
        { name: 'דני', age: 28, city: 'חיפה' }
    ];
    console.table(data);
    showQuickFeedback('📊 console.table() - ראה טבלה מסודרת בקונסול!');
}

function runQuickConsoleWarn() {
    console.log('🎯 דוגמה מהירה: console.warn()');
    console.warn('⚠️ זוהי אזהרה!');
    console.warn('המשתנה עלול להיות undefined');
    console.warn('גרסה ישנה - מומלץ לעדכן');
    showQuickFeedback('⚠️ console.warn() - ראה אזהרות בצהוב בקונסול!');
}

function runQuickConsoleError() {
    console.log('🎯 דוגמה מהירה: console.error()');
    console.error('❌ זוהי שגיאה!');
    console.error('הפעולה נכשלה');
    console.error('שגיאת חיבור:', { code: 500, message: 'Server Error' });
    showQuickFeedback('❌ console.error() - ראה שגיאות באדום בקונסול!');
}

function runArrayCompareDemo() {
    const output = document.getElementById('outputArrayCompare');
    output.innerHTML = '';
    
    try {
        console.log('=== דוגמה: השוואת מערכים ואובייקטים ===');
        
        // Arrays
        const arr1 = [1, 2, 3];
        const arr2 = [1, 2, 3];
        console.log('arr1:', arr1);
        console.log('arr2:', arr2);
        console.log('arr1 === arr2:', arr1 === arr2);
        console.log('JSON.stringify(arr1) === JSON.stringify(arr2):', JSON.stringify(arr1) === JSON.stringify(arr2));
        
        // Objects
        const obj1 = {name: "Alex", age: 25};
        const obj2 = {name: "Alex", age: 25};
        console.log('obj1:', obj1);
        console.log('obj2:', obj2);
        console.log('obj1 === obj2:', obj1 === obj2);
        console.log('JSON.stringify(obj1) === JSON.stringify(obj2):', JSON.stringify(obj1) === JSON.stringify(obj2));
        
        output.innerHTML = `🔍 תוצאות:\n\n`;
        output.innerHTML += `מערכים:\narr1 === arr2: ${arr1 === arr2} ❌\nJSON.stringify: ${JSON.stringify(arr1) === JSON.stringify(arr2)} ✅\n\n`;
        output.innerHTML += `אובייקטים:\nobj1 === obj2: ${obj1 === obj2} ❌\nJSON.stringify: ${JSON.stringify(obj1) === JSON.stringify(obj2)} ✅\n\n`;
        output.innerHTML += `💡 JSON.stringify עובד!\n✅ כל הדוגמאות בקונסול (F12)`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runCode3() {
    const output = document.getElementById('output3');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 3: סוגי נתונים ===');
        
        let name = "Alex";
        console.log('name =', name, '→ type:', typeof name);
        
        let age = 30;
        console.log('age =', age, '→ type:', typeof age);
        
        let isStudent = true;
        console.log('isStudent =', isStudent, '→ type:', typeof isStudent);
        
        let user = null;
        console.log('user =', user, '→ type:', typeof user);
        
        let address;
        console.log('address =', address, '→ type:', typeof address);
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר על סוגי הנתונים:\n\n`;
        output.innerHTML += `String (מחרוזת): "${name}" - טקסט בתוך מרכאות\n`;
        output.innerHTML += `Number (מספר): ${age} - מספר שלם או עשרוני\n`;
        output.innerHTML += `Boolean (בוליאני): ${isStudent} - אמת או שקר בלבד\n`;
        output.innerHTML += `Null: ${user} - ערך ריק שהוגדר במפורש\n`;
        output.innerHTML += `Undefined: ${address} - משתנה שהוכרז אך לא קיבל ערך\n\n`;
        output.innerHTML += `💡 השתמשנו ב-typeof כדי לבדוק את סוג הנתון!\n`;
        output.innerHTML += `💡 שים לב: typeof null מחזיר "object" - זו באג היסטורי בJS!\n\n`;
        output.innerHTML += `✅ כל הסוגים הודפסו בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runCode4() {
    const output = document.getElementById('output4');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 4: דיוק מספרים - שברים ===');
        
        let x = 0.1 + 0.2;
        console.log('0.1 + 0.2 =', x);
        console.log('התוצאה לא מדויקת!');
        
        let y = (0.1 * 10 + 0.2 * 10) / 10;
        console.log('תיקון: (0.1 * 10 + 0.2 * 10) / 10 =', y);
        console.log('עכשיו זה מדויק!');
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר על דיוק שברים:\n\n`;
        output.innerHTML += `בעיה: 0.1 + 0.2 = ${x}\n`;
        output.innerHTML += `❌ לא שווה ל-0.3! למה?\n\n`;
        output.innerHTML += `JavaScript שומר מספרים בבינארי (Base 2).\n`;
        output.innerHTML += `שברים עשרוניים כמו 0.1 ו-0.2 לא ניתנים לייצוג מדויק בבינארי!\n\n`;
        output.innerHTML += `פתרון: להכפיל ב-10, לחבר, ואז לחלק ב-10\n`;
        output.innerHTML += `תוצאה: ${y} ✅\n\n`;
        output.innerHTML += `✅ כל החישובים בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runCode4b() {
    const output = document.getElementById('output4b');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 4b: דיוק מספרים - מספרים גדולים ===');
        console.log('MAX_SAFE_INTEGER:', Number.MAX_SAFE_INTEGER);
        
        // בעיה: מעבר למספר הבטוח
        let big1 = Number.MAX_SAFE_INTEGER + 1;
        let big2 = Number.MAX_SAFE_INTEGER + 2;
        
        console.log('big1 (MAX + 1):', big1);
        console.log('big2 (MAX + 2):', big2);
        console.log('האם big1 === big2?', big1 === big2);
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר על מספרים גדולים:\n\n`;
        output.innerHTML += `MAX_SAFE_INTEGER: ${Number.MAX_SAFE_INTEGER}\n\n`;
        output.innerHTML += `ניסוי מפתיע:\n`;
        output.innerHTML += `big1 = MAX_SAFE_INTEGER + 1 = ${big1}\n`;
        output.innerHTML += `big2 = MAX_SAFE_INTEGER + 2 = ${big2}\n\n`;
        output.innerHTML += `האם big1 === big2? ${big1 === big2}\n`;
        output.innerHTML += `😱 שני מספרים שונים נראים זהים!\n\n`;
        output.innerHTML += `❌ מעבר ל-MAX_SAFE_INTEGER - JavaScript מאבד דיוק!\n`;
        output.innerHTML += `המספרים מעוגלים לערך הקרוב ביותר שניתן לייצוג.\n\n`;
        output.innerHTML += `💡 פתרון: השתמשו ב-BigInt למספרים גדולים מאוד!\n`;
        output.innerHTML += `דוגמה: const bigNum = 9007199254740992n;\n\n`;
        output.innerHTML += `✅ כל ההדגמה בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runCode5() {
    const output = document.getElementById('output5');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 5: Immutable מול Mutable (בסיסי) ===');
        
        let text = "Hello";
        console.log('text =', text);
        text[0] = "J";
        console.log('ניסיון: text[0] = "J"');
        console.log('תוצאה:', text, '(לא השתנה!)');
        
        const colors = ["red", "green"];
        console.log('colors =', colors);
        colors.push("blue");
        console.log('colors.push("blue")');
        console.log('תוצאה:', colors, '(השתנה!)');
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר בסיסי:\n\n`;
        output.innerHTML += `String (Immutable):\n`;
        output.innerHTML += `text = "Hello"\n`;
        output.innerHTML += `text[0] = "J"\n`;
        output.innerHTML += `תוצאה: "${text}" ❌ לא השתנה!\n\n`;
        
        output.innerHTML += `Array (Mutable):\n`;
        output.innerHTML += `colors = ["red", "green"]\n`;
        output.innerHTML += `colors.push("blue")\n`;
        output.innerHTML += `תוצאה: [${colors.map(c => `"${c}"`).join(', ')}] ✅ השתנה!\n\n`;
        
        output.innerHTML += `💡 גלול מטה לדוגמאות מתקדמות!\n`;
        output.innerHTML += `✅ כל הניסויים בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runCode6() {
    const output = document.getElementById('output6');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 6: פונקציות ===');
        
        function greet(name) {
            return "שלום " + name;
        }
        
        const sum = (a, b) => a + b;
        
        console.log('הגדרנו פונקציה רגילה: function greet(name)');
        console.log('קריאה:', greet("Alex"));
        
        console.log('הגדרנו Arrow Function: const sum = (a, b) => a + b');
        console.log('קריאה:', 'sum(5, 3) =', sum(5, 3));
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר על פונקציות:\n\n`;
        output.innerHTML += `סוג 1: Function Declaration (פונקציה רגילה)\n`;
        output.innerHTML += `function greet(name) { return "שלום " + name; }\n`;
        output.innerHTML += `תוצאה: ${greet("Alex")} ✅\n\n`;
        
        output.innerHTML += `סוג 2: Arrow Function (פונקציית חץ)\n`;
        output.innerHTML += `const sum = (a, b) => a + b;\n`;
        output.innerHTML += `תוצאה: 5 + 3 = ${sum(5, 3)} ✅\n\n`;
        
        output.innerHTML += `💡 הבדלים עיקריים:\n`;
        output.innerHTML += `• Arrow Function קצרה ומודרנית יותר\n`;
        output.innerHTML += `• פונקציה רגילה טובה למצבים מורכבים\n`;
        output.innerHTML += `• שתיהן מקבלות פרמטרים ומחזירות ערכים\n\n`;
        
        output.innerHTML += `✅ כל הפונקציות רצות בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runCode7() {
    const output = document.getElementById('output7');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 7: Scope (תחום תקפות) ===');
        
        function add(a, b) {
            let result = a + b; // Scope פנימי
            console.log('בתוך הפונקציה - result =', result);
            return result;
        }
        
        console.log('קוראים לפונקציה: add(10, 20)');
        const finalResult = add(10, 20);
        console.log('הערך שהוחזר:', finalResult);
        console.log('המשתנה result לא נגיש מחוץ לפונקציה!');
        
        // הסבר בפלט
        output.innerHTML = `🔍 הסבר על Scope (תחום תקפות):\n\n`;
        output.innerHTML += `הקוד:\n`;
        output.innerHTML += `function add(a, b) {\n`;
        output.innerHTML += `  let result = a + b;  ← משתנה מקומי\n`;
        output.innerHTML += `  return result;\n`;
        output.innerHTML += `}\n\n`;
        
        output.innerHTML += `תוצאת הפונקציה: add(10, 20) = ${finalResult} ✅\n\n`;
        
        output.innerHTML += `💡 מושגים חשובים:\n`;
        output.innerHTML += `• המשתנה result קיים רק בתוך הפונקציה (Local Scope)\n`;
        output.innerHTML += `• הפרמטרים a, b גם הם מקומיים לפונקציה\n`;
        output.innerHTML += `• אם ננסה לגשת ל-result מחוץ לפונקציה - נקבל שגיאה!\n`;
        output.innerHTML += `• הפונקציה מחזירה את הערך עם return\n\n`;
        
        output.innerHTML += `✅ כל השלבים בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runCode8() {
    const output = document.getElementById('output8');
    output.innerHTML = '';
    
    try {
        // הדפסה לקונסול האמיתי
        console.log('=== הרצת קוד 8: תרגול בסיסי ===');
        
        // Regular functions
        console.log('--- פונקציות רגילות ---');
        function greeting(name) {
            console.log("שלום " + name + "!");
        }
        
        function add(a, b) {
            return a + b;
        }
        
        greeting("ישראל");
        console.log('add(7, 8):', add(7, 8));
        
        // Arrow functions
        console.log('\n--- Arrow Functions ---');
        const greetingArrow = (name) => console.log("שלום " + name + "!");
        const addArrow = (a, b) => a + b;
        
        greetingArrow("ישראל");
        console.log('addArrow(7, 8):', addArrow(7, 8));
        
        // הסבר בפלט
        output.innerHTML = `פתרון משימות 1-3:\n\n`;
        output.innerHTML += `פונקציות רגילות:\n`;
        output.innerHTML += `greeting("ישראל") - מדפיס\n`;
        output.innerHTML += `add(7, 8) = ${add(7, 8)}\n\n`;
        
        output.innerHTML += `Arrow Functions:\n`;
        output.innerHTML += `greetingArrow("ישראל") - מדפיס\n`;
        output.innerHTML += `addArrow(7, 8) = ${addArrow(7, 8)}\n\n`;
        
        output.innerHTML += `כל הפתרונות בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
        output.style.color = '#e74c3c';
    }
}

function runChallenge4() {
    const output = document.getElementById('outputChallenge4');
    output.innerHTML = '';
    
    try {
        console.log('=== אתגר 4: Closure - פונקציה בתוך פונקציה ===');
        
        function createMultiplier(factor) {
            function multiply(number) {
                return number * factor;
            }
            return multiply;
        }
        
        const multiplyBy5 = createMultiplier(5);
        const multiplyBy10 = createMultiplier(10);
        const multiplyBy100 = createMultiplier(100);
        
        console.log("3 * 5 =", multiplyBy5(3));
        console.log("3 * 10 =", multiplyBy10(3));
        console.log("3 * 100 =", multiplyBy100(3));
        
        output.innerHTML = `אתגר 4 - Closure:\n\n`;
        output.innerHTML += `יצרנו 3 מכפילים:\n`;
        output.innerHTML += `multiplyBy5(3) = ${multiplyBy5(3)}\n`;
        output.innerHTML += `multiplyBy10(3) = ${multiplyBy10(3)}\n`;
        output.innerHTML += `multiplyBy100(3) = ${multiplyBy100(3)}\n\n`;
        output.innerHTML += `כל פונקציה "זוכרת" את ה-factor שלה!\n`;
        output.innerHTML += `זה הכוח של Closure!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runChallenge5() {
    const output = document.getElementById('outputChallenge5');
    output.innerHTML = '';
    
    try {
        console.log('=== אתגר 5: רקורסיה - פונקציה שקוראת לעצמה ===');
        
        function printNames(names, depth = 0) {
            if (names.length === 0) {
                console.log("סיימנו!");
                return;
            }
            
            const indent = '  '.repeat(depth);
            console.log(indent + names[0]);
            
            printNames(names.slice(1), depth + 1);
        }
        
        const students = ["דני", "שרה", "אלכס", "מיכל", "יוסי"];
        console.log('מדפיס שמות:');
        printNames(students);
        
        output.innerHTML = `אתגר 5 - רקורסיה:\n\n`;
        output.innerHTML += `המערך: [${students.join(', ')}]\n\n`;
        output.innerHTML += `התוצאה:\n`;
        students.forEach(name => {
            output.innerHTML += `${name}\n`;
        });
        output.innerHTML += `סיימנו!\n\n`;
        output.innerHTML += `איך זה עובד:\n`;
        output.innerHTML += `1. מדפיס "דני", קורא עם [שרה, אלכס, מיכל, יוסי]\n`;
        output.innerHTML += `2. מדפיס "שרה", קורא עם [אלכס, מיכל, יוסי]\n`;
        output.innerHTML += `3. מדפיס "אלכס", קורא עם [מיכל, יוסי]\n`;
        output.innerHTML += `4. מדפיס "מיכל", קורא עם [יוסי]\n`;
        output.innerHTML += `5. מדפיס "יוסי", קורא עם []\n`;
        output.innerHTML += `6. מערך ריק - סיימנו!\n\n`;
        output.innerHTML += `כל השלבים בקונסול (F12)!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

// JavaScript Animation - Fixed and Simplified
function startJSAnimation() {
    const stage = document.getElementById('animationStage');
    const explanation = document.getElementById('animationExplanation');
    const htmlBlock = document.getElementById('htmlBlock');
    const cssBlock = document.getElementById('cssBlock');
    const jsBlock = document.getElementById('jsBlock');
    const resultBox = document.getElementById('resultBox');
    const resultBtn = document.getElementById('resultBtn');
    
    // Show stage
    stage.style.display = 'block';
    explanation.style.display = 'none';
    
    // Reset all
    htmlBlock.style.opacity = '0';
    htmlBlock.style.transform = '';
    cssBlock.style.opacity = '0';
    cssBlock.style.transform = '';
    jsBlock.style.opacity = '0';
    jsBlock.style.transform = '';
    resultBox.style.opacity = '0';
    resultBox.style.transform = 'translateX(-50%) scale(0)';
    
    // Remove existing hands and particles
    document.querySelectorAll('.hand-container, .explosion-particle, .energy-wave').forEach(h => h.remove());
    
    // Step 1: HTML appears from left (1s)
    setTimeout(() => {
        htmlBlock.style.animation = 'slideInFromLeft 1.2s ease-out forwards';
        htmlBlock.style.opacity = '1';
    }, 1000);
    
    // Step 2: CSS appears from right (2.5s)
    setTimeout(() => {
        cssBlock.style.animation = 'slideInFromRight 1.2s ease-out forwards';
        cssBlock.style.opacity = '1';
    }, 2500);
    
    // Step 3: JavaScript drops from top between them (4.5s)
    setTimeout(() => {
        jsBlock.style.animation = 'dropFromTop 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
        jsBlock.style.opacity = '1';
    }, 4500);
    
    // Step 4: JS glows - preparing (6.5s)
    setTimeout(() => {
        jsBlock.style.animation = 'glowPulse 1s ease-in-out 2';
    }, 6500);
    
    // Step 5: Hands emerge (8s)
    setTimeout(() => {
        createHands();
    }, 8000);
    
    // Step 6: Right hand reaches CSS (8.5s)
    setTimeout(() => {
        const hands = document.querySelectorAll('.hand-container');
        if (hands[1]) hands[1].style.animation = 'reachRight 1s ease-out forwards';
        createEnergyWave('right');
    }, 8500);
    
    // Step 7: CSS shakes - grabbed! (9.5s)
    setTimeout(() => {
        cssBlock.style.animation = 'grabbed 0.6s ease-in-out 2';
        cssBlock.style.boxShadow = '0 0 30px rgba(52, 152, 219, 0.8)';
    }, 9500);
    
    // Step 8: JS pulls CSS toward it (10.5s)
    setTimeout(() => {
        cssBlock.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        jsBlock.style.transition = 'all 1s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        cssBlock.style.transform = 'translate(-80px, 30px) scale(0.8)';
        jsBlock.style.transform = 'translateX(-50%) translateY(20px) scale(0.9)';
        
        // Right hand retracts
        const hands = document.querySelectorAll('.hand-container');
        if (hands[1]) hands[1].style.opacity = '0';
    }, 10500);
    
    // Step 9: JS+CSS glow together - connected! (11.5s)
    setTimeout(() => {
        jsBlock.style.boxShadow = '0 0 30px rgba(243, 156, 18, 0.8)';
        createConnectionEffect(cssBlock, jsBlock);
    }, 11500);
    
    // Step 10: Left hand reaches HTML (12.5s)
    setTimeout(() => {
        const hands = document.querySelectorAll('.hand-container');
        if (hands[0]) hands[0].style.animation = 'reachLeft 1s ease-out forwards';
        createEnergyWave('left');
    }, 12500);
    
    // Step 11: HTML shakes - grabbed! (13.5s)
    setTimeout(() => {
        htmlBlock.style.animation = 'grabbed 0.6s ease-in-out 2';
        htmlBlock.style.boxShadow = '0 0 30px rgba(231, 76, 60, 0.8)';
    }, 13500);
    
    // Step 12: JS+CSS pull HTML toward them (14.5s)
    setTimeout(() => {
        htmlBlock.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        cssBlock.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        jsBlock.style.transition = 'all 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
        
        htmlBlock.style.transform = 'translate(80px, 150px) scale(0.7)';
        cssBlock.style.transform = 'translate(0, 150px) scale(0.7)';
        jsBlock.style.transform = 'translateX(-50%) translateY(130px) scale(0.8)';
        
        // Left hand retracts
        const hands = document.querySelectorAll('.hand-container');
        if (hands[0]) hands[0].style.opacity = '0';
    }, 14500);
    
    // Step 13: All three glow and spin (16s)
    setTimeout(() => {
        htmlBlock.style.transform = 'translate(0, 180px) scale(0.5) rotate(360deg)';
        cssBlock.style.transform = 'translate(0, 180px) scale(0.5) rotate(-360deg)';
        jsBlock.style.transform = 'translate(0, 160px) scale(0.5) rotate(720deg)';
        
        htmlBlock.style.boxShadow = '0 0 50px rgba(231, 76, 60, 1)';
        cssBlock.style.boxShadow = '0 0 50px rgba(52, 152, 219, 1)';
        jsBlock.style.boxShadow = '0 0 50px rgba(243, 156, 18, 1)';
    }, 16000);
    
    // Step 14: Fade out (17.5s)
    setTimeout(() => {
        htmlBlock.style.opacity = '0';
        cssBlock.style.opacity = '0';
        jsBlock.style.opacity = '0';
    }, 17500);
    
    // Step 15: Explosion! (18.5s)
    setTimeout(() => {
        createExplosionParticles();
    }, 18500);
    
    // Step 16: Result appears (19s)
    setTimeout(() => {
        resultBox.style.opacity = '1';
        resultBox.style.animation = 'explodeBig 1s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards';
        
        resultBtn.onclick = function() {
            document.getElementById('resultTitle').innerText = 'JavaScript עובד! 🎉';
            this.style.background = '#4caf50';
            this.innerText = 'לחצת עליי! ✅';
            createConfetti();
        };
    }, 19000);
    
    // Step 17: Show explanation (20.5s)
    setTimeout(() => {
        explanation.style.display = 'block';
        explanation.style.animation = 'slideUp 0.8s ease-out';
    }, 20500);
}

// Create hands that emerge from JavaScript
function createHands() {
    const stage = document.getElementById('animationStage');
    const jsBlock = document.getElementById('jsBlock');
    const jsRect = jsBlock.getBoundingClientRect();
    const stageRect = stage.getBoundingClientRect();
    
    // Left hand (for HTML)
    const leftHand = document.createElement('div');
    leftHand.className = 'hand-container hand-left';
    leftHand.innerHTML = '👈';
    leftHand.style.left = (jsRect.left - stageRect.left + jsRect.width / 2 - 15) + 'px';
    leftHand.style.top = (jsRect.top - stageRect.top + jsRect.height / 2 - 15) + 'px';
    stage.appendChild(leftHand);
    
    // Right hand (for CSS)
    const rightHand = document.createElement('div');
    rightHand.className = 'hand-container hand-right';
    rightHand.innerHTML = '👉';
    rightHand.style.left = (jsRect.left - stageRect.left + jsRect.width / 2 - 15) + 'px';
    rightHand.style.top = (jsRect.top - stageRect.top + jsRect.height / 2 - 15) + 'px';
    stage.appendChild(rightHand);
}

// Create energy wave effect
function createEnergyWave(direction) {
    const stage = document.getElementById('animationStage');
    const wave = document.createElement('div');
    wave.className = `energy-wave energy-wave-${direction}`;
    stage.appendChild(wave);
    
    setTimeout(() => wave.remove(), 1500);
}

// Create connection effect between elements
function createConnectionEffect(elem1, elem2) {
    const stage = document.getElementById('animationStage');
    const connection = document.createElement('div');
    connection.className = 'connection-spark';
    connection.style.left = '50%';
    connection.style.top = '30%';
    stage.appendChild(connection);
    
    setTimeout(() => connection.remove(), 2000);
}

// Create explosion particles
function createExplosionParticles() {
    const stage = document.getElementById('animationStage');
    const colors = ['#667eea', '#764ba2', '#ffd700', '#4caf50', '#f39c12', '#e74c3c', '#3498db'];
    
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'explosion-particle';
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        particle.style.left = '50%';
        particle.style.top = '50%';
        
        const angle = (Math.PI * 2 * i) / 20;
        const velocity = 100 + Math.random() * 100;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        stage.appendChild(particle);
        
        setTimeout(() => particle.remove(), 1500);
    }
}

// Confetti effect
function createConfetti() {
    const colors = ['#667eea', '#764ba2', '#ffd700', '#4caf50', '#f39c12'];
    const stage = document.getElementById('animationStage');
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            stage.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 2000);
        }, i * 50);
    }
}

// Initialize all DOM Event Demos
function initDOMEventDemos() {
    // 1. Click Event
    const clickBtn = document.getElementById('clickBtn');
    const clickOutput = document.getElementById('clickOutput');
    if (clickBtn && clickOutput) {
        let clickCount = 0;
        clickBtn.onclick = function() {
            clickCount++;
            clickOutput.innerText = `לחצת ${clickCount} פעמים! 🎉`;
            clickOutput.style.background = '#4caf50';
            clickOutput.style.color = 'white';
            this.style.transform = 'scale(0.9)';
            setTimeout(() => this.style.transform = 'scale(1)', 100);
        };
    }
    
    // 2. Hover Event
    const hoverBox = document.getElementById('hoverBox');
    const hoverOutput = document.getElementById('hoverOutput');
    if (hoverBox && hoverOutput) {
        hoverBox.onmouseenter = function() {
            this.style.background = 'linear-gradient(135deg, #ffd700, #ffed4e)';
            this.style.transform = 'scale(1.1)';
            this.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.5)';
            hoverOutput.innerText = '✨ אתה על האלמנט!';
            hoverOutput.style.background = '#ffd700';
            hoverOutput.style.color = '#000';
        };
        
        hoverBox.onmouseleave = function() {
            this.style.background = '';
            this.style.transform = 'scale(1)';
            this.style.boxShadow = '';
            hoverOutput.innerText = '👋 יצאת!';
            hoverOutput.style.background = '#ddd';
            hoverOutput.style.color = '#333';
        };
    }
    
    // 3. Mouse Move Event
    const trackArea = document.getElementById('trackArea');
    const trackOutput = document.getElementById('trackOutput');
    const mouseTracker = document.getElementById('mouseTracker');
    if (trackArea && trackOutput && mouseTracker) {
        trackArea.onmousemove = function(e) {
            const x = e.offsetX;
            const y = e.offsetY;
            
            mouseTracker.style.left = x + 'px';
            mouseTracker.style.top = y + 'px';
            trackOutput.innerText = `מיקום: X=${x}, Y=${y}`;
            
            // Change color based on position
            const hue = (x / this.offsetWidth) * 360;
            this.style.background = `hsl(${hue}, 70%, 80%)`;
        };
        
        trackArea.onmouseleave = function() {
            mouseTracker.style.opacity = '0';
        };
        
        trackArea.onmouseenter = function() {
            mouseTracker.style.opacity = '1';
        };
    }
    
    // 4. Double Click Event
    const dblClickBox = document.getElementById('dblClickBox');
    const dblClickOutput = document.getElementById('dblClickOutput');
    if (dblClickBox && dblClickOutput) {
        let rotations = 0;
        dblClickBox.ondblclick = function() {
            rotations++;
            this.style.transform = `rotate(${rotations * 360}deg)`;
            this.style.background = `hsl(${rotations * 60}, 70%, 60%)`;
            dblClickOutput.innerText = `סיבוב ${rotations}! 🔄`;
            dblClickOutput.style.background = '#9c27b0';
            dblClickOutput.style.color = 'white';
        };
    }
    
    // 5. Keyboard Event
    const keyInput = document.getElementById('keyInput');
    const keyOutput = document.getElementById('keyOutput');
    if (keyInput && keyOutput) {
        keyInput.onkeyup = function(e) {
            keyOutput.innerText = `הקלדת: "${e.key}" | קוד: ${e.keyCode}`;
            keyOutput.style.background = '#667eea';
            keyOutput.style.color = 'white';
            
            // Special keys
            if (e.key === 'Enter') {
                keyOutput.innerText += ' ← לחצת Enter!';
            } else if (e.key === ' ') {
                keyOutput.innerText = 'לחצת רווח!';
            }
        };
        
        keyInput.onkeydown = function(e) {
            this.style.borderColor = '#667eea';
            this.style.boxShadow = '0 0 10px rgba(102, 126, 234, 0.5)';
        };
    }
    
    // 6. Scroll Event
    const scrollBox = document.getElementById('scrollBox');
    const scrollOutput = document.getElementById('scrollOutput');
    if (scrollBox && scrollOutput) {
        scrollBox.onscroll = function() {
            const scrollTop = this.scrollTop;
            const scrollHeight = this.scrollHeight - this.clientHeight;
            const percent = Math.round((scrollTop / scrollHeight) * 100);
            
            scrollOutput.innerText = `עמדה: ${percent}%`;
            scrollOutput.style.background = `linear-gradient(90deg, #4caf50 ${percent}%, #ddd ${percent}%)`;
            scrollOutput.style.color = percent > 50 ? 'white' : '#333';
            
            if (percent >= 95) {
                scrollOutput.innerText = `🎉 הגעת לסוף! ${percent}%`;
            }
        };
    }
    
    // 7. Focus / Blur Event
    const focusInput = document.getElementById('focusInput');
    const focusOutput = document.getElementById('focusOutput');
    if (focusInput && focusOutput) {
        focusInput.onfocus = function() {
            this.style.borderColor = '#4caf50';
            this.style.boxShadow = '0 0 15px rgba(76, 175, 80, 0.5)';
            this.style.background = '#e8f5e9';
            focusOutput.innerText = '✅ השדה פעיל - תתחיל להקליד!';
            focusOutput.style.background = '#4caf50';
            focusOutput.style.color = 'white';
        };
        
        focusInput.onblur = function() {
            this.style.borderColor = '#ddd';
            this.style.boxShadow = 'none';
            this.style.background = 'white';
            focusOutput.innerText = '❌ השדה לא פעיל';
            focusOutput.style.background = '#ddd';
            focusOutput.style.color = '#333';
        };
    }
    
    // 8. Context Menu Event
    const contextBox = document.getElementById('contextBox');
    const contextOutput = document.getElementById('contextOutput');
    if (contextBox && contextOutput) {
        contextBox.oncontextmenu = function(e) {
            e.preventDefault(); // Prevent default context menu
            
            this.style.background = '#e74c3c';
            this.style.color = 'white';
            this.style.transform = 'scale(1.1) rotate(5deg)';
            
            contextOutput.innerText = '🖱️ לחצת ימני! (התפריט נחסם)';
            contextOutput.style.background = '#e74c3c';
            contextOutput.style.color = 'white';
            
            setTimeout(() => {
                this.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        };
    }
}

// Demo: Change title
function changeTitle() {
    const title = document.getElementById('demoTitle');
    title.innerText = 'ברוך הבא לעולם JavaScript!';
    title.style.color = '#667eea';
    title.style.transform = 'scale(1.1)';
    
    // Animation effect
    setTimeout(() => {
        title.style.transform = 'scale(1)';
    }, 300);
    
    // Show alert
    setTimeout(() => {
        alert('קוד הופעל! 🎉');
    }, 100);
}

// Animate output with typing effect
function animateOutput(element) {
    element.style.animation = 'none';
    setTimeout(() => {
        element.style.animation = 'fadeIn 0.3s ease-in';
    }, 10);
}

// Add glow effect to run buttons
document.addEventListener('DOMContentLoaded', () => {
    const runButtons = document.querySelectorAll('.run-btn');
    
    runButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.animation = 'pulse 0.6s ease-out';
        });
        
        btn.addEventListener('animationend', function() {
            this.style.animation = '';
        });
    });
});

// Add pulse animation to current slide elements
function addPulseToElements() {
    const currentSlideElement = slides[currentSlide];
    const animatedElements = currentSlideElement.querySelectorAll('h2, .interactive-code, .data-table');
    
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'opacity 0.5s ease-in';
            el.style.opacity = '1';
        }, index * 100);
    });
}

// Touch support for mobile
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe left - next slide (RTL)
            changeSlide(1);
        } else {
            // Swipe right - previous slide (RTL)
            changeSlide(-1);
        }
    }
}

// Auto-save progress to localStorage
function saveProgress() {
    localStorage.setItem('slideshow-progress', currentSlide);
}

function loadProgress() {
    const saved = localStorage.getItem('slideshow-progress');
    if (saved !== null) {
        const slideNum = parseInt(saved);
        if (slideNum >= 0 && slideNum < totalSlides) {
            showSlide(slideNum);
        }
    }
}

// Save progress on slide change
document.addEventListener('DOMContentLoaded', () => {
    initSlideshow();
    
    // Optional: load saved progress
    // Uncomment the line below to enable auto-resume
    // loadProgress();
});

// Update progress whenever slide changes
const originalShowSlide = showSlide;
showSlide = function(n) {
    originalShowSlide.call(this, n);
    saveProgress();
};

// Easter egg: Double-click on title to jump to random slide
document.addEventListener('DOMContentLoaded', () => {
    const titleSlide = slides[0];
    const titleMain = titleSlide.querySelector('.title-main');
    
    if (titleMain) {
        titleMain.addEventListener('dblclick', () => {
            const randomSlide = Math.floor(Math.random() * totalSlides);
            showSlide(randomSlide);
            
            // Add sparkle effect
            titleMain.style.animation = 'fadeInScale 0.5s ease-in-out';
            setTimeout(() => {
                titleMain.style.animation = '';
            }, 500);
        });
    }
});

// Presentation mode: Fullscreen on F11
document.addEventListener('keydown', (e) => {
    if (e.key === 'F11') {
        e.preventDefault();
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
    }
});

// Add visual feedback for navigation
function addNavigationFeedback() {
    const container = document.querySelector('.slideshow-container');
    
    container.addEventListener('animationend', () => {
        container.style.animation = '';
    });
}

// Mini Run Functions for Each Fact
// String Facts
function runStringFact1() {
    const output = document.getElementById('outputStringFact1');
    output.innerHTML = '';
    try {
        console.log('=== Template Literals ===');
        let name = "דני";
        let age = 25;
        let message = `שלום ${name}, אתה בן ${age}`;
        console.log(message);
        
        output.innerHTML = `תוצאה: "${message}"`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runStringFact2() {
    const output = document.getElementById('outputStringFact2');
    output.innerHTML = '';
    try {
        console.log('=== מתודות String ===');
        let text = "JavaScript";
        console.log('length:', text.length);
        console.log('toUpperCase:', text.toUpperCase());
        console.log('slice(0,4):', text.slice(0, 4));
        
        output.innerHTML = `length: ${text.length}\ntoUpperCase: ${text.toUpperCase()}\nslice(0,4): ${text.slice(0, 4)}\nincludes: ${text.includes("Script")}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runStringFact3() {
    const output = document.getElementById('outputStringFact3');
    output.innerHTML = '';
    try {
        console.log('=== Escape Characters ===');
        let quote = "He said \"Hello!\"";
        let newLine = "שורה 1\nשורה 2";
        let tab = "א\tב";
        console.log('Quote:', quote);
        console.log('NewLine:', newLine);
        console.log('Tab:', tab);
        
        output.innerHTML = `Quote: ${quote}\n\nNew Line:\n${newLine}\n\nTab: ${tab}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

// Number Facts
function runNumberFact1() {
    const output = document.getElementById('outputNumberFact1');
    output.innerHTML = '';
    try {
        console.log('=== מספרים מיוחדים ===');
        console.log('Infinity:', Infinity);
        console.log('-Infinity:', -Infinity);
        console.log('NaN:', NaN);
        console.log('1/0:', 1/0);
        console.log('"a"*5:', "a"*5);
        
        output.innerHTML = `Infinity: ${Infinity}\n-Infinity: ${-Infinity}\nNaN: ${NaN}\n1/0: ${1/0}\n"a"*5: ${"a"*5}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runNumberFact2() {
    const output = document.getElementById('outputNumberFact2');
    output.innerHTML = '';
    try {
        console.log('=== Math אובייקט ===');
        console.log('Math.PI:', Math.PI);
        console.log('Math.round(4.7):', Math.round(4.7));
        console.log('Math.random():', Math.random());
        
        output.innerHTML = `Math.PI: ${Math.PI.toFixed(5)}\nMath.round(4.7): ${Math.round(4.7)}\nMath.floor(4.7): ${Math.floor(4.7)}\nMath.ceil(4.3): ${Math.ceil(4.3)}\nMath.random(): ${Math.random().toFixed(4)}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runNumberFact3() {
    const output = document.getElementById('outputNumberFact3');
    output.innerHTML = '';
    try {
        console.log('=== המרות ===');
        console.log('parseInt("123"):', parseInt("123"));
        console.log('parseFloat("3.14"):', parseFloat("3.14"));
        
        output.innerHTML = `parseInt("123"): ${parseInt("123")}\nparseFloat("3.14"): ${parseFloat("3.14")}\nNumber("456"): ${Number("456")}\n(42).toString(): "${(42).toString()}"\n(3.14159).toFixed(2): "${(3.14159).toFixed(2)}"`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

// Boolean Facts
function runBooleanFact1() {
    const output = document.getElementById('outputBooleanFact1');
    output.innerHTML = '';
    try {
        console.log('=== השוואות ===');
        console.log('5 > 3:', 5 > 3);
        console.log('10 === 10:', 10 === 10);
        
        output.innerHTML = `5 > 3: ${5 > 3}\n10 === 10: ${10 === 10}\n"a" === "b": ${"a" === "b"}\n5 !== 3: ${5 !== 3}\n10 >= 10: ${10 >= 10}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runBooleanFact2() {
    const output = document.getElementById('outputBooleanFact2');
    output.innerHTML = '';
    try {
        console.log('=== אופרטורים לוגיים ===');
        console.log('true && true:', true && true);
        console.log('true || false:', true || false);
        let age = 20;
        console.log('age >= 18 && age <= 65:', age >= 18 && age <= 65);
        
        output.innerHTML = `true && true: ${true && true}\ntrue || false: ${true || false}\n!true: ${!true}\n!false: ${!false}\n\nage=20:\nage>=18 && age<=65: ${age >= 18 && age <= 65}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runBooleanFact3() {
    const output = document.getElementById('outputBooleanFact3');
    output.innerHTML = '';
    try {
        console.log('=== Truthy & Falsy ===');
        console.log('Boolean(0):', Boolean(0));
        console.log('Boolean(""):', Boolean(""));
        console.log('Boolean("hello"):', Boolean("hello"));
        
        output.innerHTML = `Falsy:\nBoolean(0): ${Boolean(0)}\nBoolean(""): ${Boolean("")}\nBoolean(null): ${Boolean(null)}\n\nTruthy:\nBoolean(1): ${Boolean(1)}\nBoolean("hello"): ${Boolean("hello")}\nBoolean([]): ${Boolean([])}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

// Null Facts
function runNullFact1() {
    const output = document.getElementById('outputNullFact1');
    output.innerHTML = '';
    try {
        console.log('=== שימושים ב-null ===');
        let selectedUser = null;
        console.log('selectedUser:', selectedUser);
        
        let data = {name: "Alex"};
        console.log('לפני:', data);
        data = null;
        console.log('אחרי:', data);
        
        output.innerHTML = `selectedUser = null ✅\n\nמחיקת אובייקט:\nלפני: {name: "Alex"}\nאחרי: ${data}\n\nמחזירים null כ"אין תוצאה"`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runNullFact2() {
    const output = document.getElementById('outputNullFact2');
    output.innerHTML = '';
    try {
        console.log('=== הבאג המפורסם ===');
        console.log('typeof null:', typeof null);
        
        let x = null;
        console.log('x === null:', x === null);
        console.log('x == undefined:', x == undefined);
        console.log('x === undefined:', x === undefined);
        
        output.innerHTML = `typeof null: "${typeof null}" 😱 (באג!)\n\nlet x = null;\nx === null: ${x === null} ✅\nx == undefined: ${x == undefined} (!!!)\nx === undefined: ${x === undefined}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runNullFact3() {
    const output = document.getElementById('outputNullFact3');
    output.innerHTML = '';
    try {
        console.log('=== null vs undefined ===');
        let a = null;
        let b;
        console.log('a (null):', a);
        console.log('b (undefined):', b);
        
        output.innerHTML = `let a = null; → ${a}\nlet b; → ${b}\n\nnull = "אמרתי שזה ריק" 📝\nundefined = "שכחתי להגדיר" ❓`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

// Undefined Facts
function runUndefinedFact1() {
    const output = document.getElementById('outputUndefinedFact1');
    output.innerHTML = '';
    try {
        console.log('=== מתי מקבלים undefined ===');
        let x;
        console.log('משתנה לא מאותחל:', x);
        
        function greet(name) { return name; }
        console.log('פרמטר חסר:', greet());
        
        let obj = {a: 1};
        console.log('property שלא קיים:', obj.b);
        
        output.innerHTML = `משתנה לא מאותחל: ${x}\nפרמטר חסר: ${greet()}\nproperty שלא קיים: ${obj.b}\nפונקציה בלי return: undefined`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runUndefinedFact2() {
    const output = document.getElementById('outputUndefinedFact2');
    output.innerHTML = '';
    try {
        console.log('=== בדיקת undefined ===');
        let x;
        console.log('x === undefined:', x === undefined);
        console.log('typeof x:', typeof x);
        console.log('x == null:', x == null);
        
        output.innerHTML = `let x;\n\nx === undefined: ${x === undefined} ✅\ntypeof x === "undefined": ${typeof x === "undefined"} ✅\n\n⚠️ x == null: ${x == null} (היזהר!)`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runUndefinedFact3() {
    const output = document.getElementById('outputUndefinedFact3');
    output.innerHTML = '';
    try {
        console.log('=== טיפים ===');
        function greet(name = "אורח") {
            return "שלום " + name;
        }
        console.log('עם ברירת מחדל:', greet());
        
        let user = {};
        console.log('Optional chaining:', user?.address?.city);
        
        let x;
        let result = x ?? "ברירת מחדל";
        console.log('Nullish coalescing:', result);
        
        output.innerHTML = `Default parameters:\ngreet() → "${greet()}"\n\nOptional chaining:\nuser?.address?.city → ${user?.address?.city}\n\nNullish coalescing:\nx ?? "ברירת מחדל" → "${result}"`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

// Immutable vs Mutable Facts
function runImmutableFact1() {
    const output = document.getElementById('outputImmutableFact1');
    output.innerHTML = '';
    try {
        console.log('=== חיבור מספר לסטרינג ===');
        let num = 5;
        let text = "10";
        let result = num + text;
        console.log('5 + "10" =', result, '(type:', typeof result + ')');
        console.log('5 + "5" =', 5 + "5");
        console.log('5 + 5 + "5" =', 5 + 5 + "5");
        console.log('"5" + 5 + 5 =', "5" + 5 + 5);
        
        output.innerHTML = `5 + "10" = "${result}" (string!)\n\n`;
        output.innerHTML += `דוגמאות נוספות:\n`;
        output.innerHTML += `5 + "5" = "${5 + "5"}"\n`;
        output.innerHTML += `5 + 5 + "5" = "${5 + 5 + "5"}"\n`;
        output.innerHTML += `"5" + 5 + 5 = "${"5" + 5 + 5}"\n\n`;
        output.innerHTML += `המרה חזרה:\nNumber("10") = ${Number("10")}\n+"10" = ${+"10"}`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runImmutableFact2() {
    const output = document.getElementById('outputImmutableFact2');
    output.innerHTML = '';
    try {
        console.log('=== פעולות על String יוצרות מחרוזת חדשה ===');
        let original = "JavaScript";
        let upper = original.toUpperCase();
        let sliced = original.slice(0, 4);
        
        console.log('original:', original);
        console.log('upper:', upper);
        console.log('sliced:', sliced);
        console.log('original עדיין:', original);
        
        output.innerHTML = `original: "${original}"\n`;
        output.innerHTML += `upper: "${upper}"\n`;
        output.innerHTML += `sliced: "${sliced}"\n\n`;
        output.innerHTML += `original עדיין: "${original}" ✅\n\n`;
        output.innerHTML += `💡 כל מתודה יצרה מחרוזת חדשה!\nהמקור לא השתנה.`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runImmutableFact3() {
    const output = document.getElementById('outputImmutableFact3');
    output.innerHTML = '';
    try {
        console.log('=== שינוי מערכים ואובייקטים ===');
        
        const arr = [1, 2, 3];
        arr.push(4);
        arr[0] = 100;
        arr.pop();
        console.log('arr:', arr);
        
        const person = { name: "Alex", age: 25 };
        person.age = 26;
        person.city = "Tel Aviv";
        delete person.name;
        console.log('person:', person);
        
        const arr1 = [1, 2, 3];
        const arr2 = arr1;
        arr2.push(4);
        console.log('arr1 השתנה!:', arr1);
        
        output.innerHTML = `מערך אחרי שינויים: [${arr}]\n`;
        output.innerHTML += `person אחרי שינויים: ${JSON.stringify(person)}\n\n`;
        output.innerHTML += `⚠️ הפניה משותפת:\narr2 = arr1\narr2.push(4)\narr1 = [${arr1}] (השתנה!)\n\n`;
        output.innerHTML += `💡 const לא מונע שינוי תוכן!`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runImmutableFact4() {
    const output = document.getElementById('outputImmutableFact4');
    output.innerHTML = '';
    try {
        console.log('=== עותקים אמיתיים ===');
        
        const arr1 = [1, 2, 3];
        const arr2 = [...arr1];
        arr2.push(4);
        console.log('arr1:', arr1);
        console.log('arr2:', arr2);
        
        const obj1 = { name: "Alex", age: 25 };
        const obj2 = { ...obj1 };
        obj2.age = 30;
        console.log('obj1.age:', obj1.age);
        console.log('obj2.age:', obj2.age);
        
        output.innerHTML = `Spread Operator:\narr1 = [${arr1}] - לא השתנה ✅\narr2 = [${arr2}] - השתנה\n\n`;
        output.innerHTML += `obj1.age = ${obj1.age} - לא השתנה ✅\nobj2.age = ${obj2.age} - השתנה\n\n`;
        output.innerHTML += `💡 ... יוצר עותק אמיתי!`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runImmutableFact5() {
    const output = document.getElementById('outputImmutableFact5');
    output.innerHTML = '';
    try {
        console.log('=== פעולות מתמטיות עם Strings ===');
        
        console.log('"5" + 3 =', "5" + 3);
        console.log('"10" - 5 =', "10" - 5);
        console.log('"10" * 2 =', "10" * 2);
        console.log('"Hello" - 5 =', "Hello" - 5);
        console.log('5 + 3 + "2" =', 5 + 3 + "2");
        
        output.innerHTML = `+ (חיבור) - הופך למחרוזת:\n`;
        output.innerHTML += `"5" + 3 = "${"5" + 3}"\n`;
        output.innerHTML += `5 + 3 + "2" = "${5 + 3 + "2"}"\n\n`;
        output.innerHTML += `פעולות אחרות - מנסה המרה:\n`;
        output.innerHTML += `"10" - 5 = ${"10" - 5}\n`;
        output.innerHTML += `"10" * 2 = ${"10" * 2}\n`;
        output.innerHTML += `"10" / 2 = ${"10" / 2}\n\n`;
        output.innerHTML += `לא ניתן להמיר:\n"Hello" - 5 = ${"Hello" - 5} (NaN)`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

// Data Type Interactive Functions
function showDataType(type) {
    const detailsContainer = document.getElementById('dataTypeDetails');
    const allTypes = document.querySelectorAll('.type-content');
    const selectedType = document.getElementById(`type-${type}`);
    
    // Hide all type contents
    allTypes.forEach(t => t.style.display = 'none');
    
    // Show container if hidden
    if (detailsContainer.style.display === 'none' || selectedType.style.display === 'none') {
        detailsContainer.style.display = 'block';
        selectedType.style.display = 'block';
        
        // Add highlight to selected badge
        document.querySelectorAll('.type-badge').forEach(badge => {
            badge.classList.remove('active');
        });
        event.target.classList.add('active');
        
        // Re-highlight syntax for the displayed content
        if (typeof Prism !== 'undefined') {
            setTimeout(() => {
                Prism.highlightAllUnder(selectedType);
            }, 50);
        }
    } else {
        // If clicking the same type, toggle off
        detailsContainer.style.display = 'none';
        document.querySelectorAll('.type-badge').forEach(badge => {
            badge.classList.remove('active');
        });
    }
}

// Demo Functions for Each Data Type
function runStringDemo() {
    const output = document.getElementById('outputString');
    output.innerHTML = '';
    
    try {
        console.log('=== String Demo ===');
        
        // Template Literals
        let name = "דני";
        let age = 25;
        let message = `שלום ${name}, אתה בן ${age}`;
        console.log('Template Literal:', message);
        
        // String Methods
        let text = "JavaScript";
        console.log('length:', text.length);
        console.log('toUpperCase:', text.toUpperCase());
        console.log('slice(0, 4):', text.slice(0, 4));
        console.log('includes("Script"):', text.includes("Script"));
        console.log('split("a"):', text.split("a"));
        
        // Output
        output.innerHTML = `🎯 דוגמאות String:\n\n`;
        output.innerHTML += `Template Literal: "${message}"\n\n`;
        output.innerHTML += `text.length = ${text.length}\n`;
        output.innerHTML += `text.toUpperCase() = "${text.toUpperCase()}"\n`;
        output.innerHTML += `text.slice(0, 4) = "${text.slice(0, 4)}"\n`;
        output.innerHTML += `text.includes("Script") = ${text.includes("Script")}\n`;
        output.innerHTML += `text.split("a") = [${text.split("a").map(s => `"${s}"`).join(', ')}]\n\n`;
        output.innerHTML += `✅ כל הדוגמאות בקונסול!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runNumberDemo() {
    const output = document.getElementById('outputNumber');
    output.innerHTML = '';
    
    try {
        console.log('=== Number Demo ===');
        
        // Special Numbers
        console.log('Infinity:', Infinity);
        console.log('NaN:', NaN);
        console.log('1 / 0:', 1 / 0);
        
        // Math methods
        console.log('Math.PI:', Math.PI);
        console.log('Math.round(4.7):', Math.round(4.7));
        console.log('Math.random():', Math.random());
        console.log('Math.max(1, 5, 3):', Math.max(1, 5, 3));
        
        // Conversions
        console.log('parseInt("123"):', parseInt("123"));
        console.log('parseFloat("3.14"):', parseFloat("3.14"));
        
        // Output
        output.innerHTML = `🎯 דוגמאות Number:\n\n`;
        output.innerHTML += `מספרים מיוחדים:\n`;
        output.innerHTML += `Infinity = ${Infinity}\n`;
        output.innerHTML += `1 / 0 = ${1 / 0}\n`;
        output.innerHTML += `"a" * 5 = ${"a" * 5}\n\n`;
        output.innerHTML += `Math אובייקט:\n`;
        output.innerHTML += `Math.PI = ${Math.PI.toFixed(4)}\n`;
        output.innerHTML += `Math.round(4.7) = ${Math.round(4.7)}\n`;
        output.innerHTML += `Math.max(1, 5, 3) = ${Math.max(1, 5, 3)}\n`;
        output.innerHTML += `Math.random() = ${Math.random().toFixed(4)}\n\n`;
        output.innerHTML += `המרות:\n`;
        output.innerHTML += `parseInt("123") = ${parseInt("123")}\n`;
        output.innerHTML += `parseFloat("3.14") = ${parseFloat("3.14")}\n\n`;
        output.innerHTML += `✅ כל הדוגמאות בקונסול!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runBooleanDemo() {
    const output = document.getElementById('outputBoolean');
    output.innerHTML = '';
    
    try {
        console.log('=== Boolean Demo ===');
        
        // Comparisons
        console.log('5 > 3:', 5 > 3);
        console.log('10 === 10:', 10 === 10);
        
        // Logical operators
        console.log('true && true:', true && true);
        console.log('true || false:', true || false);
        console.log('!true:', !true);
        
        // Truthy/Falsy
        console.log('Boolean(0):', Boolean(0));
        console.log('Boolean(""):', Boolean(""));
        console.log('Boolean("hello"):', Boolean("hello"));
        console.log('Boolean([]):', Boolean([]));
        
        // Output
        output.innerHTML = `🎯 דוגמאות Boolean:\n\n`;
        output.innerHTML += `השוואות:\n`;
        output.innerHTML += `5 > 3 = ${5 > 3}\n`;
        output.innerHTML += `10 === 10 = ${10 === 10}\n`;
        output.innerHTML += `"a" === "b" = ${"a" === "b"}\n\n`;
        output.innerHTML += `אופרטורים לוגיים:\n`;
        output.innerHTML += `true && true = ${true && true}\n`;
        output.innerHTML += `true || false = ${true || false}\n`;
        output.innerHTML += `!true = ${!true}\n\n`;
        output.innerHTML += `Truthy & Falsy:\n`;
        output.innerHTML += `Boolean(0) = ${Boolean(0)} (Falsy)\n`;
        output.innerHTML += `Boolean("") = ${Boolean("")} (Falsy)\n`;
        output.innerHTML += `Boolean("hello") = ${Boolean("hello")} (Truthy)\n`;
        output.innerHTML += `Boolean([]) = ${Boolean([])} (Truthy)\n\n`;
        output.innerHTML += `✅ כל הדוגמאות בקונסול!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runNullDemo() {
    const output = document.getElementById('outputNull');
    output.innerHTML = '';
    
    try {
        console.log('=== Null Demo ===');
        
        let x = null;
        console.log('x = null');
        console.log('typeof x:', typeof x);
        console.log('x === null:', x === null);
        console.log('x == undefined:', x == undefined);
        console.log('x === undefined:', x === undefined);
        
        // Output
        output.innerHTML = `🎯 דוגמאות Null:\n\n`;
        output.innerHTML += `let x = null;\n\n`;
        output.innerHTML += `typeof x = "${typeof x}" (באג!)\n`;
        output.innerHTML += `x === null = ${x === null} ✅\n`;
        output.innerHTML += `x == undefined = ${x == undefined} (!!!)\n`;
        output.innerHTML += `x === undefined = ${x === undefined}\n\n`;
        output.innerHTML += `💡 null = "הוגדר כריק במפורש"\n`;
        output.innerHTML += `💡 השתמשו ב-=== ולא ב-== לבדיקה!\n\n`;
        output.innerHTML += `✅ כל הדוגמאות בקונסול!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runUndefinedDemo() {
    const output = document.getElementById('outputUndefined');
    output.innerHTML = '';
    
    try {
        console.log('=== Undefined Demo ===');
        
        let x;
        console.log('let x; (לא מאותחל)');
        console.log('x:', x);
        console.log('typeof x:', typeof x);
        
        // Missing parameter
        function greet(name) {
            return name;
        }
        console.log('greet():', greet());
        
        // Missing property
        let obj = {a: 1};
        console.log('obj.b:', obj.b);
        
        // Output
        output.innerHTML = `🎯 דוגמאות Undefined:\n\n`;
        output.innerHTML += `let x; // לא מאותחל\n`;
        output.innerHTML += `x = ${x}\n`;
        output.innerHTML += `typeof x = "${typeof x}"\n\n`;
        output.innerHTML += `מקרים נוספים:\n`;
        output.innerHTML += `• פרמטר חסר: greet() = ${greet()}\n`;
        output.innerHTML += `• פרופרטי שלא קיים: obj.b = ${obj.b}\n`;
        output.innerHTML += `• פונקציה בלי return = undefined\n\n`;
        output.innerHTML += `💡 undefined = "לא הגדרתי ערך"\n`;
        output.innerHTML += `💡 שונה מ-null שהוא "אמרתי שזה ריק"!\n\n`;
        output.innerHTML += `✅ כל הדוגמאות בקונסול!`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

// Advanced Function Examples
function runFunctionReuse() {
    const output = document.getElementById('outputFunctionReuse');
    output.innerHTML = '';
    try {
        console.log('=== שימוש חוזר בפונקציות ===');
        
        function calculateDiscount(price, percent) {
            return price - (price * percent / 100);
        }
        
        const result1 = calculateDiscount(100, 10);
        const result2 = calculateDiscount(200, 25);
        const result3 = calculateDiscount(80, 50);
        
        console.log("100₪ עם 10% הנחה:", result1);
        console.log("200₪ עם 25% הנחה:", result2);
        console.log("80₪ עם 50% הנחה:", result3);
        
        output.innerHTML = `חישוב הנחות:\n\n`;
        output.innerHTML += `100₪ - 10% = ${result1}₪\n`;
        output.innerHTML += `200₪ - 25% = ${result2}₪\n`;
        output.innerHTML += `80₪ - 50% = ${result3}₪\n\n`;
        output.innerHTML += `💡 כתבנו פונקציה אחת - השתמשנו 3 פעמים!\nחסכנו המון קוד!`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runNestedFunction() {
    const output = document.getElementById('outputNestedFunction');
    output.innerHTML = '';
    try {
        console.log('=== פונקציה בתוך פונקציה (Closure) ===');
        
        function createGreeter(greeting) {
            function greet(name) {
                return greeting + " " + name;
            }
            return greet;
        }
        
        const sayHello = createGreeter("שלום");
        const sayHi = createGreeter("היי");
        const sayGoodMorning = createGreeter("בוקר טוב");
        
        console.log(sayHello("דני"));
        console.log(sayHi("שרה"));
        console.log(sayGoodMorning("אלכס"));
        
        output.innerHTML = `יצרנו 3 "מפעלי ברכות":\n\n`;
        output.innerHTML += `sayHello("דני") = "${sayHello("דני")}"\n`;
        output.innerHTML += `sayHi("שרה") = "${sayHi("שרה")}"\n`;
        output.innerHTML += `sayGoodMorning("אלכס") = "${sayGoodMorning("אלכס")}"\n\n`;
        output.innerHTML += `💡 כל פונקציה "זוכרת" את הברכה שלה!\nזה נקרא Closure!`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runRecursiveFunction() {
    const output = document.getElementById('outputRecursiveFunction');
    output.innerHTML = '';
    try {
        console.log('=== רקורסיה - פונקציה שקוראת לעצמה ===');
        
        function factorial(n) {
            console.log(`מחשב: ${n}!`);
            if (n === 0 || n === 1) return 1;
            return n * factorial(n - 1);
        }
        
        const result = factorial(5);
        console.log("תוצאה:", result);
        
        console.log('\n--- ספירה לאחור ---');
        function countdown(num) {
            console.log(num);
            if (num <= 0) {
                console.log("🚀 המראה!");
                return;
            }
            countdown(num - 1);
        }
        countdown(5);
        
        output.innerHTML = `Factorial:\n5! = 5 × 4 × 3 × 2 × 1 = ${result}\n\n`;
        output.innerHTML += `Countdown:\n5 → 4 → 3 → 2 → 1 → 0 → 🚀 המראה!\n\n`;
        output.innerHTML += `💡 הפונקציה קוראת לעצמה!\n⚠️ חובה תנאי עצירה (אחרת loop אינסופי!)`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runRecursiveArray() {
    const output = document.getElementById('outputRecursiveArray');
    output.innerHTML = '';
    try {
        console.log('=== רקורסיה עם מערכים ===');
        
        function sumArray(arr, depth = 0) {
            console.log('  '.repeat(depth) + `sumArray([${arr}])`);
            
            if (arr.length === 0) {
                console.log('  '.repeat(depth) + '→ 0 (מערך ריק)');
                return 0;
            }
            
            const result = arr[0] + sumArray(arr.slice(1), depth + 1);
            console.log('  '.repeat(depth) + `→ ${arr[0]} + ... = ${result}`);
            return result;
        }
        
        const numbers = [1, 2, 3, 4, 5];
        const total = sumArray(numbers);
        console.log('\nסכום סופי:', total);
        
        output.innerHTML = `המערך: [${numbers}]\n\n`;
        output.innerHTML += `איך זה עובד:\n`;
        output.innerHTML += `[1,2,3,4,5] → 1 + sum([2,3,4,5])\n`;
        output.innerHTML += `[2,3,4,5]   → 2 + sum([3,4,5])\n`;
        output.innerHTML += `[3,4,5]     → 3 + sum([4,5])\n`;
        output.innerHTML += `[4,5]       → 4 + sum([5])\n`;
        output.innerHTML += `[5]         → 5 + sum([])\n`;
        output.innerHTML += `[]          → 0\n\n`;
        output.innerHTML += `תוצאה: ${total} ✅\n💡 בדוק בקונסול (F12) לראות את כל השלבים!`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runCallbackFunction() {
    const output = document.getElementById('outputCallbackFunction');
    output.innerHTML = '';
    try {
        console.log('=== Callback Functions ===');
        
        function doMath(a, b, operation) {
            return operation(a, b);
        }
        
        const add = (x, y) => x + y;
        const multiply = (x, y) => x * y;
        const power = (x, y) => Math.pow(x, y);
        
        const r1 = doMath(5, 3, add);
        const r2 = doMath(5, 3, multiply);
        const r3 = doMath(5, 3, power);
        const r4 = doMath(5, 3, (a, b) => a - b);
        
        console.log("5 + 3 =", r1);
        console.log("5 * 3 =", r2);
        console.log("5 ^ 3 =", r3);
        console.log("5 - 3 =", r4);
        
        output.innerHTML = `פונקציה אחת, פעולות רבות:\n\n`;
        output.innerHTML += `doMath(5, 3, add)      = ${r1}\n`;
        output.innerHTML += `doMath(5, 3, multiply) = ${r2}\n`;
        output.innerHTML += `doMath(5, 3, power)    = ${r3}\n`;
        output.innerHTML += `doMath(5, 3, subtract) = ${r4}\n\n`;
        output.innerHTML += `💡 העברנו פונקציות כפרמטרים!\nזה מאוד חזק ב-JavaScript.`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

// Scope Examples
function runScopeGlobal() {
    const output = document.getElementById('outputScopeGlobal');
    output.innerHTML = '';
    try {
        console.log('=== Global Scope ===');
        
        let globalVar = "אני גלובלי";
        
        function test1() {
            console.log('test1:', globalVar);
        }
        
        function test2() {
            console.log('test2:', globalVar);
        }
        
        test1();
        test2();
        console.log('מחוץ:', globalVar);
        
        function changeGlobal() {
            globalVar = "שוניתי!";
        }
        changeGlobal();
        console.log('אחרי שינוי:', globalVar);
        
        output.innerHTML = `משתנה גלובלי:\n\n`;
        output.innerHTML += `✅ test1() רואה: "${globalVar}"\n`;
        output.innerHTML += `✅ test2() רואה: "${globalVar}"\n`;
        output.innerHTML += `✅ כולם רואים אותו!\n\n`;
        output.innerHTML += `⚠️ כולם יכולים לשנות:\nאחרי changeGlobal(): "${globalVar}"`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runScopeFunction() {
    const output = document.getElementById('outputScopeFunction');
    output.innerHTML = '';
    try {
        console.log('=== Function Scope ===');
        
        function myFunction() {
            let localVar = "אני מקומי";
            console.log('בפנים:', localVar);
            return localVar;
        }
        
        const result = myFunction();
        console.log('החזרה:', result);
        
        function greet(name) {
            let message = "שלום " + name;
            console.log(message);
        }
        
        greet("דני");
        
        output.innerHTML = `Function Scope:\n\n`;
        output.innerHTML += `✅ בתוך הפונקציה: "${result}"\n`;
        output.innerHTML += `❌ מחוץ לפונקציה: לא נגיש!\n\n`;
        output.innerHTML += `name ו-message קיימים\nרק בתוך הפונקציה greet()`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runScopeBlock() {
    const output = document.getElementById('outputScopeBlock');
    output.innerHTML = '';
    try {
        console.log('=== Block Scope ===');
        
        if (true) {
            let blockVar = "אני בבלוק";
            const blockConst = "גם אני";
            console.log('בבלוק:', blockVar);
        }
        
        for (let i = 0; i < 3; i++) {
            let loopVar = "איטרציה " + i;
            console.log(loopVar);
        }
        
        if (true) {
            var oldStyle = "אני var";
        }
        console.log('var מחוץ לבלוק:', oldStyle);
        
        output.innerHTML = `Block Scope:\n\n`;
        output.innerHTML += `let/const:\n`;
        output.innerHTML += `✅ בתוך { } - עובד\n`;
        output.innerHTML += `❌ מחוץ ל-{ } - לא נגיש\n\n`;
        output.innerHTML += `var (לא מומלץ):\n`;
        output.innerHTML += `✅ עובד גם מחוץ לבלוק: "${oldStyle}"\n\n`;
        output.innerHTML += `💡 זו הסיבה להשתמש ב-let/const!`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runScopeChain() {
    const output = document.getElementById('outputScopeChain');
    output.innerHTML = '';
    try {
        console.log('=== Scope Chain ===');
        
        let global = "גלובלי";
        
        function outer() {
            let outerVar = "חיצוני";
            
            function inner() {
                let innerVar = "פנימי";
                
                console.log('innerVar:', innerVar);
                console.log('outerVar:', outerVar);
                console.log('global:', global);
            }
            
            inner();
        }
        
        outer();
        
        output.innerHTML = `Scope Chain - חיפוש משתנים:\n\n`;
        output.innerHTML += `הפונקציה inner() רואה:\n`;
        output.innerHTML += `1️⃣ innerVar: "פנימי" (עצמי)\n`;
        output.innerHTML += `2️⃣ outerVar: "חיצוני" (אבא)\n`;
        output.innerHTML += `3️⃣ global: "גלובלי" (סבא)\n\n`;
        output.innerHTML += `💡 JavaScript מחפש מפנים החוצה!\nמצא? עוצר. לא מצא? ממשיך.`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runBonusCallback() {
    const output = document.getElementById('outputBonusCallback');
    output.innerHTML = '';
    try {
        console.log('=== העברת פונקציה כפרמטר ===');
        
        function processArray(arr, processor) {
            const results = [];
            for (let item of arr) {
                results.push(processor(item));
            }
            return results;
        }
        
        const numbers = [1, 2, 3, 4, 5];
        
        const double = (x) => x * 2;
        const square = (x) => x * x;
        const addTen = (x) => x + 10;
        
        const r1 = processArray(numbers, double);
        const r2 = processArray(numbers, square);
        const r3 = processArray(numbers, addTen);
        
        console.log("כפל ב-2:", r1);
        console.log("בריבוע:", r2);
        console.log("הוסף 10:", r3);
        
        output.innerHTML = `המערך: [${numbers}]\n\n`;
        output.innerHTML += `כפל ב-2: [${r1}]\n`;
        output.innerHTML += `בריבוע: [${r2}]\n`;
        output.innerHTML += `הוסף 10: [${r3}]\n\n`;
        output.innerHTML += `💡 פונקציה אחת - 3 פעולות!\nזה הבסיס למתודות מערכים.`;
        animateOutput(output);
    } catch (e) { output.innerHTML = `❌ ${e.message}`; }
}

function runScopeExercise() {
    const output = document.getElementById('outputScopeExercise');
    output.innerHTML = '';
    
    try {
        output.innerHTML = `=== תוצאות הניסויים ===\n\n`;
        
        // Test 1: var - פירוט מלא
        console.log('--- ניסוי 1: var ---');
        output.innerHTML += `📘 ניסוי 1 (var):\n`;
        output.innerHTML += `─────────────────────\n`;
        try {
            function testVar() {
                console.log('typeof x:', typeof x);
                var x = 5;
                console.log('x:', x);
            }
            testVar();
            output.innerHTML += `typeof x: "undefined"\n`;
            output.innerHTML += `x: 5\n\n`;
            output.innerHTML += `🔍 פירוט:\n`;
            output.innerHTML += `• JavaScript "מרים" (hoisting) את var x לראש הפונקציה\n`;
            output.innerHTML += `• הקוד באמת נראה ככה:\n`;
            output.innerHTML += `  function testVar() {\n`;
            output.innerHTML += `    var x;  // <- הוגדר כאן! (undefined)\n`;
            output.innerHTML += `    console.log(typeof x);  // "undefined"\n`;
            output.innerHTML += `    x = 5;  // <- עכשיו מקבל ערך\n`;
            output.innerHTML += `    console.log(x);  // 5\n`;
            output.innerHTML += `  }\n\n`;
        } catch (e) {
            output.innerHTML += `שגיאה: ${e.message}\n\n`;
        }
        
        // Test 2: let - פירוט מלא
        console.log('--- ניסוי 2: let ---');
        output.innerHTML += `📗 ניסוי 2 (let):\n`;
        output.innerHTML += `─────────────────────\n`;
        output.innerHTML += `שגיאה: Cannot access 'x' before initialization\n\n`;
        output.innerHTML += `🔍 פירוט:\n`;
        output.innerHTML += `• גם let עובר hoisting, אבל שונה!\n`;
        output.innerHTML += `• הוא "קיים" אבל לא ניתן לגשת אליו (TDZ)\n`;
        output.innerHTML += `• TDZ = Temporal Dead Zone\n`;
        output.innerHTML += `• זה אומר: "המשתנה קיים אבל במצב מת"\n`;
        output.innerHTML += `• רק אחרי let x = 5; הוא "חי"!\n`;
        output.innerHTML += `• זה מגן עלינו משגיאות!\n\n`;
        console.log('(לא מריצים - יגרום לשגיאה)');
        
        // Test 3: Global - פירוט מלא
        console.log('--- ניסוי 3: גלובלי ---');
        output.innerHTML += `📕 ניסוי 3 (גלובלי):\n`;
        output.innerHTML += `─────────────────────\n`;
        let global = 10;
        function testGlobal() {
            console.log('global:', global);
            return global;
        }
        const r3 = testGlobal();
        output.innerHTML += `global: ${r3}\n\n`;
        output.innerHTML += `🔍 פירוט:\n`;
        output.innerHTML += `• אין משתנה מקומי בשם global בפונקציה\n`;
        output.innerHTML += `• JavaScript מחפש: "יש global כאן? לא."\n`;
        output.innerHTML += `• "אולי בסקופ החיצוני? כן! מצאתי!"\n`;
        output.innerHTML += `• זה נקרא Scope Chain - חיפוש בשרשרת\n`;
        output.innerHTML += `• תמיד מפנים לחוץ עד שמוצאים\n\n`;
        
        // Test 4: TDZ - פירוט מלא
        console.log('--- ניסוי 4: TDZ ---');
        output.innerHTML += `📙 ניסוי 4 (TDZ המתקדם):\n`;
        output.innerHTML += `─────────────────────\n`;
        output.innerHTML += `שגיאה: Cannot access 'global2' before initialization\n\n`;
        output.innerHTML += `🔍 פירוט - זה מסובך!\n`;
        output.innerHTML += `• יש global2 גלובלי עם ערך 10\n`;
        output.innerHTML += `• בפונקציה: let global2 = 20;\n`;
        output.innerHTML += `• JavaScript רואה: "יש global2 מקומי!"\n`;
        output.innerHTML += `• לכן הוא לא מסתכל על הגלובלי בכלל\n`;
        output.innerHTML += `• אבל console.log לפני let - זה TDZ!\n`;
        output.innerHTML += `• התוצאה: שגיאה!\n`;
        output.innerHTML += `• הפתרון: שמות שונים או let לפני השימוש\n\n`;
        console.log('(לא מריצים - יגרום לשגיאה)');
        
        output.innerHTML += `═══════════════════════════\n`;
        output.innerHTML += `🎯 מסקנות חשובות:\n`;
        output.innerHTML += `═══════════════════════════\n\n`;
        output.innerHTML += `1️⃣ var: hoisting + undefined\n`;
        output.innerHTML += `   ← ישן, מסוכן, אל תשתמשו\n\n`;
        output.innerHTML += `2️⃣ let/const: hoisting + TDZ\n`;
        output.innerHTML += `   ← מודרני, בטוח, תופס שגיאות\n\n`;
        output.innerHTML += `3️⃣ כלל זהב:\n`;
        output.innerHTML += `   • הגדירו משתנים בהתחלה\n`;
        output.innerHTML += `   • שמות ברורים ושונים\n`;
        output.innerHTML += `   • השתמשו ב-const כשאפשר\n`;
        output.innerHTML += `   • let רק כשצריכים לשנות\n`;
        output.innerHTML += `   • var? לעולם לא! 🚫`;
        
        animateOutput(output);
    } catch (error) {
        console.error('שגיאה:', error);
        output.innerHTML += `\nשגיאה בהרצה: ${error.message}`;
    }
}

// Page 6 Exercise Examples - Popup Functions
let popupCounter = 0;

function openDemoPopup(demoNum) {
    const popup = document.getElementById('demoPopup' + demoNum);
    if (popup) {
        popup.classList.add('active');
        if (demoNum === 2) {
            popupCounter = 0;
            document.getElementById('counterDisplay').innerText = 'לחיצות: 0';
        }
    }
}

function closeDemoPopup(demoNum) {
    const popup = document.getElementById('demoPopup' + demoNum);
    if (popup) {
        popup.classList.remove('active');
    }
}

function changeBackgroundColor() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0');
    const popup = document.getElementById('demoPopup1');
    const content = popup.querySelector('.demo-popup-demo');
    content.style.background = randomColor;
    document.getElementById('colorDisplay1').innerText = `הצבע: ${randomColor}`;
    console.log('שינוי צבע:', randomColor);
}

function incrementCounter() {
    popupCounter++;
    document.getElementById('counterDisplay').innerText = 'לחיצות: ' + popupCounter;
    console.log('מונה:', popupCounter);
}

// Objects (Page 9) Examples
function runObject1() {
    const output = document.getElementById('outputObject1');
    output.innerHTML = '';
    try {
        console.log('=== אוביקט 1: יצירת אוביקט פשוט ===');
        
        let person = {
            name: "שרה",
            age: 25,
            city: "תל אביב",
            isStudent: true
        };
        
        console.log('person.name:', person.name);
        console.log('person.age:', person.age);
        console.log('האוביקט המלא:', person);
        
        output.innerHTML = `יצירת אוביקט:\n\n`;
        output.innerHTML += `person = {\n`;
        output.innerHTML += `  name: "${person.name}",\n`;
        output.innerHTML += `  age: ${person.age},\n`;
        output.innerHTML += `  city: "${person.city}",\n`;
        output.innerHTML += `  isStudent: ${person.isStudent}\n`;
        output.innerHTML += `}\n\n`;
        output.innerHTML += `גישה למאפיינים:\n`;
        output.innerHTML += `person.name → "${person.name}"\n`;
        output.innerHTML += `person.age → ${person.age}\n\n`;
        output.innerHTML += `💡 שימו לב: משתמשים ב-נקודה (.) לגישה!`;
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runObject2() {
    const output = document.getElementById('outputObject2');
    output.innerHTML = '';
    try {
        console.log('=== אוביקט 2: שינוי והוספה ===');
        
        let car = {
            brand: "טויוטה",
            year: 2020
        };
        
        console.log('לפני שינוי:', car);
        
        car.year = 2021;
        car.color = "כחול";
        
        console.log('אחרי שינוי:', car);
        
        output.innerHTML = `שינוי והוספת מאפיינים:\n\n`;
        output.innerHTML += `התחלה:\n`;
        output.innerHTML += `car = { brand: "טויוטה", year: 2020 }\n\n`;
        output.innerHTML += `שינוי:\n`;
        output.innerHTML += `car.year = 2021\n\n`;
        output.innerHTML += `הוספה:\n`;
        output.innerHTML += `car.color = "כחול"\n\n`;
        output.innerHTML += `התוצאה:\n`;
        output.innerHTML += `car = {\n`;
        output.innerHTML += `  brand: "${car.brand}",\n`;
        output.innerHTML += `  year: ${car.year},\n`;
        output.innerHTML += `  color: "${car.color}"\n`;
        output.innerHTML += `}\n\n`;
        output.innerHTML += `💡 אוביקטים דינמיים - אפשר לשנות ולהוסיף בכל זמן!`;
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runObject3() {
    const output = document.getElementById('outputObject3');
    output.innerHTML = '';
    try {
        console.log('=== אוביקט 3: פונקציות באוביקט (methods) ===');
        
        let calculator = {
            num1: 10,
            num2: 5,
            add: function() {
                return this.num1 + this.num2;
            },
            multiply: function() {
                return this.num1 * this.num2;
            }
        };
        
        const addResult = calculator.add();
        const multiplyResult = calculator.multiply();
        
        console.log('חיבור:', addResult);
        console.log('כפל:', multiplyResult);
        
        output.innerHTML = `אוביקט עם פונקציות (methods):\n\n`;
        output.innerHTML += `calculator = {\n`;
        output.innerHTML += `  num1: ${calculator.num1},\n`;
        output.innerHTML += `  num2: ${calculator.num2},\n`;
        output.innerHTML += `  add: function() { ... },\n`;
        output.innerHTML += `  multiply: function() { ... }\n`;
        output.innerHTML += `}\n\n`;
        output.innerHTML += `קריאה לפונקציות:\n`;
        output.innerHTML += `calculator.add() → ${addResult}\n`;
        output.innerHTML += `calculator.multiply() → ${multiplyResult}\n\n`;
        output.innerHTML += `💡 this מתייחס לאוביקט עצמו!\n`;
        output.innerHTML += `this.num1 = calculator.num1`;
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runObject4() {
    const output = document.getElementById('outputObject4');
    output.innerHTML = '';
    try {
        console.log('=== אוביקט 4: אוביקטים מקוננים ===');
        
        let school = {
            name: "בית ספר מצוינות",
            address: {
                city: "חיפה",
                street: "הרצל 15"
            },
            students: 500
        };
        
        console.log('school.name:', school.name);
        console.log('school.address.city:', school.address.city);
        console.log('school.address.street:', school.address.street);
        
        output.innerHTML = `אוביקטים מקוננים:\n\n`;
        output.innerHTML += `school = {\n`;
        output.innerHTML += `  name: "${school.name}",\n`;
        output.innerHTML += `  address: {\n`;
        output.innerHTML += `    city: "${school.address.city}",\n`;
        output.innerHTML += `    street: "${school.address.street}"\n`;
        output.innerHTML += `  },\n`;
        output.innerHTML += `  students: ${school.students}\n`;
        output.innerHTML += `}\n\n`;
        output.innerHTML += `גישה למאפיינים מקוננים:\n`;
        output.innerHTML += `school.name → "${school.name}"\n`;
        output.innerHTML += `school.address.city → "${school.address.city}"\n`;
        output.innerHTML += `school.address.street → "${school.address.street}"\n\n`;
        output.innerHTML += `💡 אוביקט בתוך אוביקט - נקודה אחרי נקודה!`;
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runObjectExercise() {
    const output = document.getElementById('outputObjectExercise');
    output.innerHTML = '';
    try {
        console.log('=== תרגול אוביקטים ===');
        
        let myProfile = {
            firstName: "דני",
            lastName: "כהן",
            age: 22,
            city: "ירושלים",
            hobbies: ["תכנות", "ספורט", "מוזיקה"],
            introduce: function() {
                return `שלום, אני ${this.firstName} ${this.lastName}`;
            }
        };
        
        console.log(myProfile.introduce());
        console.log("תחביבים:", myProfile.hobbies);
        console.log("תחביב ראשון:", myProfile.hobbies[0]);
        
        output.innerHTML = `פרופיל אישי:\n\n`;
        output.innerHTML += `myProfile = {\n`;
        output.innerHTML += `  firstName: "${myProfile.firstName}",\n`;
        output.innerHTML += `  lastName: "${myProfile.lastName}",\n`;
        output.innerHTML += `  age: ${myProfile.age},\n`;
        output.innerHTML += `  city: "${myProfile.city}",\n`;
        output.innerHTML += `  hobbies: [${myProfile.hobbies.map(h => `"${h}"`).join(', ')}],\n`;
        output.innerHTML += `  introduce: function() { ... }\n`;
        output.innerHTML += `}\n\n`;
        output.innerHTML += `התוצאות:\n`;
        output.innerHTML += `${myProfile.introduce()}\n`;
        output.innerHTML += `תחביבים: ${myProfile.hobbies.join(', ')}\n`;
        output.innerHTML += `תחביב ראשון: ${myProfile.hobbies[0]}\n\n`;
        output.innerHTML += `💡 שילוב של אוביקט + מערך + פונקציה!\n`;
        output.innerHTML += `זה הבסיס לפרויקטים אמיתיים!`;
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

// Loops Functions
function runLoopFor() {
    const output = document.getElementById('outputLoopFor');
    output.innerHTML = '';
    try {
        console.log('=== לולאת for ===');
        
        output.innerHTML = `לולאת for - דוגמאות:\n\n`;
        
        // Basic for loop
        output.innerHTML += `1. ספירה בסיסית:\n`;
        for (let i = 0; i < 5; i++) {
            output.innerHTML += `פעם ${i}\n`;
            console.log('פעם', i);
        }
        
        // Countdown
        output.innerHTML += `\n2. ספירה לאחור:\n`;
        for (let i = 10; i >= 0; i--) {
            output.innerHTML += `${i} `;
            console.log(i);
        }
        output.innerHTML += `\n🚀 המראה!\n`;
        
        // With array
        output.innerHTML += `\n3. לולאה על מערך:\n`;
        const fruits = ["תפוח", "בננה", "תפוז"];
        for (let i = 0; i < fruits.length; i++) {
            output.innerHTML += `${i}: ${fruits[i]}\n`;
            console.log(i + ":", fruits[i]);
        }
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runLoopWhile() {
    const output = document.getElementById('outputLoopWhile');
    output.innerHTML = '';
    try {
        console.log('=== לולאת while ===');
        
        output.innerHTML = `לולאת while:\n\n`;
        
        let count = 0;
        while (count < 5) {
            output.innerHTML += `ספירה: ${count}\n`;
            console.log('ספירה:', count);
            count++;
        }
        
        output.innerHTML += `\nחיפוש במערך:\n`;
        const numbers = [2, 5, 8, 12, 15];
        let i = 0;
        let found = false;
        
        while (i < numbers.length && !found) {
            if (numbers[i] > 10) {
                output.innerHTML += `מצאתי: ${numbers[i]} (גדול מ-10)\n`;
                console.log("מצאתי:", numbers[i]);
                found = true;
            }
            i++;
        }
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runLoopDoWhile() {
    const output = document.getElementById('outputLoopDoWhile');
    output.innerHTML = '';
    try {
        console.log('=== לולאת do...while ===');
        
        output.innerHTML = `לולאת do...while:\n\n`;
        
        let count2 = 10;
        output.innerHTML += `ספירה מ-${count2}:\n`;
        
        do {
            output.innerHTML += `ספירה: ${count2}\n`;
            console.log('ספירה:', count2);
            count2++;
        } while (count2 < 5);
        
        output.innerHTML += `\nהתנאי false (10 לא קטן מ-5),\n`;
        output.innerHTML += `אבל הקוד רץ לפחות פעם אחת!\n`;
        output.innerHTML += `זה ההבדל בין do...while ל-while רגילה.`;
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runLoopAdvanced() {
    const output = document.getElementById('outputLoopAdvanced');
    output.innerHTML = '';
    try {
        console.log('=== לולאות מתקדמות ===');
        
        output.innerHTML = `for...of ו-for...in:\n\n`;
        
        // for...of
        output.innerHTML += `for...of (ערכים):\n`;
        const colors = ["אדום", "כחול", "ירוק"];
        for (let color of colors) {
            output.innerHTML += `צבע: ${color}\n`;
            console.log('צבע:', color);
        }
        
        // for...in
        output.innerHTML += `\nfor...in (מפתחות):\n`;
        const person = {
            name: "דני",
            age: 22,
            city: "תל אביב"
        };
        
        for (let key in person) {
            output.innerHTML += `${key}: ${person[key]}\n`;
            console.log(key + ":", person[key]);
        }
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

function runLoopControl() {
    const output = document.getElementById('outputLoopControl');
    output.innerHTML = '';
    try {
        console.log('=== break ו-continue ===');
        
        output.innerHTML = `בקרת לולאות:\n\n`;
        
        // break
        output.innerHTML += `break - עוצר לגמרי:\n`;
        for (let i = 0; i < 10; i++) {
            if (i === 5) {
                output.innerHTML += `עצרנו ב-5!\n`;
                console.log("עצרנו ב-5!");
                break;
            }
            output.innerHTML += `${i} `;
            console.log(i);
        }
        
        // continue
        output.innerHTML += `\n\ncontinue - מדלג:\n`;
        for (let i = 0; i < 10; i++) {
            if (i % 2 === 0) {
                continue;  // Skip evens
            }
            output.innerHTML += `${i} `;
            console.log(i);
        }
        output.innerHTML += `(רק אי-זוגיים)\n`;
        
        // Primes example
        output.innerHTML += `\nמספרים ראשוניים עד 20:\n`;
        const primes = [];
        for (let num = 2; num <= 20; num++) {
            let isPrime = true;
            
            for (let divisor = 2; divisor < num; divisor++) {
                if (num % divisor === 0) {
                    isPrime = false;
                    break;
                }
            }
            
            if (isPrime) {
                primes.push(num);
            }
        }
        output.innerHTML += primes.join(', ');
        console.log("ראשוניים:", primes);
        
        animateOutput(output);
    } catch (error) {
        output.innerHTML = `❌ שגיאה: ${error.message}`;
    }
}

// Class Question Functions
function showQuestion(questionId) {
    const question = document.getElementById(`question-${questionId}`);
    if (question.style.display === 'none') {
        question.style.display = 'block';
        question.style.animation = 'slideUp 0.4s ease-out';
        
        // Re-highlight syntax for code in question
        if (typeof Prism !== 'undefined') {
            setTimeout(() => {
                Prism.highlightAllUnder(question);
            }, 50);
        }
    } else {
        question.style.display = 'none';
    }
}

function showAnswer(questionId) {
    const answer = document.getElementById(`answer-${questionId}`);
    answer.style.display = 'block';
    answer.style.animation = 'fadeIn 0.5s ease-in';
    
    // Re-highlight syntax for code in answer
    if (typeof Prism !== 'undefined') {
        setTimeout(() => {
            Prism.highlightAllUnder(answer);
        }, 50);
    }
}

// HTML Visualizer Functions
function toggleHTMLVisualizer() {
    const visualizer = document.getElementById('htmlVisualizer');
    
    if (visualizer.style.display === 'none') {
        visualizer.style.display = 'block';
        initHTMLVisualizer();
        
        // Re-highlight syntax
        if (typeof Prism !== 'undefined') {
            setTimeout(() => Prism.highlightAllUnder(visualizer), 50);
        }
    } else {
        visualizer.style.display = 'none';
    }
}

function initHTMLVisualizer() {
    // Get all demo elements
    const demoElements = document.querySelectorAll('[data-element]');
    const elementInfo = document.getElementById('elementInfo');
    
    // Element descriptions
    const descriptions = {
        'main': '&lt;main&gt; - מכיל את התוכן המרכזי של הדף',
        'header': '&lt;header&gt; - כותרת עליונה של האזור',
        'section': '&lt;section&gt; - אזור תוכן לפי נושא',
        'article1': '&lt;article&gt; - יחידת תוכן עצמאית (שמאל)',
        'article2': '&lt;article&gt; - יחידת תוכן עצמאית (ימין)'
    };
    
    demoElements.forEach(element => {
        // Mouse enter - highlight
        element.addEventListener('mouseenter', function(e) {
            e.stopPropagation();
            
            const elementType = this.getAttribute('data-element');
            
            // Remove all previous highlights
            document.querySelectorAll('.code-line').forEach(line => {
                line.classList.remove('highlight');
            });
            
            document.querySelectorAll('[data-element]').forEach(el => {
                el.classList.remove('active');
            });
            
            // Highlight current element
            this.classList.add('active');
            
            // Highlight matching code lines
            document.querySelectorAll(`.code-line[data-element="${elementType}"]`).forEach(line => {
                line.classList.add('highlight');
            });
            
            // Update info box
            elementInfo.innerHTML = descriptions[elementType] || 'אלמנט HTML';
            elementInfo.style.animation = 'pulse 0.3s ease-out';
        });
        
        // Animation end
        element.addEventListener('animationend', function() {
            elementInfo.style.animation = '';
        });
    });
    
    // Also add hover to code lines
    const codeLines = document.querySelectorAll('.code-line');
    codeLines.forEach(line => {
        line.addEventListener('mouseenter', function() {
            const elementType = this.getAttribute('data-element');
            
            // Remove all highlights
            document.querySelectorAll('.code-line').forEach(l => {
                l.classList.remove('highlight');
            });
            
            document.querySelectorAll('[data-element]').forEach(el => {
                el.classList.remove('active');
            });
            
            // Highlight matching elements
            this.classList.add('highlight');
            document.querySelectorAll(`[data-element="${elementType}"]`).forEach(el => {
                if (!el.classList.contains('code-line')) {
                    el.classList.add('active');
                }
            });
            
            // Update info
            elementInfo.innerHTML = descriptions[elementType] || 'אלמנט HTML';
            elementInfo.style.animation = 'pulse 0.3s ease-out';
        });
    });
    
    // Reset on mouse leave from visualizer
    const visualizer = document.getElementById('htmlVisualizer');
    visualizer.addEventListener('mouseleave', function() {
        document.querySelectorAll('.code-line').forEach(line => {
            line.classList.remove('highlight');
        });
        
        document.querySelectorAll('[data-element]').forEach(el => {
            el.classList.remove('active');
        });
        
        elementInfo.innerHTML = 'עבור עם העכבר על האלמנטים';
    });
}

// Console welcome message
console.log('%c🎓 JavaScript למתחילים - שיעור 2', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cברוך הבא למצגת האינטראקטיבית!', 'font-size: 14px; color: #764ba2;');
console.log('%cניווט: חיצים ← → או כפתורי הניווט', 'font-size: 12px; color: #666;');
console.log('%cמקש F11 למסך מלא', 'font-size: 12px; color: #666;');
console.log('%cהקלק פעמיים על הכותרת לדילוג אקראי! 🎲', 'font-size: 12px; color: #666;');
console.log('%c🎨 חדש! ויזואליזר HTML אינטראקטיבי בשקופית 3', 'font-size: 12px; color: #ffd700; font-weight: bold;');

// Initialize everything when DOM is ready
window.addEventListener('load', () => {
    console.log('✅ המצגת מוכנה לשימוש!');
    addNavigationFeedback();
    initSyntaxHighlighting();
});

// Add syntax highlighting to all code blocks
function initSyntaxHighlighting() {
    // Add language-javascript class to all code elements in pre tags
    const codeBlocks = document.querySelectorAll('pre code:not([class*="language-"])');
    codeBlocks.forEach(block => {
        block.classList.add('language-javascript');
    });
    
    // Re-run Prism highlighting
    if (typeof Prism !== 'undefined') {
        Prism.highlightAll();
    }
}

// Toggle Answer for Practice Exercises
function toggleAnswer(exerciseId) {
    const answer = document.getElementById(`answer-${exerciseId}`);
    
    if (answer) {
        if (answer.style.display === 'none' || answer.style.display === '') {
            answer.style.display = 'block';
            answer.style.animation = 'fadeIn 0.5s ease-in';
            
            // Re-highlight syntax for code in answer
            if (typeof Prism !== 'undefined') {
                setTimeout(() => {
                    Prism.highlightAllUnder(answer);
                }, 50);
            }
        } else {
            answer.style.display = 'none';
        }
    }
}

