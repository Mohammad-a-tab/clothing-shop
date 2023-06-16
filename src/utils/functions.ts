import { ImageInfo } from "src/products/interfaces/image-info.interface";

export function editPathImages (images: Array<ImageInfo>): Array<string> {
    let paths = [];
    for (const image of images) {
        const path = image.path.replace(/\\/g, '/');
        paths.push(path);
    }
    return paths;
}