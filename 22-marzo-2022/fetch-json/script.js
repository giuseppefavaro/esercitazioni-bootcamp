
  fetch('https://swapi.dev/api/planets/?format=json')
  .then(response => response.json())
  .then(data => {
      data.results.map((element) => {
          const card = document.createElement("div");
          const cardContent = document.createElement("div");
          const title = document.createElement("h3");
          const climate = document.createElement("p");
          const diameter = document.createElement("p");

          card.setAttribute("class", "card");
          cardContent.setAttribute("class", "cardContent");


          title.textContent = element.name;
          climate.textContent = "Clime: " + element.climate;
          diameter.textContent = "Diameter: " + element.diameter;


          card.appendChild(cardContent).append(title,climate,diameter);
          document.querySelector(".containerCards").appendChild(card);
        

          // console.log(element)
        }) 
    });

