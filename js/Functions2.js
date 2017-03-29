function letra(evento){
  console.log(evento.key);
}
document.getElementById('textArea').addEventListener('keydown', letra, false);
