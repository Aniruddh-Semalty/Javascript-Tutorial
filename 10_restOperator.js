function calculateCartPrice(...prices){
    let price=0;
    for (let cost of prices){
     price+=cost;
    }
     return price;

}
console.log(calculateCartPrice(100,200,30000,1000,1000));


function getRest(val1,val2,...val3){
    return val3;
}
console.log(getRest(1,2,3,4,5,6,7,71));