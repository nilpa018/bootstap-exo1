import * as bootstrap from 'bootstrap';
import productsData from './products.json';

const productsgrid = document.getElementById('products-grid');
productsData.products.map((card)=> productsgrid.innerHTML += `
    <div class="col-md-6 col-lg-4 col-xl-3 gap-1">
        <div class="card p-2 gap-1 my-2">
            <img src="${card.thumbnail}" class="card-img-top" alt="${card.title}" height="100">
                <div class="card-body">
                    <h5 class="card-title">${card.title}</h5>
                    <h6>${card.price}</h6> 
                    <p class="card-text">${card.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
        </div>
    </div>`
); 