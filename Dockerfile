# Use the official Node.js image as a base
FROM node:18-alpine

# Set working directory
# WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) first to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Clean npm cache to reduce image size
RUN npm cache clean --force

# Build the Next.js app
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Set the command to start the Next.js app
CMD ["npm", "run", "start"]
