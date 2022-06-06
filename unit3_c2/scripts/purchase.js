


var arr3 =  JSON.parse(localStorage.getItem('purchase'))
displayData(arr3)
//var purchased_vouchers = document.getElementById('purchased_vouchers')
function displayData(data){

data.forEach(function(el) {

let box = document.createElement('div')
box.className = 'voucher'

let img = document.createElement('img')
img.src = el.image

let name = document.createElement('p')
name.innerText = el.name

let amount = document.createElement('p')
amount.innerText = el.price


box.append(img,name,amount)
document.getElementById('purchased_vouchers').append(box)
});
}