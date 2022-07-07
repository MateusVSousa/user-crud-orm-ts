import { User } from "../../entities/User.entity";
import { AppDataSource } from "../../data-source";

const listUsersService = async () => {
  const userRepository = AppDataSource.getRepository(User);
  const users = userRepository.find();

  return users;
};
export default listUsersService;
