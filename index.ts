import moment from "moment";
import PromptSync from "prompt-sync";
const prompt = PromptSync()

// function cup(guesstime: number){
//   console.log("Waiting for joan.....")
//   let time = new Date().getTime()
//   let timewaiting = time + guesstime

//   setTimeout(()=>{
//     while(new Date().getTime()< timewaiting){
//       console.log("Start processing!!")
//     }
//     console.log("Start process executed at:", moment(time).format("LTS"));
//     console.log("End process executed at:", moment(timewaiting).format("LTS"));
//     console.log("This whole process took", (timewaiting - time) / 1000, "seconds")
//   }, 0)
// }

// cup(9000)

// const check = (cb: any): void =>{
//   setTimeout(()=>{
//     return cb()
//   }, 0);
// }

// console.log(
//   check((res: any)=>{
//     console.log("Jessica")
//   })
// );


// const promise = new Promise((resolve, reject)=>{
//   if(true){
//     resolve("A promise kept")
//   }else{
//     reject("A promise not kept")
//   }
// })
// promise.then((res)=>{
//   console.log(`${res} with ${name}`)
// }).catch((err)=>{
//   console.log(err)
// }).finally(()=>{
//   console.log("Close up code");
// })
// let name: string = "Jessica";



let myName = prompt("What is your name: ");
console.log(myName)

const promise = new Promise((resolve, reject)=>{
  const numb : number = Math.floor(Math.random() * 20);
  let trial: number = 1
  trial +1;
  const Playernumb = parseInt(prompt("Insert your number: "))

  while (true) {
    if(isNaN(Playernumb) || trial > 4 || Playernumb > 20 || Playernumb < 1){
      console.log("Try again")
      continue;
    }else if(Playernumb === numb){
      console.log()
      resolve("A promise kept")
      break
    }else{
      console.log();
      reject("A promise failed")
    }
  }
})
promise.then((res)=>{
  console.log(res)
}).catch((err)=>{
  console.log(err)
})