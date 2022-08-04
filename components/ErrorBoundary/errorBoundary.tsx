  import React from "react";
  import FallBack from "@/components/ErrorBoundary/fallBack";

  import {IErrorBoundaryProps, IErrorBoundaryState} from "@/components/ErrorBoundary/errorBoundary.interface"

  class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null };
    }
    
    componentDidCatch(error: Error, errorInfo: {componentStack: string}) {
      console.log('ErrorBoundary cought an error:', error, errorInfo)

      this.setState({
        error: error,
        errorInfo: errorInfo.componentStack
      })
    }
    
    render() {
      if (this.state.errorInfo) {
        return (
          <FallBack error={this.state.error && this.state.error.toString()} stack={this.state.errorInfo}/>
        )
      }
      return this.props.children;
    }  
  }
  export default ErrorBoundary;

