import { ImageInfo } from "src/products/interfaces/image-info.interface";

export function editPathImages (images: Array<ImageInfo>, ProductDTO): void {
    let paths = [];
    for (const image of images) {
        const path = image.path.replace(/\\/g, '/');
        paths.push(path);
    }
    ProductDTO.images = paths;
}
export function removeFieldEmpty(obj: object) {
    for (let key in obj) {
        if (obj[key] === null || obj[key].length === 0 || obj[key] === undefined || obj[key] === '') {
            delete obj[key];
        }
    }
    return obj
}