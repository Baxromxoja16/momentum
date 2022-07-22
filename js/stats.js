const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
const changeQuote = document.querySelector('.change-quote');

const api = "../helper/data.json"

fetch(api)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            console.log("This is error ", res.status);
        }
    })
    .then(data => {
        changeQuote.addEventListener("click", changeQuoteHandler)
        let num = 0
        function changeQuoteHandler() {
            if (num == 3) {
                num = 0
            }
            console.log(num);
            quote.textContent = data[num].text
            author.textContent = data[num].author
            num++
        }
        quote.textContent = data[num].text
        author.textContent = data[num].author
    })

