console.clear();
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
import {fromEvent, Observable, of} from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
// const obj = new Observable((observer)=>{
//   let counter =0;
// observer.next(10);
// observer.next(20);
// observer.error('no');
// // anche l erro blocca le cose dopo
// observer.next(40);

// // l inseirme to del complete mi blocca il set inteval
// observer.complete()
// setInterval(()=>{
//   observer.next(Math.random()),2000
// })
// })
// obj.subscribe({
//   next:(val)=>{console.log('next',val)},
//   error:(val)=>{console.log('error',val)},
//   complete:()=>{},
  
// })
// const obs = new Observable((observer)=>{
//   let counter =0;
// observer.next(10);
// observer.next(20);
// const id = setInterval(()=>{
//   console.log('timer');
//   if(counter<5){
//     observer.next(Math.random())
//   }else{
//     observer.complete()
//   }
//   counter++;
// },1000)
// return()=>{
//   clearInterval(id)
// }
// })
// const subscription=obs.subscribe(
//   val=>console.log('next',val),
//   err=>console.log('error',err),
//   ()=>console.log('complete'),
  
// )
// setTimeout(()=>{

//   subscription.unsubscribe();
// },3000)
// // unscribe funziona e ferma il numero ma il set interval continua a funzionare, in particolare il console.log timer dato che nessuno glielo dice Possiamo farlo con un if
// // Se avessi 10 observable  posso stopparne solo una con il unsubscribe(). Per questo posso utulizzare un return chje arriva dopo un richiamo del complete

// Versione js
// document.getElementById('myInput')
//   .addEventListener('input',
//   function(event:KeyboardEvent){
//     console.log((event.target as HTMLInputElement.)value)
//   })

// operatore di creazione 
// function fromEvent(el:HTMLElement,eventType:string){
//    return new Observable(observer=>{
//      const fn=function(event:KeyboardEvent) {
//        console.log('event!!')
//       observer.next(event)
//     };
//     el.addEventListener(eventType, fn)
//     return ()=>
//       el.removeEventListener(eventType,fn)
    
//   })
// }
// const sub=fromEvent(document.getElementById('myInput'),'input')
//   .subscribe((val:KeyboardEvent) => {
//     console.log((val.target as HTMLInputElement).value)
//   })
// // questo mi blocca il passaggio del valore
// setTimeout(()=>
//   sub.unsubscribe()
// ,3000)

// debounc
let timer;
const sub=fromEvent(document.getElementById('myInput'),'input')
  .subscribe((val:KeyboardEvent) => {

    const value=(val.target as HTMLInputElement).value;
    clearInterval(timer);
    if(value.length>3){
      timer=setTimeout(() => {
        console.log('http',value);
      }, 1000);
    }
  })