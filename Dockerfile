# Use a lightweight Nginx image
FROM nginx:stable-alpine

# Copy the static files to the Nginx html directory
COPY ./web /usr/share/nginx/html

# Rename boda.html to index.html so it serves as the entry point
# This ensures that when someone visits the root URL, they see the invitation
RUN mv /usr/share/nginx/html/boda.html /usr/share/nginx/html/index.html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
