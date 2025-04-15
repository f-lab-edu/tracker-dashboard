export const useToken = () => {
  const token = localStorage.getItem('accessToken')
  const clientInfo = localStorage.getItem('clientInfo')
  const parsedClientInfo = clientInfo ? JSON.parse(clientInfo) : null
  const isAuthenticated = Boolean(token && parsedClientInfo);
  
  return {isAuthenticated, clientInfo: parsedClientInfo} ;
};
