import { AppDataSource } from "../../data-source";
import { User } from "../../entity/user.entity";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.find();
  const findUser = (await user).find((item) => id === item.id);
  if (findUser === undefined) {
    throw new Error("User not find");
  }
  userRepository.delete(findUser);
  return "User Has Been deleted";
};
export default deleteUserService;
