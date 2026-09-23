import UserDto from '../dto/user.dto.js';
import userDao from '../dao/user.dao.js';

class UserController {
    async getAll(req, res) {
        res.json(await userDao.getAll());
    }
    async getById(req, res) {
        res.json(await userDao.getById(req.params.id)); 
    }
    async create(req, res) {
        const userDto = new UserDto(req.body);
        const result = await userDao.create(userDto);
        res.json({
            message: result ? 
                'Usuario creado' : 
                'Ha ocurrido un error al crear el usuario',
        });
    }
    async update(req, res) {
        const userDto = new UserDto(req.body);
        const result = await userDao.update(req.params.id, userDto);
        res.json({
            message: result ?
                'Usuario actualizado' :
                'Ha ocurrido un error al actualizar el usuario',
        }); 
    }
    async delete(req, res) {
        const result = await userDao.delete(req.params.id);
        res.json({
            message: result ?
                'Usuario eliminado' :
                'Ha ocurrido un error al eliminar el usuario',
        });
    }
}
const userController = new UserController();
export default userController;