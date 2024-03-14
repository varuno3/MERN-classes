const http = require('node:http');
const fs = require('fs');
const url = require('url');
const { renderCard, createCards } = require(`./files/js/card.js`);

let cards;

let landingPageData = fs.readFileSync(`./files/html/index.html`, "utf8");
let itemPageData = fs.readFileSync(`./files/html/item.html`, "utf8");

async function getcards() {
    cards = (await createCards());
    cards.forEach(item => {
        landingPageData = landingPageData.replace(`<!-- #data# -->`, renderCard(item) + `<!-- #data# -->`);
    });
}


const app = http.createServer(async (req, res) => {
    let currUrl = req.url;
    if(currUrl === '/favicon.ico')
    return;
    if(!cards){
        await getcards();
    }

    let {id} = url.parse(currUrl, true).query;
    
    if(id){
        switch(id){
            case `${id}`:{
                let item = cards[id];
                let itemDescription = itemPageData;
                itemDescription = itemDescription.replace('#--Title--#', item.title);
                itemDescription = itemDescription.replace('#--Source--#', item.thumbnail);
                itemDescription = itemDescription.replace('#--Price--#', item.price);
                itemDescription = itemDescription.replace('#--Description--#', item.description);
                itemDescription = itemDescription.replace('#--Brand--#', item.brand);
                item.images.forEach(imageurl => {
                    itemDescription = itemDescription.replace('#--ImageUrl--#', imageurl); 
                });

                res.end(itemDescription);
                break;
            }
        }
    }
    else{

        switch (currUrl) {
            case `/`: {
                res.end(landingPageData);
                break;
            }
            default: res.end(`PAGE NOT FOUND`);
        }
    }
})

app.listen(5000, () => {
    console.log(`listening on port 5000`);
})