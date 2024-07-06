
import { getLoggedUserAPI } from '@services/api';

const getLoggedUser = async () => (await getLoggedUserAPI()).result;

export default getLoggedUser;
