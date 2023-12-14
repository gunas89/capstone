pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from Git
                git 'https://github.com/gunas89/capstone.git'
            }
        }

        stage('Build') {
            steps {
                // Build your Node.js project
                sh 'npm install'
                sh 'npm run build'  // Adjust this command based on your build process
            }
        }

        stage('Build Docker Image') {
            steps {
                // Build Docker image and tag it
                script {
                    dockerImage = docker.build('gunas89/test:latest', '.')
                }
            }
        }

        stage('Push to DockerHub') {
            steps {
                // Push the Docker image to DockerHub
                script {
                    docker.withRegistry('https://registry.hub.docker.com', '5bfd5800-f6af-4d79-a142-c2ea6c0be62f') {
                        dockerImage.push()
                    }
                }
            }
        }
    }

    post {
        success {
            // Clean up or perform additional steps on successful build
            echo 'Build and push to DockerHub successful!'
        }

        failure {
            // Handle failure scenarios, if needed
            echo 'Build or push to DockerHub failed!'
        }
    }
}
