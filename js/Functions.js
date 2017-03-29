function pulsacion(){
  if(this.id == 'button1'){
    alert('Button 1 pushed.');
  } else if (this.id == 'button2') {
    alert('Button 2 pushed.');
  }
}
document.getElementById('button1').addEventListener('click', pulsacion, false);
document.getElementById('button2').addEventListener('click', pulsacion, false);
