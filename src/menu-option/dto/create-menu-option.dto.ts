import { IsBoolean, IsOptional, IsString, MinLength } from "class-validator";

export class CreateMenuOptionDto {
    @IsString()
    @MinLength(1)
    label: string;
  
    @IsString()
    @MinLength(1)
    route: string;
  
    @IsBoolean()
    @IsOptional()
    activo?: boolean;
}
