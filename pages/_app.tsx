import { Provider } from 'next-auth/client'
import { ChakraProvider } from "@chakra-ui/react"
import { QueryClient, QueryClientProvider } from 'react-query'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

import '../style.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
})

export default function App({ Component, pageProps }) {
  return (

    <Provider session={pageProps.session}>
      <QueryClientProvider client={queryClient}>
        <MantineProvider theme={{
          primaryColor: 'gray'
        }} withGlobalStyles withNormalizeCSS>
          <ModalsProvider>
            <Notifications position='top-center' />
            <Component {...pageProps} />
          </ModalsProvider>
        </MantineProvider>
      </QueryClientProvider>
    </Provider>
  )
}