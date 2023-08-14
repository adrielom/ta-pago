import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";

export type ProgressBarComponentProps = {
	total: number;
	color?: string;
	showButtons?: boolean,
	onComplete: () => void,
	width?: number,
	inicialValue: number
} & ViewProps;
