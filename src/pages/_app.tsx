import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import client from 'src/apollo'
import { ApolloProvider } from '@apollo/client'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { store } from '@store/index'
import StoreState from 'src/context/StoreState'
import LayoutContainer from '@components/layout/LayoutContainer/LayoutContainer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <StoreState>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />

          <LayoutContainer>
            <Component {...pageProps} />
          </LayoutContainer>
        </StoreState>
      </Provider>
    </ApolloProvider>
  )
}

export default MyApp
