import { Injectable } from '@nestjs/common';
import { UserEntity } from '../schemas/user.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UsersService {
	async create() {
		const user = new UserEntity();

		user.firstName = 'Limor';
		user.id = uuidv4();
		user.lastName = 'Liberzon';

		return user;
	}
}
