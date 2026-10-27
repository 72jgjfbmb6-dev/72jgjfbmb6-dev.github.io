// Инициализация карты Leaflet.
// Координаты заданы константами: геокодирование адреса на странице не выполняется.
(function () {
  "use strict";

  var LAT = 53.3843435;
  var LON = 58.9687325;
  var ZOOM = 16;
  var NAME = "Полуэктова Екатерина Николаевна";
  var ADDRESS = "Магнитогорск, улица Сталеваров, 4";

  var el = document.getElementById("map");
  if (!el || typeof L === "undefined") {
    return;
  }

  var map = L.map(el, {
    center: [LAT, LON],
    zoom: ZOOM,
    scrollWheelZoom: false
  });

  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Содержимое попапа собираем через DOM и textContent, без склейки HTML-строк.
  var popup = document.createElement("div");
  popup.className = "map-popup";

  var name = document.createElement("strong");
  name.textContent = NAME;

  var addr = document.createElement("div");
  addr.textContent = ADDRESS;

  popup.appendChild(name);
  popup.appendChild(addr);

  L.marker([LAT, LON]).addTo(map).bindPopup(popup);
})();
