const baseUrl = 'http://localhost:1200/api';

const postRequest = async (url, body) => {
    const response = await fetch(`${baseUrl}/${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body
    });

    const data = await response.json();

    if (!response.ok) {
        console.error(data.message, 'ERROR');
        return;
    } 

    return data;
}

export const register = (authInfo) => {
    return postRequest('users/register', authInfo);
}

export const login = (authInfo) => {
    return postRequest('users/login', authInfo);
}