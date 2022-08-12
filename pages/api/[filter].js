import UsersService from "../../Services/usersService";

const userService = new UsersService();

export default async function handler(req, res) {
    const [filterName, filter] = req.query.filter.split(":");
    const result = await userService.getAllData(filter, filterName);
    res.status(200).json(result)
}
