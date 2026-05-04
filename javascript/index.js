/**
 * Main JavaScript module for Project -
 */

class ProjectController {
  /**
   * Initialize the project controller
   * @param {string} name - Project name
   */
  constructor(name = 'Project -') {
    this.name = name;
    this.components = [];
    this.config = {};
  }

  /**
   * Register a component
   * @param {string} componentName - Name of the component
   * @returns {void}
   */
  registerComponent(componentName) {
    this.components.push(componentName);
    console.log(`Component registered: ${componentName}`);
  }

  /**
   * Get project configuration
   * @returns {object} Project configuration
   */
  getConfig() {
    return {
      name: this.name,
      componentCount: this.components.length,
      components: this.components
    };
  }

  /**
   * Display project info
   * @returns {void}
   */
  displayInfo() {
    const config = this.getConfig();
    console.log(`\n=== ${config.name} ===`);
    console.log(`Components: ${config.componentCount}`);
    if (config.components.length > 0) {
      console.log('\nRegistered Components:');
      config.components.forEach((comp, idx) => {
        console.log(`  ${idx + 1}. ${comp}`);
      });
    }
    console.log();
  }
}

/**
 * Main function
 */
function main() {
  const controller = new ProjectController();
  
  // Register sample components
  controller.registerComponent('Header');
  controller.registerComponent('Navigation');
  controller.registerComponent('Content');
  controller.registerComponent('Footer');
  
  controller.displayInfo();
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { ProjectController, main };
}

// Run if executed directly
if (require.main === module) {
  main();
}
