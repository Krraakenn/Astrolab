# Astrolab Frontend

Welcome to the **Astrolab** Frontend repository! This project is the graphical user interface (GUI) for **Astrolab**, a cross-platform database management tool built using **Wails** and **React** with **TypeScript**. The purpose of Astrolab is to simplify database management by providing an intuitive interface to view and edit databases from various sources.

## Features

- Cross-platform GUI (Linux, MacOS, Windows)
- Built with **Wails** for native desktop experience
- **React** + **TypeScript** for the frontend development
- Support for multiple database types (PostgreSQL, MySQL, SQLite, etc.)
- Database query editor
- Data viewing and editing capabilities
- Customizable and modern UI

## Prerequisites

Make sure you have the following installed before setting up the project:

- **Node.js** (version 14 or higher)
- **npm** or **yarn** (package manager)
- **Go** (version 1.18 or higher)
- **Wails** (v2.x)

Install Wails globally if you haven't already:

```bash
go install github.com/wailsapp/wails/v2/cmd/wails@latest
```

## Project Structure

Here’s a quick overview of the project structure:

```
astrolab-frontend/
├── src/                # React TS source files
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main application pages
│   ├── hooks/          # Custom hooks for data fetching and state
│   └── assets/         # Static files (images, icons, etc.)
├── public/             # Public files (HTML, etc.)
├── wails/              # Wails-specific files
├── package.json        # Node dependencies and scripts
└── wails.json          # Wails configuration file
```

## Getting Started

To get started with the Astrolab frontend, follow these steps:

1. **Clone the repository:**

```bash
git clone https://github.com/yourusername/astrolab-frontend.git
cd astrolab-frontend
```

2. **Install dependencies:**

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

3. **Run the development server:**

```bash
wails dev
```

This will start the Wails application with the React frontend in development mode.

4. **Build the application for production:**

```bash
wails build
```

This will build the production-ready desktop application.

## Technologies Used

- **Wails**: Enables native desktop apps using Go with a modern frontend.
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A superset of JavaScript that adds static types.
- **TailwindCSS** (optional): For rapid UI development with utility-first CSS.

## Contributing

Contributions are welcome! If you would like to contribute to Astrolab, feel free to fork the repository and submit a pull request.

1. Fork the repo
2. Create your feature branch: `git checkout -b feature/my-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/my-feature`
5. Submit a pull request

## License

This project is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for details.

## Contact

For any inquiries or questions, feel free to reach out at:

- Email: [your.email@example.com](mailto:your.email@example.com)
- GitHub: [yourusername](https://github.com/yourusername)

---

Thank you for using **Astrolab**! 🚀
