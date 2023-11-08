import { ReactNode, createContext, useState } from 'react';

export type NavigationInfoProps = {
	workoutSetSelectedID: string;
};

type NavigationContextProps = {
	navigationInfo: NavigationInfoProps;
	setNavigationInfo: (navigationInfoPayload: NavigationInfoProps) => void;
};

type NavigationProviderProps = {
	children: ReactNode;
};

export const NavigationContext = createContext<NavigationContextProps | null>(
	null
);

const NavigationProvider = ({ children }: NavigationProviderProps) => {
	const [navigationInfo, setNavigationInfo] = useState<NavigationInfoProps>({
		workoutSetSelectedID: '',
	});

	return (
		<NavigationContext.Provider value={{ navigationInfo, setNavigationInfo }}>
			{children}
		</NavigationContext.Provider>
	);
};

export default NavigationProvider;
