import { IsMongoId, IsNotEmpty } from "class-validator";

export class CategoryIdDTO {
    @IsMongoId()
    @IsNotEmpty()
    id: string;
}