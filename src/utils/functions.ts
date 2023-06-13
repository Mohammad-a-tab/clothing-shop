export function stringToArray (fields: string): Array<string> {
    let array: string[] = [];
    if(fields.indexOf(",") >=0){
        array = fields.split(",").map(item => item.trim())
    }else {
        array = []
    }
    return array;
}