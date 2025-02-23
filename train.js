// // console.log ("Jack MA maslaxatlari");
// // const list = [
// //     "Yaxshi talaba bo'ling", //00-20
// //     "To'g'ri boshliq tanlang va ko'p xato qiling", //20-30
// //     "O'zingizga ishlashni boshlang", //30-40
// //     "Siz kuchli bo'lgan ishingizni qiling", //40-50
// //     "Yoshlarga investitsiya qiling", // 50-60
// //     "endi sizga qiziq narsa qolmadi dam oling", //60
// // ];

// // function maslaxatBering(a, callback) {
// //     if (typeof a !== "number" ) callback ("insert a number please", null);
// //     else if ( a<=20) callback (null, list[0]);
// //     else if (a>20 && a<=30) callback (null, list[1]);
// //     else if (a>30 && a<=40) callback (null, list[2]);
// //     else if (a>40 && a<=50) callback (null, list[3]);
// //     else if (a>50 && a<=60) callback (null, list[4]);
// //     else {
// //         setTimeout(function(){
// //             callback(null, list[5]);
// //         }, 5000);
// //     }
// // }
// // console.log("It is passed from here");

// // maslaxatBering(61, (err, data) => {
// //     if (err) console.log("error:", err);
// //     console.log ("javob:", data);
    
// // });
// // console.log(
// //     "It is also passed from here"
// // );

// console.log ("Jack MA maslaxatlari");
// const list = [
//     "Yaxshi talaba bo'ling", //00-20
//     "To'g'ri boshliq tanlang va ko'p xato qiling", //20-30
//     "O'zingizga ishlashni boshlang", //30-40
//     "Siz kuchli bo'lgan ishingizni qiling", //40-50
//     "Yoshlarga investitsiya qiling", // 50-60
//     "endi sizga qiziq narsa qolmadi dam oling", //60
// ];

// async function maslaxatBering(a) {
//     if (typeof a !== "number" ) throw new Error ("insert a number please", null);
//     else if ( a<=20) return list[0];
//     else if (a>20 && a<=30) return list[1];
//     else if (a>30 && a<=40) return list[2];
//     else if (a>40 && a<=50) return list[3];
//     else if (a>50 && a<=60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve (list[5]);
//             }, 5000);
//         });
//     }
//  }

// // console.log("It is passed from here"); // call via then/catch

// // maslaxatBering(43)
// // .then(data => {
// // console.log("Javob:", data);

// // }).catch(err => {
// // console.log('Error:',err);

// // });

// // console.log("It is also passed from here");

// //call via async/await

// async function run () {
//     let javob = await maslaxatBering(20);
//     console.log(javob);
    
//     javob = await maslaxatBering(63);
//     console.log(javob);

//     javob = await maslaxatBering(44);
//     console.log(javob);
// }
// run();


// Algorithm masala javobi

const letter = 'e';
const word = 'engineer'

function countLetter(letter, word) {
   
    let count = 0 
   
    for (let i = 0; i<word.length; i++){
       
        if (word[i] === letter) {
         count++;
    }
}
    return count;
}


const result = countLetter(letter, word);

console.log("amount",result);