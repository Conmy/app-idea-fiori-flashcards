import { React } from 'react';
import { MyApp } from './MyApp'
import { ThemeProvider } from '@ui5/webcomponents-react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents/dist/Assets';
import '@ui5/webcomponents-fiori/dist/Assets';

function App() {

  setTheme('sap_fiori_3_dark');

  return (
    <ThemeProvider>
      <MyApp />
    </ThemeProvider>
  );
}

export default App;
