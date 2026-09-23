import UserModel from '../models/user.model.js';
const userDao = {
    getAll: async () => 
        await UserModel.find(),
    getById: async (id) => 
        await UserModel.findById(id),
    create: async (user) => 
        await UserModel.create(user),
    update: async (id, user) => 
        await UserModel.findByIdAndUpdate(id, user, { new: true }),
    delete: async (id) => 
        await UserModel.findByIdAndDelete(id),
}
export default userDao;