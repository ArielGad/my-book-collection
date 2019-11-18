# Dockerfile

# Pull base image
FROM python:3.7

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1  #  means Python wont try to write .pyc files
ENV PYTHONUNBUFFERED 1  #  ensures our console output looks familiar and is not buffered by Docker

# Set work directory
WORKDIR /app/backend

# Install dependencies
RUN pip install pipenv
COPY Pipfile Pipfile.lock /app/backend/
RUN pipenv install --system

# Copy project
COPY . /app/backend/

EXPOSE 8000