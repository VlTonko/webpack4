import './style.css';
import axios from 'axios';

require('babel-core/register');
require('babel-polyfill');

const body = document.querySelector('body');

function createUser(user:any) {
    const div = document.createElement('div');
    const login = document.createElement('p');
    login.textContent = user.login;
    const avatar = document.createElement('img');
    avatar.setAttribute('src', user.avatar_url);
    div.appendChild(login);
    div.appendChild(avatar);
    div.classList.add('userGit');
    body.appendChild(div);
    console.log(div);
}

const getUsers = async () => {
    try {
        const data = await axios.get('https://api.github.com/users');
        data.data.forEach((user) => {
            createUser(user);
        });
    } catch (error) {
        console.error(error);
    }
};
getUsers();
