document.getElementById('gb8-memory').addEventListener('click', function(){
    let gb8Price= document.getElementById('gb8-memory').Value;
    gb8Price=0;
    const extraMemory=document.getElementById('extra-memory-cost');
    extraMemory.innerText=gb8Price;


    addintionTotal();
})


document.getElementById('gb16-memory').addEventListener('click', function(){
    let gb16Price= document.getElementById('gb16-memory').Value;
    gb16Price=180;
    const extraMemory=document.getElementById('extra-memory-cost');
    extraMemory.innerText=gb16Price;


    addintionTotal();
})

/*  memory section ses  */



/* memoryCost */

function extraMemoryCost(memory,price){
    let storagePrice= document.getElementById(memory +'-memory').Value;
    storagePrice=price;
    const extraMemory=document.getElementById('extra-memory-cost');
    extraMemory.innerText=storagePrice;
    addintionTotal();
}

/* storageCost */
function extraStorageCost(storage,price){
    let SSDprice=document.getElementById(storage+'-storage').value;
    SSDprice=price;
    const extraStorage=document.getElementById('extra-storage-cost');
    extraStorage.innerText=SSDprice;

    addintionTotal();
}

/* deliveryCost */
function extraDliveryCost(deliveryOption,price){
    let deliveryAmmount= document.getElementById(deliveryOption+'-charge').value;
    deliveryAmmount= price;
    const deliveryCost=document.getElementById('delivery-cost');
    deliveryCost.innerText=deliveryAmmount;

    addintionTotal();
}

/* subTotal */


function addintionTotal(){
    const minimumPriceText = document.getElementById('minimum-price').innerText;
const minimumPrice= parseInt(minimumPriceText);


const memoryCostText=document.getElementById('extra-memory-cost').innerText;
const memoryCost= parseInt(memoryCostText);


const storageCostText= document.getElementById('extra-storage-cost').innerText;
const storageCost=parseInt(storageCostText);



const deliveryChargeText=document.getElementById('delivery-cost').innerText;
const deliveryCharge= parseInt(deliveryChargeText);



const totalCost=minimumPrice +memoryCost+storageCost+deliveryCharge;

const totalCharge=document.getElementById('total-cost');
totalCharge.innerText=totalCost;

const totalPromo=document.getElementById('total-with-promo');
totalPromo.innerText=totalCost;

}

/*  memory section  */
document.getElementById('gb8-memory').addEventListener('click', function(){
    extraMemoryCost("gb8",0);
})


document.getElementById('gb16-memory').addEventListener('click', function(){
    extraMemoryCost("gb16",180);
})


/* storage section */


document.getElementById('GB256-SSd-storage').addEventListener('click',function(){
    extraStorageCost("GB256-SSd",0)
})

document.getElementById('GB512-SSD-storage').addEventListener('click',function(){
    extraStorageCost("GB512-SSD",100)
})

document.getElementById('TB1-storage').addEventListener('click', function(){
    extraStorageCost("TB1",180)
})

/* delivery section */

document.getElementById('delivery-without-charge').addEventListener('click', function(){
    extraDliveryCost('delivery-without',0)
})


document.getElementById('delivery-with-charge').addEventListener('click', function(){
    extraDliveryCost('delivery-with',20)
})


document.getElementById('apply-offer').addEventListener('click', function(){
    const promoFeild=document.getElementById('offer-code');
    if (promoFeild.value =="stevekaku") {
        const totalPromoText=document.getElementById('total-with-promo').innerText;
        const totalPromo =parseInt(totalPromoText); 
        const totalWithPromo=(totalPromo)-(totalPromo*20/100);
        document.getElementById('total-with-promo').innerText=totalWithPromo;
        promoFeild.value="";
    }
})