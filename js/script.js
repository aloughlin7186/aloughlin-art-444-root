function myMenu() {
    document.getElementById('mymenu').classList.toggle('open');
    document.getElementById('menubutton').classList.toggle('close');
  }
  
  function closemenu() {
    document.getElementById('mymenu').classList.remove('open');
    document.getElementById('menubutton').classList.remove('close');
  }


  function darkMode() {
    document.querySelectorAll('.main_title')[0]?.classList.toggle('h2-dark');
  
    document.querySelectorAll('h2').forEach(el => el.classList.toggle('h2-dark'));
    document.querySelectorAll('.navlink').forEach(el => el.classList.toggle('navlink-dark'));
    document.querySelectorAll('.q_box').forEach(el => el.classList.toggle('qbox_dark'));
    document.querySelectorAll('.question').forEach(el => el.classList.toggle('questiondark'));
    document.querySelectorAll('.gallery_block').forEach(el => el.classList.toggle('gallery_dark'));
    document.querySelectorAll('input').forEach(el => el.classList.toggle('input_dark'));
  
    document.body.classList.toggle('body-dark-mode');
    document.querySelector('.logo')?.classList.toggle('logo-dark');
    document.getElementById('moon_dark')?.classList.toggle('light-mode');
    document.getElementById('main_nav')?.classList.toggle('main_nav_dark');
    document.getElementById('faqs')?.classList.toggle('faqs_dark');
    document.querySelector('.faq_title')?.classList.toggle('faqtitle_dark');
    document.getElementById('contact')?.classList.toggle('contact_dark');
    document.querySelector('form')?.classList.toggle('form_dark');
    document.querySelectorAll('label').forEach(el => el.classList.toggle('label_dark'));
    document.querySelector('.width_message')?.classList.toggle('message_dark');
    document.querySelector('.button-primary')?.classList.toggle('send_dark');
    document.querySelector('footer')?.classList.toggle('footer_dark');
    document.querySelector('.mobile-menu-popout')?.classList.toggle('mobile-menu-popout-dark');
  }
  
  function darkMode() {
  document.body.classList.toggle('body-dark-mode');
  document.getElementById('moon_dark').classList.toggle('light-mode');

  
  document.querySelectorAll('h2').forEach(el => el.classList.toggle('h2-dark'));
  document.querySelectorAll('.navlink').forEach(el => el.classList.toggle('navlink-dark'));
  document.querySelectorAll('.q_box').forEach(el => el.classList.toggle('qbox_dark'));
  document.querySelectorAll('.question').forEach(el => el.classList.toggle('questiondark'));
  document.querySelectorAll('input').forEach(el => el.classList.toggle('input_dark'));
  document.querySelector('footer')?.classList.toggle('footer_dark');
  


  
    const isDark = document.body.classList.contains('body-dark-mode');

  
    const logoImg = document.querySelector('.logo img');
    if (logoImg) {
      logoImg.src = isDark ? 'images/darkmodelogo.png' : 'images/logo.png'; 
    }
  
    
    const rabbitImg = document.querySelector('.headerimg img');
    if (rabbitImg) {
      rabbitImg.src = isDark ? 'images/darkmodelogo.svg' : 'images/rabbitsvg.svg'; 
    }
  }




  document.addEventListener("DOMContentLoaded", function () {
    var acc = document.getElementsByClassName("accordion");
  
    for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        
        for (var j = 0; j < acc.length; j++) {
          acc[j].classList.remove("active");
          acc[j].nextElementSibling.style.display = "none";
        }
  
        
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
          panel.style.display = "block";
        } else {
          panel.style.display = "none";
        }
      });
    }
  });
  

  