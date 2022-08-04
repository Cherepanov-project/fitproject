import { ReactNode } from "react";

export interface IErrorBProps {
    children?: ReactNode
  }
  
export interface IErrorBState {
    hasError: boolean
    showModal: boolean
    errorData: Error|null
  }

export interface IState {
  error: Error|null,
  errorInfo: any|null
}
