const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const aStar = async(arr, setNodes) => {
    let endPoint;
    let visitedNodes = [];
    let shortestpath = [];
    arr.forEach((item,i)=>{
        if(item.start == true){
            visitedNodes.push(item)
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

    while(visitedNodes[0].targetD !== 0){
        for(const item of arr) {

            if(item.x === visitedNodes[0].x  && item.y === visitedNodes[0].y - 1){
                !item.wall && visitedNodes.push(item)
                
            }
            if(item.x === visitedNodes[0].x - 1 && item.y === visitedNodes[0].y){
                !item.wall && visitedNodes.push(item)

            }
            if(item.x === visitedNodes[0].x && item.y === visitedNodes[0].y + 1){
                !item.wall && visitedNodes.push(item)

    
            }
            if(item.x === visitedNodes[0].x + 1 && item.y === visitedNodes[0].y){
                !item.wall && visitedNodes.push(item)

            }
            console.log(visitedNodes)
            
        }

        visitedNodes.sort((a,b)=>{
            if(a.targetD < b.targetD){
                return a.targetD - b.targetD
            }
        })
        shortestpath.unshift(visitedNodes[0])
        for(const item of arr) {
            if(item.x === shortestpath[0].x  && item.y === shortestpath[0].y){
                item.visited = true;
            }

        }


        await setNodes([...arr])
    }



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