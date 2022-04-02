import "./style.css";
declare global {
  interface Window {
    ethereum: any;
  }
}

const app = document.querySelector<HTMLDivElement>("#app")!;

console.log(window.ethereum);

setTimeout(() => {
  console.log(window.ethereum);
}, 1000);

app.innerHTML = `
  <h1>Hello Vite!</h1>
  window.ethereum: ${window.ethereum}
`;
