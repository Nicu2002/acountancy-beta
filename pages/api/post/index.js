import UsersService from "../../../Services/usersService";

const userService = new UsersService();

export default async function handler(req, res) {
    const result = await userService.postData(JSON.parse(req.body));
    res.status(result.status).json(result);
}
