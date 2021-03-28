const sleep = async(ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const dijkstra = async(nodes, setNodes) => {
    let endPoint;
    let tempArr = [...nodes];
    let nodesToTest = [];
    let shortestPath = [];
    let startNode;
    let shortestPathFound = false;

    tempArr.forEach((item,i)=>{
        if(item.end === true){
            endPoint = [item.x, item.y];
        }
    });
    setNodes([...tempArr])

    for(const item of tempArr){
        if(!item.end){
            item.heuristicD = Math.sqrt(Math.pow((endPoint[0] - item.x),2) + Math.pow((endPoint[1] - item.y),2)); 
            setNodes([...tempArr])
        }
        if(item.start){
            item.localD = 0;
            item.globalD = item.localD + item.heuristicD;
            startNode = item;
            nodesToTest.push(item)
        }
    }

    const dijkstraActivate = async() => {

        const updateNode = async(node1, node2)=>{
            node1.localD = node2.localD + 1;
            node1.globalD = node1.localD + node1.heuristicD;
            node1.parentNode = node2.x + "-" + node2.y;
        }
        while(!shortestPathFound){

            for(const item of tempArr){
                let left = (item.x === nodesToTest[0].x - 1  && item.y === nodesToTest[0].y);
                let right = (item.x === nodesToTest[0].x + 1  && item.y === nodesToTest[0].y);
                let up =( item.x === nodesToTest[0].x && item.y === nodesToTest[0].y - 1);
                let down = (item.x === nodesToTest[0].x && item.y === nodesToTest[0].y + 1);

                if(item.wall === false){
                    if(left || right || up || down){
                        if((nodesToTest[0].localD + 1) < item.localD){
                            updateNode(item,nodesToTest[0])
                            if(!item.end && !item.visited){
                                nodesToTest.push(item)
                                setNodes([...tempArr])
                           } 
                        }
                        if(item.end === true){
                            shortestPathFound = true;
                            
                        }               
                    }
                }
            }
            nodesToTest[0].visited = true;
            nodesToTest.shift();
        }

    }

    const extractShortestpath = async() =>{
        for(const item of tempArr){
            if(item.end === true){
                shortestPath.push(item.parentNode)
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
                setNodes([...tempArr])
                await sleep(25)
                   shortestPath.push(item.parentNode)
                }
            }
        }
    }

    dijkstraActivate();
    extractShortestpath();

}

export default dijkstra;