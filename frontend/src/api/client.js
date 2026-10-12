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
      const rawText = await response.text();
      return rawText ? JSON.parse(rawText) : { status: 'ok' };
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

      // Safely extract raw text body first to eliminate "Unexpected end of JSON input" errors
      const rawText = await response.text();
      let data = null;

      if (rawText && rawText.trim().length > 0) {
        try {
          data = JSON.parse(rawText);
        } catch {
          data = null;
        }
      }

      // Handle non-2xx responses
      if (!response.ok) {
        // Requirement 3: Do NOT hide the real backend error
        if (data && (data.message || data.error)) {
          throw new Error(data.message || data.error);
        }

        // Plain text error message from server if not HTML and reasonably short
        if (rawText && rawText.trim().length > 0 && !rawText.trim().startsWith('<') && rawText.trim().length < 250) {
          throw new Error(rawText.trim());
        }

        // Meaningful HTTP error messages
        if (response.status === 502 || response.status === 504) {
          throw new Error(`The atelier reservation server is waking up or temporarily unreachable (HTTP ${response.status}). Please wait a few moments and try again.`);
        }
        if (response.status === 503) {
          throw new Error('The reservation service is temporarily unavailable (HTTP 503). Please try again shortly or contact concierge on WhatsApp.');
        }
        if (response.status === 404) {
          throw new Error('Reservation service endpoint not found (HTTP 404). Please contact support.');
        }
        if (response.status === 429) {
          throw new Error('Too many reservation attempts. Please wait a few minutes before trying again.');
        }
        if (response.status === 500) {
          throw new Error('Atelier reservation server encountered an internal error (HTTP 500). Please try again or reach out on WhatsApp.');
        }

        throw new Error(`Reservation request failed (HTTP ${response.status}: ${response.statusText || 'Error'})`);
      }

      // If response.ok is true, verify we received valid JSON data
      if (!data) {
        throw new Error('Server confirmed the request but returned an empty response. Please verify reservation with atelier concierge.');
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
      const response = await fetch(`${API_BASE}/api/services`, {
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        const rawText = await response.text();
        if (rawText) {
          const json = JSON.parse(rawText);
          return json.data;
        }
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
      const response = await fetch(`${API_BASE}/api/packages`, {
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        const rawText = await response.text();
        if (rawText) {
          const json = JSON.parse(rawText);
          return json.data;
        }
      }
    } catch (e) {
      console.warn('[WashHub Client] Failed to fetch packages from API, using built-in catalog');
    }
    return null;
  },
};
