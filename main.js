//the main function runs every frame
var main = () => {
    //these nested for loops run every frame
    for(var y=0;y<grid.array.length;y++){
        for(var x=0;x<grid.array[y].length;x++){

            //find the neighbors of current cell
            var n = grid.findNeighbors(x,y)

            //if cell is dead
            if(grid.findCell(x,y)==0){
                //birth rule
                if(n==3){
                    grid.changeCell(x,y,1)
                }
            }

            //if cell is alive
            if(grid.findCell(x,y)==1){
                //death rules
                if(n<2||n>3){
                    grid.changeCell(x,y,0)
                }
            }

        }
    }

}
