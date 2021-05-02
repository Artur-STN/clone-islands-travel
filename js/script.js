function insertBodyBg(srcBody) {

    const boraBora = ['Bora Bora', 'Small South Pacific island northwest of Tahiti in French Polynesia, surrounded by motus']

    const bali = ['Bali', 'it is an indonesian island known and beautiful for its lush active volcanic mountains']

    const palawan = ['Palawan', 'Also known as La Paragua, it is the largest island in the province of Palawan']

    let bodyDetails = document.getElementById('body')

    bodyDetails.style.backgroundImage = `url(imagens/${srcBody})`
    bodyDetails.style.backgroundSize = 'cover'
    bodyDetails.style.transition = '0.5s'
    bodyDetails.style.backgroundPosition = 'center'
    bodyDetails.style.backgroundAttachment = 'fixed'

    let textIsland_H2 = document.getElementById('textIsland1')
    let textIsland_P = document.getElementById('textIsland2')

    if (srcBody == 'borabora.jpg') {

        textIsland_H2.innerHTML = boraBora[0]
        textIsland_P.innerHTML = boraBora[1]

    } else if (srcBody == 'bali.jpg') {

        textIsland_H2.innerHTML = bali[0]
        textIsland_P.innerHTML = bali[1]

    } else if (srcBody == 'palawan.jpg') {

        textIsland_H2.innerHTML = palawan[0]
        textIsland_P.innerHTML = palawan[1]

    }

    textIsland_H2.style.transition = '0.2s'
    textIsland_P.style.transition = '0.2s'

}