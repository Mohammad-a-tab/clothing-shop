import { IsMongoId, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { ObjectId } from "mongodb";

export class UpdateCategoryDTO {
    @IsMongoId()
    @IsNotEmpty()
    id: string;

    @IsString()
    title: string;

    @IsOptional()
    @IsMongoId()
    parent?: ObjectId;
}