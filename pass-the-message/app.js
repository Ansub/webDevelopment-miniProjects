const form = document.querySelector("#message-form")
const message = document.querySelector("#message")
const feedback = document.querySelector(".feedback")
const changeText = document.querySelector(".changeText")

form.addEventListener('submit', (e) => {
    e.preventDefault()
   
    if (message.value === ''){
        console.log("Ansub Khan")
        feedback.classList.add('show')
        setTimeout(() => {
            feedback.classList.remove('show')
        }, 2000)
    } else{
        changeText.textContent = message.value 
        message.value = ''
    }
})