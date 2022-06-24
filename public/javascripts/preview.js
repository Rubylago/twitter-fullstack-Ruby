cover.onchange = evt => {
  const [file] = cover.files
  if (file) {
    coverImg.src = URL.createObjectURL(file)
  }
}

avatar.onchange = evt => {
  const [file] = avatar.files
  if (file) {
    avatarImg.src = URL.createObjectURL(file)
  }
}