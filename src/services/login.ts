import { useCallback, useState } from 'react';
import { VFC_API_URL } from '../constants/api';

/**
 * Credentials required to authenticate a user.
 */
export type LoginCredentials = {
	email: string;
	password: string;
};

/**
 * API response for a successful login request.
 */
export type LoginResponse = {
	token: string;
	userId?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
};

/**
 * State returned by the login action hook.
 */
export type LoginActionState = {
	isLoading: boolean;
	errorMessage: string | null;
	data: LoginResponse | null;
};

/**
 * Return contract for the login action hook.
 */
export type UseLoginActionResult = LoginActionState & {
	executeLogin: (credentials: LoginCredentials) => Promise<LoginResponse>;
	reset: () => void;
};

/**
 * Executes a login HTTP request against the VFC backend.
 *
 * @param {LoginCredentials} credentials User login credentials.
 * @return {Promise<LoginResponse>} Parsed login response payload.
 * @throws {Error} Throws when the backend responds with an error.
 */
export const loginAction = async (
	credentials: LoginCredentials
): Promise<LoginResponse> => {
	const response = await fetch(`${VFC_API_URL}auth/login`, {
		method: 'POST',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(credentials),
	});

	if (!response.ok) {
		let backendMessage = 'No fue posible iniciar sesión.';

		try {
			const errorPayload = (await response.json()) as { message?: string };
			backendMessage = errorPayload.message ?? backendMessage;
		} catch {
			// Keep default message when backend payload is not JSON.
		}

		throw new Error(backendMessage);
	}

	const data = await response.json();

	const loginData: LoginResponse = {
		token: data.token,
		userId: data.id,
		firstName: data.first_name,
		lastName: data.last_name,
		email: data.email,
	};

	return loginData;
};

/**
 * Provides a React action for login flows.
 *
 * Exposes pending state and errors so screens can drive UI feedback.
 *
 * @return {UseLoginActionResult} Login action state and handlers.
 */
export const useLoginAction = (): UseLoginActionResult => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [data, setData] = useState<LoginResponse | null>(null);

	const executeLogin = useCallback(
		async (credentials: LoginCredentials): Promise<LoginResponse> => {
			setIsLoading(true);
			setErrorMessage(null);

			try {
				const loginResult = await loginAction(credentials);
				setData(loginResult);
				return loginResult;
			} catch (error) {
				const nextErrorMessage =
					error instanceof Error
						? error.message
						: 'No fue posible iniciar sesión.';
				setErrorMessage(nextErrorMessage);
				throw error;
			} finally {
				setIsLoading(false);
			}
		},
		[]
	);

	const reset = useCallback((): void => {
		setIsLoading(false);
		setErrorMessage(null);
		setData(null);
	}, []);

	return {
		isLoading,
		errorMessage,
		data,
		executeLogin,
		reset,
	};
};
