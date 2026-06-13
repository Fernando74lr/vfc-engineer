import { StatusBar } from 'expo-status-bar';
import { Fragment, JSX } from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';

/**
 * Renders the root application view.
 *
 * Includes the main navigation container for app routes.
 *
 * @return {JSX.Element} Root application component.
 */
export const App = (): JSX.Element => {
	return (
		<Fragment>
			<StatusBar style="dark" />
			<AppNavigator />
		</Fragment>
	);
};

export default App;
