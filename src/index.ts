import './styles.scss';
import logo from './logo.png';

const app = document.getElementById('app')!;
app.innerHTML = `
  <div class="container">
    <img src="${logo}" alt="Logo" class="logo" />
    <h1>Hola Mundo</h1>
  </div>
`;