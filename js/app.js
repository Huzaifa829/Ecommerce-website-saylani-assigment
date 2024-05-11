let cardData = [
    {
        id:'product1',
        title: 'Samsung Galaxy A34 8GB+256GB',
        phonetype: 'samsung',
        img:"https://static-01.daraz.pk/p/c8bff2fde6b19f4adb845c7eb41828b2.jpg_300x0q75.webp",
        price:'93,499',

    },
    {
        id:'product2',
        title:'Galaxy A04s 4GB RAM-128GB ROM PTA',
        phonetype:'samsung',
        img:"https://static-01.daraz.pk/p/50ec9fbd6f900feec7114cdbf357ef3e.jpg_300x0q75.webp",
        price:'29,999',

    },
    {
        id:'product3',
        title:'Samsung Galaxy S24 Ultra 12GB RAM-512GB ROM',
        phonetype:'samsung',
        img:"https://static-01.daraz.pk/p/c196674129bc19ad076da1cdab712f00.jpg_300x0q75.webp",
        price:'417,499',

    },
    {
        id:'product4',
        title:'Samsung Galaxy A05 4GB RAM-64GB ROM 6.7',
        phonetype:'samsung',
        img:"https://static-01.daraz.pk/p/5471511f2e4d28439e158d0d250ee065.jpg_300x0q75.webp",
        price:'27,499',

    },
    // iphone
    {
        id:'product5',
        title:'Apple iPhone X - 256GB - PTA Approved',
        phonetype:'iphone',
        img:'https://static-01.daraz.pk/p/a414aa5751fef418d4a04e66647ea254.jpg_300x0q75.webp',
        price:'77,199',

    },
    {
        id:'product6',
        title:'Apple iPhone 15 Pro Max - 6.7',
        phonetype:'iphone',
        img:'https://static-01.daraz.pk/p/156e3434ccbd31e318a61134152baa1e.jpg_300x0q75.webp',
        price:'262,990',

    },
    {
        id:'product7',
        title:'iPhone 13 - 128GB - NON PTA',
        phonetype:'iphone',
        img:'https://static-01.daraz.pk/p/dac41ed8ea3afd6fbfb439a329b9c398.jpg_300x0q75.webp',
        price:'112,499',

    },
    {
        id:'product8',
        title:'iPhone 12 Pro - Factory',
        phonetype:'iphone',
        img:'https://static-01.daraz.pk/p/b34ce3bf1b8770814f7b3df2bde45b16.jpg_300x0q75.webp',
        price:'112,232',

    },
    // xiaomi
    {
        id:'product9',
        title:'Xiaomi Redmi 12 || 8GB Ram 128GB Rom',
        phonetype:'xiaomi',
        img:'https://static-01.daraz.pk/p/4f9f32a1734d9d3598b2cc9aef48fad0.jpg_300x0q75.webp',
        price:'34,599',

    },
    {
        id:'product10',
        title:'XIAOMI 14 = 12GB RAM = 512GB ROM',
        phonetype:'xiaomi',
        img:'https://static-01.daraz.pk/p/23f5b95fdf802b8cc4b067f42b838d16.jpg_300x0q75.webp',
        price:'351,999',

    },
    {
        id:'product11',
        title:'Xiaomi RedMi Note 8 PRO',
        phonetype:'xiaomi',
        img:'https://static-01.daraz.pk/p/da349ea605b5a403c0ea9b6835ece172.jpg_300x0q75.webp',
        price:'7000',

    },
    {
        id:'product12',
        title:'Xiaomi Redmi 12 , 4GB RAM 128GB ROM ',
        phonetype:'xiaomi',
        img:'https://static-01.daraz.pk/p/bddd94093aa61a7dbc691e9a19d543b3.jpg_300x0q75.webp',
        price:'32,464',

    },
]

const ha_rendercards = document.querySelector('#ha_rendercards')
const ha_rendercards2 = document.querySelector('#ha_rendercards2')
const ha_card_prt = document.querySelector('#ha_card_prt')
const ha_all_img_show = document.querySelector('#ha_all_img_show')


