const randomMaze = (nodes) => {

    let stack = [];
    let walls = [];
    stack.push(nodes[0]);

    while (stack.length > 0) {

        for (let node of nodes) {
            let north = (node.x === stack[stack.length - 1].x && node.y === stack[stack.length - 1].y - 1)
            let south = (node.x === stack[stack.length - 1].x && node.y === stack[stack.length - 1].y + 1)
            let east = (node.x === stack[stack.length - 1].x - 1 && node.y === stack[stack.length - 1].y)
            let west = (node.x === stack[stack.length - 1].x + 1 && node.y === stack[stack.length - 1].y)
            if (north || south || east || west) {

            }
        }
    }
}

export default randomMaze;