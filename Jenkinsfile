pipeline {
    agent any
    tools {nodejs "nodejs"}
    environment {
        DOCKER_HUB_CREDENTIALS = credentials('5bfd5800-f6af-4d79-a142-c2ea6c0be62f')
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build and Dockerize') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'

                    // Run your build script (replace with your build script command)
                    sh 'npm run build'

                    // Build Docker image
                    docker.build('caps-fr')
                }
            }
        }

        stage('Push to Docker Hub') {
            steps {
                script {
                    // Log in to Docker Hub
                    docker.withRegistry('https://registry.hub.docker.com', '5bfd5800-f6af-4d79-a142-c2ea6c0be62f') {
                        // Push Docker image to Docker Hub
                        docker.image('caps-fr').push()
                    }
                }
            }
        }
    }
}
