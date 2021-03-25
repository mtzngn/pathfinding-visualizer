const aStar = (arr) => {
    let startPoint;
    let endPoint;
    arr.forEach((item,i)=>{
        if(item.start == true){
            startPoint = item.x + "-" + item.y;
        }
        if(item.end == true){
            endPoint = item.x + "-" + item.y;
        }
    });

    

}

export default aStar;