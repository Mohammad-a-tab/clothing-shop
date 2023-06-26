import { IsArray, IsMongoId, IsOptional, IsString } from "class-validator";
import { ObjectId } from "mongodb";

export class UpdateProductDTO {
    @IsString()
    title: string;
    
    @IsString()
    description: string;

    @IsString()
    size: string;

    @IsString()
    price: string;

    @IsString()
    colors: string[];

    @IsMongoId()
    @IsOptional()
    @IsString()
    category?: ObjectId | null | '';
}