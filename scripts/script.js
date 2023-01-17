const birth = parseFloat(prompt('Введіть ваш рiк народження'));
const city = prompt('Вкажiть місто, де ви живете');

if (Number.isNaN(birth) || birth === null || birth === ('') || 1900 > birth || birth > 2023){
	alert ('Шкода, що Ви не захотіли ввести свій рiк народження')
  }
else {
	const age = 2023 - birth;
	alert (`Ваш вік ${age}`)
}

if (city === 'Київ') {
	alert ('Ти живеш у столиці Украіни')
}
else if (city === 'Вашингтон') {
	alert ('Ти живеш у столиці США')
}
else if (city === 'Лондон') {
	alert ('Ти живеш у столиці Англії')
}
else if (Number(city) || city === null || city === ('')) {
	alert ('Шкода, що Ви не захотіли ввести ваше мiсто')
}
else { 
	alert (`Ваше місто ${city}`)
}

const sport = prompt('Який ваш улюбленний вид спорту');
if (Number(sport) || sport === null || sport === ('')) {
	alert ('Шкода, що Ви не захотіли ввести ваш улюбленний вид спорту')
}
else if (sport === 'футбол') { 
	alert ('Круто! Хочеш стати як Ліонель Мессі?')
}
else if (sport === 'баскетбол') { 
	alert ('Круто! Хочеш стати як Майкл Джордан?')
}
else if (sport === 'легка атлетика') { 
	alert ("Круто! Хочеш стати як Орися Дем'янюк?")
}
else {
	alert ("Круто, бажаю тобі успіхів!")
}