const app = http.createServer(async (req, res) => {
//     let currUrl = req.url;

//     if(currUrl === '/favicon.ico')
//     return;

//     let {id} = url.parse(currUrl, true).query;
//     if(id){
//         switch(id){
//             case `${id}`:{
//                 console.log("--------------------------------------")
//                 console.log(cards[id]);
//                 let item = cards[id];
//                 let itemDescription = itemPageData;
//                 itemDescription = itemDescription.replace('#--Title--#', item.title);
//                 itemDescription = itemDescription.replace('#--Source--#', item.primaryImage);
//                 itemDescription = itemDescription.replace('#--AccessNumber--#', item.accessionNumber);
//                 itemDescription = itemDescription.replace('#--AccessionYear--#', item.accessionYear);
//                 itemDescription = itemDescription.replace('#--Dimensions--#', item.dimensions);
//                 console.log(itemDescription);
//                 res.end(itemDescription);
//                 break;
//             }
//         }
//     }
//     else{

//         switch (currUrl) {
//             case `/`: {
//                 console.log(currUrl);
//                 await getcards();
//                 res.end(landingPageData);
//                 break;
//             }
//             default: res.end(`PAGE NOT FOUND`);
//         }
//     }
// })

// app.listen(5000, () => {
//     console.log(`listening on port 5000`);
// })