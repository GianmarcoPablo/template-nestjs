import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { PrismaService } from 'src/db/prisma.service';
import { HashAdapter } from 'src/adapter-pattern/hash.adapter';

@Injectable()
export class AuthService {

    constructor(private prisma: PrismaService) { }

    public register(body: CreateUserDto) {
    }

    public login() { }

}
