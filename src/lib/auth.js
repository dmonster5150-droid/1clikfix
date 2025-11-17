export function isProviderSubscribed(){
  return localStorage.getItem('subscriptionPaid') === 'true';
}
