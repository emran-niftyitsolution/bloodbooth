// Authentication utility functions

export interface User {
  email: string;
  name?: string;
  bloodType?: string;
  phone?: string;
  location?: string;
  dateOfBirth?: string;
  bio?: string;
  gender?: "male" | "female";
  weightKg?: number;
  lastDonation?: string;
  totalDonations?: number;
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

  const storedProfile =
    localStorage.getItem("user_profile") ||
    sessionStorage.getItem("user_profile");

  if (storedProfile) {
    try {
      return JSON.parse(storedProfile) as User;
    } catch (error) {
      console.warn("Failed to parse stored user profile", error);
    }
  }

  const email =
    localStorage.getItem("user_email") || sessionStorage.getItem("user_email");
  if (!email) return null;

  const name =
    localStorage.getItem("user_name") || sessionStorage.getItem("user_name");
  const bloodType =
    localStorage.getItem("blood_type") || sessionStorage.getItem("blood_type");

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
  localStorage.removeItem("user_profile");

  // Clear sessionStorage
  sessionStorage.removeItem("auth_token");
  sessionStorage.removeItem("user_email");
  sessionStorage.removeItem("user_name");
  sessionStorage.removeItem("blood_type");
  sessionStorage.removeItem("user_profile");

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

/**
 * Persist the current user profile alongside auth metadata.
 */
export function saveCurrentUser(user: User): void {
  if (typeof window === "undefined") return;

  const serialized = JSON.stringify(user);

  const storages: Storage[] = [];
  if (localStorage.getItem("auth_token")) {
    storages.push(localStorage);
  }
  if (sessionStorage.getItem("auth_token")) {
    storages.push(sessionStorage);
  }

  if (storages.length === 0) {
    storages.push(localStorage);
  }

  storages.forEach((storage) => {
    storage.setItem("user_profile", serialized);
    storage.setItem("user_email", user.email);

    if (user.name) {
      storage.setItem("user_name", user.name);
    } else {
      storage.removeItem("user_name");
    }

    if (user.bloodType) {
      storage.setItem("blood_type", user.bloodType);
    } else {
      storage.removeItem("blood_type");
    }
  });
}
