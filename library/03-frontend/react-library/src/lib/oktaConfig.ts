export const oktaConfig = {
    clientId: '0oahi9byifFXRznGb5d7',
    issuer: 'https://dev-05850563.okta.com/oauth2/default',
    redirectUri: 'https://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
    useClassicEngine: true
}