let chat = document.querySelector("#chat")
let closeChat = document.querySelector("#chat .close-chat")
let miniChat = document.querySelector("#mini-chat")
let chatText = document.querySelector("#chat  #chat-text")
let main=document.querySelector('#chat main')

closeChat.addEventListener("click", function () {
    chat.classList.add("d-none")
})

miniChat.addEventListener('click', function () {
    chat.classList.remove("d-none")
})

chatText.addEventListener("keyup", function (e) {
    // console.log(this.value);
    if (e.keyCode === 13) {
        if (chatText.value.trim()!="") {
            if (chatText.value[0].toUpperCase() ===chatText.value[0]) {
                AddChat('support')
    
            }
            else {
                AddChat('user')
            }
            chatText.value=""
        }
       
       

    }
})

function AddChat(clName) {  
    let dt = new Date()
    main.insertAdjacentHTML(
        "beforeend",

        `
    <div class="message ${clName}">
    <p>${chatText.value}</p>
    <p class="time">${dt.getHours() + ":" + dt.getMinutes()}</p>

    </div>

    `
   
    )
    
    main.scrollTop = main.scrollHeight
    

}