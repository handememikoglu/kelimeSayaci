//Kelime Sayacı
const sentence = prompt("Lütfen cümle giriniz.").toLocaleLowerCase();
const letter = sentence.split(" ");
const counter = {};
const newArray = [];
console.log(letter);

for (let i = 0; i < letter.length; i++) {
    let word = letter[i];
        if(counter[word]){
            counter[word] = counter[word] + 1;
        }else{
            counter[word] = 1;
        }
}
for (let i = 0; i < letter.length; i++) {
    let word = letter[i];
    if(counter[word] > 1){
        newArray.push(`${word}, ${counter[word]}`);
    }
    
}
if(newArray.length > 0){
    console.log(`${newArray}`);
}else{
    console.log("Tekrar eden kelime yok.");
    
}



