import validator from 'validator';
import './styles.css';
const btn = document.querySelector('#btnSubmit');
const opt = document.querySelector('#optSelect');
const inp = document.querySelector('#inpText');
const text = document.querySelector('#text');
const msgTrue = 'A validação retornou true';
const msgFalse = 'A validação retornou false';

btn.addEventListener('click', (event) => {
  event.preventDefault();
  if (opt.value === 'email') {
    validator.isEmail(inp.value) ? text.innerText = msgTrue : text.innerText = msgFalse;
  }
  if (opt.value === 'cpf') {
    const cpf = inp.value.replace(/\D/g, '');
    validator.isTaxID(cpf, 'pt-BR') ? text.innerText = msgTrue : text.innerText = msgFalse;
  }
});

