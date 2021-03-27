const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const aStar = async(arr, setNodes) => {
    let endPoint;
    let nodesToTest = [];
    let shortestPath = [];
    let startNode;

    arr.forEach((item,i)=>{
        if(item.end === true){
            endPoint = [item.x, item.y];
        }
    });

    for(const item of arr){
        if(!item.end){
            item.heuristicD = Math.sqrt(Math.pow((endPoint[0] - item.x), 2) + Math.pow((endPoint[1] - item.y),2)); 
            setNodes([...arr])
        }
        if(item.start){
            item.localD = 0;
            item.globalD = item.localD + item.heuristicD;
            startNode = item;
            nodesToTest.push(item)
        }
    }


    const aStartActivate = async() => {

        const updateNode = async(node1, node2)=>{
            node1.localD = node2.localD + 1;
            node1.globalD = node1.localD + node1.heuristicD;
            node1.parentNode = node2.x + "-" + node2.y;
        }
        while(nodesToTest){
            
            for(const item of arr){

                let left = (item.x === nodesToTest[0].x - 1  && item.y === nodesToTest[0].y);
                let right = (item.x === nodesToTest[0].x + 1  && item.y === nodesToTest[0].y);
                let up =( item.x === nodesToTest[0].x && item.y === nodesToTest[0].y - 1);
                let down = (item.x === nodesToTest[0].x && item.y === nodesToTest[0].y + 1);

                if(!item.wall){
                    if(left || right || up || down){
                        if((nodesToTest[0].localD + 1) < item.localD){
                            updateNode(item,nodesToTest[0])
                            if(!item.end && !item.visited){
                                nodesToTest.push(item)
                           } 
                        }
                        if(item.end){
                            return
                        }               
                    }
                }

            }
        
            nodesToTest[0].visited = true;

            setNodes([...arr])
            nodesToTest.shift();
            console.log(nodesToTest.length)
            console.log(nodesToTest)

            if(nodesToTest.length > 200){
                break};
            nodesToTest.sort((a,b)=>{
                if(a.heuristicD < b.heuristicD){
                    return a.globalD - b.globalD
                }
            })
        }

    }

    const extractShortestpath = async() =>{
        for(const item of arr){
            if(item.end === true){
                shortestPath.push(item.parentNode)
            }
        }
        while (shortestPath){
            let lastParent = shortestPath[shortestPath.length - 1];
            for(const item of arr){
                if(lastParent === startNode.x + "-"+ startNode.y ){
                    return
                }
                if((item.x + "-" + item.y) === lastParent){
                   item.closestNode = true;
                setNodes([...arr])
                await sleep(25)
                   shortestPath.push(item.parentNode)
                }
            }
        }
    }

    aStartActivate();
    extractShortestpath();

    // Start from startNode
    // add this to the nodeToTest array
    // localD = 0, globalD = heuristicD + localD
//check neighboor of starting node 
//continue if neighboor is NOT WALL.
//add neighboor node to note to test array
//update the node if(locaD of startingNode + distance between nodes < localD of neighboor)
    //add to neighboor the startingNode as parent
    //update the neighboor's localD and globalD
//once finished with neighboors of starting point, mark it as visited and remove from nodeToTest array
//sort the array with the lowest global distance value
//if endnode discovered it doesnt go in to nodeToTest array

}

export default aStar;