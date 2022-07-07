import { AppDataSource } from "../../data-source";
import { User } from "../../entities/User.entity";

const updateUserService = async (id: string, data:object) => {
  const userRepository = AppDataSource.getRepository(User);
  const user = await userRepository.find();
  const findUser = user.find((item) => id === item.id);
  if (findUser === undefined) {
    throw new Error("User not find");
  }
  userRepository.update(id, {...findUser,...data})
  await userRepository.save({...findUser})


  return findUser;
};

export default updateUserService
