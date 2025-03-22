import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { GraphqlConfigModule } from '@chapchapies/shared-server';

@Module({
	imports: [GraphqlConfigModule],
	providers: [UsersResolver, UsersService],
})
export class UsersModule {}
