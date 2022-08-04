  import React from "react";
  import FallBack from "@/components/ErrorBoundary/fallBack";

  import {IErrorBProps, IState} from "@/components/ErrorBoundary/errorBoundary.interface"

  class ErrorBoundary extends React.Component<IErrorBProps, IState> {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error, errorInfo) {
      console.log('catch', error, errorInfo)
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can also log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <FallBack error={this.state.error && this.state.error.toString()} stack={this.state.errorInfo.componentStack}/>
        )
      }
      // Normally, just render children
      return this.props.children;
    }  
  }
  export default ErrorBoundary;

/*
<h2>Something went wrong</h2>
            <p>{this.state.error && this.state.error.toString()}</p>
            <p>{this.state.errorInfo.componentStack}</p>
            <a href="/admin/overview"></a>
          
*/