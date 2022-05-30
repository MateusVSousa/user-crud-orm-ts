import { IUserCreate } from "../../interfaces/users";
import { User } from "../../entity/user.entity";
import { AppDataSource } from "../../data-source";
import bcrypt from "bcrypt";

const createUserService = async ({
  name,
  email,
  password,
  age,
}: IUserCreate) => {
  const userRepository = AppDataSource.getRepository(User);
  const users = await userRepository.find();
  const findEmail = users.find((user) => email === user.email);

  if (findEmail) {
    throw new Error("Email already exists, use another email");
  }
  const dateNow: number = Date.now();
  const date: Date = new Date(dateNow);
  const hashPassword = bcrypt.hashSync(password, 5);

  const user = new User();
  user.name = name;
  user.email = email;
  user.password = hashPassword;
  user.age = age;
  user.createAt = date;
  user.updateAt = date;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
