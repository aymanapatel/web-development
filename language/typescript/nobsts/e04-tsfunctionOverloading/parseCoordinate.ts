
interface Coordinate {
    x: number;
    y: number
}

// ❌ Bad Duplication of functions
function parseCoordinateFromObject(obj: Coordinate): Coordinate {

    return {
        ...obj
    }
}
function parseCoordinateFromNumber(num1: number, num2:number): Coordinate {

    let inCol = {
        x: num1,
        y: num2
    }
    return inCol
}


function parseCoordinate(x: number, y: number): Coordinate;
function parseCoordinate(str: string): Coordinate;
function parseCoordinate(obj: Coordinate): Coordinate;


function parseCoordinate(arg1: unknown, arg2?: unknown): Coordinate {
    let coord: Coordinate = {
      x: 0,
      y: 0,
    };
  
    if (typeof arg1 === "string") {
      (arg1 as string).split(",").forEach((str) => {
        const [key, value] = str.split(":");
        coord[key as "x" | "y"] = parseInt(value, 10);
      });
    } else if (typeof arg1 === "object") {
      coord = {
        ...(arg1 as Coordinate),
      };
    } else {
      coord = {
        x: arg1 as number,
        y: arg2 as number,
      };
    }
  
    return coord;
  }

// ✅ Functional Overloading 
console.log(parseCoordinate(10,20))
console.log(parseCoordinate({x: 21, y: 32}))
console.log(parseCoordinate("x:12,y:22"));

