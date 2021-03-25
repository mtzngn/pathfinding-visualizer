const aStar = (arr, setNodes) => {
    let startPoint;
    let endPoint;
    arr.forEach((item,i)=>{
        if(item.start == true){
            startPoint = [item.x, item.y];
        }
        if(item.end == true){
            endPoint = [item.x, item.y];
        }
    });
    arr.forEach((item)=>{
        for(let j = 1; j < 20; j++){
            if(item.x === startPoint[0] && item.y === startPoint[1] + j){
                item.visited = true;
            }
        }

    })

    setNodes([...arr])



}

export default aStar;