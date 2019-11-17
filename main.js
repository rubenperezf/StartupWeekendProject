//portrait, disney, whale, frisbee, ipad, computer, college
const products = {
   "macbookpro": {
       title: 'Macbook Pro',
       quality: 'top',
       imageurl: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/mbp16touch-silver-select-201911?wid=904&hei=840&fmt=jpeg&qlt=80&op_usm=0.5,0.5&.v=1572825196932',
       price: '$2399'
   },
   "macbookair": {
       title: 'Macbook Air',
       quality: 'college',
       imageurl: 'https://cdn11.bigcommerce.com/s-xt5en0q8kf/images/stencil/1280x1280/products/1472/4610/MBA-13-MAV-2__27821__59284__97821.1532959911.jpg?c=2&imbypass=on',
       price: '$899'
   },
   "surfacebook2": {
       title: 'Surface Book 2',
       quality: 'top',
       imageurl: 'https://images-na.ssl-images-amazon.com/images/I/71TCixvQotL._SL1200_.jpg',
       price: '$1099'
   },
   "hppavilion": {
       title: 'HP Pavilion',
       quality: 'college',
       imageurl: 'https://images.kogan.com/image/fetch/s--4ugg8yMU--/b_white,c_pad,f_auto,h_502,q_auto:good,w_753/https://assets.kogan.com/files/product/HKI/KAMBAMQD32_1.jpg',
       price: '$599'
   },
   "dellInspiron": {
       title: 'Dell Inspiron 15',
       quality: 'cheap',
       imageurl: 'https://static.bhphoto.com/images/images1500x1500/1542631197_1443701.jpg',
       price: '$289',
   },
   "chromebook": {
       title: 'Acer Chromebook',
       quality: 'cheap',
       imageurl: 'https://images-na.ssl-images-amazon.com/images/I/71nypQxVoLL._SL1500_.jpg',
       price: '$169'
   },
   "lenovo": {
       title: 'Lenovo ideapad S340',
       quality: 'college',
       imageurl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRcI17HyWHKMA0W7xZrWAbzWF5RAwoSi7_zGlX-J7TocbMTJXi0qhNX6OfDM98rxbYX-ZCHMq9lb_Bv5rt0N7bcsJ_QqHIzPEpU8XCwz2Dk4MHj4ioC_I1q5Q&usqp=CAc',
       price: '$399',
   },
   "razer": {
       title: 'The New Razer Blade Stealth - Gaming Laptop',
       quality: 'top',
       imageurl: 'https://cdn.shopify.com/s/files/1/0070/8588/3456/products/8886419359753-1_2048x2048.jpg?v=1570780156',
       price: '$1399',
   },
   "hpenvy": {
       title: 'HP Envy 13',
       quality: 'college',
       imageurl: 'https://s3.us-east-2.amazonaws.com/cc-prd-s3-uploads/2019/7/26/a59b2f5a32d623e70e97450c06e216c4e63ae2ed.jpeg',
       price: '$549',
   },
   "lenovoYoga": {
       title: 'Lenovo Yoga 920',
       quality: 'college',
       imageurl: 'https://images-na.ssl-images-amazon.com/images/I/71SIdeklpnL._SX466_.jpg',
       price: '$839',
   },
    "canonEos": {
        title: 'Canon EOS 80D DSLR Camera',
        quality: 'editing',
        imageurl: 'https://static.bhphoto.com/images/images2500x2500/1455749513_1225876.jpg',
        price: '$1,149',
    },
    "blackEos": {
        title: 'Black EOS Rebel T6 Digital Camera with 18 megapixels',
        quality: 'travel',
        imageurl: 'https://i5.walmartimages.com/asr/feaf29b0-1f85-456e-b3ae-d372c7f36803_1.68c6e03e1e61758dac5f09f711ad4477.jpeg?odnWidth=450&odnHeight=450&odnBg=ffffff',
        price: '$399',
    },
    "nikon": {
        title: 'Nikon D3400 DSLR',
        quality: 'travel',
        imageurl: 'https://www.adorama.com/images/Large/inkd3400kr.jpg',
        price: '$399',
    },
    "sonyRx": {
        title: 'Sony RX 100 VI',
        quality: 'editing',
        imageurl: 'https://media.wired.com/photos/5d31f0327e21db0008efc4ee/master/w_1164,c_limit/Gear-Sony-RX100VI-SOURCE-Sony.jpg',
        price: '$1,198',
    },
    "sony": {
        title: 'Sony a5100 ILCE-5100l',
        quality: 'photography',
        imageurl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSQZTKTsaduyFdItlaXaMVhS2XQJTekGpc_JODC1GjZ3_PX-H4GcN40ipcP_VFO3jtR3OZ-Dl0P-BI6MUqGDAlPfJtrbsvHQRnMeh13RAzs&usqp=CAY',
        price: '$549',
    },
    "canonps": {
        title: 'Canon Powershot SX530',
        quality: 'travel',
        imageurl: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/2761/2761156_sd.jpg;maxHeight=640;maxWidth=550',
        price: '$249',
    },
    "cybershot": {
        title: 'Sony Cyber-Shot DSC-W800',
        quality: 'cheap',
        imageurl: 'https://www.google.com/shopping/product/1213920382083039652?rlz=1C5CHFA_enUS873US874&biw=1371&bih=841&sxsrf=ACYBGNQVuKWhuqW8z36MIJWGmzozUHyr5g:1573934411279&q=+cheap+camera&oq=+cheap+camera&prds=epd:4553621590236583494,paur:ClkAsKraX4Vs4m81Ni5i4VdV1KjUQuI5J8TYN67t0sJvGr-5-yNOTcIGFxJbnZlduhYgSMu2u7w4mt3OxciwClWvzpNVUmSoCMudca8peMnsewenOmPQYblCBxIZAFPVH70-EMTiD91wrTh2fjrLurKiCi_uCQ,prmr:1&sa=X&ved=0ahUKEwigu9ukw-_lAhVCo1kKHT5ADLcQ8gII5AQ',
        price: '$99',
    },
    "fujifilm": {
        title: 'Fujifilm X-Series X-T100',
        quality: 'photography',
        imageurl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSOVcPk-Qprss-bmwTA7JrkFazlFecwaoluCjYfmvq_gAIU-AAzQMp-gNERaUQuJ92OF3gENNzdZ8lPsHmwHzhgUGIPiNPstEhcU9zJdmn_i5UBD1wJxPiawg&usqp=CAY',
        price: '$499',
    },
    "polaroid": {
        title: 'Poloroid Snap Touch 13 MP',
        quality: 'cheap',
        imageurl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR2Mnp2OtD8OiVwz0INnMpabpeD2WHWSDevd417hBeQiwS_Q238PqmxoitJz2IkMD9eYI6fsct-O_6Ix_x4fnioQcQS00Lq4bH-_E9vvxcI&usqp=CAY',
        price: '$89',
    },
    "nikoncool": {
        title: 'Nikon Coolpix B500',
        quality: 'cheap',
        imageurl: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTSb3HImYSFuihrcmtocJ8kh_Gt_4tCFNcLneXDukBQo7AbzCWrQGbg3Ur1QgU3-WjZZsb19Htz9uG5YlNY7mEPApT4iU15P9X-nZSjoILovPjFQQheB9J5&usqp=CAY',
        price: '$229',
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

    if(search.includes('video')){

    }
    for (i = 0; i < arr.length; i++) {
        let newQ = products[arr[i]].quality
        let qregex = new RegExp(newQ, 'gi')
        if (search.match(newQ) !== null) qualityArr.push(search.match(qregex)[0])

        if (products[arr[i]].imageurl.endsWith('/')) products[arr[i]].imageurl = products[arr[i]].imageurl.slice(products[arr[i]].imageurl.length - 1)
        console.log(products[arr[i]].imageurl);
        console.log(qualityArr);

        if (search.search(newQ[0]) !== -1) {
            let newArr = arr.filter(x => products[x].quality === qualityArr[0])
            console.log(newArr);
            document.getElementById('list').innerHTML += "<li>" + `<img src=${products[newArr[i]].imageurl}/>` + '<br/>' + products[newArr[i]].title + '<br/>' + products[newArr[i]].price + "</li>"

        } else {
            document.getElementById('list').innerHTML += "<li>" + `<img src=${products[arr[i]].imageurl}/>` + '<br/>' + products[arr[i]].title + '<br/>' + products[arr[i]].price + "</li>"
        }
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