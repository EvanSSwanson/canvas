const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

// //Rectangles (x, y, height, width)
// c.fillRect(100, 100, 100, 100)
// c.fillRect(100, 500, 100, 100)
// c.fillRect(1200, 600, 100, 100)
// c.fillStyle = '#22DD58'
// c.fillRect(250, 100, 100, 100)

// //Lines (x, y)
// c.beginPath()
// c.moveTo(50, 300)
// c.lineTo(300, 100)
// c.lineTo(400, 300)
// c.strokeStyle = '#2288DD'
// c.stroke()

// //Arc - Circle (x, y, radius, startAngle, endAngle, drawCounterClockwise boolean)
// c.beginPath()
// c.arc(300, 300, 30, 0, Math.PI * 2, false)
// c.strokeStyle = 'magenta'
// c.stroke()

const characters = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']
const generateCode = () => {
    let hexArray = []
    
    for (let i = 0; i < 6; i++) {
      hexArray.push(characters[Math.floor(Math.random() * characters.length)])
    }
    return `#${hexArray.join('')}`
}

// for (let i = 0; i < 60; i++) {
//     const x = Math.random() * window.innerWidth
//     const y = Math.random() * window.innerHeight
//     c.beginPath()
//     c.arc(x, y, 30, 0, Math.PI * 2, false)
//     c.strokeStyle = generateCode()
//     c.stroke()
// }


//Animation
function Circle(x, y, dx, dy, radius) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = generateCode()
    this.draw = function() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.strokeStyle = this.color
        c.stroke()
    }
    this.update = function() {
    if (this.x + this.radius + 8 > innerWidth || this.x < this.radius) {
        this.dx = -this.dx
    }
    if (this.y + this.radius > innerHeight || this.y < this.radius) {
        this.dy = -this.dy
    }
    this.x += this.dx
    this.y += this.dy

    this.draw()
    
    }
}

let circleArray = []
for (let i = 0; i < 100; i++) {
    const radius = 30
    const x = Math.random() * (innerWidth - radius * 2) + radius
    const y = Math.random() * (innerHeight - radius * 2) + radius
    const dx = (Math.random() * -.5) * 7
    const dy = (Math.random() * -.5) * 7
    circleArray.push(new Circle(x, y, dx, dy, radius))
}



// let x = Math.random() * innerWidth
// let y = Math.random() * innerHeight
// let dx = (Math.random() * -.5) * 7
// let dy = (Math.random() * -.5) * 7
// const radius = 30

const animate = () => {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)
    c.beginPath()

    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update()
    }
    // c.arc(x, y, radius, 0, Math.PI * 2, false)
    // c.strokeStyle = 'magenta'
    // c.stroke()

    // if (x + radius + 8 > innerWidth || x < radius) {
    //     dx = -dx
    // }
    // if (y + radius > innerHeight || y < radius) {
    //     dy = -dy
    // }
    // x += dx
    // y += dy
}

animate()