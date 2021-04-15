export default class Nodes {
    constructor(x, y, end, start, heuristicD, localD, globalD, parentNode, visited, wall, closestNode, id ) {
        this.x = x;
        this.y = y;
        this.heuristicD = heuristicD;
        this.localD = localD;
        this.globalD = globalD;
        this.parentNode = parentNode;
        this.start = start;
        this.end = end;
        this.visited = visited;
        this.wall = wall;
        this.closestNode = closestNode;
        this.id = id;
    }

   
}