import React from 'react'
import { Link } from 'react-router-dom';

const NewAccount = () => {
return (
  <div class="flex flex-col bg-gray-100 flex-grow">
      
      <div class="grid place-items-center mx-2 my-16">
          <div class="w-11/12 p-12 sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-4/12 
              px-6 py-10 sm:px-10 sm:py-6 
              bg-white rounded-lg shadow-md lg:shadow-lg">
  
              
              <h2 class="text-center font-semibold text-3xl lg:text-4xl text-gray-800">
                  Create Account
              </h2>
  
              <form class="mt-10" method="POST">
                  
                  <label for="name" class="block text-xs font-semibold text-gray-600 uppercase">User name</label>
                  <input id="name" type="name" name="name" placeholder="user name" autocomplete="name"
                      class="block w-full py-3 px-1 mt-2 
                      text-gray-800 appearance-none 
                      border-b-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                      required />
                
                  <label for="email" class="block text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                  <input id="email" type="email" name="email" placeholder="e-mail address" autocomplete="email"
                      class="block w-full py-3 px-1 mt-2 
                      text-gray-800 appearance-none 
                      border-b-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                      required />
  
                  
                  <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                  <input id="password" type="password" name="password" placeholder="password" autocomplete="current-password"
                      class="block w-full py-3 px-1 mt-2 mb-4
                      text-gray-800 appearance-none 
                      border-b-2 border-gray-100
                      focus:text-gray-500 focus:outline-none focus:border-gray-200"
                      required />

                <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Repeat Password</label>
                <input id="password" type="password" name="password" placeholder="confirm password" autocomplete="current-password"
                    class="block w-full py-3 px-1 mt-2 mb-4
                    text-gray-800 appearance-none 
                    border-b-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                    required />
  
                  
                  <button type="submit"
                      class="w-full py-3 mt-10 bg-gray-800 rounded-sm
                      font-medium text-white uppercase
                      focus:outline-none hover:bg-gray-700 hover:shadow-none">
                      Create Account
                  </button>
  
                 
                  <div class="sm:flex flex-col sm:flex-wrap sm:mb-4 text-sm text-center mt-4">
  
                      <p class="text-gray-500 text-md sm:my-auto">
                          or
                      </p>
          
                      <Link to={'/login'}><a href="register" class="underline">
                          Log In
                      </a></Link>
                  </div>
              </form>
          </div>
      </div>
  </div>
  )
}

export default NewAccount;