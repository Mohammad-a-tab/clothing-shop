import { IsArray, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from "mongodb";

export class CreateProductDTO {
    @IsString()
    title: string;
    
    @IsString()
    description: string;

    @IsString()
    size: string;

    @IsString()
    price: string;

    @IsArray()
    colors: Array<string>;

    @IsMongoId()
    category: ObjectId

    @IsArray()
    images: Array<string>;
}