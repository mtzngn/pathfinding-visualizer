const aStar = (arr) => {
    let startPoint;
    let endPoint;
    arr.forEach((item,i)=>{
        if(item.start == true){
            startPoint = item.x + "-" + item.y;
            console.log(item)
        }
        if(item.end == true){
            endPoint = item.x + "-" + item.y;
            console.log(item)

        }
    });



}

export default aStar;