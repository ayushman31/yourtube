import React, { useEffect, useState } from "react";
import { CgMenuOreos } from "react-icons/cg";
import { IoSearchCircle } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
const KEY = process.env.REACT_APP_GOOGLE_API_KEY;

const Head = () => {
  const isPremium = useSelector(state => state.premium.isPremium);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions , setSuggestions] = useState([]);
  const [showSuggestions , setShowSuggestions] = useState(false);

  const searchCache = useSelector(store => store.search)
  
  useEffect(() => {
    const timer = setTimeout(() => {
        if(searchCache[searchQuery]){
            setSuggestions(searchCache[searchQuery])
        } else{
            getSearchSuggestions()
        }    
    }, 250);

    return () => {
        clearTimeout(timer);
    };

  }, [searchQuery])

  const getSearchSuggestions = async () => {
    try {
        // Fetching data from the search API
        const response = await fetch(`${SEARCH_API}${searchQuery}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const json = await response.json();

        // Setting suggestions state
        setSuggestions(json[1]);

        // Updating cache with the new search results
        dispatch(cacheResults({
            [searchQuery]: json[1]
        }));
    } catch (error) {
        console.error('Error fetching search suggestions:', error);
    }
};

  

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return isPremium ?  (
    <div className=" header grid grid-flow-col ">
      <IconContext.Provider
        value={{ color: "#030712", className: "global-class-name" }}
      >
        <div className="menu-icon flex col-span-1  ml-4 mt-5 items-center">
          <button className="h-12 w-12">
            <CgMenuOreos
              onClick={() => toggleMenuHandler()}
              className="h-full w-full"
            />
          </button>
          <h1 className="text-3xl text-center text-purple-600  font-bold bg-purple-200 rounded-lg p-2">Premium</h1>
        </div>
      </IconContext.Provider>
      <div className="center-part col-span-1 place-content-center place-self-center flex ml-6 content-center bg-gray-900 shadow-lg rounded-full mt-5 p-2 w-5/6">
        <img
          src="/yourtube.jpeg"
          alt="YourTube"
          className="rounded-full h-14"
        />
        <span className="h-12">
          <h1 className="text-4xl font-semibold ml-1 bg-purple-900 p-2 text-white rounded-full">
            YourTube
          </h1>
        </span>

        <div className=" flex ml-20  content-center ">
          <div>
            <input
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            
            className="border border-solid border-purple-500 rounded-full h-10 w-80 p-1 mt-2 shadow-2xl "
          ></input>
          {showSuggestions && <div className="absolute bg-white w-80 rounded-xl my-1 py-2 px-5 ">
            {suggestions.map(suggest => <div key={suggest} className="m-2 hover:shadow-lg hover:bg-gray-100 cursor-default w-full">{suggest}</div>)}
          </div>}
          </div>
          <IconContext.Provider
            value={{ color: "#a855f7", className: "global-class-name" }}
          >
            <button className="h-12 w-12  ">
              <IoSearchCircle className="h-full w-full mt-1" />
            </button>
          </IconContext.Provider>
        </div>
      </div>

      <IconContext.Provider
        value={{ color: "#030712", className: "global-class-name" }}
      >
        <div className=" col-span-1 right mt-5 self-center place-self-end mr-10 h-8 w-8">
          <FaRegUser className="red h-full  w-full" />
        </div>
      </IconContext.Provider>
    </div>
  )



 : (
    <div className=" header grid grid-flow-col ">
      <IconContext.Provider
        value={{ color: "#a855f7", className: "global-class-name" }}
      >
        <div className="menu-icon col-span-1  ml-4 mt-5">
          <button className="h-12 w-12">
            <CgMenuOreos
              onClick={() => toggleMenuHandler()}
              className="h-full w-full"
            />
          </button>
        </div>
      </IconContext.Provider>
      <div className="center-part col-span-1 place-content-center place-self-center flex ml-6 content-center bg-white shadow-lg rounded-full mt-5 p-2 w-5/6">
        <img
          src="/yourtube.jpeg"
          alt="YourTube"
          className="rounded-full h-14"
        />
        <span className="h-12">
          <h1 className="text-4xl font-semibold ml-1 bg-purple-500 p-2 text-white rounded-full">
            YourTube
          </h1>
        </span>

        <div className=" flex ml-20  content-center ">
          <div>
            <input
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            
            className="border border-solid border-purple-500 rounded-full h-10 w-80 p-1 mt-2 shadow-2xl "
          ></input>
          {showSuggestions && <div className="absolute bg-white w-80 rounded-xl my-1 py-2 px-5 ">
            {suggestions.map(suggest => <div key={suggest} className="m-2 hover:shadow-lg hover:bg-gray-100 cursor-default w-full">{suggest}</div>)}
          </div>}
          </div>
          <IconContext.Provider
            value={{ color: "#a855f7", className: "global-class-name" }}
          >
            <button className="h-12 w-12  ">
              <IoSearchCircle className="h-full w-full mt-1" />
            </button>
          </IconContext.Provider>
        </div>
      </div>

      <IconContext.Provider
        value={{ color: "#a855f7", className: "global-class-name" }}
      >
        <div className=" col-span-1 right mt-5 self-center place-self-end mr-10 h-8 w-8">
          <FaRegUser className="red h-full  w-full" />
        </div>
      </IconContext.Provider>
    </div>
  );
};

export default Head;
