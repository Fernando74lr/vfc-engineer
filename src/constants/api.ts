/**
 * Provides shared API configuration values used across the application.
 *
 * This module centralizes constants for HTTP client setup and service calls.
 */

/**
 * Base URL for all VFC backend requests.
 *
 * Keep the trailing slash so relative endpoint paths concatenate consistently.
 * @const {string}
 */
export const VFC_API_URL = 'https://datagram-m2.com/vfc/api/';
