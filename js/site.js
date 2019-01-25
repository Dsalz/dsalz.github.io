  "use strict";
  const stuffIDoHeader = document.getElementById('stuffido');
  const stopShowCaseBtn = document.getElementById('stopShowcase');

  const portfolioDropdownBtn = document.getElementById('portfolio-link');
  const portfolioDropdownLinks = document.getElementById('portfolio-links');

  const tabLinks = document.getElementsByClassName('main-card-nav-link');

  const stuffido = "=Web Developer.++++++=Web/Graphics Designer.++++++=Masked Vigilante.++++++";

  const stuffidoarr = stuffido.split('');

  let stuffindex = 0;

  let currentStuff = "";
  
  const appendStuffIDo = () => {


    currentStuff = (stuffidoarr[stuffindex] === ".")? currentStuff + '<span>.</span>' :(stuffidoarr[stuffindex] === "+")? currentStuff + "":(stuffidoarr[stuffindex] === "=")? "  ": currentStuff + stuffidoarr[stuffindex];   

    stuffIDoHeader.innerHTML = currentStuff; 

    stuffindex = (stuffindex === stuffido.length-1)? 0: stuffindex + 1;

  };

  const startShowCase = setInterval(appendStuffIDo, 200);

  const stopShowCase = () => {
    clearInterval(startShowCase);
    stuffIDoHeader.innerHTML = "Web Developer<span>.</span> Web/Graphics Designer<span>.</span> Masked Vigilante<span>.<span>"
    stopShowCaseBtn.style.display = 'none';
  };

  stopShowCaseBtn.addEventListener('click', stopShowCase);

  portfolioDropdownBtn.addEventListener('click', () => {
      portfolioDropdownBtn.classList.toggle('dripped');
      portfolioDropdownBtn.classList.toggle('dropped');
      portfolioDropdownLinks.classList.toggle('shown')
  });

  for(const link of tabLinks){
    link.addEventListener('click', () => {
        const tabName = link.getAttribute('tab');
        document.querySelector('.active-tab').classList.remove('active-tab');
        document.querySelector(`#${tabName}-tab`).classList.add('active-tab');
        document.querySelector('.active-link').classList.remove('active-link');
        document.querySelector(`#${tabName}-link`).classList.add('active-link');
        if(link.classList.contains('port')){
            portfolioDropdownBtn.classList.add('dropped');
            portfolioDropdownLinks.classList.add('shown');
        }
    })
  };

  fetch('https://geoip-db.com/json/')
    .then(res => res.json())
    .then(response => {
      const fetchConfig = {
        method: "POST",
        body: JSON.stringify({
          subject: 'Someone viewed your website',
          data: `From Latitude: ${response.latitude}, Longitude: ${response.longitude} City: ${response.city}, State: ${response.state}, Country: ${response.country_name}`
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
      console.log(JSON.parse(fetchConfig.body).data);
      fetch('https://yarn-s.herokuapp.com/api/v1/mail', fetchConfig)
      .then((res) => console.log('doneo') || console.log(res))
      .catch((err) =>  console.log('not donzo') || console.log(err))
    })
    .catch(err => false)