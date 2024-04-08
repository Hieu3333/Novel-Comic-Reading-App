import React, { useState , useEffect, Fragment} from "react";

import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios'
import NovelCard from "../components/NovelCard.jsx";
import NovelGrid from "../components/NovelGrid.jsx";

const Home = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const user_name = state.user_name;
  const [openMenu, setOpenMenu] = useState(false);
  const handleClickMenu = () => {
    setOpenMenu(!openMenu);
  };

  const handleSignOut = ()=>{
      navigate("/");
  }

  const [novels, setNovels] = useState([]);
  useEffect(()=>{
    axios.get('http://localhost:8080/novels')
    .then(res =>{
      setNovels(res.data);
      
    })
    .catch(err =>{
      console.log(err);

    })
  },[]) 
  console.log(novels);

  return (
    <Fragment>
      <header className="border-b py-4 px-4 sm:px-10 bg-gray-700 font-[sans-serif] min-h-[70px]">
        <div className="flex flex-row items-center gap-x-6 max-lg:gap-y-6">
          <a href="#">
            <img
              width="64"
              height="64"
              src="https://img.icons8.com/nolan/64/book.png"
              alt="book"
            />
          </a>

          <div className="text-xs text-white hover:bg-gray-500 ">Home</div>
          <div className="text-xs text-white hover:bg-gray-500">
            My Favorites
          </div>
          <div className="text-xs text-white hover:bg-gray-500">Genre</div>
          <div className="text-xs text-white hover:bg-gray-500">
            ReleaseYear
          </div>

          <div className="flex lg:ml-auto max-lg:w-25">
            <div className="flex xl:w-80 max-xl:w-full bg-gray-500 px-6 py-3 rounded outline outline-transparent focus-within:outline-[#007bff]">
              <input
                type="text"
                placeholder="Search something..."
                className="w-full text-sm bg-transparent rounded outline-none pr-2"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 192.904 192.904"
                width="16px"
                className="cursor-pointer fill-gray-400"
              >
                <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
              </svg>
            </div>
          </div>

          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-900"
                id="menu-button"
                aria-expanded="false"
                aria-haspopup="true"
                onClick={handleClickMenu}
              >
                {user_name}
                <svg
                  className="-mr-1 h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            { openMenu && (
              <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex="-1"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="text-white block px-4 py-2 text-sm hover:bg-gray-900"
                  role="menuitem"
                  tabIndex="-1"
                  id="menu-item-0"
                >
                  My account
                </a>
                
             
                  <button
                    type="submit"
                    className="text-white block w-full px-4 py-2 text-left text-sm hover:bg-gray-900"
                    role="menuitem"
                    tabIndex="-1"
                    id="menu-item-3"
                    onClick={handleSignOut}
                  >
                    Sign out
                  </button>
              
              </div>
            </div>
            )}
          </div>
        </div>
      </header>

      <div className="bg-gray-700 min-h-screen">
      <NovelGrid novels={novels}/>
      </div>
      
      
      
    </Fragment>
  );
};

export default Home;
