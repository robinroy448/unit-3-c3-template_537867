var arr = JSON.parse(localStorage.getItem('user'))
var bal = 0
for(var i = 0; i<arr.length; i++){
bal+=(+arr[i].amount)
}


var total = bal
//arr4.push(total)

async function voucher(){
    let url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`
    let res = await fetch(url)
    let data = await res.json()
    let arr = data[0].vouchers
     append(arr)
    console.log(arr)
}
voucher()
var voucher_list = document.getElementById('voucher_list')
function append(data){
  data.forEach(function(el,i) {

    let box = document.createElement('div')
    box.className = 'voucher'

    let img = document.createElement('img')
    img.src = el.image

    let name = document.createElement('p')
    name.innerText = el.name

    let amount = document.createElement('p')
    amount.innerText = el.price

    let btn = document.createElement('button')
    btn.className = 'buy_voucher'
    btn.innerText = 'buy_voucher'
    btn.addEventListener('click',function(){
     add(el)
    })   
  box.append(img,name,amount,btn)
  voucher_list.append(box)
  });
}
function add(el){
if(total>=(+el.price)){


  alert("Hurray! purchase successful")

  total = total - (+el.price)

  var arr3 =  JSON.parse(localStorage.getItem('total1')) || []
  arr3.push(total)
   localStorage.setItem('total1',JSON.stringify(arr3))
  console.log(total)
 var arr2 =  JSON.parse(localStorage.getItem('purchase')) || []
 arr2.push(el)
  localStorage.setItem('purchase',JSON.stringify(arr2))
}
else
{
  alert("Sorry! insufficient balance")
}
}

var arr4 =  JSON.parse(localStorage.getItem('total1'))
var wallet_balance = document.getElementById('wallet_balance')

    wallet_balance.innerText = total

