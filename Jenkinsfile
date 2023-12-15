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
                script {
                    // Your build steps here, e.g., npm install, npm test, etc.
                    tool 'NodeJS' // Set to the name of your Node.js installation in Jenkins
                    sh 'npm install'
                }
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    // Build and push Docker image
                    withCredentials([string(credentialsId: 'dockerHub', variable: 'DOCKER_HUB_CREDENTIAL')]) {
                        sh "docker login -u username -p ${DOCKER_HUB_CREDENTIAL}"
                        sh "docker build -t ${IMAGE_NAME} ."
                        sh "docker push ${IMAGE_NAME}"
                    }
                }
            }
        }
    }
}
