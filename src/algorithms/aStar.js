const aStar = async(nodes, setIsRunning) => {
    let endPoint;
    let tempArr = [...nodes];
    let nodesToTest = [];
    let visitedNodes = [];
    let shortestPath = [];
    let startNode;
    let shortestPathFound = false;
      
    const getEndPoints  = () => {
        tempArr.forEach((item,i)=>{
            if(item.end === true){
               return endPoint = [item.x, item.y];
            }
        });
    }

    const calculateHeuristics = () =>{
        for(const item of tempArr){
            if(!item.end){
                item.heuristicD = Math.sqrt(Math.pow((endPoint[0] - item.x),2) + Math.pow((endPoint[1] - item.y),2)); 
            }
            if(item.start){
                item.localD = 0;
                item.globalD = item.localD + item.heuristicD;
                startNode = item;
                nodesToTest.push(item)
            }
        }
    }

    const createVisitedNodes = async() => {

        const updateNode = async(node1, node2)=>{
            node1.localD = node2.localD + 1;
            node1.globalD = node1.localD + node1.heuristicD;
            node1.parentNode = node2.x + "-" + node2.y;
        }
        while(!shortestPathFound){

            for(const item of tempArr){
                if(item.wall || item.visited) continue;
                let up =( item.x === nodesToTest[0].x && item.y === nodesToTest[0].y - 1);
                let down = (item.x === nodesToTest[0].x && item.y === nodesToTest[0].y + 1);
                let left = (item.x === nodesToTest[0].x - 1  && item.y === nodesToTest[0].y);
                let right = (item.x === nodesToTest[0].x + 1  && item.y === nodesToTest[0].y);


                if(left || right || up || down){
                    if((nodesToTest[0].localD + 1) < item.localD){
                        updateNode(item,nodesToTest[0])
                        if(item.end){
                            shortestPathFound = true;
                            continue;
                        }
                        nodesToTest.push(item)
                    }
                }
            }
            nodesToTest[0].visited = true;
            if(nodesToTest[0].start !== true) visitedNodes.push(nodesToTest[0]);
            nodesToTest.shift();
            nodesToTest.sort((a,b)=> a.heuristicD - b.heuristicD)
        }
    }

    const extractShortestpath = async() =>{
        for(const item of tempArr){
            if(item.end === true){
                shortestPath.push(item.parentNode)
                continue;
            }
        }
        while (shortestPath){
            let lastParent = shortestPath[shortestPath.length - 1];
            for(const item of tempArr){
                if(lastParent === startNode.x + "-"+ startNode.y ){
                    return
                }
                if((item.x + "-" + item.y) === lastParent){
                   item.closestNode = true;
                   shortestPath.push(item.parentNode)
                }
            }
        }
    }
    getEndPoints();
    calculateHeuristics();
    await createVisitedNodes();
    await extractShortestpath();
    await setIsRunning(false);
    return [visitedNodes, shortestPath]


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