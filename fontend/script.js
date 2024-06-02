fetch('http://localhost:6969/movies/')
  .then(function (responce) {
    return responce.json();
  })
  .then(function (product) {
    console.log(product);
    let placeholder = document.querySelector("#product");
   

    let out = " ";

    const sweeterArray = product.map(pro => {
      out += `
      <div class="card" style="width: 18rem">
        <img
          src="${pro.movie_img}"
          class="card-img-top"
          alt="..."
        />
        <div class="card-body">
          <h5 class="card-title">${pro.title}</h5>
          <p class="card-text">${pro.desc}</p>
          <a href="#" class="btn btn-primary">Watch now</a>
        </div>
      </div>
      
      `;
  })
  placeholder.innerHTML = out; 





  }); 


