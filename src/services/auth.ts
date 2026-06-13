import AsyncStorage from '@react-native-async-storage/async-storage';
import { VFC_API_URL } from '../constants/api';
import { LoginResponse } from './login';

const AUTH_SESSION_STORAGE_KEY = '@vfc-engineer/auth-session';

export type AuthUser = {
	userId?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
};

export type StoredAuthSession = {
	login: LoginResponse;
	user: AuthUser;
	token: string;
};

type VerifyTokenResponse = {
	user?: AuthUser;
};

const normalizeUser = (payload: Record<string, unknown>): AuthUser => ({
	userId:
		typeof payload.id === 'string'
			? payload.id
			: typeof payload.userId === 'string'
				? payload.userId
				: undefined,
	firstName:
		typeof payload.first_name === 'string'
			? payload.first_name
			: typeof payload.firstName === 'string'
				? payload.firstName
				: undefined,
	lastName:
		typeof payload.last_name === 'string'
			? payload.last_name
			: typeof payload.lastName === 'string'
				? payload.lastName
				: undefined,
	email: typeof payload.email === 'string' ? payload.email : undefined,
});

/**
 * Requests authenticated user data to verify that a token is valid.
 */
export const verifyToken = async (
	token: string
): Promise<VerifyTokenResponse> => {
	const response = await fetch(`${VFC_API_URL}auth/user`, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Token de autenticación inválido o expirado.');
	}

	const data = (await response.json()) as {
		user?: Record<string, unknown>;
	};

	return {
		user: data.user ? normalizeUser(data.user) : undefined,
	};
};

/**
 * Persists login response and user details in local storage.
 */
export const saveLoginSession = async (
	login: LoginResponse,
	user: AuthUser
): Promise<void> => {
	const session: StoredAuthSession = {
		login,
		user,
		token: login.token,
	};

	await AsyncStorage.setItem(AUTH_SESSION_STORAGE_KEY, JSON.stringify(session));
};

/**
 * Reads auth session from local storage.
 */
export const getStoredSession = async (): Promise<StoredAuthSession | null> => {
	const rawSession = await AsyncStorage.getItem(AUTH_SESSION_STORAGE_KEY);

	if (!rawSession) {
		return null;
	}

	try {
		const parsedSession = JSON.parse(rawSession) as StoredAuthSession;
		return parsedSession?.token ? parsedSession : null;
	} catch {
		return null;
	}
};

/**
 * Clears persisted auth session.
 */
export const clearLoginSession = async (): Promise<void> => {
	await AsyncStorage.removeItem(AUTH_SESSION_STORAGE_KEY);
};

/**
 * Checks whether a token is valid and returns the authenticated user when valid.
 */
export const checkAuth = async (token?: string): Promise<AuthUser | false> => {
	const storedSession = token ? null : await getStoredSession();
	const tokenToVerify = token ?? storedSession?.token;

	if (!tokenToVerify) {
		return false;
	}

	try {
		const { user } = await verifyToken(tokenToVerify);

		if (!user) {
			await clearLoginSession();
			return false;
		}

		return user;
	} catch {
		await clearLoginSession();
		return false;
	}
};
