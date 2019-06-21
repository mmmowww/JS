var Qvest = false;
var QvestObject = new Promise(function(resolve, reject){
if(Qvest = true){console.log(Qvest,"GOOD!"); resolve(Qvest);}
else{console.log(Qvest,"NOTGOOD!");reject(Qvest);};
});

var ASK = function(Qvest){
WilGetAnswer.then(function(fulfilled){console.log(fulfilled);}).catch(function(error){console.log(error.message);});
}; ASK(Qvest);