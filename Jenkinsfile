pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIAL = credentials('dockerHub')
        IMAGE_NAME = 'gunas89/test:tagname'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Your build steps here, e.g., npm install, npm test, etc.
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                // Build and push Docker image
                script {
                    withCredentials([string(credentialsId: 'dockerHub', variable: 'DOCKER_HUB_CREDENTIAL')]) {
                        sh "docker login -u username -p ${DOCKER_HUB_CREDENTIAL}"
                        sh "docker build -t ${IMAGE_NAME} ."
                        sh "docker push ${IMAGE_NAME}"
                    }
                }
            }
        }

        stage('Deploy') {
            steps {
                // Your deployment steps here, e.g., deploying to a server
            }
        }
    }
}
