import { IsMongoId, IsNotEmpty, IsString } from "class-validator";
import { ObjectId } from "mongodb";

export class UpdateCategoryDTO {
    @IsMongoId()
    @IsNotEmpty()
    id: string;

    @IsString()
    title: string;

    @IsMongoId()
    parent: ObjectId;
}