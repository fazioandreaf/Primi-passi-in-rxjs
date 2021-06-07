import './style.css'

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
import {Observable} from 'rxjs';
import { observeNotification } from 'rxjs/internal/Notification';
const obj = new Observable((observer)=>{
observer.next(10)
})
obj.subscribe({
  next:(val)=>{console.log('next',val)},
  error:(val)=>{console.log('next',val)},
  complete:()=>{},
  
})