import RestaurantList from '../views/pages/restaurants';
import Detail from '../views/pages/detail';
import Like from '../views/pages/like';

const routes = {
  '/': RestaurantList,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
