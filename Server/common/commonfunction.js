module.exports.insertQuery = function (data) {


    var query = '';
    var subquery = ''
    var params = [];


    query = 'insert into ' + data.table + ' (';
    for (var field in data.fields) {
        query = query + '' + field + ',';
        subquery = subquery + '?,';
        params.push(data.fields[field]);
    }
    query = query.substring(0, query.length - 1);
    subquery = subquery.substring(0, subquery.length - 1);
    query = query + ') values (' + subquery + ')';

    console.log('query------', query);
    console.log('params----', params)
    // console.log('subquery------', subquery);

    return {
        "query": query,
        "params": params
    }
}

module.exports.errorMesage=function(){

}