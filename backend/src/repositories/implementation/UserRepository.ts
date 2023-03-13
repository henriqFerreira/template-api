import User from "../../model/User";
import IUserRepository from "../IUserRepository";

export default class UserRepository implements IUserRepository {
    save(user: User) : Promise<User> {
        return User.create({ Id: user.Id, Name: user.Name, Email: user.Email, Password: user.Password });
    }

    findByEmail(email: string) : Promise<User | null> {
        console.log("[ UserRepository.ts ]", email);
        return User.findOne({ where: { Email: email } })
    }

    findAll() : Promise<User[]> {
        return User.findAll();
    }
}