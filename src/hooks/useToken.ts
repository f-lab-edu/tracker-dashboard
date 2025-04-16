export const useToken = () => {
  const token = sessionStorage.getItem('accessToken');
  const clientInfo = sessionStorage.getItem('clientInfo');
  const parsedClientInfo = clientInfo ? JSON.parse(clientInfo) : null
  const isAuthenticated = Boolean(token && parsedClientInfo);

  return {isAuthenticated, clientInfo: parsedClientInfo} ;
};
