export const SERIVE_ROUTES = {
    LOGIN: "/login",
    SIGNUP: "/register",
    KYC: "/new_kyc_store",
    SKIP_KYC: "/skip",
    ADMIN_LOGIN: "/admin_login",
    // <---------------------------User End Point-------------------->
   
  
    // <---------------------------Admin End Point-------------------->
   
    // <----------Post api---------->
   
    // <----------Update api---------->
  };
  
  export const METHODS = {
    GET: "GET",
    PUT: "PUT",
    PATCH: "PATCH",
    DELETE: "DELETE",
    POST: "POST",
  };
  
  export const replaceUrl = (url, data) => {
    //var regex = new RegExp(":(" + Object.keys(data).join("|") + ")", "g");
    //const A = url?.replace(regex, (m, $1) => data[$1] || m);
    const newUrl = `${url}=${data.id}`;
    return newUrl;
  };
  