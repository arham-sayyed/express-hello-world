# Express.js Hello World App

### A working Example is [Here](https://express-hello-world-r6wt.onrender.com/)

This is a simple Express.js application that serves as a "Hello, World!" example. You can use it to test hosting platforms or as a starting point for your Express.js projects.

### How to Use

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/arham-sayyed/express-hello-world.git
   ```

2. **Install Dependencies:**
   ```bash
   cd express-hello-world
   npm install
   ```

3. **Run the Server:**
   ```bash
   npm start
   ```
   OR 
   ```bash
   node app.js
   ```

4. **Access the App:**
   Open your browser and go to [http://localhost](http://localhost). You should see a "Hello World! From Express.js" message displayed.

5. **Test the Axios Endpoint:**
   Navigate to [http://localhost/axios](http://localhost/axios) to retrieve the current location of the International Space Station (ISS).

### Endpoints

- **"/"** - Displays a "Hello World!" message.
- **"/axios"** - Retrieves the current location of the ISS using the Axios library.

### Contribute

Contributions are welcome! If you have any suggestions for improvements, bug fixes, or new features, feel free to open an issue or submit a pull request.

### Additional Information

- This application listens on port 80 by default. You can modify the port in the `PORT` constant within the `app.js` file.
- The ISS location endpoint (`/axios`) fetches data from the [Open Notify API](http://api.open-notify.org/iss-now.json).
- Feel free to explore and modify the code as needed. Express.js offers a wide range of features for building web applications.
