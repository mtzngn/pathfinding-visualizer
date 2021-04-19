const randomMaze2 = (nodes) => {
    let sideWalls = nodes.filter(node => (node.x === 0 || node.y % 2=== 0 || node.x === 47 || node.y === 30))
    for (let i = 2 ; i < 30; i += 2) {
        let numberx = Math.floor( Math.random() * 44 / 2 ) * 2 + 2;
        sideWalls = sideWalls.filter(node => (node.x !== numberx || node.y !== i))
    }
    sideWalls.forEach((node) => node.wall = true)
    return sideWalls
}
export default randomMaze2;