
const jason = `
{
    "name" : "IamIronMan",
    "Iscelebrity" : true,
    "adress" : {
        "USA":"Newwork",
        "Asia":"Nepal",
        "Africa" :"Egypt"
    }
     
}`;
const jss= {
    Apple : 500,
    Mango :200
}

const newjson = JSON.stringify(jss);
console.log(newjson.apple);