# Digital Clock with Multiple Time Zones

A multi-platform digital clock application that displays the current time in different time zones around the world.

## Features

- 🕐 Real-time digital clock display
- 🌍 Support for multiple time zones
- 🎨 Beautiful, responsive UI
- 📱 Mobile-friendly design
- ⚡ Automatic time updates
- 🐍 Python backend support
- 🟨 JavaScript/HTML5 frontend
- ✨ Glass-morphism design with animations

## Supported Time Zones

- UTC
- America/New_York (EST/EDT)
- America/Chicago (CST/CDT)
- America/Denver (MST/MDT)
- America/Los_Angeles (PST/PDT)
- Europe/London (GMT/BST)
- Europe/Paris (CET/CEST)
- Europe/Berlin (CET/CEST)
- Asia/Dubai (GST)
- Asia/Kolkata (IST)
- Asia/Bangkok (ICT)
- Asia/Hong_Kong (HKT)
- Asia/Shanghai (CST)
- Asia/Tokyo (JST)
- Asia/Seoul (KST)
- Australia/Sydney (AEDT/AEST)
- And many more...

## Usage

### Python Version

```bash
python3 clock/clock.py
```

This will display the current time in all configured time zones in the terminal.

#### Python API

```python
from clock import DigitalClock

# Create a clock instance
clock = DigitalClock()

# Display all times
clock.display_all_times(include_date=True)

# Get times as dictionary
times_dict = clock.get_times_dict()
print(times_dict)

# Add a custom timezone
clock.add_timezone('Asia/Dubai')

# Remove a timezone
clock.remove_timezone('America/Los_Angeles')

# Get a specific time
dt = clock.get_time_in_timezone('Asia/Tokyo')
print(dt)
```

### JavaScript Version

Include the script in your HTML:

```html
<script src="clock.js"></script>
<script>
  const clock = new DigitalClockJS();
  const display = clock.createHTMLDisplay();
  document.body.appendChild(display);
  clock.start(1000); // Update every second
</script>
```

### HTML Interface

Open the HTML file in your browser:

```bash
open clock/clock.html
# or
chrome clock/clock.html
```

This opens a beautiful, interactive clock display with all major world time zones.

#### JavaScript API

```javascript
const clock = new DigitalClockJS([
  'UTC',
  'America/New_York',
  'Asia/Tokyo'
]);

// Get all times
const times = clock.getAllTimes();
console.log(times);

// Add timezone
clock.addTimezone('Europe/London');

// Remove timezone
clock.removeTimezone('America/New_York');

// Start automatic updates
clock.start(1000); // Update every 1000ms

// Stop updates
clock.stop();

// Display in console
clock.displayConsole();
```

## Installation Requirements

### Python

```bash
pip install pytz
```

### JavaScript

No external dependencies required. Uses native `Intl.DateTimeFormat` API.

## Time Zone Management

### Default Time Zones

Both Python and JavaScript versions come with 8 default time zones:
- UTC
- America/New_York
- Europe/London
- Europe/Paris
- Asia/Tokyo
- Asia/Shanghai
- Australia/Sydney
- America/Los_Angeles

### Adding Custom Time Zones

**Python:**
```python
clock.add_timezone('America/Mexico_City')
```

**JavaScript:**
```javascript
clock.addTimezone('America/Mexico_City');
```

## Output Examples

### Python Console Output

```
======================================================================
DIGITAL CLOCK - WORLD TIME ZONES
======================================================================
Last Updated: 2026-05-04 23:26:43

UTC                       | 2026-05-04 23:26:43 UTC
America/New_York          | 2026-05-04 19:26:43 EDT
Europe/London             | 2026-05-05 00:26:43 BST
Europe/Paris              | 2026-05-05 01:26:43 CEST
Asia/Tokyo                | 2026-05-05 08:26:43 JST
Asia/Shanghai             | 2026-05-05 07:26:43 CST
Australia/Sydney          | 2026-05-05 09:26:43 AEDT
America/Los_Angeles       | 2026-05-04 16:26:43 PDT
======================================================================
```

### HTML Display

Beautiful card-based layout with:
- Timezone name for each location
- Current time with seconds
- Glassmorphism design
- Smooth animations
- Responsive grid layout

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Fully responsive

## Python Version Compatibility

- Python 3.6+
- Requires `pytz` package

## Features in Detail

### Real-time Updates
- Python: One-time display with current times
- JavaScript: Automatic updates every second

### Responsive Design
- Adapts to all screen sizes
- Mobile-optimized layout
- Touch-friendly interface

### Performance
- Minimal CPU usage
- Efficient time zone calculations
- No external API calls

## Customization

### Change Update Interval

```javascript
clock.start(500); // Update every 500ms
```

### Custom Styling

Modify the CSS in `clock.html` to customize colors, fonts, and animations.

### Time Format

Both versions support custom formatting:

**Python:**
```python
clock.format_time(dt, include_date=False)  # HH:MM:SS
clock.format_time(dt, include_date=True)   # YYYY-MM-DD HH:MM:SS ZONE
```

**JavaScript:**
```javascript
clock.formatTimeInTimezone(date, 'Asia/Tokyo');  // HH:MM:SS
clock.formatFullDateInTimezone(date, 'Asia/Tokyo');  // YYYY-MM-DD HH:MM:SS
```

## License

MIT License - Feel free to use and modify!

## Author

Created by philipaolawuyi-droid
