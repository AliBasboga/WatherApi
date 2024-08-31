const cities = [
    'New York',
    'Los Angeles',
    'Chicago',
    'Houston',
    'Phoenix',
    'Philadelphia',
    'San Antonio',
    'San Diego',
    'Dallas',
    'San Jose',
    "istanbul",
    "Manisa",
    "Mardin"
];

function populateCityOptions() {
    const selectElement = document.getElementById('city-select');
    selectElement.innerHTML = ''; // Clear existing options
    cities.forEach(city => {
        const option = document.createElement('option');
        option.value = city;
        option.textContent = city;
        selectElement.appendChild(option);
    });
}

async function getWeather() {
    const city = document.getElementById('city-select').value;
    const url = `https://wttr.in/${city}?format=%t+%C+%h+%w`;

    try {
        const response = await fetch(url);
        const data = await response.text();

        if (data.includes('Unknown location')) {
            document.getElementById('weather-result').innerHTML = `<p>City not found. Please select a valid city.</p>`;
        } else {
            document.getElementById('weather-result').innerHTML = `<p>${data}</p>`;
        }
    } catch (error) {
        document.getElementById('weather-result').innerHTML = `<p>Error fetching weather data</p>`;
    }
}

function addCity() {
    const newCity = document.getElementById('new-city').value.trim();
    if (newCity && !cities.includes(newCity)) {
        cities.push(newCity);
        populateCityOptions();
        document.getElementById('new-city').value = ''; // Clear input field
    }
}

// Populate city options on page load
populateCityOptions();
