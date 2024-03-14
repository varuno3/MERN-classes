const apiUrl = `https://dummyjson.com/products`;

function renderCard(item){
        return(`
        <div class="products">
        <a href="/?id=${item.id-1}">
        <img class="product-img" src="${item.thumbnail}" alt="not found">
        <p class="title">${item.title}</p>
        </a>
        </div>
        `)
}

async function createCards() {
    let cards;
        try{
            let data = await fetch(apiUrl);
            cards = await data.json(); 
        }
        catch(err){
            console.log(err);
        }
    return cards.products;
}


module.exports = {renderCard, createCards}; 