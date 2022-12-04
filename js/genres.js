thumbnails = document.querySelectorAll('.thumbnail')

for (var index = 0; index < thumbnails.length; index++) {
  console.log('adding image listener index')
  console.log(thumbnails[index])
  thumbnails[index].addEventListener('mouseenter', function () {
    document.querySelector('#display').style.backgroundImage =
      "url('" + this.src + "')"
    document.querySelector('#display').innerHTML = this.alt
  })
  thumbnails[index].addEventListener('mouseleave', function () {
    document.querySelector('#display').style.backgroundImage = ''
    document.querySelector('#display').innerHTML =
      'Hover over an image below to display the image and the alt text.'
  })
}
