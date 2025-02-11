function MainContainer({theme, children}){



    return(

        <div className={`${theme} pt-20 z-0 w-svw h-screen bg-background`}>
            {children}
        </div>

    )
}

export default MainContainer;