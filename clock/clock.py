#!/usr/bin/env python3
"""
Digital Clock with Multiple Time Zones
Displays current time in different time zones
"""

import sys
from datetime import datetime
from pytz import timezone, all_timezones
from typing import List, Dict


class DigitalClock:
    """Manages digital clock with multiple time zones."""
    
    # Default time zones to display
    DEFAULT_TIMEZONES = [
        'UTC',
        'America/New_York',
        'Europe/London',
        'Europe/Paris',
        'Asia/Tokyo',
        'Asia/Shanghai',
        'Australia/Sydney',
        'America/Los_Angeles'
    ]
    
    def __init__(self, timezones: List[str] = None):
        """Initialize the clock with specified time zones."""
        self.timezones = timezones or self.DEFAULT_TIMEZONES
        self.validate_timezones()
    
    def validate_timezones(self) -> None:
        """Validate that all specified time zones exist."""
        for tz in self.timezones:
            if tz not in all_timezones:
                raise ValueError(f"Invalid timezone: {tz}")
    
    def get_time_in_timezone(self, tz_name: str) -> datetime:
        """Get current time in a specific timezone."""
        tz = timezone(tz_name)
        return datetime.now(tz)
    
    def format_time(self, dt: datetime, include_date: bool = False) -> str:
        """Format datetime object into readable string."""
        if include_date:
            return dt.strftime("%Y-%m-%d %H:%M:%S %Z")
        else:
            return dt.strftime("%H:%M:%S")
    
    def display_all_times(self, include_date: bool = True) -> None:
        """Display current time in all configured time zones."""
        print("\n" + "="*70)
        print("DIGITAL CLOCK - WORLD TIME ZONES")
        print("="*70)
        print(f"Last Updated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n")
        
        for tz_name in self.timezones:
            try:
                dt = self.get_time_in_timezone(tz_name)
                time_str = self.format_time(dt, include_date)
                # Format output with padding
                print(f"{tz_name:<25} | {time_str}")
            except Exception as e:
                print(f"{tz_name:<25} | Error: {str(e)}")
        
        print("="*70 + "\n")
    
    def get_times_dict(self) -> Dict[str, str]:
        """Get all times as a dictionary."""
        times = {}
        for tz_name in self.timezones:
            try:
                dt = self.get_time_in_timezone(tz_name)
                times[tz_name] = self.format_time(dt, include_date=True)
            except Exception as e:
                times[tz_name] = f"Error: {str(e)}"
        return times
    
    def add_timezone(self, tz_name: str) -> None:
        """Add a new timezone to the clock."""
        if tz_name not in all_timezones:
            raise ValueError(f"Invalid timezone: {tz_name}")
        if tz_name not in self.timezones:
            self.timezones.append(tz_name)
    
    def remove_timezone(self, tz_name: str) -> None:
        """Remove a timezone from the clock."""
        if tz_name in self.timezones:
            self.timezones.remove(tz_name)
    
    def list_available_timezones(self) -> List[str]:
        """List all available timezones."""
        return sorted(all_timezones)


def main() -> int:
    """Main entry point for the digital clock."""
    try:
        # Create clock with default timezones
        clock = DigitalClock()
        
        # Display all times
        clock.display_all_times(include_date=True)
        
        # Example: Add a custom timezone
        clock.add_timezone('Asia/Dubai')
        print("Added Asia/Dubai timezone\n")
        clock.display_all_times(include_date=False)
        
        return 0
    except Exception as e:
        print(f"Error: {str(e)}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
