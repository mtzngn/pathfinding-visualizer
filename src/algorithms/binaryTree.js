const binaryTree = (nodes) => {

    nodes.forEach((node)=> {
        if (!(node.start || node.end)) node.wall = true;
        let ranNum = Math.floor(Math.random() * 2)
        if (ranNum === 0) {
            nodes.forEach((node2)=>{if(node.x === node2.x && node.y === node2.y + 1) node2.wall = false});
        } else {
            nodes.forEach((node2)=>{if(node.x === node2.x + 1 && node.y === node2.y) node2.wall = false});
        }
    });
    return nodes;
}
export default binaryTree;
