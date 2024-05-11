function fetchESP8266IP() {
    fetch('http://YOUR_ESP8266_IP_ADDRESS/getip', { method: 'GET' })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(ipAddress => {
            console.log('ESP8266 IP address:', ipAddress);
            document.getElementById('ipAddress').innerText = ipAddress;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

// Fetch the ESP8266 IP address when the page loads
fetchESP8266IP();
