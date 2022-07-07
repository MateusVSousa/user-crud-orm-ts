import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User.entity";

const getUserIdService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = userRepository.find();
  const findUser = (await user).find((item) => id === item.id);
  if (findUser === undefined) {
    throw new Error("User not find");
  }

  return findUser;
};

export default getUserIdService;
