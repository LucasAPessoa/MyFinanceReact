
import { useState, useEffect } from 'react'


import NavBar from '../components/NavBar.jsx'
import { Outlet } from 'react-router-dom'
import MainContainer from "../components/MainContainer.jsx";


function MainLayout() {

  //Category Registration

  const [categories, setCategories] = useState(JSON.parse(localStorage.getItem("categories")) || [] );

  

  useEffect(() => {
    console.log("categories alterado");
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories])



  

  const onAddCategoryClick = (name, type) => {

    const newCategory = {
      id: categories.length + 1, 
      name, 
      type,
    };

    setCategories([...categories, newCategory]);

  }


 //Theme

  const themeConfig = () => {
    if(localStorage.getItem('theme')){
      return localStorage.getItem('theme')
  } else {
    localStorage.setItem('theme', 'lightTheme')
    return localStorage.getItem('theme')
  }
}

  const [theme, setTheme] = useState(themeConfig)



  function onChangeThemeClick() {

    if (theme === 'lightTheme'){
      localStorage.setItem('theme', 'darkTheme')
      setTheme('darkTheme')
    } else if (theme === 'darkTheme'){
      localStorage.setItem('theme', 'lightTheme')
      setTheme('lightTheme')
    }
    
  }

  return (
    <>
      
        <NavBar  theme={theme} onChangeThemeClick={onChangeThemeClick} />
        <MainContainer theme={theme}>
          <Outlet context={{categories,  onAddCategoryClick }}  />
        </MainContainer>

    </>

  )
}

export default MainLayout
