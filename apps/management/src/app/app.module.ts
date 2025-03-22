import { Module } from '@nestjs/common';
import { GraphqlConfigModule } from '@chapchapies/shared-server';
import { UsersModule } from './users/users.module';

@Module({
	imports: [GraphqlConfigModule, UsersModule],
})
export class AppModule {}
