import React from "react";
import {CreateContainer, Header, MainContainer} from "./components";
import {Route, Routes} from "react-router-dom";
import {AnimatePresence} from "framer-motion";

const App = () => {
    return (
        <AnimatePresence exitBeforeEnter>
            <div className="w-screen h-auto flex flex-col  bg-primary">
                <Header/>

                <main className='mt-20 md:mt-24 px-8 md:px-16 w-full'>
                    <Routes>
                        <Route path="/" element={<MainContainer/>}/>
                        <Route path="/createItem" element={<CreateContainer/>}/>

                    </Routes>

                </main>

            </div>

        </AnimatePresence>
    );
};
export default App;



