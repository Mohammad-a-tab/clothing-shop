import { ImageInfo } from "src/products/interfaces/image-info.interface";

export function editPathImages (images: Array<ImageInfo>, ProductDTO): void {
    let paths = [];
    for (const image of images) {
        const path = image.path.replace(/\\/g, '/');
        paths.push(path);
    }
    ProductDTO.images = paths;
}