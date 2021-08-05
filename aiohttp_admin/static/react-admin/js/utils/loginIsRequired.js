export function loginIsRequired() {
  const { tokenName, mainUrl } = window.appData;
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const okta_token = urlParams.get('TOKEN');
  urlParams.delete('TOKEN');

   if (okta_token){
         window.localStorage.setItem('aiohttp_admin_token', okta_token);
        }
        console.log(token);
  const fullPath = window.location.toString();
  const isLoginPage = fullPath.includes('#/login');
  if (!localStorage.getItem(tokenName) && !isLoginPage) {
    window.location.replace(`${mainUrl}#/login`);
  } else if (localStorage.getItem(tokenName) && isLoginPage) {
    window.location.replace(mainUrl);
  }
}
