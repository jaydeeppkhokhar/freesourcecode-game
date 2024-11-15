# Use the official Node.js image as a base
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy the rest of the application code
COPY . .

RUN npm install

RUN echo "Before build step"

RUN npm cache clean --force

# Build the Next.js app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Set the command to start the Next.js app
CMD ["npm", "run", "start"]
