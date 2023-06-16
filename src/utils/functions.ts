import { ImageInfo } from "src/products/interfaces/image-info.interface";

export function editPathImages (images: Array<ImageInfo>) {
    let path = [];
    for (const image of images) {
        const editPath = image.path.replace(/\\/g, '/');
        path.push(editPath);
    }
}