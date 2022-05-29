function validate () {
  const areatextarea = document.querySelector('#introduction')
  const areatext = document.querySelector('#introduction').value.length
  const textcount = document.querySelector('#textcount')
  const wordcount = document.querySelector('#count')
  textcount.innerHTML = areatext
}

function validateName () {
  const areatextarea = document.querySelector('#textname')
  const areatext = document.querySelector('#textname').value.length
  const textcount = document.querySelector('#textnamecount')
  const wordcount = document.querySelector('#namecount')
  textcount.innerHTML = areatext
}
