let items = document.querySelectorAll('#experience .carousel .carousel-item')

items.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

items = document.querySelectorAll('#education .carousel .carousel-item')
items.forEach((el) => {
  const minPerSlide = 3
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

document.getElementById('home-menu').addEventListener('click', function() {
  window.scrollTo(0, document.getElementById('home').offsetTop-140);
})

document.getElementById('experience-menu').addEventListener('click', function() {
  window.scrollTo(0, document.getElementById('experience').offsetTop-140);
})

document.getElementById('skills-menu').addEventListener('click', function() {
  window.scrollTo(0, document.getElementById('skills').offsetTop-140);
})

document.getElementById('education-menu').addEventListener('click', function() {
  window.scrollTo(0, document.getElementById('education').offsetTop-140);
})

document.getElementById('contact-menu').addEventListener('click', function() {
  window.scrollTo(0, document.getElementById('contact').offsetTop-140);
})

document.getElementById('contact-me').addEventListener('click', function() {
  window.scrollTo(0, document.getElementById('contact').offsetTop-140);
})
