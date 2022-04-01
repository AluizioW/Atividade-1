const username = {
  github: 'AluizioW',
  instagram: 'lui_walter',
  facebook: '',
  twitter: '',
  youtube: '/channel/UCmg8AfksauA45_YwuF9svpQ'
}

function changeProfile() {
  for (let li of theSocialMediaLinks.children) {
    const socials = li.getAttribute('class')

    li.children[0].href = `https://${socials}.com/${username[socials]}`

    // alert(li.children[0].href)
  }
}

changeProfile()

function getGitHubInfo() {
  const url = `https://api.github.com/users/${username.github}`

  alert('Bem vindo(a) ao meu primeiro projeto de Programação Web!')
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userPhoto.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubInfo()
