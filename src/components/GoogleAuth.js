import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '381554392066-68ub9r99gah8ighrrfvjced5lboehrao.apps.googleusercontent.com',
        scope: 'email',
      });
    });
  }
  render() {
    return <div> Google Auth</div>;
  }
}

export default GoogleAuth;
