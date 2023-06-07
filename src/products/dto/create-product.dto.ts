import { IsArray, IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from "mongodb";

export class CreateProductDTO {
    @IsNotEmpty()
    @IsString()
    title: string;
    
    @IsNotEmpty()
    @IsString()
    description: string;

    @IsNotEmpty()
    @IsString()
    size: string;

    @IsNotEmpty()
    @IsString()
    price: string;

    @IsNotEmpty()
    @IsArray()
    colors: Array<string>;

    @IsMongoId()
    category: ObjectId

    @IsNotEmpty()
    @IsArray()
    images: Array<string>;
}