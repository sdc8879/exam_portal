// const match = function (s1, s2) {

//     console.log('s1-----', s1);
//     console.log('s2-----', s2);

//     var l1=s1.length;
//     var l2=s2.length;
//     var i=0;
//     var matchedArray=[]

//     while(i<l1){
//         j=i+l2;

//         if(s1.slice(i,j)==s2){
//             matchedArray.push(i)
//         }
//         i=j;
//     }

//     return matchedArray


// }

// match('aaaaaa', 'aa')



// output:
// [
//     "1st Year 1 month",
//     "1st Year 2-3 months",
//     "1st Year 4-5 months",
//     "1st Year 6-12 months",
//     "2nd Year 1-2 months"
// ]

getDurationText = function (monthData) {

    var montharray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    var gdtArray = [];
    var t1 = []

    console.log('monthData--------', monthData)

    for (let i = 0; i < monthData.length; i++) {

        console.log('monthData[i].next---------', monthData[i].next);

        if (i == 0) {
            t1 = montharray.slice(0, monthData[i].next);
            console.log('t1-----------', t1);

            if (monthData[i].next == 1) {
                gdtArray.push(montharray[0]);
                console.log('gdtArray-----', gdtArray)
            } else {
                gdtArray.push(montharray[0] + " - " + montharray[monthData[i].next - 1]);
                console.log('gdtArray----->>>>>>', gdtArray)
            }

        } else {

            let lastIndex = null;
            console.log('t1---------------------------',t1)
            lastIndex = montharray.indexOf(t1[t1.length - 1]);
            console.log('last index--------', lastIndex);
            t1=[];
            t1=montharray.slice(lastIndex+1,montharray[lastIndex + monthData[i].next]);
            if (monthData[i].next == 1) {
                gdtArray.push(montharray[lastIndex + 1]);
                console.log('gdtArray--->>>>>>>>>>--', gdtArray)
            } else {
                gdtArray.push(montharray[lastIndex + 1] + " - " + montharray[lastIndex + monthData[i].next]);
                console.log('gdtArray----************->>>>>>', gdtArray)
            }



        }


    }


}

getDurationText([
    { next: 3 },
    { next: 2 },
    { next: 2 },
    { next: 7 },
    { next: 2 }
]);












