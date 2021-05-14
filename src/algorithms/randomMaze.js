const randomMaze = (nodes) => {
    let sideWalls = nodes.filter(node => (node.x === 0 || node.y % 2=== 0 || node.x === 47 || node.y === 30))
    for (let i = 2 ; i < 30; i += 2) {
        let numberx = Math.floor( Math.random() * 44 / 2 ) * 2 + 2;
        let numberx1 = Math.floor( Math.random() * 44 / 2 ) * 2 ;
        let numberx2 = Math.floor( Math.random() * 44 / 2 ) * 2 - 2;
        let numberx3 = Math.floor( Math.random() * 44 / 2 ) * 2 - 4;
        let numberx4 = Math.floor( Math.random() * 44 / 2 ) * 2 + 6;
        sideWalls = sideWalls.filter(node => ((node.x !== numberx || node.y !== i) && (node.x !== numberx1 || node.y !== i) && (node.x !== numberx2 || node.y !== i)&& (node.x !== numberx3|| node.y !== i)&& (node.x !== numberx4 || node.y !== i)))
    }
    sideWalls.forEach((node) => node.wall = true)
    return sideWalls
}
export default randomMaze;