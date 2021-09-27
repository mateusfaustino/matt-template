import GlobalStyle from './components/styleguide/atoms/global'
import {BrowserRouter,Route, Switch} from 'react-router-dom'
import SpacingProvider from './contexts/SpacingContext'
 import Navbar from './components/styleguide/molecules/navbar'
 import Home from './pages/home/index'
 import ScreenProvider from './contexts/Screen'
const App = ()=>{
  return (
    <BrowserRouter>
      <ScreenProvider>
      <SpacingProvider>
        <GlobalStyle/>
        <Navbar/>
          <Switch id='switchTag'>
            <Route path='/' exact component={Home}/>
          </Switch>
        </SpacingProvider>
      </ScreenProvider>
    </BrowserRouter>
  )
}

export default App;
