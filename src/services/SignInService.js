
import Token from "../apis/auth";

export const SignInService = user => {
    let result = null;
 
      const fetchData = () => {
        const res = Token({
            method: "post",
            data: {
                email: user.email,
                password: user.password
            }
          })
          result = res;
          console.log(result);
      };
      fetchData();
      return result;
};
