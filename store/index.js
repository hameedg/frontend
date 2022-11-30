import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import newUser from './slices/user';

export default configureStore({
  reducer: {
    user: newUser,
=======
import newuser from './slices/user';
import utils from './slices/utils';
import user from './slices/userdashboard';

export default configureStore({
  reducer: {
    newuser,
    utils,
    user,
>>>>>>> c95857156cb6afb30e7487ecd8ba31583aeab91e
  },
});
