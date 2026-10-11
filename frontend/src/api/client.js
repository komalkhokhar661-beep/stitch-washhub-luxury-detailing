const API_BASE = import.meta.env.VITE_API_BASE_URL
  ? import.meta.env.VITE_API_BASE_URL.replace(/\/$/, '')
  : '';

/**
 * Universal API helper for WashHub Atelier
 */
export const apiClient = {
  /**
   * Health Check
   */
  async checkHealth() {
    try {
      const response = await fetch(`${API_BASE}/api/health`, {
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Health check returned status ${response.status}`);
      return await response.json();
    } catch (error) {
      console.warn('[WashHub Client] Health check notice:', error.message);
      return { status: 'fallback', message: error.message };
    }
  },

  /**
   * Create Booking Reservation
   */
  async createBooking(bookingData) {
    try {
      const response = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(bookingData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to submit booking reservation');
      }

      return data;
    } catch (error) {
      console.error('[WashHub Client] Booking submission error:', error);
      throw error;
    }
  },

  /**
   * Get Services Catalog
   */
  async getServices() {
    try {
      const response = await fetch(`${API_BASE}/api/services`);
      if (response.ok) {
        const json = await response.json();
        return json.data;
      }
    } catch (e) {
      console.warn('[WashHub Client] Failed to fetch services from API, using built-in catalog');
    }
    return null;
  },

  /**
   * Get Packages Catalog
   */
  async getPackages() {
    try {
      const response = await fetch(`${API_BASE}/api/packages`);
      if (response.ok) {
        const json = await response.json();
        return json.data;
      }
    } catch (e) {
      console.warn('[WashHub Client] Failed to fetch packages from API, using built-in catalog');
    }
    return null;
  },
};
