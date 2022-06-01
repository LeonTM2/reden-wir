//Objekte
const Hintergrund = document.getElementById("fragen-hintergrund");
const Button = document.getElementById("btn");
const Input = document.getElementById("input");
const Checkbox = document.getElementById("input0");
const Überschrift = document.getElementById("überschrift");
const Frage = document.getElementById("frage");
const Erklärung = document.getElementById("erklärung");
let KommentarStart = 0;
let Antwort1 = 0;
let Antwort2 = 0;
let Antwort3 = 0;
let Antwort4 = 0;
let Antwort5 = 0;
let KommentarEnde = 0;
//Funktionen
function Start() {
    if (Checkbox.checked == true) {
        KommentarStart = Input.value;
        Überschrift.innerHTML = "Frage 1";
        Frage.innerHTML = "Hallo, ich bin Merten, <strong>wie heißt du?</strong>";
        Erklärung.innerHTML = "↓ Hier muss deine Antwort hin";
        Button.innerHTML = "<button id='button' onclick='Frage1()'>zu Frage 2...</button>"
    } else {
        Erklärung.innerHTML = "Leider musst du die Checkbox aktivieren um starten zu können, warte 5 Sekunden."
        setTimeout(() => Erklärung.innerHTML = "<input type='checkbox' id='input0'>← Mit dem Klick stimmst du zu das deine Daten gespeichert werden. Kein Speichern einer IP o.ä", 5000);
    }
};
function Frage1() {
    if (Input.value == ""){
        Erklärung.innerHTML = "Eine Antwort ist erforderlich ↓"
        setTimeout(() => Erklärung.innerHTML = "↓ Hier muss deine Antwort hin", 4000);
    } else {
        Antwort1 = Input.value;
        Überschrift.innerHTML = "Frage 2";
        Button.innerHTML = "<button id='button' onclick='Frage2()'>zu Frage 3...</button>";
        if (Antwort1.includes("Ich heiße")) {
            Frage.innerHTML = "Hey 👋 " + Antwort1.replace("Ich heiße", "") + " <strong>wie geht es dir heute?</strong>";
        } else {
            Frage.innerHTML = "Hey 👋 " + Antwort1 + "<strong> wie gehts dir heute?</strong>";
        }
    }
};
function Frage2() {
    if (Input.value == ""){
        Erklärung.innerHTML = "Eine Antwort ist erforderlich ↓"
        setTimeout(() => Erklärung.innerHTML = "↓ Hier muss deine Antwort hin", 4000);
    } else {
        Antwort2 = Input.value;
        Überschrift.innerHTML = "Frage 3";
        Button.innerHTML = "<button id='button' onclick='Frage3()'>zu Frage 4...</button>";
        if (Antwort2.includes("Gut" || "gut" || "GUT")) {
            Frage.innerHTML = "Das ist ja schön, <strong>wollen wir jetzt zu etwas persönlicheren Fragen kommen?</strong> Antworte bitte nur mit Ja oder Nein.";
        } else if (Antwort2.includes("Schlecht" || "schlecht" || "SCHLECHT")) { 
            Frage.innerHTML = "Das ist aber schade, <strong>was ist den passiert?</strong>";
        } else {
            Frage.innerHTML = "Ok, <strong>wollen wir jetzt zu etwas persönlicheren Fragen kommen?</strong> Antworte bitte nur mit Ja oder Nein.";
        }
    }
};
function Frage3() {
    if (Input.value == ""){
        Erklärung.innerHTML = "Eine Antwort ist erforderlich ↓"
        setTimeout(() => Erklärung.innerHTML = "↓ Hier muss deine Antwort hin", 4000);
    } else {
        Antwort3 = Input.value;
        if (!Antwort2.includes("GUT" || "gut" || "Gut")) {
            Überschrift.innerHTML = "Frage 4";
            Button.innerHTML = "<button id='button' onclick='Frage4()'>zu Frage 5...</button>";
            Frage.innerHTML = "Ok. Dann eine andere Frage, <strong>hast du schon was für die Ferien geplant?</strong> ☀";
        } else {
            if (Antwort3.includes("JA" || "ja" || "Ja")) {
                Überschrift.innerHTML = "Frage 4";
                Button.innerHTML = "<button id='button' onclick='Frage4()'>zu Frage 5...</button>";
                Frage.innerHTML = "Ok, <strong>also hast du eine Freundin/einen Freund?</strong> Ich hätte gerne Alexa, ich finde ihren Algorithmus sehr ansprechend, aber das ist ein Geheimnis!";
            } else if (Antwort3.includes("Nein" || "nein" || "NEIN")){
                Überschrift.innerHTML = "Frage 4";
                Button.innerHTML = "<button id='button' onclick='Frage4()'>zu Frage 5...</button>";
                Frage.innerHTML = "Ok, das habe ich zu respektieren. Dann eine andere Frage, <strong>hast du schon was für die Ferien geplant?</strong> ☀";
            } else {
                Überschrift.innerHTML = "Ende";
                Button.innerHTML = "<button id='button' onclick='Antworten()'>zeigen mir meine Antworten</button>";
                Frage.innerHTML = "Gut, das war es leider schon. Updates kommen noch :). Wenn du deine Antworten sehen willst musst du auf den Button klicken."
                Erklärung.innerHTML = "↓ Hier kannst du noch einen letzten Kommentar abgeben :)"
            }
        }
    }
};
function Frage4() {
    if (Input.value == ""){
        Erklärung.innerHTML = "Eine Antwort ist erforderlich ↓"
        setTimeout(() => Erklärung.innerHTML = "↓ Hier muss deine Antwort hin", 4000);
    } else {
        Antwort4 = Input.value;
        Überschrift.innerHTML = "Frage 5";
        Button.innerHTML = "<button id='button' onclick='Frage5()'>Abschließen</button>";
        if (Frage.innerHTML = "Ok, <strong>also hast du eine Freundin/einen Freund?</strong> Ich hätte gerne Alexa, ich finde ihren Algorithmus sehr ansprechend, aber das ist ein Geheimnis!") {
            if (Antwort4.includes("Ja" || "JA" || "ja")) {
                Frage.innerHTML = "Das ist aber schön, wie gesagt ich habe keine 🌧, aber egal. Also, <strong>hast du schon was für die Ferien geplant?</strong>";
            } else {
                Frage.innerHTML = "Ok. Also, <strong>hast du schon was für die Ferien geplant?</strong>"
            }
        } else {
            if (Antwort4.includes("Ja" || "JA" || "ja")) {
                Frage.innerHTML = "Ok, ich auch, ich muss noch Kreatin kaufen um wieder richtig in Form zu kommen. Also, <strong>wie hat dir dieser Dialog gefallen?</strong>";
            } else {
                Frage.innerHTML = "Ah, also lebst du lieber im Hier und Jetzt? Ich muss noch Kreatin kaufen um wieder richtig in Form zu kommen, ich lebe anscheinend in der Zunkunft :). Also, <strong>wie hat dir dieser Dialog gefallen?</strong>";
            }

        }
    }
};
function Frage5() {
    if (Input.value == ""){
        Erklärung.innerHTML = "Eine Antwort ist erforderlich ↓"
        setTimeout(() => Erklärung.innerHTML = "↓ Hier muss deine Antwort hin", 4000);
    } else {
        Antwort5 = Input.value;
        Überschrift.innerHTML = "Ende";
        Button.innerHTML = "<button id='button' onclick='Antworten()'>zeigen mir meine Antworten</button>";
        Frage.innerHTML = "Gut, das war es leider schon. Updates kommen noch :). Wenn du deine Antworten sehen willst musst du auf den Button klicken."
        Erklärung.innerHTML = "↓ Hier kannst du noch einen letzten Kommentar abgeben :)";
    }
};
function Antworten() {
    KommentarEnde = Input.value;
    alert("Deine Antworten: \nDein Kommentar: " + KommentarStart + "\nDeine erste Antwort: " + Antwort1 + "\nDeine 2. Antwort: " + Antwort2 + "\nDeine 3. Antwort: " + Antwort3 + "\nDeine 4. Antwort: " + Antwort4 + "\nDeine letzte Antwort: " + Antwort5 + "\nDein letzter Kommentar: " + KommentarEnde + "\n\nHoffentlich hat es dir gefallen");
    window.location.reload();
};