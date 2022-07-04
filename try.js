let screen = document.querySelector(".screen")

let buttons = Array.from(document.querySelectorAll("button"))


buttons.map( cur => {
    cur.addEventListener("click", (button) => {
        if (screen.innerText.length > 1 && screen.innerText[1] !== "." && screen.innerText.startsWith('0')) {
            screen.innerText = screen.innerText.slice(-(screen.innerText.length) + 1)
        }
        switch (button.target.innerText) {
            case "AC":
                screen.innerText = ""
                break;

            case "=":
                try {
                    screen.innerText = eval(screen.innerText)
                } catch (error) {
                    screen.innerText = "Syntax Error"
                    setTimeout(() => screen.innerText = 0 ,"700");
                }
                break;

            case "DEL":
                screen.innerText = screen.innerText.slice(0,-1)
                break;
        
            default:
                screen.innerText += button.target.innerText
                break;
        }
    })
})

let str = "1234"
console.log(str.endsWith("**"));