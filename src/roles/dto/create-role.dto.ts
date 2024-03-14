import { ArrayMinSize, IsArray, IsOptional, IsString, MinLength } from "class-validator";

export class CreateRoleDto {
    @IsString()
    @MinLength(1)
    name: string;

    @IsString()
    @IsOptional()
    description?: string;

    @IsArray()
    @ArrayMinSize(1)
    menus:number[]
}
