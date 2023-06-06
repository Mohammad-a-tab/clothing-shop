import { IsArray, IsNotEmpty, IsString } from "class-validator";

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

    @IsNotEmpty()
    @IsArray()
    images: Array<string>;
}