import { Workout } from "../../../info/types";

export type ProgressHeaderProps = {
    onPressReset: () => void,
    onPressStart: () => void,
    onPressPause: () => void,
    onPressFinish: () => void,
}