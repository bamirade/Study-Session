
function scrollToSection(id) {

  let element = document.getElementById(id);

  let offset = element.offsetTop;

  window.scroll({
      top: offset,
      behavior: 'smooth'
  });
}


window.addEventListener('scroll', function() {
  let topBar = document.querySelector('.top-bar');
  if (window.scrollY > 0) {
      topBar.style.backgroundColor = '#000';
      topBar.style.height = '50px';
  }
  else {
      topBar.style.backgroundColor = 'transparent';
      topBar.style.height = '100px';
  }
});


let burgerButton = document.querySelector('.burger-button');
burgerButton.addEventListener('click', function() {
  let sideBarContainer = document.querySelector('.side-bar-container');
  sideBarContainer.classList.toggle('show');
});


let sideBarLinks = document.querySelectorAll('.side-bar a');
sideBarLinks.forEach(function(link) {
  link.addEventListener('click', function() {
      let sideBarContainer = document.querySelector('.side-bar-container');
      sideBarContainer.classList.remove('show');
  });
});


document.addEventListener('click', function(event) {
  let sideBarContainer = document.querySelector('.side-bar-container');
  if (!sideBarContainer.contains(event.target) && sideBarContainer.style.display === 'block') {
    sideBarContainer.style.display = 'none';
  }
});


document.addEventListener('scroll', function() {
  let bioPreview = document.getElementById('bio-preview');
  let biosSection = document.getElementById('bio');
  if (biosSection.offsetTop - window.scrollY <= 0 && !bioPreview.hasPlayed) {
      bioPreview.play();
      bioPreview.hasPlayed = true;
  }
  else if (biosSection.offsetTop - window.scrollY > 0 && bioPreview.hasPlayed) {
      bioPreview.currentTime = 0;
      bioPreview.pause();
      bioPreview.hasPlayed = false;
  }
});


document.addEventListener('scroll', function() {
  let bioPreview = document.getElementById('bio-preview');
  let bioSection = document.getElementById('bio');
  if (bioSection.offsetTop - window.scrollY <= 0 && !bioPreview.hasPlayed) {
      bioPreview.play();
      bioPreview.hasPlayed = true;
  }
  else if (bioSection.offsetTop - window.scrollY > 0 && bioPreview.hasPlayed) {
    bioPreview.currentTime = 0;
      bioPreview.pause();
      bioPreview.hasPlayed = false;
  }
});

let bioPreview = document.getElementById('bio-preview');
bioPreview.controls = false;



var discsElement = document.querySelector('#discs');


var listItems = discsElement.querySelectorAll('li');


var currentIndex = 0;


var itemsPerPage = 3;


function updateInterface() {

  for (var i = 0; i < listItems.length; i++) {
    listItems[i].style.display = 'none';
  }


  var startIndex = currentIndex - 1;
  var endIndex = currentIndex + 1;
  if (currentIndex === 0) {

    startIndex = currentIndex;
    endIndex = currentIndex + itemsPerPage - 1;
  } else if (currentIndex === listItems.length - 1) {
    
    startIndex = currentIndex - itemsPerPage + 1;
    endIndex = currentIndex;
  }
  for (var i = startIndex; i <= endIndex; i++) {
    listItems[i].style.display = 'block';
  }

  
  listItems[currentIndex].classList.add('current');
}


updateInterface();

var prevButton = document.querySelector('#prev');


prevButton.addEventListener('click', function() {

listItems[currentIndex].classList.remove('current');


currentIndex = (currentIndex === 0) ? listItems.length - 1 : currentIndex - 1;


updateInterface();
});


var nextButton = document.querySelector('#next');


nextButton.addEventListener('click', function() {

listItems[currentIndex].classList.remove('current');


currentIndex = (currentIndex === listItems.length - 1) ? 0 : currentIndex + 1;


updateInterface();
});


var discographyElement = document.querySelector('#discography');
var listItems = discographyElement.querySelectorAll('li');
var currentIndex = 0;
var itemsPerPage = 3;
function updateInterface() {
  for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.display = 'none';
  }
var startIndex = currentIndex - 1;
var endIndex = currentIndex + 1;
if (currentIndex === 0) {
  startIndex = currentIndex;
  endIndex = currentIndex + itemsPerPage - 1;
  } else if (currentIndex === listItems.length - 1) {
  startIndex = currentIndex - itemsPerPage + 1;
  endIndex = currentIndex;
}
for (var i = startIndex; i <= endIndex; i++) {
  listItems[i].style.display = 'block';
}
  listItems[currentIndex].classList.add('current');
}
updateInterface();
var prevButton = document.querySelector('#prev');
prevButton.addEventListener('click', function() {
  listItems[currentIndex].classList.remove('current');
  currentIndex = (currentIndex === 0) ? listItems.length - 1 : currentIndex - 1;
  updateInterface();
});
var nextButton = document.querySelector('#next');
nextButton.addEventListener('click', function() {
  listItems[currentIndex].classList.remove('current');
  currentIndex = (currentIndex === listItems.length - 1) ? 0 : currentIndex + 1;
  updateInterface();
});

function filterDiscography(filter) {
  
  var discographyList = document.querySelector("#discography ul");

  
  for (var i = 0; i < discographyList.children.length; i++) {
    var listItem = discographyList.children[i];

    
    if (listItem.getAttribute("data-filter") === filter) {
      listItem.style.display = "block";
    } else {
    listItem.style.display = "none";
    }
    }
    }
    
   
    var filterButtons = document.querySelectorAll(".filter-button");
    for (var i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function() {
    
    var filterValue = this.getAttribute("data-filter");
    
    filterDiscography(filterValue);
    });
    }
    
   
    var sortButtons = document.querySelectorAll(".sort-button");
    for (var i = 0; i < sortButtons.length; i++) {
    sortButtons[i].addEventListener("click", function() {
    
    var sortValue = this.getAttribute("data-sort");
    
    sortDiscography(sortValue);
    });
    }
    
    function sortDiscography(sort) {
    
    var discographyList = document.querySelector("#discography ul");

    
    switch (sort) {
    case "title":
    
    var sortedListItems = [].slice.call(discographyList.children).sort(function(a, b) {
    return a.querySelector("p").textContent.localeCompare(b.querySelector("p").textContent);
    });
    break;
    case "year":
    
    var sortedListItems = [].slice.call(discographyList.children).sort(function(a, b) {
    return a.getAttribute("data-year") - b.getAttribute("data-year");
    });
    break;
    default:
    
    var sortedListItems = [].slice.call(discographyList.children);
    break;
    }
    
    
    for (var i = 0; i < sortedListItems.length; i++) {
    discographyList.appendChild(sortedListItems[i]);
    }
    }

