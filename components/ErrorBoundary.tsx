import React, { Component, ErrorInfo, ReactNode } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { logError } from '../utils/logger';


// Define the types for the component's props and state
interface Props {
  children: ReactNode; // Children components that will be wrapped by the ErrorBoundary
}

interface State {
  hasError: boolean; // Boolean flag to indicate if an error has been caught
}

// ErrorBoundary component to catch javascript errors anywhere in the child component tree 
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };// Initialize state to False
  }

    // Lifecycle method to update the state when an error is caught
  static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

    // Lifecycle method to log the error and errorInfo
componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Log error using the logging utility
    logError(error, errorInfo.componentStack ?? '');
}

  render() {
    // Render the fallback UI if the error is caught
    if (this.state.hasError) {
      return (
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <Typography variant="h4" color="error">
            Something went wrong. Please try again later.
          </Typography>
        </Box>
      );
    }

    // Otherwise, render the children components
    return this.props.children;
  }
}

export default ErrorBoundary;
