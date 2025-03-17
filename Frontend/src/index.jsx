.checkbox-grid {
    display: grid;
    grid-template-columns: repeat(10, 1fr); /* 10 columns */
    gap: 10px; /* Space between the checkboxes */
  }
  
  .form-check {
    display: flex;
    align-items: center;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }