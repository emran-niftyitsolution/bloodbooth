// Authentication utility functions

export interface User {
  email: string;
  name?: string;
  bloodType?: string;
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  if (typeof window === "undefined") return false;

  const token =
    localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token");
  return !!token;
}

/**
 * Get current user info
 */
export function getCurrentUser(): User | null {
  if (typeof window === "undefined") return null;

  const email =
    localStorage.getItem("user_email") || sessionStorage.getItem("user_email");
  const name = localStorage.getItem("user_name");
  const bloodType = localStorage.getItem("blood_type");

  if (!email) return null;

  return {
    email,
    name: name || undefined,
    bloodType: bloodType || undefined,
  };
}

/**
 * Logout user
 */
export function logout(): void {
  if (typeof window === "undefined") return;

  // Clear localStorage
  localStorage.removeItem("auth_token");
  localStorage.removeItem("user_email");
  localStorage.removeItem("user_name");
  localStorage.removeItem("blood_type");

  // Clear sessionStorage
  sessionStorage.removeItem("auth_token");
  sessionStorage.removeItem("user_email");

  // Redirect to home
  window.location.href = "/";
}

/**
 * Get auth token
 */
export function getAuthToken(): string | null {
  if (typeof window === "undefined") return null;

  return (
    localStorage.getItem("auth_token") || sessionStorage.getItem("auth_token")
  );
}
