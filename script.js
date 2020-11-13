const limit = 50
const body = document.body

const rand = () => Math.random()

const newStar = () => {
  const figure = document.createElement("figure")
  figure.className = "star"
  figure.innerHTML = `
      <figure class="star-top"></figure>
      <figure class="star-bottom"></figure>
		`

  return figure
}

for (let i = 0; i <= limit; i++) {
  let star = newStar()
  star.style.top = `${rand() * 100}%`
  star.style.left = `${rand() * 100}%`
  star.style.animationDelay = `${rand()}s`
  body.appendChild(star)
}
