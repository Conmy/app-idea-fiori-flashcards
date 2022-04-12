import { React } from 'react';
import FlashcardApp from './FlashcardApp'
import { ThemeProvider } from '@ui5/webcomponents-react';
import { setTheme } from '@ui5/webcomponents-base/dist/config/Theme';
import '@ui5/webcomponents/dist/Assets';
import '@ui5/webcomponents-fiori/dist/Assets';

function App() {

    setTheme('sap_belize');

    return (
        <ThemeProvider>
            <FlashcardApp />
        </ThemeProvider>
    );
}

export default App;
