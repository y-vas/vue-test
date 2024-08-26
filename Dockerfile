FROM ubuntu:latest

# Update the package lists and install necessary packages
RUN apt-get update \
    && apt-get install -y curl \
    && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# Print npm and node versions
RUN npm --version && node --version


EXPOSE 80
CMD cd /app && npm install && npm run dev
