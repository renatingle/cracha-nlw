const LinksSocialMedia = {
    github: 'renatingle',
    youtube: 'wesleysafadao',
    facebook: 'luansantana',
    instagram: 'arlete.gleycy109',
    twitter: 'davibritof'
   }

   function changeSocialMediaLinks() {
    for (let li of socialLinks.children) { 
   const social = li.getAttribute('class') 
    }
   }


    changeSocialMediaLinks()

    function getGitHubProfileInfos() {
        const url = `https://api.github.com/users/${LinksSocialMedia.github}`
        

        fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
        })
    }

    getGitHubProfileInfos() 