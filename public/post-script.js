const cards = document.querySelectorAll('.card')

for (let card of cards){
    
    card.addEventListener('click', () => {
        const videoId = card.getAttribute('id')
        window.location.href = `/posts/${videoId}`
    })
}

const post = document.querySelector('.post')


post.addEventListener('click', ()=>{
    const postId = post.getAttribute('id')
    
    window.location.href = `https://www.instagram.com/p/${postId}/`
})

