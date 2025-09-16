import { environment } from '../environments/environment';

export const amplifyConfig = {
  aws_project_region: 'us-east-1',
  aws_appsync_graphqlEndpoint: 'https://dfctkqt5lvabbawbg6o6f6u7ze.appsync-api.us-east-1.amazonaws.com/graphql',
  aws_appsync_region: 'us-east-1',
  aws_appsync_authenticationType: 'API_KEY',
  aws_appsync_apiKey: 'da2-v7sqo4mnrbaknh3nogx6melw2e',
  aws_cognito_region: 'us-east-1',
  aws_user_pools_id: 'us-east-1_2AseFMapm',
  aws_user_pools_web_client_id: environment.client_id,
  oauth: {
    domain: environment.domain,
    scope: ['email', 'openid'],
    redirectSignIn: environment.redirectSignIn,
    redirectSignOut: environment.redirectSignOut,
    responseType: 'code'
  }
};