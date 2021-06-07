console.clear();
import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
import {Observable} from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
const obj = new Observable((observer)=>{
  let counter =0;
observer.next(10);
observer.next(20);
observer.error('no');
// anche l erro blocca le cose dopo
observer.next(40);

// l inseirme to del complete mi blocca il set inteval
observer.complete()
setInterval(()=>{
  observer.next(Math.random()),2000
})
})
obj.subscribe({
  next:(val)=>{console.log('next',val)},
  error:(val)=>{console.log('error',val)},
  complete:()=>{},
  
})