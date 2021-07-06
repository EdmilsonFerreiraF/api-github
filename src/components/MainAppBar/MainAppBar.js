import React from 'react';
import { useHistory } from 'react-router-dom';

import { goToHome } from '../../routes/coordinator';
import { useForm } from "../../hooks/useForm"

import SignupButton from '../SignupButton/SignupButton';
import SearchBar from '../SearchBar/SearchBar';
import Logo from '../Logo/Logo';

const MainAppBar = () => {
    const handleLogoClick = () => {
        goToHome();
    }

    const history = useHistory()

    const {form, onChange} = useForm({ search: "" })

    const handleInputChange = (event) => {
        const {value, name} = event.target

        onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        // goToSearch(history, form.search)
    }

    return (    
        <nav className="navbar navbar-dark bg-light row">
            <Logo handleLogoClick={handleLogoClick}>Github API</Logo>
            <SearchBar change={handleInputChange} submission={handleSubmission} value={form.search} />
            <SignupButton/>
        </nav>

    )
}

export default MainAppBar;