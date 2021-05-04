const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')
const modal = document.querySelector('.modal')

for (let card of cards){
    const videoId = card.getAttribute('id')
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://www.instagram.com/p/${videoId}/embed`
    })
}

document.querySelector('.close-modal').addEventListener('click', () => {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src= ''
    modal.classList.remove('maximize')
})

document.querySelector('.max-modal').addEventListener('click', () => {
    modal.classList.toggle('maximize')
})

// 