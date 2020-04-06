const getQuote = () => {
    return axios({
        "method": "GET",
        "url": "https://simpsons-quotes-api.herokuapp.com/quotes",
        }
    ).then(
        response => response.data[0]
    ).then(
        simpson => {
            const simpsonHTML = `
                <h3>${simpson.character}</h3>
                <p>${simpson.quote}</p>
                <img src="${simpson.image}" alt=${simpson.character}>
            `;
            document.getElementById('simpson').innerHTML = simpsonHTML;
        }
    )
}

document.getElementById('bttn').addEventListener('click', () => getQuote())

getQuote()
