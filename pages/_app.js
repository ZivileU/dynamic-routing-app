import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { StyledEngineProvider } from "@mui/material/styles";

import "./styles.css";

const queryClient = new QueryClient();
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <QueryClientProvider client={queryClient}>
        <StyledEngineProvider injectFirst>
          <Component {...pageProps} />
        </StyledEngineProvider>
      </QueryClientProvider>
    );
  }
}

export default MyApp;
