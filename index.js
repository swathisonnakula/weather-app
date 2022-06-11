const searchButton = document.getElementById('search-btn')

searchButton.addEventListener('click', (e) => {
    e.preventDefault()
    // console.log('clicked');

    const searchText = document.getElementById('search-text').value
    // console.log(searchText)
    if (searchText == '') {
        alert("Enter the city")
    }
    else {
        apikey = `f322420cff257f9891c852fb078cb429`
        const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apikey}`
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url1);

        xhr.onreadystatechange = () => {
            if (xhr.status === 200 && xhr.readyState === 4) {
                const response = JSON.parse(xhr.responseText);
                console.log(response);

                let output = "";
                output +=
                    `<br><div class="text-white text-center">
                                <div class="card-text h1">${response.name}</div>
                                <img src="https://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png">
                                <div class="card-text h4">${response.main.temp - 273.00}<span>&#176;</span>c</div>
                                <div class="card-text">${response.weather[0].description}</div>
                                <div class="card-text">WindSpeed -${response.wind.speed}km/h</div>

                            </div>`
                document.querySelector("#view").innerHTML += output;
                document.getElementById('search-text').value = ''








            }
        };
        xhr.send();
    }
});
