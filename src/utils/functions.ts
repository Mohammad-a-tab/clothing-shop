import { ImageInfo } from "src/products/interfaces/image-info.interface";
import { CreateProductDTO } from '../products/dto/create-product.dto';

export function editPathImages (images: Array<ImageInfo>, createProductDTO: CreateProductDTO): void {
    let paths = [];
    for (const image of images) {
        const path = image.path.replace(/\\/g, '/');
        paths.push(path);
    }
    createProductDTO.images = paths;
}