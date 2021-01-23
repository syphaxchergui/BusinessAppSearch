import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer x-LuAjTCHoBY6dwgTg9imKPk2OBIysiVpqL-oM0nhF2RPQKmFFzC4oafu_8BGRy8Q_Yzyj4_FyXEFu4XZ2HAhH7togbkVkmMk83UZowjtAQrY5E1zYvmldmTUBnKX3Yx'
    }
});