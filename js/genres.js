thumbnails = document.querySelectorAll('.thumbnail')

for (var index = 0; index < thumbnails.length; index++) {
  console.log('adding image listener index')
  console.log(thumbnails[index])
  console.log(this)
  thumbnails[index].addEventListener('click', function () {
    document.querySelector('#displayImg').style.backgroundImage =
      "url('" + this.src + "')"
    document.querySelector('#imgName').innerHTML = this.alt
    document.querySelector('#imgDesc').innerHTML = this.data-price
  })
  // thumbnails[index].addEventListener('mouseleave', function () {
  //   document.querySelector('#displayImg').style.backgroundImage = 'none'
  //   document.querySelector('#imgName').innerHTML =
  //     'Hover over an image below to display the image and the alt text.'
  // })
}
