import {createGlobalState} from 'react-hooks-global-state';

const {setGlobalState, useGlobalState} = createGlobalState({
    globalUsername: 'Login to Set Username',
    globalPhone: 'Double-click here to enter your phone number',
    globalEmail: 'Double-click here to enter your email',
    globalAddress: 'Double-click here to enter your address'
});

export { useGlobalState, setGlobalState };
