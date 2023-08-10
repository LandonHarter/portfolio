import { createContext } from 'react'
const ThemeContext = createContext<'light' | 'dark'>('dark');
export default ThemeContext;