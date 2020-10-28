import useLocalStorage from './useLocalStorage'

export const useDarkMode = () => {
    const [darkOn, setDarkOn] = useLocalStorage('dark')
    
}