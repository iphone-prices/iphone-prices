//Set order number ID for all buttons and add event listener
var allButtons = document.getElementsByClassName('btn');
for (var i = 0; i < allButtons.length; i++) {
var generalID = "div" + i + 'button';
allButtons[i].setAttribute('id', generalID);
document.getElementById(generalID).addEventListener("click", function(){
ShowDivContent(this.id);
});
};


//set the ID number for div containers to past our prices
var allContainersForPrices = document.getElementsByClassName('container-for-prices');
for (var i = 0; i < allContainersForPrices.length; i++) {
allContainersForPrices[i].setAttribute('id', ('div' + i));
};


// Define function for making space in long numbers
function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

// Define function that show load button 
function showLoadButton(idNumber) {


var node = document.createElement("span");
node.setAttribute("class", "spinner-border spinner-border-sm");
node.setAttribute("role", "status");
node.setAttribute("aria-hidden", "true");
document.getElementById(idNumber).appendChild(node);
document.getElementById(idNumber).innerHTML = "Загрузка...";
setTimeout(function() {
       document.getElementById(idNumber).setAttribute("disabled", true);
       document.getElementById(idNumber).innerHTML = "Загружено";
   }, 5000);
};

// Define general get and past function

function getAndPast(source1, source2, source3, source4, wherePutThePrice) {
for (var i = 0; i < 4; i++) {
	var source = arguments[i].slice(12,18);


if (source === 'mvideo') {
	generalFormForAllShops(arguments[i],'<meta itemprop="price" content="',5,'М.Видео',wherePutThePrice);
};

if (source === 'citili') {
	generalFormForAllShops(arguments[i],'price-block_standard"><span class="price"><ins class="num">',6,'Ситилинк',wherePutThePrice);
};

if (source === 'techno') {
	generalFormForAllShops(arguments[i],'<div class="price-tag" itemprop="offers" itemscope itemtype="http://schema.org/Offer" ><meta itemprop="price" content="',5,'Технопарк',wherePutThePrice);
};

if (source === '.mts.r') {
	generalFormForAllShops(arguments[i],'<meta itemprop="price" content="',5,'МТС',wherePutThePrice);
};

function generalFormForAllShops(source, searchExpression,amountOfPriceSymbols,nameOfStore,wherePutThePrice) {

//or try https://crossorigin.me/
// https://cors-anywhere.herokuapp.com/
$.get('http://iphone-prices.herokuapp.com/' + source, function(response) {




let showMeIndex = (response.indexOf(searchExpression));

let sliceInfo = response.slice( (showMeIndex + searchExpression.length), (showMeIndex + searchExpression.length + amountOfPriceSymbols));


var para = document.createElement("div");
para.className = 'col-sm for-parse';
var node = document.createTextNode('Цена в '+ nameOfStore + ' ' + numberWithSpaces(sliceInfo) + ' руб.');
para.appendChild(node);
var element = document.getElementById(wherePutThePrice);
element.appendChild(para);



});


};
};
};



//div1 content

function ShowDivContent(ID) {

showLoadButton(ID);


//decide where put the prices
var wherePutThePrice = 'div' + (ID.slice(3,ID.length - 6));



/*use it like template for any new iPhone model

else if (ID == 'div_button') {
getAndPast('','','','',wherePutThePrice);
}
*/


if (ID == 'div0button') {
//for Apple iPhone XR 64GB
getAndPast('https://www.mvideo.ru/products/smartfon-apple-iphone-xr-64gb-black-mry42ru-a-30040032','https://www.citilink.ru/catalog/mobile/cell_phones/1088809/','https://www.technopark.ru/smartfon-apple-iphone-xr-64gb-chernyy/','https://shop.mts.ru/product/smartfon-apple-iphone-xr-64gb-black-chernyj',wherePutThePrice);
}


else if (ID == 'div1button') {
//Apple iPhone XS 64GB
getAndPast('https://www.mvideo.ru/products/smartfon-apple-iphone-xs-64gb-gold-mt9g2ru-a-30040016','https://www.citilink.ru/catalog/mobile/cell_phones/1088875/','https://www.technopark.ru/smartfon-apple-iphone-xs-64gb-zolotoy/','https://shop.mts.ru/product/smartfon-apple-iphone-xs-64gb-gold-zolotoj',wherePutThePrice);
}


else if (ID == 'div2button') {
//for Apple iPhone 8 Plus 64GB
getAndPast('https://www.mvideo.ru/products/smartfon-apple-iphone-8-plus-64gb-gold-mq8n2ru-a-30030159','https://www.citilink.ru/catalog/mobile/cell_phones/499051/','https://www.technopark.ru/smartfon-apple-iphone-8-plus-64gb-zolotoy/','https://shop.mts.ru/product/smartfon-iphone-8-64-gb-space-grey',wherePutThePrice);
}


else if (ID == 'div3button') {
//Apple iPhone 7 32Gb
getAndPast('https://www.mvideo.ru/products/smartfon-apple-iphone-7-32gb-black-mn8x2ru-a-30026135','https://www.citilink.ru/catalog/mobile/cell_phones/393677/','https://www.technopark.ru/smartfon-apple-iphone-7-plus-32gb-chernyy-mnqm2rua/','https://shop.mts.ru/product/smartfon-apple-iphone-7-32gb-black-mn8x2ru-a',wherePutThePrice);
}

};