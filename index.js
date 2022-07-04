let screen = document.querySelector(".screen")



const buttons = Array.from(document.querySelectorAll("button"))
buttons.map( cur => {
    cur.addEventListener('click', (button) => {
            if (screen.innerText.length > 1 && screen.innerText[1] !== "." && screen.innerText.startsWith('0')) {
                screen.innerText = screen.innerText.slice(-(screen.innerText.length) + 1)
            }
        switch (button.target.innerText) {
            case "AC":
                screen.innerText = ''
                break;
            case "DEL":
                if (screen.innerText) {
                    screen.innerText = screen.innerText.slice(0,-1)   
                }
                break; 
            case "=":
                try {
                    screen.innerText = eval(screen.innerText)
                } catch (error) {
                    return
                }
                break;
            default:
                screen.innerText += button.target.innerText
                break;
        }
    })
})



