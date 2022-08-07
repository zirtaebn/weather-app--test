import { Search } from '../components/Search';

import { Context } from '../contexts/Context';

import { useContext } from 'react';

export const Home = () => {

    const { state, dispatch} = useContext(Context)

    return (<Search />)
}