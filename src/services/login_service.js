import * as rest from './rest';

let url = "http://bangequal.herokuapp.com/blog/account/login";
//let url = "http://localhost:5000/blog/account/login";

export let submitLogin = (data) => 
{   
    rest.post(url, data).then(function(results){
        if(results.data.accessToken)
        {
            sessionStorage.setItem("token", results.data.accessToken);
            //was able to successfully run this function after login
            //Articles.fillArticleCache(callback => {
                //alert('hello');
            //});
        }
    });
}