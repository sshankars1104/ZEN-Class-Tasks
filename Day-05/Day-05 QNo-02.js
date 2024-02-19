//---------------------------------Day-05 QNo-02----------------------------------------
//https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md


//--------------------------------Class - Circle-------------------------------------


class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    // Getter for radius
    getRadius() {
        return this.radius;
    }

    // Setter for radius
    setRadius(radius) {
        this.radius = radius;
    }

    // Getter for color
    getColor() {
        return this.color;
    }

    // Setter for color
    setColor(color) {
        this.color = color;
    }

    // Returns string representation of the circle
    toString() {
        return `Circle[radius=${this.radius}, color=${this.color}]`;
    }

    // Calculates the area of the circle
    getArea() {
        return (Math.PI * Math.pow(this.radius, 2)).toFixed(3);
    }

    // Calculates the circumference of the circle
    getCircumference() {
        return (2 * Math.PI * this.radius).toFixed(3);
    }
}

// Creating the Circle class
let circle1 = new Circle(4.2, "red");

// Setting radius and color
circle1.setRadius(5.5);
circle1.setColor("green");

// Getting radius and color
console.log(circle1.getRadius());
console.log(circle1.getColor());

// Outputting string representation of the circle
console.log(circle1.toString());

// outputting the area of the circle
console.log("Circle Area =", circle1.getArea());

// outputting the area circumference of the circle
console.log("Circumference =", circle1.getCircumference()); 
