import { Dispatch, SetStateAction } from 'react';

/**
 * Props for the login form component.
 */
export type LoginFormProps = {
	email: string;
	password: string;
	setEmail: Dispatch<SetStateAction<string>>;
	setPassword: Dispatch<SetStateAction<string>>;
	isPasswordVisible: boolean;
	setIsPasswordVisible: Dispatch<SetStateAction<boolean>>;
};

/**
 * Props for the login button component.
 */
export type LoginButtonProps = {
	isLoading: boolean;
	onPress: () => void;
};
