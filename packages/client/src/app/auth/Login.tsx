import React, { ChangeEvent, FormEvent } from 'react';

import AuthService from '../services/auth-service';

interface LoginProps {
  name: string;
}

interface LoginState {
  username: string;
  password: string;
}

class Login extends React.Component<LoginProps, LoginState> {
  constructor(props: LoginProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }

  handleUsername(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({
      username: event.target.value,
    });
  }

  handlePassword(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    this.setState({
      password: event.target.value,
    });
  }

  handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    AuthService.login(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Username
          <input id="username" value={this.state.username} onChange={this.handleUsername} />
        </label>
        <label htmlFor="password">Username
          <input id="password" type="password" value={this.state.password} onChange={this.handlePassword} />
        </label>
        <input type="submit" value="Log in" />
      </form>
    );
  }
}

export default Login;