function RenderCards(){
for (let i = 0; i < cardData.length; i++) {
    const element = cardData[i];
    ha_rendercards.innerHTML +=`
    <div class="swiper-slide">
            <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
              New
            </div>
            <div class="card position-relative">
              <a href=""><img src="${element.img}" class="img-fluid rounded-4" alt="image"></a>
              <div class="card-body p-0">
                <a href="">
                  <h3 class="card-title pt-4 m-0">${element.title}</h3>
                </a>

                <div class="card-text">
                  <span class="rating secondary-font">
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    5.0</span>

                  <h3 class="secondary-font text-primary">RS ${element.price}</h3>

                  <div class="d-flex flex-wrap mt-3">
                    <a href="#" class="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 class="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <a href="#" class="btn-wishlist px-4 pt-3 ">
                      <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                    </a>
                  </div>


                </div>

              </div>
            </div>
          </div>
    `
    ha_rendercards2.innerHTML +=`
    <div class="swiper-slide">
            <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
              New
            </div>
            <div class="card position-relative">
              <a href=""><img src="${element.img}" class="img-fluid rounded-4" alt="image"></a>
              <div class="card-body p-0">
                <a href="">
                  <h3 class="card-title pt-4 m-0">${element.title}</h3>
                </a>

                <div class="card-text">
                  <span class="rating secondary-font">
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                    5.0</span>

                  <h3 class="secondary-font text-primary">RS ${element.price}</h3>

                  <div class="d-flex flex-wrap mt-3">
                    <a href="#" class="btn-cart me-3 px-4 pt-3 pb-3">
                      <h5 class="text-uppercase m-0">Add to Cart</h5>
                    </a>
                    <a href="#" class="btn-wishlist px-4 pt-3 ">
                      <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                    </a>
                  </div>


                </div>

              </div>
            </div>
          </div>
    `
    ha_card_prt.innerHTML +=`
    <div class="item ${element.phonetype} col-md-4 col-lg-3 my-4">
          <div class="z-1 position-absolute rounded-3 m-3 px-3 border border-dark-subtle">
            New
          </div>
          <div class="card position-relative">
            <a href=""><img src="${element.img}" class="img-fluid rounded-4" alt="image"></a>
            <div class="card-body p-0">
              <a href="single-product.html">
                <h3 class="card-title pt-4 m-0">${element.title}</h3>
              </a>

              <div class="card-text">
                <span class="rating secondary-font">
                  <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                  <iconify-icon icon="clarity:star-solid" class="text-primary"></iconify-icon>
                  5.0</span>

                <h3 class="secondary-font text-primary">RS ${element.price}</h3>

                <div class="d-flex flex-wrap mt-3">
                  <a href="#" class="btn-cart me-3 px-4 pt-3 pb-3">
                    <h5 class="text-uppercase m-0">Add to Cart</h5>
                  </a>
                  <a href="#" class="btn-wishlist px-4 pt-3 ">
                    <iconify-icon icon="fluent:heart-28-filled" class="fs-5"></iconify-icon>
                  </a>
                </div>


              </div>

            </div>
          </div>
        </div>
    `
    
}
const randomIndexes = Array.from({ length: 5 }, () => Math.floor(Math.random() * cardData.length));

for (let j = 0; j < randomIndexes.length; j++) {
  const element = cardData[randomIndexes[j]];
  ha_all_img_show.innerHTML += `
    <div style="border: 1px solid #DEAD6F;" class="col instagram-item text-center position-relative">
      <div class="icon-overlay d-flex justify-content-center position-absolute">
        <iconify-icon class="text-white" icon="la:instagram"></iconify-icon>
      </div>
      <a href="#">
        <img src="${element.img}" alt="insta-img" class="img-fluid rounded-3">
      </a>
    </div>
  `;
}
}
RenderCards()
