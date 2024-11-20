const { Router } = require ('express');
const UserControllers = require ('../Controllers/UserControllers');

const route = Router();

route.get('/', UserControllers.Get_All_Users);

route.get ('/:id', UserControllers.Get_User);

route.post('/', UserControllers.Create_User);

route.put ('/:id', UserControllers.Update_User);

route.patch('/:id', UserControllers.Update_Onething_User);

route.delete('/:id', UserControllers.Delete_User);

module.exports = route;