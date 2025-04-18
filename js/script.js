function myMenu() {
    document.getElementById('mymenu').classList.toggle('open');
    document.getElementById('menubutton').classList.toggle('close');
  }
  
  function closemenu() {
    document.getElementById('mymenu').classList.remove('open');
    document.getElementById('menubutton').classList.remove('close');
  }