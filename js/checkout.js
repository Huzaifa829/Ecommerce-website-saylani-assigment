
const ha_checkout_crds_show = document.querySelector('#ha_checkout_crds_show')
const ha_subtotal_1 = document.querySelector('#ha_subtotal_1')
const ha_subtotal_2 = document.querySelector('#ha_subtotal_2')
const ha_subtotal_3 = document.querySelector('#ha_subtotal_3')
const check_hide_show = document.querySelector('#check_hide_show')
const check_hide_show_shop_btn = document.querySelector('#check_hide_show_shop_btn')
const bag_item_number1 = document.querySelectorAll('#bag_item_number')
const bag_item_show_detil1 = document.querySelector('#bag_item_show_detil')
let storgeitem1 = JSON.parse(localStorage.getItem('cardItems'));
let crdadd1;
function dtaadd() {
  if (storgeitem1 == null) {
    crdadd1 = []
  }
  else {
    crdadd1 = storgeitem1
    console.log(crdadd1);
  }

}
dtaadd()
function plceORder() {
  Swal.fire({
    position: "center",
    icon: "success",
    title: "Your Order has been received",
    showConfirmButton: false,
    timer: 1500
  });
  localStorage.removeItem('cardItems');
  crdadd1.length = 0
  dtaadd()
  checkout_crds_show()
  hideshow() 
  totalItemprice()
  bagitems1()
  console.log(crdadd1);
}
function hideshow() {
  if (crdadd1.length === 0) {
    check_hide_show.style.display = 'none'; // Fix the syntax for setting display property
    check_hide_show_shop_btn.innerHTML = `
    <div style="display: flex;flex-direction: column;justify-content: center;align-items: center;">
    <p>There are no items in this cart</p>
    <a href="./index.html" class="w-50 btn btn-primary btn-lg" >CONTINUE SHOPPING</a>
  </div>
    `
  }
}
hideshow()

function totalItemprice() {
  let item = 0;
  let totalprc = 200
  for (let i = 0; i < crdadd1.length; i++) {
    const element = crdadd1[i];
    item = item + parseInt(element.quantity)
    totalprc += parseInt(element.price.replace(',', '')) * element.quantity
  }
  let totlpriceshow = item + totalprc
  let formattedTotalPrice = totalprc.toLocaleString();
  let formattedTotalPrice1 = totlpriceshow.toLocaleString();
  ha_subtotal_1.innerHTML = `Subtotal(${item} items):`
  ha_subtotal_2.innerHTML = `RS ${formattedTotalPrice}`
  ha_subtotal_3.innerHTML = `RS ${formattedTotalPrice1}`
}
totalItemprice()
function increaseQuantity(btn, index) {
  var input = btn.parentNode.querySelector('input[type="number"]');
  var value = parseInt(input.value);
  input.value = value + 1;
  crdadd1[index].quantity = input.value
  console.log(index);
  localStorage.setItem('cardItems', JSON.stringify(crdadd1))
  totalItemprice()
}

function decreaseQuantity(btn, index) {
  var input = btn.parentNode.querySelector('input[type="number"]');
  var value = parseInt(input.value);
  if (value > 1) {
    input.value = value - 1;
    crdadd1[index].quantity = input.value
    console.log(index);
  }
  localStorage.setItem('cardItems', JSON.stringify(crdadd1))
  totalItemprice()

}
function deleteProductById(id) {
  const index = crdadd1.findIndex(product => product.id === id);
  console.log(index);
  if (index !== -1) {
    crdadd1.splice(index, 1); // Remove 1 element at index
    console.log('Object deleted:', id);
  } else {
    console.log('Object not found:', id);
  }
  localStorage.setItem('cardItems', JSON.stringify(crdadd1))
  checkout_crds_show()
  bagitems1()
  totalItemprice()
  hideshow()
}
function bagitems1() {
  bag_item_show_detil1.innerHTML = ''
  let k = 0
  bag_item_number1.forEach(element => {
    element.innerHTML = crdadd1.length;
  });
  for (let I = 0; I < crdadd1.length; I++) {
    const element = crdadd1[I];
    bag_item_show_detil1.innerHTML += `
  <li class="list-group-item d-flex justify-content-between lh-sm">
  <div>
    <h6 class="my-0">${element.title}</h6>
    <small class="text-body-secondary">${element.description}</small>
    <p>Quantity : ${element.quantity}</p>
  </div>
  <span class="text-body-secondary">RS ${element.price}</span>
</li>
  `
    k += parseInt(element.price.replace(',', '')) * element.quantity
  }
  let formattedTotalPrice = k.toLocaleString();
  console.log('Total Price:', formattedTotalPrice);
  bag_item_show_detil.innerHTML += `
<li class="list-group-item d-flex justify-content-between">
<span class="fw-bold">Total (RS)</span>
<strong>RS ${formattedTotalPrice}</strong>
</li>
`
}
bagitems1()
function checkout_crds_show() {
  ha_checkout_crds_show.innerHTML = ''
  for (let i = 0; i < crdadd1.length; i++) {
    const element = crdadd1[i];
    ha_checkout_crds_show.innerHTML += `
        <div class="col">
        <div class="card mb-3">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="${element.img}" class="card-img-top" alt="Product 1">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <p class="card-text">Price:RS ${element.price}</p>
                <button onclick="deleteProductById('${element.id}')"  class="btn btn-danger"><i class="bi bi-trash"></i> Delete</button>
                <div style="width: 200px;" class="input-group mt-3">
                  <button class="btn btn-outline-secondary"  onclick="decreaseQuantity(this,${i})" type="button">-</button>
                  <input type="number" value="${element.quantity}" class="form-control" placeholder="Quantity" aria-label="Quantity" aria-describedby="button-addon2" readonly>
                  <button class="btn btn-outline-secondary"  onclick="increaseQuantity(this,${i})"  type="button">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
        `

  }
}
checkout_crds_show()