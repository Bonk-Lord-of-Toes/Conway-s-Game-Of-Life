//-----------------------------Warning--------------------------------
// This code is very poorly writen. If you venture further, GOOD LUCK!
//--------------------------------------------------------------------





const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
var fps = 1000
var on = true

var grid = {
    array:[],
    cellSize:5,
    highlight:0,

    findNeighbors(x,y){
        return this.findCell(x-1,y-1)+this.findCell(x-1,y)+this.findCell(x-1,y+1)+this.findCell(x,y-1)+this.findCell(x,y+1)+this.findCell(x+1,y-1)+this.findCell(x+1,y)+this.findCell(x+1,y+1)
    },
    changeCell(x,y,state){
        if(x>=0&&y>=0&&y<this.array.length&&x<this.array[y].length){
            gridTemp[y][x]=state
        }
    },
    findCell(x,y){
        if(x>=0&&y>=0&&y<grid.array.length&&x<grid.array[y].length){
            return grid.array[y][x]
        }
            return 0
    }
}

for(var y=0;y<canvas.height/grid.cellSize;y++){
    var yTemp = []
    for(var x=0;x<canvas.width/grid.cellSize;x++){
        yTemp.push(0)
    }
    grid.array.push(yTemp)
}
newArray = Object.create(grid.array)

setInterval(function(){
gridTemp = []
for(var y=0;y<grid.array.length;y++){
    var xTemp = []
    for(var x=0;x<grid.array[y].length;x++){
        xTemp.push(grid.array[y][x])
    }  
    gridTemp.push(xTemp)
}
if(on){
    main()
}
grid.array=gridTemp

for(var y=0;y<grid.array.length;y++){
    for(var x=0;x<grid.array[y].length;x++){
        ctx.beginPath()
        ctx.rect(x*grid.cellSize,y*grid.cellSize,grid.cellSize,grid.cellSize)
        ctx.fillStyle = "black"
        if(grid.findCell(x,y)==1){
            ctx.fillStyle = "green"
        }
        ctx.fill()
        ctx.strokeStyle = "grey"
        ctx.lineWidth = grid.highlight
        if(grid.highlight!=0){
        ctx.stroke()
        }
    }
}

},1000/fps)

canvas.addEventListener("click",function(e){
    var x = Math.floor(e.clientX/grid.cellSize)
    var y = Math.floor(e.clientY/grid.cellSize)
    if(grid.findCell(x,y)==1){
    gridTemp[y][x]=0
    } else{
    gridTemp[y][x]=1
    }
})

window.addEventListener("keydown",function(){
    if(on){
        on=false
    } else{
        on = true
    }
})
