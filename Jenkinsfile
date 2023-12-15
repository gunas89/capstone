pipeline {
    agent any

    environment {
        DOCKER_HUB_CREDENTIAL = credentials('cefe8806-6b88-4129-9219-1d523d632afc')
        IMAGE_NAME = 'gunas89/test:tagname'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        // stage('Build') {
        //     steps {
        //         script {
        //             // Install Node.js and npm
        //             tool 'NodeJS'
        //             sh 'npm config ls'
        //         }
        //     }
        // }

        stage('Docker Build & Push') {
            steps {
                script {
                    // Build and push Docker image
                    withCredentials([string(credentialsId: 'cefe8806-6b88-4129-9219-1d523d632afc', variable: 'DOCKER_HUB_CREDENTIAL')]) {
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
