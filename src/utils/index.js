export default class Nodes {
    constructor(x, y, targetD, localD, globalD, parent, start, end, visited, ) {
        this.x = x;
        this.y = y;
        this.targetD = targetD;
        this.localD = localD;
        this.globalD = globalD;
        this.parent = parent;
        this.start = start;
        this.end = end;
        this.visited = visited
    }
    move = () => {
        console.log(`this is`)
    }
   
}