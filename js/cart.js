
$(function () {

     p_name = ["product1", "product2", "product3", "product4", "product5", "product6", "product7", "product8", "product9", "product10", "product11", "product12"];
     price = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100, 1200];
     item_price = [0,0,0,0,0,0,0,0,0,0,0,0];
     cart_list = $("#product_list");
}
//calculates total price of each item
function calculate_amt() {
    for(let i in item_price){
        item_price[i] = qty[i]*price[i];
    }
}
//calculate total price of all the items in cart
function total_amt() {
    let sum=0;
    for(let i in item_price){
        sum = sum + item_price[i];
    }
}

function show_cart() {
    cart_list.empty();
    calculate_amt();
    total_amt();

    for(i=0;i<12;i++){
        if(qty[i]){
            let trow = $(`<tr>`.attr('data-id',i));

        }
    }


}