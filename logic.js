var prompt = require('prompt');
console.log("Insert values to solve a system of 2 equations.");
console.log("First equation: x0 + y0 = b0");
console.log("Second equation: x1 + y1 = b1");

prompt.start();
prompt.get(['x0', 'y0' ,'b0','x1', 'y1' ,'b1'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  x0: ' + result.x0);
    console.log('  y0: ' + result.y0);
    console.log('  b0: ' + result.b0);
    console.log('  x1: ' + result.x1);
    console.log('  y1: ' + result.y1);
    console.log('  b1: ' + result.b1);

    //D =x0*y1 - y0*x1
    var dRes = (result.x0*result.y1) - (result.y0*result.x1);
    console.log("D result=" + dRes);
    //Dx= b0*y1 - b1*y0
    var dxRes=(result.b0 * result.y1) - (result.b1*result.y0);
    console.log("Dx result="+ dxRes);
    //Dy = x0*b1 - b0*x1
    var dyRes=(result.x0*result.b1) - (result.b0*result.x1);
    console.log("Dy result="+ dyRes);

    var xRes = dxRes/dRes;
    var yRes = dyRes/dRes;


    if(!isNaN(xRes)&& !isNaN(yRes)){
    console.log("The solution is X="+xRes+" Y="+yRes);
    }else if(dRes=0) {
        console.log(" No solution available.  ")
    }else{
        console.log("The equations are linearly dependent.There are infinitely many solution available.")
    }

});


function onErr(err) {
    console.log(err);
    return 1;
}