
import Backend from "../apis/backend";

export const GetSingleUserService = id => {
    let result = null;
 
      const fetchData = () => {
        const res = Backend.get(`/users/${id}`)
          result = res;
          console.log(result);
      };
      fetchData();
      return result;
};