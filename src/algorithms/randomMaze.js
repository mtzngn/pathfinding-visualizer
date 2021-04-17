const randomMaze = (nodes) => {

    let stack = [nodes[0]];
    let count = 0;
    while (count !== nodes.length) {
        let items = []

        for (const node of nodes) {
            let north = (node.x === stack[0].x && node.y === stack[0].y - 1)
            let south = (node.x === stack[0].x && node.y === stack[0].y + 1)
            let east = (node.x === stack[0].x - 1 && node.y === stack[0].y)
            let west = (node.x === stack[0].x + 1 && node.y === stack[0].y)

            if ((north || south || east || west) && (node.wall === false) && (node.visited === false)) {
                items.push(node)
            }
        }
        if (items.length === 0) {
            if (Math.round(Math.random()) === 0) {
                if(!stack[0].start && !stack[0].end) stack[0].wall = true;
            } 
            stack.shift();
            continue;
        }
        let currentNode = items[Math.floor(Math.random() * items.length)];
        if(currentNode.visted === true) {
            stack.shift();
            continue;
        }
        currentNode.visited = true;
        count++;
        stack.unshift(currentNode);
    }
    return nodes;
}

export default randomMaze;