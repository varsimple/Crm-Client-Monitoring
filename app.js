// client/app.js

// 1) Импортируем функции из Firebase SDK (ESM-версии с CDN)
import { initializeApp }   from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getAuth }         from "https://www.gstatic.com/firebasejs/9.22.1/firebase-auth.js";
import { getFirestore }    from "https://www.gstatic.com/firebasejs/9.22.1/firebase-firestore.js";

// 2) Импортируем наш объект конфигурации
import { firebaseConfig }  from "./firebase-config.js";

// 3) Инициализируем Firebase App
const app = initializeApp(firebaseConfig);

// 4) Получаем сервисы Auth и Firestore
const auth = getAuth(app);
const db   = getFirestore(app);

// 5) Проверяем, что инициализация прошла без ошибок
console.log("✅ Firebase App:", app);
console.log("✅ Firebase Auth:", auth);
console.log("✅ Firebase Firestore:", db);

// 6) Простая проверка в DOM: заменяем содержимое контейнеров
const authContainer = document.getElementById("auth-container");
authContainer.innerHTML = "<p style='color: green;'>Firebase (ESM) инициализирован, можно продолжать.</p>";

const appContainer = document.getElementById("app-container");
appContainer.classList.remove("hidden");

// Дальше — будет ваша логика аутентификации и работы с Firestore.
