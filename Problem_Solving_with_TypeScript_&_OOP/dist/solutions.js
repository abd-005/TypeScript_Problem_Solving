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
const concatenateArrays = (...arrays) => {
    return arrays.flat();
};
const getPopularCourses = (courses, minStudents) => {
    const result = (courses.filter((course) => course.students >= minStudents && course.isPublished === true));
    return result;
};
const pluckValues = (items, key) => {
    const result = items.map((item) => {
        return item[key];
    });
    return result;
};
export {};
