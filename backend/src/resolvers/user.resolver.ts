import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserModel } from '../models/user.model';

@Resolver((of: any) => UserModel)
export class UserResolver {
  @Query((returns: any) => UserModel)
  async user(@Args('id') id: string): Promise<UserModel> {
    const user = new UserModel();
    user.id = 'sdf32fds';
    user.name = 'test';
    return Promise.resolve(user);
  }

  @Mutation((returns) => UserModel)
  async createUser(@Args('name') name: string): Promise<UserModel> {
    const user = new UserModel();
    user.id = 'sdf32fds';
    user.name = name;
    return Promise.resolve(user);
  }
}
