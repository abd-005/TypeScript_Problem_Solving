const multiplyValue = (value, multiplier) => {
    if (multiplier) {
        return value * multiplier;
    }
    else if (multiplier === 0) {
        return value * multiplier;
    }
    else {
        return value * 2;
    }
};
const processInput = (x) => {
    if (typeof x === "string") {
        return x.trim().toLowerCase();
    }
    else if (typeof x === "number") {
        return x * 10;
    }
    else {
        if (x === true) {
            return "Active";
        }
        else {
            return "Inactive";
        }
    }
};
const formatCoordinate = (tuple) => {
    return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`;
};
console.log(formatCoordinate([23.81, 90.41, "Dhaka"]));
console.log(formatCoordinate([22.35, 91.78, "Chittagong"]));
export {};
