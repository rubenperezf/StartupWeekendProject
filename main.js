
const products = {
    macbookair: {
        title: "Macbook Air",
        imageurl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8q3B_-j5MEv-MI2DMb5fR-ZZGiXNOCeqwSG35GBrFFizO_I7f&s",
        price: "$1200"
    },
    macbookpro: {
        title: "Macbook Pro",
        imageurl: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp13touch-space-select-201807?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1529520060550",
        price: "$1200"
    }
}

function displayInside() {
    document.getElementById('inside').innerHTML = ''
    let search = document.getElementById('searchbar').value.toLowerCase().split(' ').join('')
    let arr = []
    let keys = Object.keys(products).map(x => x.split(' ').join(' ').toLocaleLowerCase())
    console.log(keys);
    for (i = 0; i < keys.length; i++) {
        let regex = new RegExp(keys[i], 'gi')
        if (search.match(regex) !== null) arr.push(search.match(regex)[0])
    }
    console.log('arr ' + arr);

    document.getElementById('inside').innerHTML += '<ul id="list"></ul>'
    for (i = 0; i < arr.length; i++) {
        console.log(products[arr[i]].imageurl);
        
        document.getElementById('list').innerHTML += "<li>" + `<img src=${products[arr[i]].imageurl}/>` + '<br/>' + products[arr[i]].title + '<br/>' +products[arr[i]].price +  "</li>"
    }




    /*
    let keys = Object.keys(products)
    let arr = []
    for(i = 0; i < keys.length; i++){
        let regex = new RegExp('/' + keys[i] + '/')
        if(keys[i] === search.match(regex)[i]){
            arr.push(keys[i])
        }
    }
    
    console.log(arr);
    
    
    document.getElementById('inside').innerHTML = '<ul>' + arr.map(x => {
        '<li>' + products[x].imageurl + '<br/>'
    + products[x].title + '<br/>' + products[x].price + '</li>'
    }) + '</ul>'
    */
}