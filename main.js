//portraits, disney, whale, frisbee, ipad, computer, college
const products = {
    "nikoncoolpix": {
        title: 'Nikon CoolPix Camera',
        quality: 'disney',
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/91czOt2U%2BQL._SL1500_.jpg',
        price:'$175',
        buylink: 'https://www.amazon.com/gp/product/B00BOZCUG2'
    },
    "canonpowershot": {
        title: 'Canon PowerShot',
        quality: 'disney',
        imageurl: 'https://www.adorama.com/images/Large/icasx70.jpg',
        price:'$79',
        buylink: 'https://www.amazon.com/gp/product/B00908BMVE'
    },
    "olympuscamera": {
        title: 'Olympus Camera',
        quality: 'disney',
        imageurl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/5044/5044300ld.jpg',
        price:'$185',
        buylink: 'https://www.amazon.com/gp/product/B00803WNOK'
    },
    "griffin": {
        title: 'Griffin iPad Cover',
        quality: 'frisbee',
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81xrzgXeqUL._SX425_.jpg',
        price:'$60',
        buylink: 'https://www.amazon.com/gp/product/B007XOQ3BQ'
    },
    "amzer": {
        title: 'Amzer iPad Cover',
        quality: 'frisbee',
        imageurl: 'https://rukminim1.flixcart.com/image/832/832/j45wn0w0/cases-covers/back-cover/f/r/v/amzer-amz202275-original-imaev5ff7tkxh4fb.jpeg?q=70',
        price:'$17',
        buylink: 'https://www.amazon.com/gp/product/B00966J40Q'
    },
    "smartcase": {
        title: 'Smart Case iPad Cover',
        quality: 'frisbee',
        imageurl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQ4L2_AV1_GOLD?wid=1144&hei=1144&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1536881962737',
        price:'$14',
        buylink: 'https://www.amazon.com/gp/product/B008B6UA8M'
    },
    "canoncamera": {
        title: 'Canon Camera',
        quality: 'video',
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/81naihI0PmL._SL1500_.jpg',
        price:'$598',
        buylink: 'https://www.amazon.com/gp/product/B00894YWD0'
    },
    "nikoncamera": {
        title: 'Nikon Camera',
        quality: ['portraits','disney'],
        imageurl: 'https://images-na.ssl-images-amazon.com/images/I/91czOt2U%2BQL._SL1500_.jpg',
        price:'$226',
        buylink: 'https://www.amazon.com/gp/product/B0073HSH8U'
    },
    "panasoniccamera": {
        title: 'Panasonic Camera',
        quality: ['whale','portraits','video'],
        imageurl: 'https://static.bhphoto.com/images/images2500x2500/1549000333_1455067.jpg',
        price:'$124',
        buylink: 'https://www.amazon.com/gp/product/B00728ZAEY'
    },
    "c50l": {
        title: 'Canon 50mm Lens',
        //quality: 'portraits',
        imageurl: './images/c50l.jpg',
        price:'$125',
        buylink: 'https://www.amazon.com/gp/product/B00007E7JU'
    },
    "c85l": {
        title: 'Canon 85mm Lens',
        //quality: 'portraits',
        imageurl: './images/c85l.jpg',
        price:'$269',
        buylink: 'https://www.amazon.com/gp/product/B00007GQLU'
    },
    "n50l": {
        title: 'Nikon 50mm Lens',
        //quality: 'portraits',
        imageurl: './images/n50l.jpg',
        price:'$131',
        buylink: 'https://www.amazon.com/gp/product/B00005LEN4'
    },
    "sscb": {
        title: 'Samsung Chromebook',
        quality: 'college',
        imageurl: './images/sscb.jpg',
        price:'$84',
        buylink: 'https://www.amazon.com/gp/product/B009LL9VDG'
    },
    "acer": {
        title: 'Acer Chromebook',
        quality: 'college',
        imageurl: './images/acer.jpg',
        price:'$103',
        buylink: 'https://www.amazon.com/gp/product/B00GSEOV7U'
    },
    "mbp": {
        title: 'Macbook Pro',
        quality: 'college',
        imageurl: './images/mbp.jpg',
        price:'$424',
 
 buylink: 'https://www.amazon.com/gp/product/B0074703CM'
    },
 }
