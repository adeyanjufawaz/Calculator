let screen = document.querySelector(".screen")


const buttons = Array.from(document.querySelectorAll("button"))
buttons.map(cur=>{
    cur.addEventListener('click', (e) => {
        switch (e.target.innerText) {
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
                screen.innerText += e.target.innerText
                break;
        }
    })
})

