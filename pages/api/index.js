import UsersService from "../../Services/usersService";

const userService = new UsersService();

export default async function handler(req, res) {
    const result = await userService.getAllData('', '');
    res.status(200).json(result)
}
