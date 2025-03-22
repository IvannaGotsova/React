

function ErrorBoundaryExample ({ error, resetErrorBoundary }) {
    return (
        <>
          <h2>Something went wrong:</h2>
          <pre>{error.message}</pre>
          <button onClick={resetErrorBoundary}>Try again</button>
        </>
    )
}

export default ErrorBoundaryExample