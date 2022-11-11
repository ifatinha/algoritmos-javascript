/**
 * Aplicação simples que verifica a data de ultimo acesso de um usuario e
 * de acordo com essa data envia uma mensagem para o usuário
 */

const lastAccessedDate = new Date("2022-01-25 17:00");
const currentDate = new Date();
const hour = currentDate.getHours();

const timeLastAccessed = lastAccessedDate.getTime();
const timeCurrentDate = currentDate.getTime();
const timeDifference = timeCurrentDate - timeLastAccessed;

const milliSecondsHour = 1000 * 60 * 60;
const milliSecondsDay = milliSecondsHour * 24;

let message = "";

if (hour < 6 || hour >= 18) {
    console.log("Good evening!!!");
} else if (hour >= 6 && hour <= 12) {
    console.log("Good morning!");
} else {
    console.log("Good afternoon!!!");
}

if (timeDifference > milliSecondsDay) {
    message += "You've been away for days!";
} else if (timeDifference > milliSecondsHour) {
    message += "You've been away for hours!";
} else {
    message += "Glad you're still here!";
}

console.log(message);