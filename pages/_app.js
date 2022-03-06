import App from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";

import "./styles.css";

const queryClient = new QueryClient();
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    );
  }
}

export default MyApp;
