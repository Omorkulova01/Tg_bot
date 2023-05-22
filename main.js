// https://api.telegram.org/bot6275515587:AAHCNTu8IJ3re9zFbU6l9uRAsUMiuglL1kw/getUpdates

let TOKEN = '6275515587:AAHCNTu8IJ3re9zFbU6l9uRAsUMiuglL1kw'
let CHAT_ID = '1714661960'
let URL_API = `https://api.telegram.org/bot${TOKEN}/sendDocument`
let URL_MESSAGE = `https://api.telegram.org/bot${TOKEN}/sendMessage`

let success = document.getElementById('success')

let tg = document.getElementById('tg')
tg.addEventListener('submit', function(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append('chat_id', CHAT_ID)
    formData.append('document', this.document.files[0])

    axios.post(URL_API, formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
    .then((res) => {
        this.document.value = ' '
        success.innerHTML = "Сообщения отправлены!"
        success.style.display = 'block'
        setTimeout(() => {
            success.style.display = 'none'
        }, 3000)
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        console.log('Working')
    })
    
// ===========================================================================

    let = message = `<b>Заявка с сайта</b>\n`
    message += `<b>Отправитель :</b>${this.name.value}\n`
    message += `<b>Номер телефона :</b>${this.number.value}\n`
    message += `<b>Почта :</b>${this.email.value}\n`
    console.log(message)

    axios.post(URL_MESSAGE, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: message,
    }).then((res) => {
        this.name.value = " "
        this.number.value = " "
        this.email.value = " "
        success.innerHTML = "Сообщения отправлены!"
        success.style.display = 'block'
        setTimeout(() => {
            success.style.display = 'none'
        }, 3000)
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        console.log('Working')
    })
})