// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

import NxWelcome from './nx-welcome';

import React from 'react';
import FormDialog from '../components/FormDialog';
import { FluentProvider, webLightTheme } from '@fluentui/react-components';

const App: React.FC = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <FormDialog />
    </FluentProvider>
  );
};

export default App;

