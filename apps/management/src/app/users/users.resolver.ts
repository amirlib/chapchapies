import { UsersService } from './users.service';
import { UserEntity } from '../schemas/user.entity';
import { Query, Resolver } from '@nestjs/graphql';

@Resolver(() => UserEntity)
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => UserEntity)
	createUser() {
		return this.usersService.create();
	}
}
