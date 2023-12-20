 // Get all the "Read More" buttons
 const readMoreButtons = document.querySelectorAll('.read-more-btn');

  
 readMoreButtons.forEach((button) => {
   button.addEventListener('click', function () {
     const card = this.parentNode;
     const content = card.querySelector('.card-content');

     if (content.style.maxHeight) {
       content.style.maxHeight = null;
       this.textContent = 'Read More';
     } else {
       content.style.maxHeight = content.scrollHeight + 'px';
       this.textContent = 'Read Less';
     }
   });
 });





const readMoreButtons1 = document.querySelectorAll('.readmore-btn');

  
readMoreButtons1.forEach((button) => {
  button.addEventListener('click', function () {
    const card = this.parentNode;
    const content = card.querySelector('.card-content1');

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.textContent = 'Read More';
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
      this.textContent = 'Read Less';
    }
  });
});




//tabs
function openPage(pageName,elmnt,color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();



//page up arrow
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  var pageUpBtn = document.getElementById("pageUpBtn");

  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    pageUpBtn.style.display = "block";
  } else {
    pageUpBtn.style.display = "none";
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}