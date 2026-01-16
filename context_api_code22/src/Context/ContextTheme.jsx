import React from 'react'
import { createContext } from 'react'
export const ThemeDataContext=createContext()

const ContextTheme = (props) => {
    return (
        <div>
            {/* {props.children} */}
            <ThemeDataContext.Provider value='hmnsh is god'>
                {props.children}
            </ThemeDataContext.Provider>
        </div>
    )
}

export default ContextTheme
  