"use strict";
const stuffIDoHeader = document.getElementById("stuffido");
const stopShowCaseBtn = document.getElementById("stopShowcase");

const portfolioDropdownBtn = document.getElementById("portfolio-link");

const tabLinks = document.getElementsByClassName("main-card-nav-link");

const stuffido =
  "=Web Developer.++++++=Web/Graphics Designer.++++++";

const stuffidoarr = stuffido.split("");

let stuffindex = 0;

let currentStuff = "";

const appendStuffIDo = () => {
  currentStuff =
    stuffidoarr[stuffindex] === "."
      ? currentStuff + "<span>.</span>"
      : stuffidoarr[stuffindex] === "+"
      ? currentStuff + ""
      : stuffidoarr[stuffindex] === "="
      ? "  "
      : currentStuff + stuffidoarr[stuffindex];

  stuffIDoHeader.innerHTML = currentStuff;

  stuffindex = stuffindex === stuffido.length - 1 ? 0 : stuffindex + 1;
};

const startShowCase = setInterval(appendStuffIDo, 200);

const stopShowCase = () => {
  clearInterval(startShowCase);
  stuffIDoHeader.innerHTML =
    "Web Developer<span>.</span> Web/Graphics Designer<span>.</span>";
  stopShowCaseBtn.style.display = "none";
};

stopShowCaseBtn.addEventListener("click", stopShowCase);

portfolioDropdownBtn.addEventListener("click", () => {
  portfolioDropdownBtn.classList.toggle("dripped");
  portfolioDropdownBtn.classList.toggle("dropped");
});

for (const link of tabLinks) {
  link.addEventListener("click", () => {
    const tabName = link.getAttribute("tab");
    document.querySelector(".active-tab").classList.remove("active-tab");
    document.querySelector(`#${tabName}-tab`).classList.add("active-tab");
    if (!link.classList.contains("port")) {
      document.querySelector(".active-link").classList.remove("active-link");
      document.querySelector(`#${tabName}-link`).classList.add("active-link");
    }
    if (link.classList.contains("port")) {
      portfolioDropdownBtn.classList.add("dropped");
    }
  });
}

const getConfig = (subject, data) => ({
  method: "POST",
  body: JSON.stringify({
    subject,
    data
  }),
  headers: {
    "Content-Type": "application/json"
  }
});

const mailSnitch = subject => {
  fetch("https://geoip-db.com/json/")
    .then(res => res.json())
    .then(response => {
      const fetchConfig = getConfig(
        subject,
        `From Latitude: ${response.latitude}, Longitude: ${response.longitude} City: ${response.city}, State: ${response.state}, Country: ${response.country_name}`
      );
      fetch("https://yarn-s.herokuapp.com/api/v1/mail", fetchConfig)
        .then(() => true)
        .catch(() => false);
    })
    .catch(() => {
      fetch(
        "https://yarn-s.herokuapp.com/api/v1/mail",
        getConfig(subject, "Couldn't get their location")
      )
        .then(() => true)
        .catch(() => false);
    });
};

mailSnitch("Someone viewed your site");

document.getElementById("dlowres").addEventListener("click", () => {
  mailSnitch("Someone checked out your CV");
});
