import { IsString, MinLength, IsEmail } from "class-validator";
export class CreateUserDto {
    @IsString()
    name: string;
    @IsString()
    @IsEmail()
    email: string;
    @IsString()
    @MinLength(6)
    password: string;

    
}