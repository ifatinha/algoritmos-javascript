/**
 * Aplicação simples que verifica a data de ultimo acesso de um usuario e
 * de acordo com essa data envia uma mensagem para o usuário
 * 
 */

const lastAccessedDate = new Date("2022-11-11 00:00");
const currentDate = new Date();
const hour = currentDate.getHours();

const timeLastAccessed = lastAccessedDate.getTime();
const timeCurrentDate = currentDate.getTime();
const timeDifference = timeCurrentDate - timeLastAccessed;

const milliSecondsHour = 1000 * 60 * 60;
const milliSecondsDay = milliSecondsHour * 24;

const seconds = timeDifference / 1000;
const minutes = seconds / 60;
const hours = minutes / 60;
const days = hours / 24;
const weeks = days / 7;

let message = "";

//Verificando se é dia ou noite
if (hour < 6 || hour >= 18) {
    console.log("Good evening!!!");
} else if (hour >= 6 && hour < 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!!!");
}

if (weeks > 2) {
    console.log("You've been away for " + weeks.toFixed(0) + " weeks");
} else if (timeDifference > milliSecondsDay) {
    message += "You've been away for " + days.toFixed(0) + " days!";
} else if (timeDifference > milliSecondsHour) {
    message += "You've been away for " + hours.toFixed(0) + " hours!";
} else {
    message += "Glad you're still here!";
}

console.log(message);