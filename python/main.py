#!/usr/bin/env python3
"""
Main Python module for Project -
"""

import sys
import os
from typing import List, Dict, Any


class ProjectManager:
    """Manages core project operations."""
    
    def __init__(self, name: str = "Project -"):
        self.name = name
        self.tasks: List[str] = []
        self.metadata: Dict[str, Any] = {}
    
    def add_task(self, task: str) -> None:
        """Add a task to the project."""
        self.tasks.append(task)
        print(f"Task added: {task}")
    
    def get_summary(self) -> Dict[str, Any]:
        """Get project summary."""
        return {
            'name': self.name,
            'total_tasks': len(self.tasks),
            'tasks': self.tasks
        }
    
    def display_info(self) -> None:
        """Display project information."""
        summary = self.get_summary()
        print(f"\n=== {summary['name']} ===")
        print(f"Total Tasks: {summary['total_tasks']}")
        if self.tasks:
            print("\nTasks:")
            for i, task in enumerate(self.tasks, 1):
                print(f"  {i}. {task}")
        print()


def main() -> int:
    """Main entry point."""
    manager = ProjectManager()
    
    # Add some sample tasks
    manager.add_task("Setup project structure")
    manager.add_task("Implement core features")
    manager.add_task("Create documentation")
    manager.add_task("Write unit tests")
    
    manager.display_info()
    return 0


if __name__ == "__main__":
    sys.exit(main())
