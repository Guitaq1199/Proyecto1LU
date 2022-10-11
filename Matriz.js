var keyValues = {a: "apple", b: "Microsoft", c:"Google"}
var keyValues2 = {a:1,b:2,c:3}
var keyValues3 = {key1:true,key2:false,key3:undefined}
dividir(keyValues)
dividir(keyValues2)
dividir(keyValues3)

function dividir(matriz)
{
    const array =[];
    const values = [];
    for(var property in matriz){
        array.push(property)
    }
    console.log(array);
    for(var property in matriz){
        values.push(matriz[property])
    }
    console.log(values);
}

