const texto = document.querySelector('input')
const btnInsert = document.querySelector('.divInsert button')
const btnDeleteAll = document.querySelector('.header button')
const ul = document.querySelector('.tarefas')

var itensDB = []

btnDeleteAll.onclick = () => {
  itensDB = []
  updateDB()
}

texto.addEventListener('keypress', e => {
  if (e.key == 'Enter' && texto.value != '') {
    setItemDB()
  }
})

btnInsert.onclick = () => {
  if (texto.value != '') {
    setItemDB()
  }
}

function setItemDB() {
  if (itensDB.length >= 20) {
    alert('Limite máximo de 20 itens foi atingido!')
    return
  }

  itensDB.push({ 'item': texto.value, 'status': '' })
  updateDB()
}

function updateDB() {
  localStorage.setItem('todolist', JSON.stringify(itensDB))
  loadItens()
}

function loadItens() {
  ul.innerHTML = "";
  itensDB = JSON.parse(localStorage.getItem('todolist')) ?? []
  itensDB.forEach((item, i) => {
    insertItemTela(item.item, item.status, i)
  })
}

function insertItemTela(text, status, i) {
  const li = document.createElement('li')

  li.innerHTML = `
    <div class="divLi">
      <input type="checkbox" ${status} data-i=${i} onchange="done(this, ${i});" />
      <span data-si=${i}>${text}</span>
      <button onclick="removeItem(${i})" data-i=${i}><i class='bx bx-trash'></i></button>
    </div>
    `
  ul.appendChild(li)

  if (status) {
    document.querySelector(`[data-si="${i}"]`).classList.add('line-through')
  } else {
    document.querySelector(`[data-si="${i}"]`).classList.remove('line-through')
  }

  texto.value = ''
}

function done(chk, i) {

  if (chk.checked) {
    itensDB[i].status = 'checked'
  } else {
    itensDB[i].status = ''
  }

  updateDB()
}

function removeItem(i) {
  itensDB.splice(i, 1)
  updateDB()
}

loadItens()

function adicionar() {
  document.querySelector('.divInsert').style.display = "flex";
  document.querySelector('.tarefas').style.display = "none";
  document.querySelector('#dados').style.display = "none";
}

function exibir() {
  document.querySelector('.divInsert').style.display = "none";
  document.querySelector('.tarefas').style.display = "block";
  document.querySelector('#dados').style.display = "none";
}

function mostrarDados() {
  document.querySelector('.divInsert').style.display = "none";
  document.querySelector('.tarefas').style.display = "none";
  document.querySelector('#dados').style.display = "block";

  var nomeDado = (localStorage.getItem('nome'));
  var usuarioDado = (localStorage.getItem('usuario'));
  var emailDado = (localStorage.getItem('email'));
  var senhaDado = (localStorage.getItem('senha'));

  var p1 = document.getElementById("p1");
  var p2 = document.getElementById("p2");
  var p3 = document.getElementById("p3");
  var p4 = document.getElementById("p4");

  p1.innerText = "Nome: " + nomeDado;
  p2.innerText = "Login: " + usuarioDado;
  p3.innerText = "Email: " + emailDado;
  p4.innerText = "Senha: " + senhaDado;
}