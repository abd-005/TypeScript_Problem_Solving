const multiplyValue = (value: number, multiplier?: number): number => {
    if(multiplier){
        return value * multiplier;
        
    } else if(multiplier === 0 ) {
        return value * multiplier;
    } else{
        
        return value * 2;
    }
}


const processInput = (x : string | number | boolean): string | number | boolean => {
    if(typeof x === "string"){
        return x.trim().toLowerCase();
    } else if(typeof x === "number"){
        return x * 10;
    } else{
        if(x === true){
            return "Active";
        } else {
            return "Inactive";
        }
    }
}


const formatCoordinate = (tuple: readonly [number, number, string]): string => {
    return `Location: ${tuple[2]} (${tuple[0]}, ${tuple[1]})`;
}


const concatenateArrays = <T> (...arrays: T[][]): Array<T> => {
    return arrays.flat();
    
}

interface Course {
    title: string,
    students: number,
    isPublished: boolean,
}

const getPopularCourses = (courses: Course[], minStudents: number): Course[] => {
    const result = (courses.filter((course)=> course.students >= minStudents && course.isPublished === true));
    return result;
}


const pluckValues = <T, K extends keyof T>(items: T[], key: K): T[K][] => {
    const result = items.map((item)=>{
        return item[key]
    })
    return result
}