interface imageOInfo {
    fieldname: string,
    originalname: string,
    encoding: string,
    mimetype: string,
    destination: string,
    filename: string,
    path: string,
    size: number
}
export function editPathImages (images: Array<imageOInfo>) {
    // return new Promise((resolve, reject))
    let path = [];
    for (const image of images) {
        
        path.push(image.path);
    }
}