
    // An XMLHttpRequest to fetch data from 'data.json'
    const request = new XMLHttpRequest();
    request.open("GET", "data.json", true);
    request.onreadystatechange = function() {
      if (request.readyState === 4 && request.status === 200) {
        // Parse JSON data
        const data = JSON.parse(request.responseText);

        // Generate HTML content using the fetched data
        const htmlContent = generateHTMLContent(data);

        // Insert 'htmlContent' into the HTML document
        document.getElementById("categoriesDiv").innerHTML = htmlContent;
      }
    };
    request.send();

    // Generate HTML content using the data object
    function generateHTMLContent(data) {
      let htmlContent = '';
    
      data.forEach((item, index) => {
        const category = item.category;
        const score = item.score;
        const icon = item.icon;
    
        htmlContent += `
          <div class="category-container-div" id="category${index}">
            <div class="img-category-div">
              <img class="category-img" src="${icon}" alt="${category} icon" />
              <p class="category-name" id="name${index}">${category}</p>
            </div>
            <div class="score-div">
              <p class="category-score">${score}</p>
              <p class="category-possible-score"> / 100</p>
            </div>
          </div>
        `;
      });
    
      return htmlContent;
    }