const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const searchIcon = document.getElementById("search-icon");
const searchBox = document.getElementById("searchbox");

searchIcon.addEventListener('click', function () {
  if (searchBox.style.top == '72px') {
    searchBox.style.top = '24px';
    searchBox.style.pointerEvents = 'none';
  } else {
    searchBox.style.top = '72px';
    searchBox.style.pointerEvents = 'auto';
  }
});

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})

function showcase() {
  var content = document.getElementById("content");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

// Select all the links with a class of "scroll-link"
const scrollLinks = document.querySelectorAll('a.scroll-link');

// Loop through the links and add a click event listener to each one
scrollLinks.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the default behavior of the link
    event.preventDefault();

    // Get the target section ID from the href attribute
    const targetId = link.getAttribute('href').slice(1);

    // Construct the URL for the target page
    const targetUrl = `${window.location.origin}/testingWebsite#${targetId}`;

    // Navigate to the target page
    window.location.href = targetUrl;

    // Wait for the page to load, then scroll to the target section
    window.addEventListener('load', () => {
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
});