function displayInside() {
    document.getElementById('inside').innerHTML = ''
    let search = document.getElementById('searchbar').value.toLowerCase().split(' ').join('')
    let arr = []
    let qualityArr = []
    let keys = Object.keys(products).map(x => x.split(' ').join(' ').toLocaleLowerCase())
    console.log();
    console.log(keys);
    for (i = 0; i < keys.length; i++) {
        let regex = new RegExp(keys[i], 'gi')
        if (search.match(regex) !== null) arr.push(search.match(regex)[0])
    }
    console.log('arr ' + arr);
    document.getElementById('inside').innerHTML += '<ul id="list"></ul>'
    if (search.includes('video') && !search.includes('portraits')) {
        for (i = 0; i < keys.length; i++) {
            if (products[keys[i]].quality.includes('video')) {
                document.getElementById('list').innerHTML += "<li>" + `<img src=${products[keys[i]].imageurl} alt="nikon"/>` + '<br/>' + products[keys[i]].title + '<br/>' + products[keys[i]].price + '<br/>' + `<button class="go" onclick="location.href='${products[keys[i]].buylink}'";>Buy Now</button>`+  "</li>"
            }
        }
    }
    if (search.includes('video') && search.includes('portraits')) {
        for (i = 0; i < keys.length; i++) {
            if (products[keys[i]].quality.includes('video') && products[keys[i]].quality.includes('portraits')) {
                document.getElementById('list').innerHTML += "<li>" + `<img src=${products[keys[i]].imageurl} alt="nikon"/>` + '<br/>' + products[keys[i]].title + '<br/>' + products[keys[i]].price + `<button class="go" onclick="location.href='${products[keys[i]].buylink}'";>Buy Now</button>`+ "</li>"
            }
        }
    }
    if (search.includes('portraits')) {
        for (i = 0; i < keys.length; i++) {
            if (products[keys[i]].quality.includes('portraits')) {
                document.getElementById('list').innerHTML += "<li>" + `<img src=${products[keys[i]].imageurl} alt="nikon"/>` + '<br/>' + products[keys[i]].title + '<br/>' + products[keys[i]].price + `<button class="go" onclick="location.href='${products[keys[i]].buylink}'";>Buy Now</button>`+ "</li>"
            }
        }
    }
    if (search.includes('disney')) {
        for (i = 0; i < keys.length; i++) {
            if (products[keys[i]].quality.includes('disney')) {
                document.getElementById('list').innerHTML += "<li>" + `<img src=${products[keys[i]].imageurl} alt="nikon"/>` + '<br/>' + products[keys[i]].title + '<br/>' + products[keys[i]].price + `<button class="go" onclick="location.href='${products[keys[i]].buylink}'";>Buy Now</button>`+ "</li>"
            }
        }
    }
    if (search.includes('whale')) {
        for (i = 0; i < keys.length; i++) {
            if (products[keys[i]].quality.includes('whale')) {
                document.getElementById('list').innerHTML += "<li>" + `<img src=${products[keys[i]].imageurl} alt="nikon"/>` + '<br/>' + products[keys[i]].title + '<br/>' + products[keys[i]].price + `<button class="go" onclick="location.href='${products[keys[i]].buylink}'";>Buy Now</button>`+ "</li>"
            }
        }
    }
    if (search.includes('frisbee')) {
        for (i = 0; i < keys.length; i++) {
            if (products[keys[i]].quality.includes('frisbee')) {
                document.getElementById('list').innerHTML += "<li>" + `<img src=${products[keys[i]].imageurl} alt="nikon"/>` + '<br/>' + products[keys[i]].title + '<br/>' + products[keys[i]].price + `<button class="go" onclick="location.href='${products[keys[i]].buylink}'";>Buy Now</button>`+ "</li>"
            }
        }
    }
    if (search.includes('prom')) {
        for (i = 0; i < keys.length; i++) {
            if (products[keys[i]].quality.includes('prom')) {
                document.getElementById('list').innerHTML += "<li>" + `<img src=${products[keys[i]].imageurl} alt="nikon"/>` + '<br/>' + products[keys[i]].title + '<br/>' + products[keys[i]].price + `<button class="go" onclick="location.href='${products[keys[i]].buylink}'";>Buy Now</button>`+ "</li>"
            }
        }
    }
}