const apiKey = "BURAYA_KEYINIZI_YAZIN";

document.getElementById("weatherForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const city = document.getElementById("city").value.trim();

  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&lang=tr`
  )
    .then((res) => res.json())
    .then((data) => {
      document.getElementById("result").innerHTML = `
            <h4>${data.location.name}</h4>
            <img src="${data.current.condition.icon}" alt="İkon" />
            <p>${data.current.condition.text}</p>
            <h2>${data.current.temp_c}°C</h2>
        `;
    })
    .catch((err) => {
      document.getElementById(
        "result"
      ).innerHTML = `<p class="text-danger">Hata oluştu!</p>`;
      console.error(err);
    });
});
