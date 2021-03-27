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
        if(item.end === false){
            item.heuristicD = Math.sqrt(Math.pow((endPoint[0] - item.x), 2) + Math.pow((endPoint[1] - item.y),2)); 
            setNodes([...arr])
        }
    }

    arr.forEach((item,i)=>{
        if(item.start === true){
            item.localD = 0;
            item.globalD = item.localD + item.heuristicD;
            startNode = item;
            nodesToTest.push(item)
        }
    });

    const aStartActivate = () => {
        while(nodesToTest.length !== 0){

            for(const item of arr){
        
                if(item.x === nodesToTest[0].x - 1  && item.y === nodesToTest[0].y){
                        if(item.wall === false){
                            if((nodesToTest[0].localD + 1) < item.localD){
                                item.localD = nodesToTest[0].localD + 1;
                                item.globalD = item.localD + item.heuristicD;
                                item.parentNode = nodesToTest[0].x + "-" + nodesToTest[0].y;
                            }
                            if(item.end === false && item.visited === false){
                                nodesToTest.push(item)
                            } 
                            if(item.end === true){return}               
                        }
                    
                }
                if(item.x === nodesToTest[0].x  && item.y === nodesToTest[0].y - 1 ){
                    if(item.wall === false){
                        if((nodesToTest[0].localD + 1) < item.localD){
                            item.localD = nodesToTest[0].localD + 1;
                            item.globalD = item.localD + item.heuristicD;
                            item.parentNode = nodesToTest[0].x + "-" + nodesToTest[0].y;
                        }
        
                        if(item.end === false && item.visited === false){
                            nodesToTest.push(item)
                        }           
                        if(item.end === true){return}               
         
                    }
                    
                }
                if(item.x === nodesToTest[0].x + 1 && item.y === nodesToTest[0].y){
                    if(item.wall === false){
                        if((nodesToTest[0].localD + 1) < item.localD){
                            item.localD = nodesToTest[0].localD + 1;
                            item.globalD = item.localD + item.heuristicD;
                            item.parentNode = nodesToTest[0].x + "-" + nodesToTest[0].y;
                        }
        
                        if(item.end === false && item.visited === false){
                            nodesToTest.push(item)
                        }     
                        if(item.end === true){return}               
               
                    }
                    
                }
                if(item.x === nodesToTest[0].x  && item.y === nodesToTest[0].y + 1){
                    if(item.wall === false){
                        if((nodesToTest[0].localD + 1) < item.localD){
                            item.localD = nodesToTest[0].localD + 1;
                            item.globalD = item.localD + item.heuristicD;
                            item.parentNode = nodesToTest[0].x + "-" + nodesToTest[0].y;
                        }
        
                        if(item.end === false && item.visited === false){
                            nodesToTest.push(item)
                        }
                        if(item.end === true){return}               
        
                    }
                }
            }
        
            nodesToTest[0].visited = true;
            nodesToTest.shift();
            nodesToTest.sort((a,b)=>{
                if(a.heuristicD < b.heuristicD){
                    return a.globalD - b.globalD
                }
            })
        
            setNodes([...arr])
            }
    }

    aStartActivate();

    for(const item of arr){
        if(item.end === true){
            shortestPath.push(item.parentNode)
        }
    }
    const extractShortestpath = () =>{
        while (shortestPath){
            for(const item of arr){
                if(shortestPath[shortestPath.length - 1] === startNode.x + "-"+ startNode.y ){return}
                if((item.x + "-" + item.y) === shortestPath[shortestPath.length - 1]){
                   item.closestNode = true;
                    shortestPath.push(item.parentNode)
                }
            }
        }
    }

    extractShortestpath()
    setNodes([...arr])

    console.log(shortestPath)


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