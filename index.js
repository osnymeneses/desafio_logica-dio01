let nome = "Captain";
let xp = 2023;
let nivel = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

if( xp <= 1000) {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[0]}."`);
} else if (xp >= 1001 && xp <= 2000) {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[1]}."`);
} else if (xp >= 2001 && xp <= 5000) {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[2]}."`);
} else if (xp >= 5001 && xp <= 7000) {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[3]}."`);
} else if (xp >= 7001 && xp <= 8000) {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[4]}."`);
} else if (xp >= 8001 && xp <= 9000) {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[5]}."`);
} else if (xp >= 9001 && xp <= 10000) {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[6]}."`);
} else {
    console.log(`"O herói de nome ${nome} está no nível ${nivel[7]}."`);
}

// Níveis do Herói
// Se XP for menor do que 1.000 = Ferro
// Se XP for entre 1.001 e 2.000 = Bronze
// Se XP for entre 2.001 e 5.000 = Prata
// Se XP for entre 5.001 e 7.000 = Ouro
// Se XP for entre 7.001 e 8.000 = Platina
// Se XP for entre 8.001 e 9.000 = Ascendente
// Se XP for entre 9.001 e 10.000= Imortal
// Se XP for maior ou igual a 10.001 = Radiante