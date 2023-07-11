import { IsMongoId, IsNotEmpty } from "class-validator";
export class CategoryIdDto {
    @IsMongoId()
    @IsNotEmpty()
    id: string;
}