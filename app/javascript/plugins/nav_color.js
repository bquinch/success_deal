const navColor = () => {
  const navbar = document.querySelector('.navbar');
  const logo = document.querySelector('.logo');
  let position = 0
  window.addEventListener('scroll', (event) => {
    position = window.scrollY
    if (position > 700) {
      navbar.classList.remove('hidden')
      logo.classList.remove('hide')
    } if (position < 700) {
      navbar.classList.add('hidden')
      logo.classList.add('hide')
    }
  })
}

export { navColor };
