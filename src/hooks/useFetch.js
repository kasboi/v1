import { useState } from "react";
import { Theme } from "../components/styles/Theme";

/* 
  Custom hook to store and retrieve the theme last used when
  user visited the website
*/

const { theme } = Theme;

const useFetch = () => {
  // localeStorage takes key/value pair, setting this as default key
  let key
  const getUserTheme = () => {
    if (localStorage.length > 0) {
      const userTheme = JSON.parse(localStorage.getItem(key))
      return userTheme
    } else {
      const userTheme = theme
      return userTheme
    }
  }

  const [here, setHere] = useState(getUserTheme())

  const saveUserTheme = userToken => {
    localStorage.setItem(key, JSON.stringify(userToken))
    setHere(userToken)
  }

  return {
    here,
    setHere: saveUserTheme
  }
}

export default useFetch