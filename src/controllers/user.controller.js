import UserDto from '../dto/user.dto.js';
import userDao from '../dao/user.dao.js';
import codeMessages from '../utils/codeMessages.js'

const { internalError, notFound } = codeMessages;
const notUserFound = (id) => notFound(id, "usuarios");

class UserController {
    async getAll(req, res) {
        try{ 
            res.status(200).json(await userDao.getAll()) 
        }
        catch (err) { res.status(500).json(internalError(err));}
    }
    async getById(req, res) {
        try{
            res.status(200).json(
                await userDao.getById({_id: req.params.id}) ?? 
                notUserFound(req.params.id)
        )}
        catch (err) { res.status(500).json(internalError(err)) }
    }
    async getByRange(req, res){
        try{
            const {from, to} = req.query;
            const [FROM,TO] = [new Date(from??null), new Date(to??null)];
            res.status(200).json(await userDao.getByRange(FROM, TO) ?? {
                message: `no existen usuario en ese rango de fechas`
            })
        }
        catch (err) { res.status(500).json(internalError(err)) }
    }
    async create(req, res) {
        try{
            const userDto = new UserDto(req.body);
            res.status(201).json(await userDao.create(userDto));
        }
        catch (err) { res.status(500).json(internalError(err)) }
    }
    async update(req, res) {
        try{
            const userDto = new UserDto(req.body);
            res.status(200).json(
                await userDao.update(req.params.id, userDto) ?? 
                notUserFound(req.params.id))
        }
        catch (err) { res.status(500).json(internalError(err)) } 
    }
    async delete(req, res) {
        try{ 
            res.status(200).json(
                await userDao.delete(req.params.id) ?? 
                notUserFound(req.params.id)
        )}
        catch (err) { res.status(500).json(internalError(err)) }
    }
}
const userController = new UserController();
export default userController;