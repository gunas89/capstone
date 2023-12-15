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
                    // Install Node.js and npm
                    tool 'NodeJS'
                    sh 'npm config ls'
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

        // stage('Deploy') {
        //     steps {
        //         script {
        //             // Your deployment steps here, e.g., deploying to a server
        //         }
        //     }
        // }
    }
}
