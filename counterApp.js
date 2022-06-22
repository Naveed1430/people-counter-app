 let count = 0
let countEl = document.getElementById("count-el")

function increment() {
    count = count + 1
    countEl.innerText = count
}

 function save() {
    console.log(count)
 }

/*
 let userName = "per"
 let message = "Yove have tree new notifivations"
 let messageToUser = "that contain the message we have logged"
let totalMessage = userName + "," + message + "," + messageToUser + "!"
 console.log(totalMessage)

 console.log(5 + 4)
 console.log("4" + "5")
 console.log(4 + "5")
 console.log("5" + '3')  */