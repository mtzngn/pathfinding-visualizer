export default class Nodes {
    constructor(x, y, targetD, localD, globalD, parent, start, end, visited, wall ) {
        this.x = x;
        this.y = y;
        this.targetD = targetD;
        this.localD = localD;
        this.globalD = globalD;
        this.parent = parent;
        this.start = start;
        this.end = end;
        this.visited = visited;
        this.wall = wall;
    }
    move = () => {
        console.log(`this is`)
    }
   
}