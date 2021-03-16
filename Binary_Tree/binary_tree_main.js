var insertButton = document.getElementById('insert')
var inputtext = document.getElementById('inputnum')
var container = document.getElementById('treeContainer')
var svg = "http://www.w3.org/2000/svg";
var index = -1;
var circleArray = []
var textArray = []
var lineArray = []

function drawNode(x, y, value) {
    circleArray[index] = document.createElementNS(svg, 'circle')
    circleArray[index].setAttributeNS(null, 'cx', x)
    circleArray[index].setAttributeNS(null, 'cy', y)
    circleArray[index].setAttributeNS(null, 'r', '20')
    circleArray[index].setAttributeNS(null, 'stroke', 'red')
    circleArray[index].setAttributeNS(null, 'fill', 'white')
    

    textArray[index] = document.createElementNS(svg, 'text')
    textArray[index].setAttributeNS(null, 'x', x - 8)
    textArray[index].setAttributeNS(null, 'y', y + 3)
    textArray[index].setAttributeNS(null, 'stroke', 'black')
    textArray[index].setAttributeNS(null, 'font-size', '15')

    var text = document.createTextNode(value)
    textArray[index].appendChild(text)

    container.appendChild(circleArray[index])
    container.appendChild(textArray[index])
}

function connectNodes(node1, node2) {
    lineArray[++index] = document.createElementNS(svg, 'line')
    lineArray[index].setAttributeNS(null, 'x1', node1.x)
    lineArray[index].setAttributeNS(null, 'y1', node1.y)
    lineArray[index].setAttributeNS(null, 'x2', node2.x)
    lineArray[index].setAttributeNS(null, 'y2', node2.y)
    lineArray[index].setAttributeNS(null, 'stroke', 'red')
    lineArray[index].setAttributeNS(null, 'stroke-width', 3)
    lineArray[index].style = 'z-index: -1;'

    container.appendChild(lineArray[index])
}

var tree = new BST();

insertButton.addEventListener('click', () => {
    var i = inputtext.value;
    tree.add(i)
    tree.transverse()
})
var k = 0
for (var i = 0; i < 5; i++) {
    tree.add(Math.floor(Math.random() * (98 - 5 + 1)) + 5)
}
tree.transverse()