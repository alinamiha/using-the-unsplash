$(document).ready(() => {
    load()
});

function load() {
    const p = new Promise((resolve, reject) => {

        return fetch('https://api.unsplash.com/photos/?per_page=6&client_id=IEZlCFRaNwcubHC8mMZAy2iq7MVHUkYrzRqa5TdwnPM')

            .then((response) => {
                return  response.json()


            })

            .then((data) => {

                data.forEach(item => {

                    $('.grid').append(`<img src="${item.urls.regular}"/>`)
                });
                resolve()

            })
            .then(() => {
                const loader = document.querySelector(".loader")
                loader.className += " hidden"
                $('.preloader').remove()
            })

            .catch(err => console.error('Error', err))
    })

}