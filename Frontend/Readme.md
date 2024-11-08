### <h1>AI-Powered Cybersecurity Threat Detection System - Frontend</h1>

This README provides an overview of the frontend structure for the **AI-Powered Cyber Threat Detection System**, built with React.js to deliver a real-time dashboard for monitoring network security threats. The frontend enables administrators to visualize, analyze, and manage alerts and threat reports effectively.


### <h1>Project Structure</h1>

The project directory is organized as follows:

```bash
├── public/
│   ├── index.html            # Main HTML file
│   └── assets/               # Static files (e.g., icons, logos)
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header.js         # Top navigation bar
│   │   ├── Sidebar.js        # Side menu with navigation links
│   │   ├── ThreatTable.js    # Table for displaying threats
│   │   ├── AlertModal.js     # Modal for alert details
│   │   ├── Chart.js          # Data visualization using Chart.js
│   │   └── Notification.js   # Real-time alert display
│   ├── pages/                # Main application pages
│   │   ├── Dashboard.js      # Main dashboard with visualizations
│   │   ├── ThreatDetails.js  # Detailed threat information page
│   │   └── Reports.js        # Historical threat reports
│   ├── services/             # API calls to the backend
│   │   ├── api.js            # API configurations for accessing backend data
│   ├── utils/                # Helper functions
│   │   ├── formatData.js     # Format data for visualization
│   │   └── config.js         # Frontend configurations (e.g., API endpoints)
│   ├── App.js                # Main application component
│   ├── index.js              # Entry point
│   └── styles/               # CSS for styling components
│       ├── App.css           # Global styles
│       ├── Dashboard.css     # Styles specific to the dashboard
│       └── Components.css    # Styles for individual components
├── .env                      # Environment variables for frontend
├── package.json
└── README.md                 # Project documentation
```


### <h1>Folder Structure Details</h1>

1. **public/**
    - **index.html**: The main HTML template file for the React app.
    - **assets/**: Stores static files, such as images and icons, used throughout the dashboard interface.

2. **src/**
    - **components/**: Houses reusable UI components to create a modular and maintainable structure. Components include:
        - **Header.js**: Displays the header with navigation options.
        - **Sidebar.js**: Contains links to various sections like Dashboard, Threat Details, and Reports.
        - **ThreatTable.js**: Displays threat logs in a tabular format with filtering and sorting capabilities.
        - **Chart.js**: Configures charts to visually represent data, such as threat frequency and types.
        - **AlertModal.js**: A modal to display detailed alert information when an alert is clicked.

    - **pages/**: Contains main application views that are structured around primary routes.
        - **Dashboard.js**: The home view, showing key metrics, recent alerts, and graphical representations of network activity.
        - **ThreatDetails.js**: Displays detailed information about specific threats and provides drill-down options.
        - **Reports.js**: Generates and displays historical reports of detected threats over customizable time frames.
      
    - **services/**: Contains all API calls to interact with the backend.
        - **api.js**: Configures methods to call backend endpoints, fetch data for threats, and send updates.
      
    - **utils/**: Stores utility functions and configuration files for consistent usage across the app.
        - **formatDate.js**: Functions to handle date formatting for consistency across different components.
        - **config.js**: Stores configuration settings such as API endpoint URLs.
      
    - **App.js**: The main component that manages routing and renders core components and pages.
    
    - **index.js**: The entry point of the application. This file renders the App component into the DOM.
    
    - **styles/**: Stores CSS files for both global and component-specific styling.
        - **App.css**: Global styles applied throughout the application.
        - **Dashboard.css**: Page-specific styling for the dashboard.
        - **Components.css**: Styling for individual components like the ThreatTable, Sidebar, and Header.
      
3. **.env**
    - Stores environment-specific variables like the base URL for API calls. This file should remain out of version control to protect sensitive information.


### <h1>Getting Started</h1>
**Prerequisites**
  - Node.js and npm should be installed on your system.

**Installation**
  1. Clone this repository 
      ```bash
      git clone <repository-url>
      cd <repository-directory>
      ```
  2. Install dependencies
      ```bash
      npm install
      ```
  3. Configure environment variables in the `.env` file (e.g., API endpoint).
  4. Start the development server
     ```bash
     npm start
     ```

**Deployment** 

To build for production, use:
```bash
npm run build
```


### <h1>Key Dependencies </h1> 
  - **React.js**: Framework for building the UI.
  - **Axios**: For handling API requests.
  - **Chart.js**: For data visualizations.
  - **React-Router**: Manages navigation between dashboard views.
  - **Sass** (optional): For improved styling and CSS management (if used).

### <h1>License</h1>
This project is licensed under the MIT License.
