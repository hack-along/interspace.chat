import React,{ useContext }from 'react';
import styled from 'styled-components';
import ProfileHover from 'profile-hover';


let accounts = ['0x96bB7B429cF97131E624Fa32d27B45595d59b5B8'];
const Profile = () => (<ProfileHover address={accounts[0]} />);


export default Profile;
