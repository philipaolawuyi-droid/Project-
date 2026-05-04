/**
 * Digital Clock with Multiple Time Zones
 * Displays current time in different time zones
 */

class DigitalClockJS {
  /**
   * Initialize the clock with specified time zones
   * @param {Array<string>} timezones - Array of timezone names
   */
  constructor(timezones = [
    'UTC',
    'America/New_York',
    'Europe/London',
    'Europe/Paris',
    'Asia/Tokyo',
    'Asia/Shanghai',
    'Australia/Sydney',
    'America/Los_Angeles'
  ]) {
    this.timezones = timezones;
    this.updateInterval = null;
  }

  /**
   * Format date to a specific timezone
   * @param {Date} date - Date object to format
   * @param {string} timezone - Timezone name
   * @returns {string} Formatted time string
   */
  formatTimeInTimezone(date, timezone) {
    try {
      const options = {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      return new Intl.DateTimeFormat('en-US', options).format(date);
    } catch (e) {
      return 'Invalid TZ';
    }
  }

  /**
   * Format full date and time in timezone
   * @param {Date} date - Date object
   * @param {string} timezone - Timezone name
   * @returns {string} Formatted date and time
   */
  formatFullDateInTimezone(date, timezone) {
    try {
      const dateOptions = {
        timeZone: timezone,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      };
      const timeOptions = {
        timeZone: timezone,
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      };
      const dateStr = new Intl.DateTimeFormat('en-US', dateOptions).format(date);
      const timeStr = new Intl.DateTimeFormat('en-US', timeOptions).format(date);
      return `${dateStr} ${timeStr}`;
    } catch (e) {
      return 'Invalid TZ';
    }
  }

  /**
   * Get all times as an object
   * @returns {Object} Times for each timezone
   */
  getAllTimes() {
    const now = new Date();
    const times = {};
    
    this.timezones.forEach(tz => {
      times[tz] = this.formatFullDateInTimezone(now, tz);
    });
    
    return times;
  }

  /**
   * Display clock in console
   */
  displayConsole() {
    console.clear();
    console.log('\n' + '='.repeat(70));
    console.log('DIGITAL CLOCK - WORLD TIME ZONES');
    console.log('='.repeat(70));
    console.log(`Last Updated: ${new Date().toLocaleString()}\n`);
    
    const times = this.getAllTimes();
    Object.entries(times).forEach(([tz, time]) => {
      console.log(`${tz.padEnd(25)} | ${time}`);
    });
    
    console.log('='.repeat(70) + '\n');
  }

  /**
   * Create HTML display element
   * @returns {HTMLElement} Clock display element
   */
  createHTMLDisplay() {
    const container = document.createElement('div');
    container.className = 'digital-clock-container';
    container.id = 'digitalClock';
    
    const header = document.createElement('div');
    header.className = 'clock-header';
    header.innerHTML = `
      <h2>Digital Clock</h2>
      <p>World Time Zones</p>
    `;
    
    const clocksContainer = document.createElement('div');
    clocksContainer.className = 'clocks-grid';
    clocksContainer.id = 'clocksGrid';
    
    this.timezones.forEach(tz => {
      const clockCard = document.createElement('div');
      clockCard.className = 'clock-card';
      clockCard.innerHTML = `
        <div class="clock-timezone">${tz}</div>
        <div class="clock-time" data-timezone="${tz}">--:--:--</div>
      `;
      clocksContainer.appendChild(clockCard);
    });
    
    container.appendChild(header);
    container.appendChild(clocksContainer);
    
    return container;
  }

  /**
   * Update HTML display
   */
  updateHTMLDisplay() {
    const now = new Date();
    
    this.timezones.forEach(tz => {
      const element = document.querySelector(`[data-timezone="${tz}"]`);
      if (element) {
        element.textContent = this.formatTimeInTimezone(now, tz);
      }
    });
  }

  /**
   * Start automatic updates
   * @param {number} interval - Update interval in milliseconds
   */
  start(interval = 1000) {
    this.updateHTMLDisplay();
    this.updateInterval = setInterval(() => {
      this.updateHTMLDisplay();
    }, interval);
    console.log('Digital clock started');
  }

  /**
   * Stop automatic updates
   */
  stop() {
    if (this.updateInterval) {
      clearInterval(this.updateInterval);
      this.updateInterval = null;
      console.log('Digital clock stopped');
    }
  }

  /**
   * Add a new timezone
   * @param {string} timezone - Timezone name
   */
  addTimezone(timezone) {
    if (!this.timezones.includes(timezone)) {
      this.timezones.push(timezone);
    }
  }

  /**
   * Remove a timezone
   * @param {string} timezone - Timezone name
   */
  removeTimezone(timezone) {
    const index = this.timezones.indexOf(timezone);
    if (index > -1) {
      this.timezones.splice(index, 1);
    }
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = DigitalClockJS;
}
