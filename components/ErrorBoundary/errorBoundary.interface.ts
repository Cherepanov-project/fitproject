import { ReactNode } from "react";

export interface IErrorBoundaryProps {
    children?: ReactNode
  }

export interface IErrorBoundaryState {
  error: Error|null,
  errorInfo: string|null,
}
