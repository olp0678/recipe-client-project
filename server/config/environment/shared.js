/*eslint no-process-env:0*/

export const env = process.env.NODE_ENV;
export const port = process.env.PORT || 9000;
// List of user roles
export const userRoles = ['guest', 'user', 'admin'];

export const about = {
    email: 'daniel.pittman@du.edu',
    name: 'Dan Pittman',
    copyright: 'Copyright 2021 Dan Pittman'
};

export default {
    env,
    port,
    userRoles,
    about
};
