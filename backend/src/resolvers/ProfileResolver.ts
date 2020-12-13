
import { Field, ObjectType, Query, Resolver } from "type-graphql";

@ObjectType()
class Profile {
  @Field()
  name: String;
  @Field()
  id: Number;
}

@Resolver()
export class ProfileResolver {
  @Query(() => [Profile])
  profile() {
    return [{
        name: "abdu",
        id: 1
    }, {
        name: "Din",
        id: 2
    }, {
        name: "Medo",
        id: 3
    }]
  }
}