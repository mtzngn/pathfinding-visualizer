const binaryTree = (nodes) => {
    nodes.forEach((node) => {
        if (!(node.start || node.end) && (node.y % 2 === 0 || node.x % 2 === 0) && node.y !== 30 && node.x !== 0) node.wall = true;
    })
    nodes.forEach((node) => {
        if (node.y % 2 !== 0 && node.x % 2 !== 0) {
            let ranNum = Math.floor(Math.random() * 2)
            
        if (ranNum === 1) {
            nodes.forEach((node2)=>{
                if(node2.x === node.x && node2.y === node.y - 1) node2.wall = false
            });
        } else {
            nodes.forEach((node2)=>{
                if(node2.x === node.x + 1 && node2.y === node.y ) node2.wall = false
            });
        }
        }
    })

    return nodes;
}
export default binaryTree;
