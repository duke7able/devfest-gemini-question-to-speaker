
# DevFest - Generative AI Question Generation System

## Overview
DevFest is a Generative AI-powered project designed to assist event participants by generating relevant questions based on data submitted through a Google Form. The generated questions are tailored to the filled data and are intended to facilitate insightful conversations with mentors present at the event.

This project leverages Google Sheets to store submitted form data, processes it to understand the participant’s context, and uses Generative AI to generate potential questions that mentors might be asked.

---

## Features
- **Google Form Integration**: Collect data from participants and store it in Google Sheets seamlessly.
- **Data Processing**: Extract and analyze data from Google Sheets.
- **AI-Powered Question Generation**: Use the Google Generative AI API to generate tailored questions for participants.
- **Responsive and Interactive UI**: Built with modern tools like React and TailwindCSS for a sleek user experience.

---

## Prerequisites
To run the project, ensure you have the following:

1. **Node.js**: Version 16 or higher.
2. **Google Cloud Account**: To enable the Generative AI API and Google Sheets API.
3. **Google Form and Sheet**: Create and link a Google Form to a Google Sheet.
4. **Environment Variables**: Setup necessary keys for accessing Google APIs.

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/duke7able/devfest-gemini-question-to-speaker
   cd devfest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and add the following:
   ```env
   GOOGLE_SHEET_PRIVATE_KEY=your-google-sheet-private-key
   GOOGLE_SHEET_CLIENT_EMAIL=your-google-sheet-id
   GEMINI_API_KEY=your-generative-ai-api-key
   SPREADSHEET_ID=your-spreadsheet-id
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   The app will be available at [http://localhost:3000](http://localhost:3000).

---

## Scripts
- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run start`: Start the production server.
- `npm run lint`: Lint your code for errors.

---

## Technology Stack
### Frontend
- **React.js**: Component-based UI library.
- **Next.js**: Framework for server-side rendering and routing.
- **TailwindCSS**: Utility-first CSS framework for styling.

### Backend
- **Google Sheets API**: To fetch and process data from the Google Sheet.
- **Google Generative AI**: To generate context-based questions.

### Libraries and Tools
- `@google/generative-ai`: Interface with the Google Generative AI API.
- `googleapis`: Access Google Sheets API.
- `react-loading-skeleton`: Display skeleton loading states.
- `react-share`: Enable social sharing functionalities.
- `tailwindcss-animate`: Add animations to the UI.

---

## Usage
1. **Submit Form**: Participants fill out the Google Form.
2. **Data Storage**: Form submissions are automatically stored in the linked Google Sheet.
3. **Question Generation**: The app fetches data from the Google Sheet and uses AI to generate possible questions for the participant to ask mentors.
4. **Mentor Interaction**: Participants can use the generated questions during their mentor interactions.

---

## Deployment

### Deploying to Vercel

1. Install the [Vercel CLI](https://vercel.com/cli):
   ```bash
   npm i -g vercel
   ```

2. Log in to your Vercel account:
   ```bash
   vercel login
   ```

3. Initialize the deployment:
   ```bash
   vercel
   ```

   - Follow the prompts to select the appropriate configuration for your project.
   - Ensure you set your `.env` variables in the Vercel dashboard under **Project Settings > Environment Variables**.

4. Build and deploy:
   - After initializing, the project will automatically deploy. You can use the following command for subsequent updates:
     ```bash
     vercel --prod
     ```

5. Your app will be live at a generated Vercel URL or your custom domain if configured.

---

## Contributing
We welcome contributions! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a Pull Request.

---

## License
This project is licensed under the [MIT License](LICENSE).

---

## Acknowledgments
- **Google**: For providing powerful APIs for integration.
- **React**: For a robust frontend framework.
- **Next.js**: For simplifying server-side rendering.
- **TailwindCSS**: For streamlined UI design.

---
