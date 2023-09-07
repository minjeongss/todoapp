import React, { createContext, useContext, useEffect, useState } from 'react';

/*
context: 데이터를 가지고 있는 부분
provider: 데이터를 가지고 보여주고 있는 umbrella를 만드는 부분
*/
export const DarkModeContext =createContext(); //context: 필요한 데이터 간직하는 부분
export function DarkModeProvider({children}){ //context를 만들 때엔 provider도 필수!
    const [darkMode,setDarkMode]=useState(false);
    const toggleDarkMode=()=>{
        setDarkMode(prev=>!prev); //원칙을 고수하는 코드
        //setDarkMode(!darkMode); //단순하게 값을 바꿔주는 코드
        updateDarkMode(prev=>!prev);
    }
    useEffect(()=>{
        const isDark=
            localStorage.theme==='dark'||
            (!('theme' in localStorage) &&
            window.matchMedia('(prefers-color-scheme:dark').matches);
        setDarkMode(isDark); //리액트 내부 state update
        updateDarkMode(isDark); //웹페이지 html dark class 유무 판단
    },[]);
    return ( //value에 자식 component와 공유하고 싶은 내용 전달하기
        <DarkModeContext.Provider value={{darkMode,toggleDarkMode}}>
        {children}
        </DarkModeContext.Provider>
    )
    
}
function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme='dark';
    }else{
        document.documentElement.classList.remove('dark');
        localStorage.theme='light';
    }
}

//외부에서 손쉽게 사용할 수 있도록
//노출없이!
export const useDarkMode=()=>useContext(DarkModeContext);
