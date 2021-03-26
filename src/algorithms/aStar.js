const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const aStar = async(arr, setNodes) => {
    let startPoint;
    let endPoint;
    let visitedNodes = [];
    arr.forEach((item,i)=>{
        if(item.start == true){
            startPoint = [item.x, item.y];
        }
        if(item.end == true){
            endPoint = [item.x, item.y];
        }
    });

    for(const item of arr){

        if(item.end === false){
            item.targetD = Math.sqrt(Math.pow((endPoint[0] - item.x), 2) + Math.pow((endPoint[1] - item.y),2)); 
            setNodes([...arr])

        }
    }


    for(const item of arr) {
            // for(let j = 1; j < 20; j++){
            //     if(item.x === startPoint[0] && item.y === startPoint[1] + j){
            //             item.visited = true;
            //             await sleep(100)
            //             await setNodes([...arr])

            //     }
            // }
        if(item.x === startPoint[0]  && item.y === startPoint[1] - 1){
            item.visited = true;
            visitedNodes.push(item)
        }
        if(item.x === startPoint[0] - 1 && item.y === startPoint[1]){
            item.visited = true;
            visitedNodes.push(item)
        }
        if(item.x === startPoint[0] && item.y === startPoint[1] + 1){
            item.visited = true;
            visitedNodes.push(item)

        }
        if(item.x === startPoint[0] + 1 && item.y === startPoint[1]){
            item.visited = true;
            visitedNodes.push(item)
        }
    }
    console.log(visitedNodes.sort((a,b)=>{
        if(a.targetD < b.targetD){
            return a.targetD - b.targetD
        }
    }))
    await setNodes([...arr])

//start from startingpoint
//check neighboor nodes
//if neighboor node is not a wall continue
//add current node as parent to the node with lowest targetD 
//push the node to visited nodes array which ever has lowest targetD
//Check the neighboors again and repeat the process
//if targetD 0 than stop
//if neighboor is wall choose second lowest targetD





}

export default aStar;