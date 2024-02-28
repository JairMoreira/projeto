function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("light")) {
  //html.classList.remove('light')
  //}else{
  //  html.classList.add('light')
  //}
  // OU Código Limpo
  html.classList.toggle("light")

  //trocar a imagem quando for light
  //pegar a imagem
  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    //se tiver light mode
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
