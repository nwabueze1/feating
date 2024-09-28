import { ThemeProvider, StyledEngineProvider, CssBaseline } from "@mui/material";
import { useEuTemplatesBlocks } from "./templates/useEuTemplateBlocks";
import theme from "./theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "./Provider";
import { useGetEuPages } from "./hooks";
import { filterAndArrangeBlocks } from "./helpers";

function App() {
  const getEUTemplates = useEuTemplatesBlocks();
  const getEuPages = useGetEuPages();

  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <Routes>
            {getEUTemplates().map(({ name, component: Component, props }) => (
              <Route
                key={name}
                path={`blocks/${name.match(/\d+/)}`}
                element={
                  <Provider>
                    <Component {...props} />
                  </Provider>
                }
              />
            ))}
            {getEuPages().map(({ name, pages }) => (
              <Route
                key={name}
                path={`/${name === 'home' ? '' : `${name}`}`}
                element={filterAndArrangeBlocks(pages).map(
                  ({ component: Component, props }) => (
                    <Provider>
                      <Component {...props} />
                    </Provider>
                  )
                )}
              />
            ))}
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
