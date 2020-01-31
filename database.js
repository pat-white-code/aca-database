let fs = require("fs");

exports.create = function(type,data){
    const json = JSON.parse('./db.json');
    console.log(json);
    json.push(data);
    let string = json.stringify(output);
    fs.writeFileSync('./db.json', string);
}
exports.find = function(type,id){

}
exports.findAll = function(type){
    let content = fs.readFileSync('./db.json', 'utf8');
    let obj = JSON.parse(content);
    let things = obj[type];
    return things;
}

